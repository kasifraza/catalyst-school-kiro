import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Campus Gallery | Catalyst Public School",
  description:
    "View photos of Catalyst Public School campus, classrooms, sports events, and cultural activities in West Champaran, Bihar.",
  keywords: [
    "Catalyst Public School gallery",
    "school campus photos Bihar",
    "school events West Champaran",
    "CBSE school facilities images",
  ],
  openGraph: {
    title: "Campus Gallery | Catalyst Public School",
    description:
      "View photos of Catalyst Public School campus, classrooms, sports events, and cultural activities.",
    url: `${BASE_URL}/gallery`,
    siteName: "Catalyst Public School",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Gallery | Catalyst Public School",
    description:
      "View photos of Catalyst Public School campus, classrooms, sports events, and cultural activities.",
  },
  alternates: {
    canonical: `${BASE_URL}/gallery`,
    languages: { "en-IN": `${BASE_URL}/gallery`, "hi-IN": `${BASE_URL}/gallery` },
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
