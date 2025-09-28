import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import crypto from "crypto";

/**
 * Generate a CSP nonce for inline scripts
 * Uses crypto.randomBytes for secure random generation
 */
export function generateNonce(): string {
  return crypto.randomBytes(16).toString("base64");
}

/**
 * Middleware to inject CSP nonce into requests
 * This nonce can be used for inline scripts that require it
 */
export function cspNonceMiddleware(request: NextRequest) {
  const nonce = generateNonce();

  // Clone the request headers
  const requestHeaders = new Headers(request.headers);

  // Add nonce to request headers so it's available to components
  requestHeaders.set("x-csp-nonce", nonce);

  // Create response with modified headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Also add nonce to response headers for client-side access if needed
  response.headers.set("x-csp-nonce", nonce);

  return response;
}