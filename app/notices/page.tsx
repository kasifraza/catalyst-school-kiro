import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notices } from "./_data";
import NoticesContent from "./NoticesContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Notices & Circulars | Catalyst Public School",
  description: "Latest notices, circulars, and announcements from Catalyst Public School, West Champaran — admissions, exams, events, and holidays.",
  keywords: ["school notices", "circulars", "Catalyst Public School announcements", "school events Bihar"],
  openGraph: { title: "Notices & Circulars | Catalyst Public School", description: "Latest notices and announcements from Catalyst Public School.", url: `${BASE_URL}/notices`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Notices & Circulars | Catalyst Public School", description: "Latest notices and announcements from Catalyst Public School." },
  alternates: { canonical: `${BASE_URL}/notices`, languages: { "en-IN": `${BASE_URL}/notices`, "hi-IN": `${BASE_URL}/notices` } },
};

export default function NoticesPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: { en: "Notices", hi: "सूचनाएं" }, href: "/notices" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Notices & Circulars</h1>
        <NoticesContent notices={notices} />
      </main>
      <Footer />
    </>
  );
}
