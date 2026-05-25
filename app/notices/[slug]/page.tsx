import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notices } from "../_data";
import NoticeDetailContent from "./NoticeDetailContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export function generateStaticParams() {
  return notices.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const notice = notices.find((n) => n.slug === slug);
  if (!notice) return {};
  return {
    title: `${notice.title.en} | Catalyst Public School`,
    description: notice.summary.en,
    keywords: [notice.category, "school notice", "Catalyst Public School"],
    openGraph: { title: notice.title.en, description: notice.summary.en, url: `${BASE_URL}/notices/${slug}`, siteName: "Catalyst Public School", type: "article" },
    twitter: { card: "summary", title: notice.title.en, description: notice.summary.en },
    alternates: { canonical: `${BASE_URL}/notices/${slug}`, languages: { "en-IN": `${BASE_URL}/notices/${slug}`, "hi-IN": `${BASE_URL}/notices/${slug}` } },
  };
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const notice = notices.find((n) => n.slug === slug);
  if (!notice) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: notice.title.en,
    datePublished: notice.date,
    author: { "@type": "Organization", name: "Catalyst Public School" },
    publisher: { "@type": "Organization", name: "Catalyst Public School" },
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[
        { label: { en: "Notices", hi: "सूचनाएं" }, href: "/notices" },
        { label: notice.title, href: `/notices/${slug}` },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded">{notice.category}</span>
          <time dateTime={notice.date}>{notice.date}</time>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{notice.title.en}</h1>
        <NoticeDetailContent body={notice.body} />
      </main>
      <Footer />
    </>
  );
}
