import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Men's Mental Health Issues - Resolve Men's Therapy",
  description:
    "Understanding and addressing men's unique mental health challenges. Expert therapy for depression, anxiety, anger, relationships, and life transitions specific to men.",
  path: "/mens-issues",
});

export default function MensIssuesLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Men's Mental Health Issues",
    url: absoluteUrl("/mens-issues"),
    availableServices: ["Men's Depression Treatment", "Anger Management", "Life Transitions Support", "Men's Anxiety Counseling"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Men's Issues", url: absoluteUrl("/mens-issues") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}