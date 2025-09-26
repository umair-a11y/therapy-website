import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Couples Therapy for Men - Resolve Men's Therapy",
  description:
    "Strengthen your relationship through professional couples therapy designed specifically for men's needs and relationship challenges. Evidence-based approaches to improve communication and intimacy.",
  path: "/couples-therapy",
});

export default function CouplesTherapyLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Couples Therapy for Men",
    url: absoluteUrl("/couples-therapy"),
    availableServices: ["Couples Communication", "Relationship Building", "Conflict Resolution", "Emotionally Focused Therapy"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Couples Therapy", url: absoluteUrl("/couples-therapy") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}