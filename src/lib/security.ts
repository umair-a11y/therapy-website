// Security utilities for therapy practice website
// CRPO Compliance: Implements security measures to protect client data

import validator from 'validator';
import { Redis } from '@upstash/redis';

// Persistent storage configuration
// Uses Upstash Redis in production, in-memory Map for development
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

// Initialize Redis client if credentials are available
const redis = REDIS_URL && REDIS_TOKEN
  ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN })
  : null;

// In-memory fallback for development or when Redis is unavailable
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Log storage mode on initialization
if (typeof process !== 'undefined') {
  console.log('[Security] Rate limiting storage:', redis ? 'Upstash Redis (persistent)' : 'In-memory (development)');
}

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

type ConsultationInput = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  ageRange?: unknown;
  concerns?: unknown;
  preferredTime?: unknown;
  consent?: unknown;
  privacyPolicy?: unknown;
};

export interface SanitizedConsultationInput {
  fullName: string;
  email: string;
  phone: string;
  ageRange: string;
  concerns: string;
  preferredTime: string;
  consent: boolean;
  privacyPolicy: boolean;
}

/**
 * Rate limiting middleware with persistent storage
 * Prevents abuse of consultation endpoint
 * Uses Upstash Redis in production, in-memory fallback for development
 */
export async function checkRateLimit(ip: string): Promise<{ allowed: boolean; resetTime?: number }> {
  const now = Date.now();
  const key = `rate_limit:${ip}`;
  const windowMs = SECURITY_CONFIG.RATE_LIMIT.WINDOW_MS;
  const maxRequests = SECURITY_CONFIG.RATE_LIMIT.MAX_REQUESTS;

  try {
    if (redis) {
      // Production: Use Upstash Redis for persistent rate limiting
      const record = await redis.get<{ count: number; resetTime: number }>(key);

      // Clean up expired entries
      if (record && now > record.resetTime) {
        await redis.del(key);
        // Start fresh
        await redis.setex(key, Math.floor(windowMs / 1000), {
          count: 1,
          resetTime: now + windowMs
        });
        return { allowed: true };
      }

      if (!record) {
        // First request from this IP
        await redis.setex(key, Math.floor(windowMs / 1000), {
          count: 1,
          resetTime: now + windowMs
        });
        return { allowed: true };
      }

      if (record.count >= maxRequests) {
        return {
          allowed: false,
          resetTime: record.resetTime
        };
      }

      // Increment counter
      record.count++;
      await redis.setex(key, Math.floor((record.resetTime - now) / 1000), record);
      return { allowed: true };

    } else {
      // Development fallback: Use in-memory store
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
          resetTime: now + windowMs
        });
        return { allowed: true };
      }

      if (currentRecord.count >= maxRequests) {
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
  } catch (error) {
    // If Redis fails, fall back to in-memory (fail-open for availability)
    console.error('[Security] Redis rate limit check failed, using in-memory fallback:', error);

    // Use in-memory fallback on Redis failure
    const record = rateLimitStore.get(key);
    if (!record) {
      rateLimitStore.set(key, {
        count: 1,
        resetTime: now + windowMs
      });
      return { allowed: true };
    }

    if (record.count >= maxRequests) {
      return { allowed: false, resetTime: record.resetTime };
    }

    record.count++;
    return { allowed: true };
  }
}

/**
 * Input validation and sanitization
 * Protects against XSS and injection attacks
 */
export function validateConsultationInput(data: unknown): {
  isValid: boolean;
  errors: string[];
  sanitized?: SanitizedConsultationInput;
} {
  const errors: string[] = [];
  const input: ConsultationInput =
    typeof data === 'object' && data !== null ? (data as ConsultationInput) : {};

  const fullNameValue =
    typeof input.fullName === 'string' ? input.fullName.trim() : undefined;
  if (!fullNameValue) {
    errors.push('Full name is required');
  }

  const emailValue =
    typeof input.email === 'string' ? input.email.trim() : undefined;
  if (!emailValue) {
    errors.push('Email is required');
  }

  const consentValue = input.consent;
  if (typeof consentValue !== 'boolean' || !consentValue) {
    errors.push('Consent is required');
  }

  const privacyPolicyValue = input.privacyPolicy;
  if (typeof privacyPolicyValue !== 'boolean' || !privacyPolicyValue) {
    errors.push('Privacy policy acceptance is required');
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  let sanitizedFullName = fullNameValue!;
  if (sanitizedFullName.length === 0 || sanitizedFullName.length > SECURITY_CONFIG.INPUT_LIMITS.NAME_MAX_LENGTH) {
    errors.push('Full name must be between 1 and 100 characters');
  }
  if (!validator.isAlpha(sanitizedFullName.replace(/\s+/g, ''), 'en-US', { ignore: '-\'\u00C0-\u017F' })) {
    errors.push('Full name contains invalid characters');
  }
  sanitizedFullName = validator.escape(sanitizedFullName);

  let sanitizedEmail = '';
  if (!validator.isEmail(emailValue!)) {
    errors.push('Invalid email address');
  } else {
    sanitizedEmail =
      validator.normalizeEmail(emailValue!, {
        gmail_lowercase: true,
        gmail_remove_dots: false,
        outlookdotcom_lowercase: true,
        yahoo_lowercase: true,
        icloud_lowercase: true
      }) || emailValue!.toLowerCase();

    if (sanitizedEmail.length > SECURITY_CONFIG.INPUT_LIMITS.EMAIL_MAX_LENGTH) {
      errors.push('Email address is too long');
    }
  }

  let sanitizedPhone = '';
  if (typeof input.phone === 'string') {
    const phoneClean = input.phone.replace(/\D/g, '');
    if (phoneClean.length > 0) {
      if (phoneClean.length < 10 || phoneClean.length > 15) {
        errors.push('Phone number must be between 10 and 15 digits');
      } else {
        sanitizedPhone = phoneClean;
      }
    }
  }

  let sanitizedAgeRange = '';
  if (typeof input.ageRange === 'string') {
    const validAgeRanges = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
    if (validAgeRanges.includes(input.ageRange)) {
      sanitizedAgeRange = input.ageRange;
    }
  }

  let sanitizedConcerns = '';
  if (typeof input.concerns === 'string') {
    sanitizedConcerns = validator.escape(input.concerns.trim());
    if (sanitizedConcerns.length > SECURITY_CONFIG.INPUT_LIMITS.CONCERNS_MAX_LENGTH) {
      errors.push('Concerns text is too long (max 2000 characters)');
    }
  }

  let sanitizedPreferredTime = '';
  if (typeof input.preferredTime === 'string') {
    const validTimes = ['morning', 'afternoon', 'evening', 'flexible'];
    if (validTimes.includes(input.preferredTime)) {
      sanitizedPreferredTime = input.preferredTime;
    }
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  const sanitized: SanitizedConsultationInput = {
    fullName: sanitizedFullName,
    email: sanitizedEmail,
    phone: sanitizedPhone,
    ageRange: sanitizedAgeRange,
    concerns: sanitizedConcerns,
    preferredTime: sanitizedPreferredTime,
    consent: consentValue as boolean,
    privacyPolicy: privacyPolicyValue as boolean,
  };

  return {
    isValid: true,
    errors,
    sanitized,
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
  if (process.env.NODE_ENV === 'production') {
    return 'An error occurred processing your request. Please try again.';
  }

  if (typeof error === 'string') {
    return error;
  }

  if (typeof error === 'object' && error !== null && 'message' in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === 'string') {
      return message;
    }
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
