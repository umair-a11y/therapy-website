// Next.js Middleware for Security Headers and Request Processing
// CRPO Compliance: Implements security measures to protect client data

import { NextRequest, NextResponse } from 'next/server';

// Security headers configuration
const securityHeaders = {
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',

  // Prevent embedding in iframes
  'X-Frame-Options': 'DENY',

  // XSS Protection
  'X-XSS-Protection': '1; mode=block',

  // Referrer Policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',

  // Content Security Policy
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; '),

  // HSTS (HTTP Strict Transport Security)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',

  // Permissions Policy (formerly Feature Policy)
  'Permissions-Policy': [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'interest-cohort=()'
  ].join(', '),

  // Additional security headers
  'X-DNS-Prefetch-Control': 'off',
  'X-Download-Options': 'noopen',
  'X-Permitted-Cross-Domain-Policies': 'none',
};

// Rate limiting configuration
const RATE_LIMIT_CONFIG = {
  API_WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  API_MAX_REQUESTS: 10, // Max 10 API requests per window
  STATIC_WINDOW_MS: 1 * 60 * 1000, // 1 minute
  STATIC_MAX_REQUESTS: 100, // Max 100 static requests per minute
};

// Simple in-memory rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function checkGlobalRateLimit(ip: string, path: string): boolean {
  const now = Date.now();
  const isApiRequest = path.startsWith('/api/');

  const config = isApiRequest
    ? { window: RATE_LIMIT_CONFIG.API_WINDOW_MS, max: RATE_LIMIT_CONFIG.API_MAX_REQUESTS }
    : { window: RATE_LIMIT_CONFIG.STATIC_WINDOW_MS, max: RATE_LIMIT_CONFIG.STATIC_MAX_REQUESTS };

  const key = `global_rate_limit:${ip}:${isApiRequest ? 'api' : 'static'}`;
  const record = rateLimitStore.get(key);

  // Clean up expired entries
  if (record && now > record.resetTime) {
    rateLimitStore.delete(key);
  }

  const currentRecord = rateLimitStore.get(key);

  if (!currentRecord) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + config.window
    });
    return true;
  }

  if (currentRecord.count >= config.max) {
    return false;
  }

  currentRecord.count++;
  rateLimitStore.set(key, currentRecord);
  return true;
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Get client IP
  const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

  // Apply global rate limiting
  if (!checkGlobalRateLimit(ip, request.nextUrl.pathname)) {
    console.warn(`Global rate limit exceeded for IP: ${ip}, path: ${request.nextUrl.pathname}`);
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        ...securityHeaders
      }
    });
  }

  // Add security headers to all responses
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Additional security measures for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Ensure API requests are properly authenticated/authorized
    // Add additional API-specific headers
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }

  // Security logging for suspicious activity
  const userAgent = request.headers.get('user-agent') || '';
  const suspiciousPatterns = [
    /bot/i,
    /crawler/i,
    /scanner/i,
    /sql/i,
    /script/i,
    /<script/i,
    /javascript:/i,
    /vbscript:/i,
    /onload/i,
    /onerror/i
  ];

  if (suspiciousPatterns.some(pattern => pattern.test(userAgent))) {
    console.warn(`Suspicious user agent detected: ${userAgent} from IP: ${ip}`);
  }

  // Block requests with suspicious query parameters
  const url = request.nextUrl;
  const suspiciousParams = ['<script', 'javascript:', 'vbscript:', 'onload=', 'onerror='];
  const queryString = url.search;

  if (suspiciousParams.some(param => queryString.includes(param))) {
    console.warn(`Suspicious query parameters detected: ${queryString} from IP: ${ip}`);
    return new NextResponse('Bad Request', {
      status: 400,
      headers: securityHeaders
    });
  }

  return response;
}

// Configure middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};