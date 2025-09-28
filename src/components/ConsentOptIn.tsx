"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SITE_NAME } from "@/lib/site-config";

type ConsentOptInProps = {
  toolkitName: string; // e.g., "Anxiety Toolkit"
  onSubmit?: (email: string) => Promise<void> | void;
};

export default function ConsentOptIn({ toolkitName, onSubmit }: ConsentOptInProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = useMemo(() => /.+@.+\..+/.test(email), [email]);
  const canSubmit = consent && isValidEmail;

  const handleSubmit = async () => {
    setError(null);
    if (!canSubmit) return;
    try {
      if (onSubmit) {
        await onSubmit(email);
      } else {
        const res = await fetch("/api/toolkit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, toolkitName, consent: true }),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.error || "Failed to send toolkit");
        }
      }
      setSubmitted(true);
    } catch (error) {
      console.error('[consent-opt-in] submission failed:', error);
      setError("We couldn't process your request right now. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <div className="p-4 rounded-lg border bg-therapeutic-primary/5">
        <p className="text-sm text-gray-800">
          Thanks — we’ll send the {toolkitName} to {email}. You can unsubscribe at any time.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-lg border bg-muted">
      <h4 className="font-semibold mb-2">Get Your Free {toolkitName}</h4>
      <p className="text-sm text-muted-foreground mb-3">
        A short PDF with practical exercises you can use today.
      </p>

      <div className="flex flex-col gap-3">
        <div>
          <Label htmlFor="optin-email" className="text-sm">Email</Label>
          <Input
            id="optin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-invalid={!isValidEmail && email.length > 0}
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            id="optin-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <Label htmlFor="optin-consent" className="text-sm">
            Yes, please send me the {toolkitName}. I consent to {SITE_NAME} contacting me by email. I can unsubscribe at any time.
          </Label>
        </div>

        {error && (
          <div role="alert" className="text-sm text-red-600">
            {error}
          </div>
        )}

        <Button onClick={handleSubmit} disabled={!canSubmit} className="w-full">
          Send My Toolkit
        </Button>

        <p className="text-xs text-muted-foreground">
          Sender: {SITE_NAME} • {CONTACT_PHONE_DISPLAY} • {CONTACT_EMAIL}
        </p>
      </div>
    </div>
  );
}

