// components/StructuredData.tsx
export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hiloster Technologies",
    url: "https://hiloster-website.vercel.app",
    logo: "https://hiloster-website.vercel.app/logo.png",
    slogan: "Smart Solutions. Stronger Impact.",
    description:
      "Hiloster Technologies is a premier Kenyan technology provider specializing in school management platforms, custom software development, mobile apps, CCTV installations, and structured ICT cabling.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rangwe",
      addressRegion: "Homa Bay",
      addressCountry: "KE",
    },
    areaServed: ["Kenya", "East Africa"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254700000000",
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
    knowsAbout: [
      "Web Development",
      "School Management Systems",
      "CCTV Installation",
      "Structured Network Cabling",
      "Custom Software Development",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Hiloster Technologies offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hiloster Technologies offers custom web development, institutional and school management software, enterprise CCTV camera installations, network cabling, and IT support services across Kenya.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Hiloster Technologies located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hiloster Technologies is based in Rangwe, Kenya, and services institutions, businesses, and schools throughout Kenya.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}