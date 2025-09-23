import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  validateConsultationInput,
  generateSecureLeadId,
  sanitizeErrorMessage,
  getSecurityHeaders
} from "@/lib/security";

// CRPO Compliance Check: This API endpoint collects lead data for follow-up.
// No outcome promises or guarantees are made - this is data collection only.

interface ConsultationRequest {
  fullName: string;
  email: string;
  phone?: string;
  ageRange?: string;
  concerns?: string;
  preferredTime?: string;
  consent: boolean;
  privacyPolicy: boolean;
}

export async function POST(request: NextRequest) {
  const securityHeaders = getSecurityHeaders();

  try {
    // Step 1: Rate limiting check
    const clientIP = request.headers.get('x-forwarded-for') ||
                     request.headers.get('x-real-ip') ||
                     'unknown';

    const rateLimitResult = checkRateLimit(clientIP);
    if (!rateLimitResult.allowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            ...securityHeaders,
            'Retry-After': Math.ceil((rateLimitResult.resetTime! - Date.now()) / 1000).toString()
          }
        }
      );
    }

    // Step 2: Parse and validate input
    let data: ConsultationRequest;
    try {
      data = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400, headers: securityHeaders }
      );
    }

    // Step 3: Comprehensive input validation and sanitization
    const validation = validateConsultationInput(data);
    if (!validation.isValid) {
      console.warn('Invalid consultation input:', validation.errors);
      return NextResponse.json(
        { error: 'Invalid input data', details: validation.errors },
        { status: 400, headers: securityHeaders }
      );
    }

    // Step 4: Create secure lead data object
    const leadId = generateSecureLeadId();
    const leadData = {
      ...(validation.sanitized as Record<string, any>),
      leadId,
      timestamp: new Date().toISOString(),
      source: 'website_consultation_form',
      status: 'new_lead',
      clientIP: clientIP === 'unknown' ? null : clientIP,
      userAgent: request.headers.get('user-agent')?.substring(0, 200) || null // Limit length
    };

    // Step 5: Log lead capture (secure logging)
    console.log('🏥 NEW CONSULTATION LEAD CAPTURED:', {
      leadId: leadData.leadId,
      timestamp: leadData.timestamp,
      email: (leadData as any).email?.substring(0, 20) + '...', // Partially masked for logs
      source: leadData.source
    });

    // Step 6: Send secure email notification
    try {
      await sendSecureLeadNotification(leadData);
    } catch (emailError) {
      console.error('Email notification failed (non-critical):', sanitizeErrorMessage(emailError));
      // Don't fail the request if email fails - this is non-critical
    }

    // Step 7: Return success response with security headers
    return NextResponse.json(
      {
        success: true,
        message: 'Consultation request received successfully',
        leadId: leadData.leadId
      },
      {
        status: 200,
        headers: securityHeaders
      }
    );

  } catch (error) {
    // Secure error logging
    console.error('Consultation API error:', sanitizeErrorMessage(error));

    return NextResponse.json(
      { error: sanitizeErrorMessage(error) },
      {
        status: 500,
        headers: securityHeaders
      }
    );
  }
}

// Secure email notification function
async function sendSecureLeadNotification(leadData: any) {
  // TODO: Implement with actual email service (SendGrid, AWS SES, etc.)
  // For now, this creates a secure notification template

  const notification = {
    to: 'info@resolvemenstherapy.com', // Practice email
    subject: `🏥 New Consultation Request - Lead ${leadData.leadId}`,
    body: `
CONFIDENTIAL - New consultation request received:

Lead ID: ${leadData.leadId}
Name: ${leadData.fullName}
Email: ${leadData.email}
Phone: ${leadData.phone || 'Not provided'}
Age Range: ${leadData.ageRange || 'Not provided'}
Preferred Time: ${leadData.preferredTime || 'Not provided'}

Concerns:
${leadData.concerns || 'Not provided'}

Submitted: ${leadData.timestamp}
Source: ${leadData.source}

--- IMPORTANT ---
Please follow up within 24 hours as promised on the website.

--- CRPO Compliance Note ---
This lead request does not constitute a therapeutic relationship.
Follow CRPO guidelines for initial consultations and intake procedures.

--- SECURITY NOTE ---
This email contains personal information. Handle according to PIPEDA requirements.
Delete after lead is processed into secure CRM system.
    `
  };

  // Secure logging (no sensitive data in console)
  console.log('📧 SECURE EMAIL NOTIFICATION PREPARED:', {
    leadId: leadData.leadId,
    timestamp: leadData.timestamp,
    recipient: 'info@resolvemenstherapy.com'
  });

  // TODO: Replace with actual secure email sending logic
  // await secureEmailService.send(notification);
}