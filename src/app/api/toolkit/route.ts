import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { sanitizeErrorMessage } from "@/lib/security";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site-config";

type ToolkitBody = {
  email?: string;
  toolkitName?: string;
  consent?: boolean;
};

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as ToolkitBody;
    const email = (data.email || "").trim();
    const toolkitName = (data.toolkitName || "Toolkit").trim();
    const consent = Boolean(data.consent);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required." },
        { status: 400 }
      );
    }
    if (!consent) {
      return NextResponse.json(
        { error: "Explicit consent is required." },
        { status: 400 }
      );
    }

    // Email contents (keep simple and CASL-friendly)
    const subject = `${SITE_NAME} – Your ${toolkitName}`;
    const text = `
Here is your ${toolkitName}.

We designed this toolkit to be practical and easy to use. If anything is unclear or you'd like guidance applying it to your situation, reply to this email and we’ll help.

Unsubscribe: If you no longer wish to receive toolkit emails from us, reply to this email with the word "UNSUBSCRIBE" or email ${CONTACT_EMAIL} with subject "Unsubscribe".

— ${SITE_NAME}
`;

    const result = await sendEmail({
      to: email,
      subject,
      text,
    });

    if (!(result as any).ok && !(result as any).skipped) {
      throw new Error("Email provider reported failure");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: sanitizeErrorMessage(err) },
      { status: 500 }
    );
  }
}

