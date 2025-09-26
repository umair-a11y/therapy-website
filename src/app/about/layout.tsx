import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "About Resolve Men's Therapy",
  description:
    "Therapy designed for men, by clinicians who understand men's needs. Evidence-based, confidential care from CRPO-registered therapists.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "About", url: absoluteUrl("/about") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}

