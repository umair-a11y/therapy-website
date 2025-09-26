import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Habit Self-Check Tool - Resolve Men's Therapy",
  description:
    "Free habit assessment tool for men. Evaluate your daily habits and behavioral patterns to identify areas for positive change and growth.",
  path: "/self-check/habits",
});

export default function HabitsSelfCheckLayout({ children }: { children: React.ReactNode }) {
  return children;
}