import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ADHD Assessment for Men - Resolve Men's Therapy",
  description:
    "Comprehensive ADHD assessment for adult men. Professional evaluation to identify ADHD symptoms and develop personalized treatment strategies.",
  path: "/assessment/adhd",
});

export default function ADHDAssessmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}