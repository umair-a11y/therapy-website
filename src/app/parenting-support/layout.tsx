import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Parenting Support for Fathers - Resolve Men's Therapy",
  description:
    "Therapy and support for fathers navigating parenting challenges. Address co-parenting, work-family balance, and building stronger connections with your children.",
  path: "/parenting-support",
});

export default function ParentingSupportLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Parenting Support for Fathers",
    url: absoluteUrl("/parenting-support"),
    availableServices: ["Co-Parenting Guidance", "Father-Child Bonding", "Parenting Skills", "Work-Family Balance"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Parenting Support", url: absoluteUrl("/parenting-support") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}