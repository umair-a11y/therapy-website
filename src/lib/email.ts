import { Resend, type CreateEmailResponse } from "resend";

type SendEmailArgs = {
  to: string | string[];
  subject: string;
  text: string;
  from?: string;
};

type EmailSendResult =
  | { ok: true; id?: string }
  | { ok: false; skipped: true }
  | { ok: false; skipped: false; error: unknown };

/**
 * Send email with retry logic
 * Implements exponential backoff for transient failures
 */
export async function sendEmail(
  { to, subject, text, from }: SendEmailArgs,
  maxRetries: number = 3
): Promise<EmailSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set; skipping send.");
    return { ok: false, skipped: true };
  }

  const resend = new Resend(apiKey);
  const sender = from || process.env.EMAIL_FROM || "onboarding@resend.dev";

  let lastError: unknown;

  // Retry logic with exponential backoff
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response: CreateEmailResponse = await resend.emails.send({
        from: sender,
        to,
        subject,
        text,
      });

      const messageId = response.data?.id;
      if (attempt > 0) {
        console.log(`[email] Send succeeded on attempt ${attempt + 1}`);
      }
      return { ok: true, id: messageId ?? undefined };
    } catch (error) {
      lastError = error;
      const isRetryable = isTransientError(error);

      if (isRetryable && attempt < maxRetries - 1) {
        const backoffMs = Math.min(1000 * Math.pow(2, attempt), 10000); // Max 10 seconds
        console.warn(
          `[email] Attempt ${attempt + 1} failed, retrying in ${backoffMs}ms...`,
          error
        );
        await new Promise(resolve => setTimeout(resolve, backoffMs));
      } else {
        console.error(
          `[email] Send failed after ${attempt + 1} attempt(s):`,
          error
        );
        break;
      }
    }
  }

  return { ok: false, skipped: false, error: lastError };
}

/**
 * Determine if an error is transient and worth retrying
 */
function isTransientError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;

  const errorObj = error as { code?: string; statusCode?: number; message?: string };

  // Check for common transient error patterns
  if (errorObj.code) {
    const transientCodes = ['ECONNRESET', 'ETIMEDOUT', 'ECONNREFUSED', 'ENETUNREACH'];
    if (transientCodes.includes(errorObj.code)) return true;
  }

  // Check for HTTP status codes that indicate transient issues
  if (errorObj.statusCode) {
    const status = errorObj.statusCode;
    return status === 429 || // Rate limited
           status === 503 || // Service unavailable
           status === 504 || // Gateway timeout
           (status >= 500 && status < 600); // Server errors
  }

  // Check error message for transient patterns
  const message = errorObj.message || String(error);
  const transientPatterns = [
    /timeout/i,
    /temporarily unavailable/i,
    /too many requests/i,
    /rate limit/i,
    /connection reset/i
  ];

  return transientPatterns.some(pattern => pattern.test(message));
}
