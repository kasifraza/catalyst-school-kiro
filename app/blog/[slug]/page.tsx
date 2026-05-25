import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "../_data";
import BlogPostContent from "./BlogPostContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title.en} | Catalyst Public School Blog`,
    description: post.excerpt.en,
    keywords: post.keywords,
    openGraph: { title: post.title.en, description: post.excerpt.en, url: `${BASE_URL}/blog/${slug}`, siteName: "Catalyst Public School", type: "article" },
    twitter: { card: "summary", title: post.title.en, description: post.excerpt.en },
    alternates: { canonical: `${BASE_URL}/blog/${slug}`, languages: { "en-IN": `${BASE_URL}/blog/${slug}`, "hi-IN": `${BASE_URL}/blog/${slug}` } },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.en,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Catalyst Public School" },
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[
        { label: { en: "Blog", hi: "ब्लॉग" }, href: "/blog" },
        { label: post.title, href: `/blog/${slug}` },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <time dateTime={post.date} className="text-xs text-slate-500">{post.date}</time>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-2">{post.title.en}</h1>
        <p className="text-sm text-slate-500 mb-6">By {post.author}</p>
        <BlogPostContent body={post.body} />
      </main>
      <Footer />
    </>
  );
}
