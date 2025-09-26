import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Individual Therapy for Men - Resolve Men's Therapy",
  description:
    "One-on-one therapy designed specifically for men. Confidential support for depression, anxiety, stress, relationships, and life transitions from CRPO-registered therapists.",
  path: "/individual-therapy",
});

export default function IndividualTherapyLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Individual Therapy for Men",
    url: absoluteUrl("/individual-therapy"),
    availableServices: ["One-on-One Counseling", "Mental Health Support", "Life Transition Therapy", "Personal Development"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Individual Therapy", url: absoluteUrl("/individual-therapy") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}