import type { Metadata } from "next";
import AdmissionsContent from "./AdmissionsContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Admissions 2025–26 | Apply Online | Catalyst Public School",
  description:
    "Apply for admissions at Catalyst Public School, West Champaran for session 2025–26. Nursery to Class XII. Simple 4-step process.",
  keywords: [
    "admissions 2025-26",
    "apply online school Bihar",
    "Catalyst Public School admissions",
    "CBSE school admission West Champaran",
  ],
  openGraph: {
    title: "Admissions 2025–26 | Apply Online | Catalyst Public School",
    description:
      "Apply for admissions at Catalyst Public School for session 2025–26. Nursery to Class XII.",
    url: `${BASE_URL}/admissions`,
    siteName: "Catalyst Public School",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions 2025–26 | Apply Online | Catalyst Public School",
    description:
      "Apply for admissions at Catalyst Public School for session 2025–26. Nursery to Class XII.",
  },
  alternates: {
    canonical: `${BASE_URL}/admissions`,
    languages: { "en-IN": `${BASE_URL}/admissions`, "hi-IN": `${BASE_URL}/admissions` },
  },
};

export default function AdmissionsPage() {
  return <AdmissionsContent />;
}
