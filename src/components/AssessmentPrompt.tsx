"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Brain, HeartPulse, X } from "lucide-react";

const DISMISS_KEY = "rmt-assessment-prompt-hide-until"; // stores a UNIX ms timestamp

export default function AssessmentPrompt() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState<string | null>(null);

  // Do not show on assessment/self-check/booking pages
  const suppressed = useMemo(() => {
    const p = pathname || "";
    return (
      p.startsWith("/assessment") ||
      p.startsWith("/self-check") ||
      p.startsWith("/book-consultation")
    );
  }, [pathname]);

  useEffect(() => {
    if (suppressed) return;
    try {
      const hideUntilRaw = localStorage.getItem(DISMISS_KEY);
      const now = Date.now();
      if (hideUntilRaw) {
        const hideUntil = parseInt(hideUntilRaw, 10);
        if (!Number.isNaN(hideUntil)) {
          if (hideUntil > now) return; // still within suppression window
          // expired — remove and allow showing again
          localStorage.removeItem(DISMISS_KEY);
        }
      }
      const t = setTimeout(() => setVisible(true), 8000); // gentle delay
      return () => clearTimeout(t);
    } catch {
      // ignore storage errors
    }
  }, [suppressed]);

  if (!visible || suppressed) return null;

  return (
    <div
      role="region"
      aria-label="Self-Assessment prompt"
      className={cn(
        "fixed inset-x-0 bottom-0 z-[60]",
        "px-4 sm:px-6 pb-4"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-3xl",
          "rounded-xl border bg-white/95 backdrop-blur shadow-xl",
          "ring-1 ring-black/5"
        )}
      >
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-3 text-therapeutic-primary">
            <Brain className="h-6 w-6" aria-hidden="true" />
            <span className="font-semibold">Curious where you stand?</span>
          </div>
          <p className="text-sm text-slate-600 flex-1">
            Take a 3–5 minute self‑assessment. Results stay on your device.
          </p>
          <div className="flex items-center gap-2">
            <Link href="/self-check/anxiety" aria-label="Take an anxiety self-assessment">
              <Button size="sm" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                <HeartPulse className="h-4 w-4 mr-1.5" /> Self‑Assess
              </Button>
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 px-2 py-1"
              onClick={() => setVisible(false)}
              aria-label="Dismiss prompt"
            >
              <X className="h-4 w-4" aria-hidden="true" /> Not now
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 px-2 py-1 underline decoration-slate-300 hover:decoration-slate-500"
              onClick={() => {
                try {
                  const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
                  localStorage.setItem(DISMISS_KEY, String(Date.now() + THIRTY_DAYS));
                } catch {}
                setConfirmMsg("We’ll hide this prompt for 30 days.");
                setTimeout(() => setVisible(false), 1500);
              }}
              aria-label="Don’t show this for 30 days"
            >
              Don’t show for 30 days
            </button>
          </div>
        </div>
      </div>
      {confirmMsg && (
        <div className="mx-auto max-w-3xl flex justify-end pr-1">
          <div className="mb-2 inline-flex items-center rounded-full bg-slate-800 text-white/90 text-xs px-3 py-1 shadow-sm">
            {confirmMsg}
          </div>
        </div>
      )}
    </div>
  );
}
