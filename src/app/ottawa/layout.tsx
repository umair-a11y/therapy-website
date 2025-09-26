import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Men’s Therapy in Ottawa (Virtual)",
  description: "Virtual‑only therapy for men across Ontario, including Ottawa. Confidential, evidence‑based support from CRPO‑registered therapists.",
  path: "/ottawa",
});

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/ottawa` },
  ],
};

export default function OttawaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  );
}