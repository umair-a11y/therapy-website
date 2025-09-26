import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Anger Management for Men - Resolve Men's Therapy",
  description:
    "Professional anger management therapy for men. Learn healthy ways to express emotions, manage triggers, and improve relationships with specialized support.",
  path: "/anger-management",
});

export default function AngerManagementLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Anger Management for Men",
    url: absoluteUrl("/anger-management"),
    availableServices: ["Anger Control Therapy", "Emotional Regulation Training", "Conflict Resolution Counseling", "Impulse Control Support"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Anger Management", url: absoluteUrl("/anger-management") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}