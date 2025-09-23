// Security utilities for therapy practice website
// CRPO Compliance: Implements security measures to protect client data

import validator from 'validator';

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Security configuration
const SECURITY_CONFIG = {
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 5, // Max 5 consultation requests per 15 minutes
  },
  INPUT_LIMITS: {
    NAME_MAX_LENGTH: 100,
    EMAIL_MAX_LENGTH: 254,
    PHONE_MAX_LENGTH: 20,
    CONCERNS_MAX_LENGTH: 2000,
  }
};

/**
 * Rate limiting middleware
 * Prevents abuse of consultation endpoint
 */
export function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const key = `rate_limit:${ip}`;
  const record = rateLimitStore.get(key);

  // Clean up expired entries
  if (record && now > record.resetTime) {
    rateLimitStore.delete(key);
  }

  const currentRecord = rateLimitStore.get(key);

  if (!currentRecord) {
    // First request from this IP
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + SECURITY_CONFIG.RATE_LIMIT.WINDOW_MS
    });
    return { allowed: true };
  }

  if (currentRecord.count >= SECURITY_CONFIG.RATE_LIMIT.MAX_REQUESTS) {
    return {
      allowed: false,
      resetTime: currentRecord.resetTime
    };
  }

  // Increment counter
  currentRecord.count++;
  rateLimitStore.set(key, currentRecord);

  return { allowed: true };
}

/**
 * Input validation and sanitization
 * Protects against XSS and injection attacks
 */
export function validateConsultationInput(data: any): {
  isValid: boolean;
  errors: string[];
  sanitized?: unknown;
} {
  const errors: string[] = [];

  // Validate required fields
  if (!data.fullName || typeof data.fullName !== 'string') {
    errors.push('Full name is required');
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  }

  if (typeof data.consent !== 'boolean' || !data.consent) {
    errors.push('Consent is required');
  }

  if (typeof data.privacyPolicy !== 'boolean' || !data.privacyPolicy) {
    errors.push('Privacy policy acceptance is required');
  }

  // If basic validation fails, return early
  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  // Advanced validation and sanitization
  const sanitized = {
    fullName: '',
    email: '',
    phone: '',
    ageRange: '',
    concerns: '',
    preferredTime: '',
    consent: data.consent,
    privacyPolicy: data.privacyPolicy
  };

  // Sanitize and validate name
  sanitized.fullName = validator.escape(data.fullName.trim());
  if (sanitized.fullName.length === 0 || sanitized.fullName.length > SECURITY_CONFIG.INPUT_LIMITS.NAME_MAX_LENGTH) {
    errors.push('Full name must be between 1 and 100 characters');
  }
  if (!validator.isAlpha(sanitized.fullName.replace(/\s+/g, ''), 'en-US', { ignore: '-\'\u00C0-\u017F' })) {
    errors.push('Full name contains invalid characters');
  }

  // Validate and normalize email
  if (!validator.isEmail(data.email)) {
    errors.push('Invalid email address');
  } else {
    sanitized.email = validator.normalizeEmail(data.email, {
      gmail_lowercase: true,
      gmail_remove_dots: false,
      outlookdotcom_lowercase: true,
      yahoo_lowercase: true,
      icloud_lowercase: true
    }) || data.email.toLowerCase().trim();

    if (sanitized.email.length > SECURITY_CONFIG.INPUT_LIMITS.EMAIL_MAX_LENGTH) {
      errors.push('Email address is too long');
    }
  }

  // Validate phone (optional)
  if (data.phone && typeof data.phone === 'string') {
    const phoneClean = data.phone.replace(/\D/g, ''); // Remove non-digits
    if (phoneClean.length > 0) {
      if (phoneClean.length < 10 || phoneClean.length > 15) {
        errors.push('Phone number must be between 10 and 15 digits');
      } else {
        sanitized.phone = phoneClean;
      }
    }
  }

  // Validate age range
  if (data.ageRange && typeof data.ageRange === 'string') {
    const validAgeRanges = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
    if (validAgeRanges.includes(data.ageRange)) {
      sanitized.ageRange = data.ageRange;
    }
  }

  // Sanitize concerns (optional)
  if (data.concerns && typeof data.concerns === 'string') {
    sanitized.concerns = validator.escape(data.concerns.trim());
    if (sanitized.concerns.length > SECURITY_CONFIG.INPUT_LIMITS.CONCERNS_MAX_LENGTH) {
      errors.push('Concerns text is too long (max 2000 characters)');
    }
  }

  // Validate preferred time
  if (data.preferredTime && typeof data.preferredTime === 'string') {
    const validTimes = ['morning', 'afternoon', 'evening', 'flexible'];
    if (validTimes.includes(data.preferredTime)) {
      sanitized.preferredTime = data.preferredTime;
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitized: errors.length === 0 ? sanitized : undefined
  };
}

/**
 * Generate secure lead ID
 */
export function generateSecureLeadId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `LEAD_${timestamp}_${random}`;
}

/**
 * Sanitize error messages for client response
 * Prevents information leakage
 */
export function sanitizeErrorMessage(error: unknown): string {
  // Generic error message to prevent information disclosure
  if (process.env.NODE_ENV === 'production') {
    return 'An error occurred processing your request. Please try again.';
  }

  // In development, show more details
  if (typeof error === 'string') {
    return error;
  }

  if ((error as any)?.message) {
    return (error as any).message;
  }

  return 'Unknown error occurred';
}

/**
 * Security headers for API responses
 */
export function getSecurityHeaders(): Record<string, string> {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'",
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  };
}