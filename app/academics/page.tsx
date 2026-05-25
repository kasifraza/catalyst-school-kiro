import type { Metadata } from "next";
import AcademicsContent from "./AcademicsContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "CBSE Curriculum (Nursery–XII) | Catalyst Public School",
  description:
    "Explore CBSE curriculum from Nursery to Class XII at Catalyst Public School, West Champaran. Smart classrooms, science labs, and holistic learning.",
  keywords: [
    "CBSE curriculum Bihar",
    "Nursery to Class 12",
    "Catalyst Public School academics",
    "science lab school Bettiah",
    "holistic education West Champaran",
  ],
  openGraph: {
    title: "CBSE Curriculum (Nursery–XII) | Catalyst Public School",
    description:
      "Explore CBSE curriculum from Nursery to Class XII at Catalyst Public School, West Champaran.",
    url: `${BASE_URL}/academics`,
    siteName: "Catalyst Public School",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBSE Curriculum (Nursery–XII) | Catalyst Public School",
    description:
      "Explore CBSE curriculum from Nursery to Class XII at Catalyst Public School, West Champaran.",
  },
  alternates: {
    canonical: `${BASE_URL}/academics`,
    languages: { "en-IN": `${BASE_URL}/academics`, "hi-IN": `${BASE_URL}/academics` },
  },
};

export default function AcademicsPage() {
  return <AcademicsContent />;
}
