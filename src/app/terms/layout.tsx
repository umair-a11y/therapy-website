import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service - Resolve Men's Therapy",
  description:
    "Terms of service for Resolve Men's Therapy. Learn about our policies, procedures, and your rights when using our mental health services.",
  path: "/terms",
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}