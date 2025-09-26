import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ADHD Self-Check Tool - Resolve Men's Therapy",
  description:
    "Free ADHD self-assessment for adult men. Check your symptoms and understand if you might benefit from professional ADHD evaluation and support.",
  path: "/self-check/adhd",
});

export default function ADHDSelfCheckLayout({ children }: { children: React.ReactNode }) {
  return children;
}