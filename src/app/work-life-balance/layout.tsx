import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Work-Life Balance Therapy for Men - Resolve Men's Therapy",
  description:
    "Achieve better work-life balance with therapy designed for professional men. Address burnout, boundaries, and priorities with specialized support.",
  path: "/work-life-balance",
});

export default function WorkLifeBalanceLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Work-Life Balance Therapy for Men",
    url: absoluteUrl("/work-life-balance"),
    availableServices: ["Boundary Setting", "Priority Management", "Time Management", "Career Counseling"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Work-Life Balance", url: absoluteUrl("/work-life-balance") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}