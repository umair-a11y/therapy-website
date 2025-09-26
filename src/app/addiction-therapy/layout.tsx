import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Addiction Therapy for Men - Resolve Men's Therapy",
  description:
    "Evidence-based addiction therapy for men struggling with substances, gaming, or behavioral addictions. Confidential support from therapists who understand addiction recovery.",
  path: "/addiction-therapy",
});

export default function AddictionTherapyLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Addiction Therapy for Men",
    url: absoluteUrl("/addiction-therapy"),
    availableServices: ["Substance Abuse Treatment", "Behavioral Addiction Counseling", "Recovery Support", "Relapse Prevention"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Addiction Therapy", url: absoluteUrl("/addiction-therapy") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}