import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import Script from "next/script";

export const metadata: Metadata = buildMetadata({
  title: "Managing Work Stress: Practical Strategies for Men - Resolve Men's Therapy",
  description:
    "Evidence-based strategies for managing work stress and preventing burnout. Learn practical techniques to balance professional demands and mental health.",
  path: "/article-managing-work-stress",
});

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Managing Work Stress: Practical Strategies for Men",
  description: "Evidence-based strategies for managing work stress and preventing burnout. Learn practical techniques to balance professional demands and mental health.",
  image: `${SITE_URL}/api/og?title=${encodeURIComponent("Managing Work Stress: Practical Strategies for Men")}`,
  datePublished: "2024-01-15T00:00:00Z",
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
    "@id": `${SITE_URL}/article-managing-work-stress`,
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
      name: "Managing Work Stress",
      item: `${SITE_URL}/article-managing-work-stress`,
    },
  ],
};

export default function ManagingWorkStressLayout({ children }: { children: React.ReactNode }) {
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
