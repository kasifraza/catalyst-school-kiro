const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Catalyst Public School",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  telephone: "+91-98765-43210",
  email: "info@catalystschool.edu.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "West Champaran",
    addressRegion: "Bihar",
    postalCode: "845101",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/catalystpublicschool",
    "https://www.instagram.com/catalystpublicschool",
    "https://twitter.com/catalystschool",
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
