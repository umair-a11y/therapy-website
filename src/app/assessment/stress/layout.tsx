import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Stress Assessment for Men - Resolve Men's Therapy",
  description:
    "Professional stress assessment to identify burnout risk and stress levels. Get personalized recommendations for managing work and life stress.",
  path: "/assessment/stress",
});

export default function StressAssessmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}