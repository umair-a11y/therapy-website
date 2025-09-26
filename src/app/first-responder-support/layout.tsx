import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "First Responder Support - Resolve Men's Therapy",
  description:
    "Specialized support for first responders and emergency personnel. Professional therapy for trauma, stress, and occupational challenges faced by those who serve.",
  path: "/first-responder-support",
});

export default function FirstResponderSupportLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "First Responder Support",
    url: absoluteUrl("/first-responder-support"),
    availableServices: ["Occupational Trauma Support", "Critical Incident Debriefing", "PTSD Treatment", "Stress Management"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "First Responder Support", url: absoluteUrl("/first-responder-support") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}