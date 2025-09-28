import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import {
  organizationJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";
import { Providers } from "./providers";
import { WebVitals } from "@/components/WebVitals";

// Prefer static rendering where possible for better CWV

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Online Therapy for Men in Ontario | Resolve Men's Therapy",
    template: "%s | Resolve Men's Therapy",
  },
  description:
    "Practical, system-based online therapy for men in Ontario dealing with anger, anxiety, burnout, and relationship strain. Navigate your path forward.",
  openGraph: {
    type: "website",
    siteName: "Resolve Men's Therapy",
    images: [
      {
        url: "/api/og?title=Resolve%20Men's%20Therapy",
        width: 1200,
        height: 630,
        alt: "Resolve Men's Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased font-sans`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={professionalServiceJsonLd()} />
        <Providers>
          <WebVitals />
          {children}
        </Providers>
      </body>
    </html>
  );
}
