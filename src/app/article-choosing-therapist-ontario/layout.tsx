import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import Script from "next/script";

export const metadata: Metadata = buildMetadata({
  title: "Choosing the Right Therapist in Ontario: A Men's Guide - Resolve Men's Therapy",
  description:
    "Complete guide to finding the right therapist in Ontario. Learn about CRPO registration, therapy types, insurance coverage, and what to expect from therapy.",
  path: "/article-choosing-therapist-ontario",
});

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Choosing the Right Therapist in Ontario: A Men's Guide",
  description: "Complete guide to finding the right therapist in Ontario. Learn about CRPO registration, therapy types, insurance coverage, and what to expect from therapy.",
  image: `${SITE_URL}/api/og?title=${encodeURIComponent("Choosing the Right Therapist in Ontario: A Men's Guide")}`,
  datePublished: "2024-01-05T00:00:00Z",
  dateModified: new Date().toISOString(),
  author: {
    "@type": "Organization",
    name: "Resolve Men's Therapy",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Resolve Men's Therapy",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.svg`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/article-choosing-therapist-ontario`,
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Articles",
      item: `${SITE_URL}/articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Choosing the Right Therapist in Ontario",
      item: `${SITE_URL}/article-choosing-therapist-ontario`,
    },
  ],
};

export default function ChoosingTherapistOntarioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {children}
    </>
  );
}
