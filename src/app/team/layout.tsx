import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Team - Resolve Men's Therapy",
  description:
    "Meet our team of CRPO-registered therapists specializing in men's mental health. Experienced professionals who understand the unique challenges men face.",
  path: "/team",
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}