import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Stress Self-Check Tool - Resolve Men's Therapy",
  description:
    "Free stress and burnout self-assessment for men. Evaluate your stress levels and learn when to seek professional support for work-life balance.",
  path: "/self-check/stress",
});

export default function StressSelfCheckLayout({ children }: { children: React.ReactNode }) {
  return children;
}