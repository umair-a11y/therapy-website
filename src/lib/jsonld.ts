import { SITE_URL } from "./seo";
import { CONTACT_PHONE, SITE_NAME, PT_PROFILE_URL } from "./site-config";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: [
      PT_PROFILE_URL,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE,
      contactType: "Customer Service",
      areaServed: "CA-ON",
      availableLanguage: "en",
    },
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ontario, CA",
    },
    sameAs: [
      PT_PROFILE_URL,
    ],
    telephone: CONTACT_PHONE,
    availableService: [
      { "@type": "MedicalTherapy", name: "Individual Therapy" },
      { "@type": "MedicalTherapy", name: "Anxiety Support" },
      { "@type": "MedicalTherapy", name: "Depression Support" },
    ],
    // Virtual-only care
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "Ontario, CA",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

// Enhanced ProfessionalService with customizable service type and URL
export function customProfessionalServiceJsonLd(options: {
  serviceType: string;
  url: string;
  availableServices?: string[];
}) {
  const { serviceType, url, availableServices = [] } = options;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    serviceType,
    url,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ontario, CA",
    },
    sameAs: [
      PT_PROFILE_URL,
    ],
    telephone: CONTACT_PHONE,
    ...(availableServices.length > 0 && {
      availableService: availableServices.map(service => ({
        "@type": "MedicalTherapy",
        name: service,
      })),
    }),
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "Ontario, CA",
    },
  };
}

// BreadcrumbList JSON-LD for navigation structure
export function breadcrumbListJsonLd(breadcrumbs: Array<{
  name: string;
  url: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
