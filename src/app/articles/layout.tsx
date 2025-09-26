import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Men's Mental Health Articles - Resolve Men's Therapy",
  description:
    "Evidence-based articles on men's mental health topics. Expert insights on depression, anxiety, work stress, relationships, and mental wellness strategies for men.",
  path: "/articles",
});

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return children;
}