import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "./_data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Blog | Catalyst Public School — Education Insights",
  description: "Read articles on CBSE education, school admissions, and parenting tips from Catalyst Public School, West Champaran.",
  keywords: ["school blog", "CBSE education blog", "parenting tips Bihar", "school admissions guide"],
  openGraph: { title: "Blog | Catalyst Public School", description: "Education insights and parenting tips.", url: `${BASE_URL}/blog`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Blog | Catalyst Public School", description: "Education insights and parenting tips." },
  alternates: { canonical: `${BASE_URL}/blog`, languages: { "en-IN": `${BASE_URL}/blog`, "hi-IN": `${BASE_URL}/blog` } },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: { en: "Blog", hi: "ब्लॉग" }, href: "/blog" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Blog</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="block p-5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors bg-white dark:bg-slate-800">
              <time dateTime={post.date} className="text-xs text-slate-500">{post.date}</time>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mt-1">{post.title.en}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{post.excerpt.en}</p>
              <p className="text-xs text-slate-400 mt-2">By {post.author}</p>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
