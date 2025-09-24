import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

// Use ISR (Incremental Static Regeneration) for better performance
// Pages will be cached and revalidated every 60 seconds
export const revalidate = 60;

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
  title: "Premium Men's Therapy | Professional Mental Health Support",
  description: "Professional therapy services for men. Confidential, evidence-based mental health support with licensed therapists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
