import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Stress & Burnout Therapy for Men - Resolve Men's Therapy",
  description:
    "Overcome work stress and burnout with therapy designed for men. Learn stress management techniques and restore work-life balance with professional support.",
  path: "/stress-burnout",
});

export default function StressBurnoutLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Stress & Burnout Therapy for Men",
    url: absoluteUrl("/stress-burnout"),
    availableServices: ["Stress Management Techniques", "Burnout Recovery", "Work-Life Balance Coaching", "Mindfulness Training"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Stress & Burnout", url: absoluteUrl("/stress-burnout") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}