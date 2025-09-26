import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Grief & Loss Support for Men - Resolve Men's Therapy",
  description:
    "Professional support for men navigating grief, loss, and life transitions. Compassionate therapy to help process emotions and find healing.",
  path: "/grief-support",
});

export default function GriefSupportLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Grief & Loss Support for Men",
    url: absoluteUrl("/grief-support"),
    availableServices: ["Grief Counseling", "Loss Processing", "Bereavement Support", "Life Transition Guidance"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Grief Support", url: absoluteUrl("/grief-support") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}