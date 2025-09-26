import { Resend } from "resend";

type SendEmailArgs = {
  to: string | string[];
  subject: string;
  text: string;
  from?: string;
};

export async function sendEmail({ to, subject, text, from }: SendEmailArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set; skipping send.");
    return { ok: false, skipped: true } as const;
  }

  const resend = new Resend(apiKey);
  const sender = from || process.env.EMAIL_FROM || "onboarding@resend.dev";

  try {
    const result = await resend.emails.send({
      from: sender,
      to,
      subject,
      text,
    });
    return { ok: true, id: (result as any)?.data?.id } as const;
  } catch (error) {
    console.error("[email] send failed:", error);
    return { ok: false, skipped: false, error } as const;
  }
}

