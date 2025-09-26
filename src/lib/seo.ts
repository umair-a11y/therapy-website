import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://resolvemenstherapy.com";

export function absoluteUrl(path: string = "/") {
  try {
    return new URL(path, SITE_URL).toString();
  } catch {
    return path;
  }
}

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string; // begins with "/"
  imageText?: string;
};

export function buildMetadata({ title, description, path, imageText }: BuildMetadataArgs): Metadata {
  const ogImagePath = `/api/og?title=${encodeURIComponent(imageText || title)}`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImagePath],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

