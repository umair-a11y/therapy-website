import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import {
  checkRateLimit,
  validateConsultationInput,
  generateSecureLeadId,
  sanitizeErrorMessage,
  getSecurityHeaders,
  type SanitizedConsultationInput,
} from "@/lib/security";

// CRPO Compliance Check: This API endpoint collects lead data for follow-up.
// No outcome promises or guarantees are made - this is data collection only.

type LeadData = SanitizedConsultationInput & {
  leadId: string;
  timestamp: string;
  source: 'website_consultation_form';
  status: 'new_lead';
  clientIP: string | null;
  userAgent: string | null;
};

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

    const rateLimitResult = await checkRateLimit(clientIP);
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
    } catch (error) {
      console.warn('Consultation request parse error:', sanitizeErrorMessage(error));
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400, headers: securityHeaders }
      );
    }

    // Step 3: Comprehensive input validation and sanitization
    const validation = validateConsultationInput(data);
    if (!validation.isValid || !validation.sanitized) {
      console.warn('Invalid consultation input:', validation.errors);
      return NextResponse.json(
        { error: 'Invalid input data', details: validation.errors },
        { status: 400, headers: securityHeaders }
      );
    }

    // Step 4: Create secure lead data object
    const leadId = generateSecureLeadId();
    const sanitizedData = validation.sanitized;
    const leadData: LeadData = {
      ...sanitizedData,
      leadId,
      timestamp: new Date().toISOString(),
      source: 'website_consultation_form',
      status: 'new_lead',
      clientIP: clientIP === 'unknown' ? null : clientIP,
      userAgent: request.headers.get('user-agent')?.substring(0, 200) ?? null, // Limit length
    };

    // Step 5: Log lead capture (secure logging)
    const maskedEmail = leadData.email.length > 20
      ? `${leadData.email.slice(0, 20)}...`
      : leadData.email;
    console.log('?? NEW CONSULTATION LEAD CAPTURED:', {
      leadId: leadData.leadId,
      timestamp: leadData.timestamp,
      email: maskedEmail,
      source: leadData.source
    });

    // Step 6: Send secure email notification with retry logic
    try {
      await sendSecureLeadNotification(leadData);
    } catch (emailError) {
      // Log the error but don't fail the request - lead capture is more important
      console.error('Email notification failed (non-critical):', sanitizeErrorMessage(emailError));

      // TODO (CLAUDE: Consider implementing a queue system for failed email notifications)
      // Could store failed notifications for later retry or manual processing
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
async function sendSecureLeadNotification(leadData: LeadData): Promise<void> {
  // TODO: Implement with actual email service (SendGrid, AWS SES, etc.)
  // For now, this creates a secure notification template

  const toRecipient = process.env.EMAIL_TO || 'info@resolvemenstherapy.com';
  const notification = {
    to: toRecipient, // Practice email
    subject:  `New Consultation Request - Lead ${leadData.leadId}`,
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
This email contains personal health information. Handle according to PHIPA requirements.
Delete after lead is processed into secure CRM system.
    `
  };

  // Secure logging (no sensitive data in console)
  console.log('[consultation] Secure email notification prepared:', {
    leadId: leadData.leadId,
    timestamp: leadData.timestamp,
    recipient: notification.to
  });

  // Attempt to send via Resend if configured
  const result = await sendEmail({
    to: notification.to,
    subject: notification.subject,
    text: notification.body,
  });

  if (!result.ok && !result.skipped) {
    throw new Error('Email provider reported failure');
  }
}
