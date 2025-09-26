import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Script from "next/script";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions - Resolve Men's Therapy",
  description:
    "Common questions about men's therapy, insurance coverage, session formats, and what to expect. Get answers about our mental health services for men.",
  path: "/faq",
});

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is your approach different from traditional therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We provide continuous support between sessions, not just during scheduled appointments. Our approach is designed specifically for men, focusing on practical, goal‑oriented strategies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Most extended health insurance plans cover our services. We provide receipts you can submit for reimbursement. Sliding scale options are available.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get an appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Free 30‑minute consultations are typically available within 1–2 business days. Same‑day consults may be available for urgent situations.",
      },
    },
    {
      "@type": "Question",
      name: "Is online therapy as effective as in‑person?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Research supports that online therapy is as effective as in‑person care, with added convenience and accessibility. Our platform is PHIPA‑compliant.",
      },
    },
    {
      "@type": "Question",
      name: "Is everything I say confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We maintain strict confidentiality within legal and ethical limits (e.g., imminent risk, child protection, or court orders).",
      },
    },
  ],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {children}
    </>
  );
}
