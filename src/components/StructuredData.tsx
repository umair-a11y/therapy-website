// CRPO Compliance: This component provides factual business information only.
// No outcome claims, client reviews, or superlative statements included.

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service';
  location?: 'toronto' | 'ottawa' | 'ontario';
}

export default function StructuredData({
  type = 'organization',
  location = 'ontario'
}: StructuredDataProps) {

  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Resolve Men's Therapy",
    "description": "CRPO registered psychotherapist providing evidence-based therapy services for men across Ontario",
    "url": "https://resolvemenstherapy.com",
    "email": "info@resolvemenstherapy.com",
    "serviceType": "Psychotherapy",
    "provider": {
      "@type": "Person",
      "name": "Resolve Men's Therapy",
      "jobTitle": "Registered Psychotherapist (Qualifying)",
      "memberOf": {
        "@type": "Organization",
        "name": "College of Registered Psychotherapists of Ontario",
        "url": "https://crpo.ca"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Ontario, Canada"
    },
    "availableLanguage": "English",
    "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Therapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual Therapy",
            "description": "Evidence-based individual psychotherapy sessions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ADHD Support",
            "description": "Specialized therapy for ADHD in adults"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Anxiety Support",
            "description": "Evidence-based anxiety therapy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Depression Support",
            "description": "Depression therapy using evidence-based approaches"
          }
        }
      ]
    }
  };

  const locationData = {
    toronto: {
      "@type": "LocalBusiness",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "Ontario",
        "addressCountry": "Canada"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.6532",
        "longitude": "-79.3832"
      },
      "telephone": "Available upon request",
      "openingHours": "Mo-Fr 09:00-17:00"
    },
    ottawa: {
      "@type": "LocalBusiness",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ottawa",
        "addressRegion": "Ontario",
        "addressCountry": "Canada"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "45.4215",
        "longitude": "-75.6972"
      },
      "telephone": "Available upon request",
      "openingHours": "Mo-Fr 09:00-17:00"
    }
  };

  let structuredData = { ...baseOrganization };

  // Add location-specific data if specified
  if (location === 'toronto' || location === 'ottawa') {
    structuredData = {
      ...structuredData,
      ...locationData[location]
    };
  }

  // Additional service-specific schema
  if (type === 'service') {
    structuredData = {
      ...structuredData,
      "@type": "MedicalBusiness"
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}