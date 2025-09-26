import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Anxiety Therapy for Men - Resolve Men's Therapy",
  description:
    "Effective anxiety treatment designed for men. Learn practical strategies to manage worry, panic, social anxiety, and performance anxiety with CRPO-registered therapists.",
  path: "/anxiety-support",
});

export default function AnxietySupportLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Anxiety Therapy for Men",
    url: absoluteUrl("/anxiety-support"),
    availableServices: ["Generalized Anxiety Treatment", "Panic Disorder Therapy", "Social Anxiety Support", "Performance Anxiety Counseling"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Anxiety Support", url: absoluteUrl("/anxiety-support") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}