import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Relationship Therapy for Men - Resolve Men's Therapy",
  description:
    "Improve relationships and communication with therapy designed for men. Address intimacy, trust, conflict resolution, and emotional connection with professional support.",
  path: "/relationship-therapy",
});

export default function RelationshipTherapyLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Relationship Therapy for Men",
    url: absoluteUrl("/relationship-therapy"),
    availableServices: ["Communication Skills", "Conflict Resolution", "Intimacy Building", "Trust Building"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Relationship Therapy", url: absoluteUrl("/relationship-therapy") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}