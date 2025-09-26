import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { breadcrumbListJsonLd } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us - Resolve Men's Therapy",
  description:
    "Get in touch with our team of men's mental health specialists. Book a consultation, ask questions, or learn more about our therapy services for men in Ontario.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbData = breadcrumbListJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Contact", url: absoluteUrl("/contact") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbData} />
      {children}
    </>
  );
}