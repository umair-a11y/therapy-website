import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free Consultation - Resolve Men's Therapy",
  description:
    "Schedule your free 15-minute consultation with a men's mental health specialist. Confidential support from CRPO-registered therapists who understand men's unique challenges.",
  path: "/book-consultation",
});

export default function BookConsultationLayout({ children }: { children: React.ReactNode }) {
  return children;
}