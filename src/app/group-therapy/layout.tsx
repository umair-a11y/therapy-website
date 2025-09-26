import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { customProfessionalServiceJsonLd, breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Group Therapy for Men - Resolve Men's Therapy",
  description:
    "Connect with other men in supportive group therapy designed to build skills, share experiences, and foster personal growth. Various groups available for different challenges.",
  path: "/group-therapy",
});

export default function GroupTherapyLayout({ children }: { children: React.ReactNode }) {
  const professionalServiceData = customProfessionalServiceJsonLd({
    serviceType: "Group Therapy for Men",
    url: absoluteUrl("/group-therapy"),
    availableServices: ["Men's Depression Support Group", "Anxiety Management Group", "Father's Support Group", "Relationship Skills Group"],
  });

  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Services", url: absoluteUrl("/services") },
    { name: "Group Therapy", url: absoluteUrl("/group-therapy") },
  ]);

  return (
    <>
      <JsonLd data={professionalServiceData} />
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}