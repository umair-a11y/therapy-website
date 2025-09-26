import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Performance Anxiety Therapy for Men - Resolve Men's Therapy",
  description:
    "Overcome performance anxiety in work, sports, and relationships. Evidence-based therapy for men dealing with pressure, perfectionism, and performance fears.",
  path: "/performance-anxiety",
});

export default function PerformanceAnxietyLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Performance Anxiety Therapy for Men",
    url: absoluteUrl("/performance-anxiety"),
    availableServices: ["Anxiety Management", "Performance Coaching", "Confidence Building", "Stress Reduction Techniques"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Performance Anxiety", url: absoluteUrl("/performance-anxiety") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}