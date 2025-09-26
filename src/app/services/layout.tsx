import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Men's Mental Health Services - Resolve Men's Therapy",
  description:
    "Professional mental health services designed specifically for men. ADHD support, anxiety therapy, depression counseling, and more from CRPO-registered therapists.",
  path: "/services",
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Men's Mental Health Services",
    url: absoluteUrl("/services"),
    availableServices: [
      "Individual Therapy",
      "ADHD Support",
      "Anxiety Treatment",
      "Depression Counseling",
      "Anger Management",
      "Relationship Therapy",
      "Trauma Therapy",
      "Addiction Support"
    ],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}