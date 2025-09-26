import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Depression Therapy for Men - Resolve Men's Therapy",
  description:
    "Specialized depression treatment for men. Evidence-based therapy addressing male depression symptoms, isolation, and emotional numbness from therapists who understand.",
  path: "/depression-support",
});

export default function DepressionSupportLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Depression Therapy for Men",
    url: absoluteUrl("/depression-support"),
    availableServices: ["Major Depression Treatment", "Seasonal Depression Support", "Male Depression Counseling", "Mood Disorder Therapy"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Depression Support", url: absoluteUrl("/depression-support") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}