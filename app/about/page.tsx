import type { Metadata } from "next";
import AboutContent from "./AboutContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "About Us — Catalyst Public School, Bettiah | Mission, Vision, History",
  description:
    "Learn about Catalyst Public School's mission, vision, and journey since 2009. CBSE-affiliated school in West Champaran, Bihar with 1500+ students.",
  keywords: [
    "about Catalyst Public School",
    "CBSE school Bettiah",
    "school history West Champaran",
    "mission vision school Bihar",
  ],
  openGraph: {
    title: "About Us — Catalyst Public School, Bettiah",
    description:
      "Learn about Catalyst Public School's mission, vision, and journey since 2009 in West Champaran, Bihar.",
    url: `${BASE_URL}/about`,
    siteName: "Catalyst Public School",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Catalyst Public School, Bettiah",
    description:
      "Learn about Catalyst Public School's mission, vision, and journey since 2009 in West Champaran, Bihar.",
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
    languages: { "en-IN": `${BASE_URL}/about`, "hi-IN": `${BASE_URL}/about` },
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
