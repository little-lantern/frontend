export const SITE_URL = "https://littlelantern.in";
export const SITE_NAME = "Little Lantern";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: "Little Lantern | Finnish-Inspired Preschool in Kolkata",
    description:
      "Little Lantern is a Finnish Educare-inspired early learning centre in Kolkata for ages 12 months to 5 years. Play-based learning across 20+ zones. Book a visit.",
    path: "/",
  },
  "/about": {
    title: "About Us | Mission & Philosophy — Little Lantern Kolkata",
    description:
      "Discover Little Lantern's child-centred philosophy, the Lantern Difference, and our founder's Finnish-certified vision for early learning in Kolkata.",
    path: "/about",
  },
  "/our-space": {
    title: "Our Space | 20+ Learning Zones & Safe Campus — Little Lantern",
    description:
      "Explore Little Lantern's 15,000+ sq ft Kolkata campus: 20+ interactive learning zones, climate-controlled classrooms, CCTV, fire safety and child-safe design.",
    path: "/our-space",
  },
  "/programs": {
    title: "Programs | Preschool for Ages 12 Months–5 Years — Little Lantern",
    description:
      "From Parent-Toddler to KG1, Little Lantern's play-based programs in Kolkata nurture every stage of early childhood. See age groups, timings and curriculum.",
    path: "/programs",
  },
  "/learning": {
    title: "Our Pedagogy | Finnish Educare Curriculum — Little Lantern",
    description:
      "Little Lantern follows Finland's Educare approach: play-based learning across five core areas, a balanced daily rhythm, and strong parent partnership.",
    path: "/learning",
  },
  "/admissions": {
    title: "Admissions | Apply in 3 Simple Steps — Little Lantern Kolkata",
    description:
      "Join Little Lantern in Kolkata. See eligibility by age group and our simple 3-step admission process: enquire, visit, and confirm your child's place.",
    path: "/admissions",
  },
  "/activity": {
    title: "Activity Hub | After-School Classes in Kolkata — Little Lantern",
    description:
      "Little Lantern's Activity Hub offers expert-led evening classes in Kolkata: storytelling, dance, music, theatre, art, phonics, STEM and more. Register now.",
    path: "/activity",
  },
  "/apply-now": {
    title: "Apply Now | Admission Enquiry Form — Little Lantern Kolkata",
    description:
      "Start your child's Little Lantern journey. Fill out our quick admission enquiry form and our team will reach out to schedule your campus visit.",
    path: "/apply-now",
  },
  "/contact-us": {
    title: "Contact Us | Visit Our Kolkata Campus — Little Lantern",
    description:
      "Contact Little Lantern, 170 Harish Mukherjee Road, Kolkata 700026. Call our preschool or Activity Hub, email us, or message us on WhatsApp.",
    path: "/contact-us",
  },
  "/work-with-us": {
    title: "Work With Us | Careers at Little Lantern Kolkata",
    description:
      "Join the Little Lantern team. Explore career opportunities at our early learning centre in Kolkata.",
    path: "/work-with-us",
  },
  "/privacy-policy": {
    title: "Privacy Policy — Little Lantern Kolkata",
    description:
      "Read Little Lantern's privacy policy for our early learning centre in Kolkata.",
    path: "/privacy-policy",
  },
  "/terms-of-use": {
    title: "Terms of Use — Little Lantern Kolkata",
    description:
      "Read Little Lantern's terms of use for our early learning centre website.",
    path: "/terms-of-use",
  },
  "/thank-you": {
    title: "Thank You | Little Lantern Kolkata",
    description:
      "Thank you for contacting Little Lantern. Our team will be in touch soon.",
    path: "/thank-you",
  },
};

export const getPageSeo = (pathname: string): PageSeo => {
  const normalized = pathname.split("?")[0].split("#")[0];
  return (
    PAGE_SEO[normalized] ?? {
      title: `${SITE_NAME} | Finnish-Inspired Preschool in Kolkata`,
      description: PAGE_SEO["/"].description,
      path: normalized,
    }
  );
};
