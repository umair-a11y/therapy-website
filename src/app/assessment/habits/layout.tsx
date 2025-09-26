import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Habit Assessment for Men - Resolve Men's Therapy",
  description:
    "Evaluate your habits and behavioral patterns. Professional assessment to identify areas for improvement and develop healthier lifestyle habits.",
  path: "/assessment/habits",
});

export default function HabitsAssessmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}