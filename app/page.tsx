import type { Metadata } from "next";
import HomeContent from "./HomeContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Catalyst Public School | Best CBSE School in West Champaran, Bihar",
  description:
    "Catalyst Public School offers quality CBSE education from Nursery to Class XII in West Champaran, Bihar. Admissions open for 2025–26.",
  keywords: [
    "CBSE school West Champaran",
    "best school Bihar",
    "Catalyst Public School",
    "admissions open Bihar",
    "school Bettiah",
  ],
  openGraph: {
    title: "Catalyst Public School | Best CBSE School in West Champaran, Bihar",
    description:
      "Quality CBSE education from Nursery to Class XII in West Champaran, Bihar. Admissions open for 2025–26.",
    url: BASE_URL,
    siteName: "Catalyst Public School",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalyst Public School | Best CBSE School in West Champaran, Bihar",
    description:
      "Quality CBSE education from Nursery to Class XII in West Champaran, Bihar.",
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "en-IN": BASE_URL, "hi-IN": BASE_URL },
  },
};

export default function Home() {
  return <HomeContent />;
}
