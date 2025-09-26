import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mental Health Assessments for Men - Resolve Men's Therapy",
  description:
    "Professional mental health assessments for men. Comprehensive evaluation for ADHD, depression, anxiety, stress, and other mental health concerns.",
  path: "/assessment",
});

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}