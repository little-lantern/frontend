import React from "react";
import { Helmet } from "react-helmet-async";
import {
  DEFAULT_OG_IMAGE,
  getPageSeo,
  SITE_NAME,
  SITE_URL,
} from "../config/seo";

type SeoProps = {
  pathname: string;
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Little Lantern - Early Learning Center",
  description:
    "Finnish Educare-inspired early learning centre in Kolkata for ages 12 months to 5 years.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo512.png`,
  image: DEFAULT_OG_IMAGE,
  telephone: "+91-8910006463",
  email: "info@littlelantern.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "170, Harish Mukherjee Road",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700026",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.5266726",
    longitude: "88.343569",
  },
  openingHours: "Mo-Fr 8 am - 6 pm",
  sameAs: [
    "https://www.facebook.com/littlelantern.in/",
    "https://www.instagram.com/littlelantern.in",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "24",
  },
};

const Seo: React.FC<SeoProps> = ({ pathname }) => {
  const { title, description, path } = getPageSeo(pathname);
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  return (
    <Helmet key={path}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      {path === "/" && (
        <script type="application/ld+json">
          {JSON.stringify(LOCAL_BUSINESS_JSON_LD)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
