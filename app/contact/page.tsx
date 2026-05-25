import type { Metadata } from "next";
import ContactContent from "./ContactContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Contact — Catalyst Public School, West Champaran (845101)",
  description:
    "Contact Catalyst Public School, West Champaran, Bihar 845101. Call +91-98765-43210 or email info@catalystschool.edu.in. Office hours Mon–Sat 8 AM–4 PM.",
  keywords: [
    "contact Catalyst Public School",
    "school phone number West Champaran",
    "school address Bihar 845101",
    "Catalyst school email",
  ],
  openGraph: {
    title: "Contact — Catalyst Public School, West Champaran (845101)",
    description:
      "Contact Catalyst Public School, West Champaran, Bihar 845101. Call +91-98765-43210 or email us.",
    url: `${BASE_URL}/contact`,
    siteName: "Catalyst Public School",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Catalyst Public School, West Champaran (845101)",
    description:
      "Contact Catalyst Public School, West Champaran, Bihar 845101. Call +91-98765-43210 or email us.",
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
    languages: { "en-IN": `${BASE_URL}/contact`, "hi-IN": `${BASE_URL}/contact` },
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
