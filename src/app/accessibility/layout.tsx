import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement - Resolve Men's Therapy",
  description:
    "Our commitment to accessibility. Learn about our efforts to make mental health services accessible to all men, regardless of ability.",
  path: "/accessibility",
});

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}