import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Therapy Pricing - Resolve Men's Therapy",
  description:
    "Transparent therapy pricing with insurance coverage options. Flexible payment plans for individual therapy, assessments, and specialized men's mental health services.",
  path: "/pricing",
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}