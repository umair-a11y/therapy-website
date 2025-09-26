import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "For Partners - Supporting Men's Mental Health - Resolve Men's Therapy",
  description:
    "Resources and guidance for partners supporting men through mental health challenges. Learn how to help, what to expect, and how therapy can strengthen relationships.",
  path: "/for-partners",
});

export default function ForPartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}