import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import Script from "next/script";

export const metadata: Metadata = buildMetadata({
  title: "Recognizing Depression in Men: Signs and Symptoms - Resolve Men's Therapy",
  description:
    "Learn to recognize depression symptoms unique to men. Understand warning signs, hidden symptoms, and when to seek professional help for male depression.",
  path: "/article-recognizing-depression",
});

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Recognizing Depression in Men: Signs and Symptoms",
  description: "Learn to recognize depression symptoms unique to men. Understand warning signs, hidden symptoms, and when to seek professional help for male depression.",
  image: `${SITE_URL}/api/og?title=${encodeURIComponent("Recognizing Depression in Men: Signs and Symptoms")}`,
  datePublished: "2024-01-10T00:00:00Z",
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
    "@id": `${SITE_URL}/article-recognizing-depression`,
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
      name: "Recognizing Depression in Men",
      item: `${SITE_URL}/article-recognizing-depression`,
    },
  ],
};

export default function RecognizingDepressionLayout({ children }: { children: React.ReactNode }) {
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
