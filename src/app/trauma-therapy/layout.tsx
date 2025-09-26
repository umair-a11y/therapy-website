import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Trauma Therapy for Men - Resolve Men's Therapy",
  description:
    "Specialized trauma therapy for men. Process and heal from PTSD, childhood trauma, and life experiences with therapists trained in trauma-informed care.",
  path: "/trauma-therapy",
});

export default function TraumaTherapyLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Trauma Therapy for Men",
    url: absoluteUrl("/trauma-therapy"),
    availableServices: ["PTSD Treatment", "Trauma Processing", "EMDR Therapy", "Trauma-Informed Care"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Trauma Therapy", url: absoluteUrl("/trauma-therapy") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}