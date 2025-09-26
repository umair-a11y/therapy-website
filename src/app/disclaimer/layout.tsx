import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Medical Disclaimer - Resolve Men's Therapy",
  description:
    "Important medical disclaimer for Resolve Men's Therapy services. Understand the nature of therapy services and when to seek emergency help.",
  path: "/disclaimer",
});

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return children;
}