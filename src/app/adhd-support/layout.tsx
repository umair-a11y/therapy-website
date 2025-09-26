import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "ADHD Support for Men - Resolve Men's Therapy",
  description:
    "Specialized ADHD therapy and support for adult men. Evidence-based strategies for managing symptoms, improving focus, and thriving with ADHD in work and relationships.",
  path: "/adhd-support",
});

export default function ADHDSupportLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "ADHD Support for Men",
    url: absoluteUrl("/adhd-support"),
    availableServices: ["ADHD Assessment", "Focus Training", "Executive Function Coaching"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "ADHD Support", url: absoluteUrl("/adhd-support") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}