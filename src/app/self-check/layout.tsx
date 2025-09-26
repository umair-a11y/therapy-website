import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mental Health Self-Check Tools - Resolve Men's Therapy",
  description:
    "Free, confidential mental health self-assessment tools for men. Check symptoms of depression, anxiety, ADHD, stress, and other mental health concerns.",
  path: "/self-check",
});

export default function SelfCheckLayout({ children }: { children: React.ReactNode }) {
  return children;
}