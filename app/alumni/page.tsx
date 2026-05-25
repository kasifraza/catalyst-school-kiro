import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Alumni Testimonials | Catalyst Public School",
  description: "Hear from our alumni — former students of Catalyst Public School share their experiences and how the school shaped their careers.",
  keywords: ["alumni", "testimonials", "Catalyst Public School alumni", "student success stories Bihar"],
  openGraph: { title: "Alumni Testimonials | Catalyst Public School", description: "Former students share their experiences.", url: `${BASE_URL}/alumni`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Alumni Testimonials | Catalyst Public School", description: "Former students share their experiences." },
  alternates: { canonical: `${BASE_URL}/alumni`, languages: { "en-IN": `${BASE_URL}/alumni`, "hi-IN": `${BASE_URL}/alumni` } },
};

const alumni = [
  { name: "Aditya Kumar", batch: 2018, role: "Software Engineer, TCS", quote: "Catalyst gave me the foundation to crack competitive exams and build a career in technology. The teachers went beyond the syllabus to nurture curiosity.", img: 11 },
  { name: "Priya Kumari", batch: 2019, role: "MBBS Student, AIIMS Patna", quote: "The biology lab and dedicated faculty helped me clear NEET in my first attempt. I owe my medical career to this school.", img: 23 },
  { name: "Rahul Singh", batch: 2017, role: "Civil Services (BPSC)", quote: "The discipline and values I learned at Catalyst Public School prepared me for the rigours of civil services preparation.", img: 33 },
  { name: "Sneha Verma", batch: 2020, role: "B.Tech, NIT Patna", quote: "From science olympiads to JEE preparation, the school provided every resource a student needs to succeed.", img: 26 },
  { name: "Vikash Ranjan", batch: 2016, role: "Chartered Accountant", quote: "The commerce faculty was exceptional. They made accounting and economics interesting and practical.", img: 52 },
  { name: "Anjali Devi", batch: 2021, role: "B.A. (Hons) English, BHU", quote: "The English department and debate club shaped my communication skills. I'm grateful for the bilingual environment that made me confident in both Hindi and English.", img: 19 },
];

export default function AlumniPage() {
  const jsonLd = alumni.map((a) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: a.name },
    reviewBody: a.quote,
    itemReviewed: { "@type": "EducationalOrganization", name: "Catalyst Public School" },
  }));

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: { en: "Alumni", hi: "पूर्व छात्र" }, href: "/alumni" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Alumni Testimonials</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((a) => (
            <div key={a.name} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col">
              <Image
                src={`https://i.pravatar.cc/200?img=${a.img}`}
                alt={`Photo of ${a.name}, Batch ${a.batch}`}
                width={64}
                height={64}
                className="rounded-full mb-3"
              />
              <blockquote className="text-sm text-slate-600 dark:text-slate-400 italic flex-1">&ldquo;{a.quote}&rdquo;</blockquote>
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{a.name}</p>
                <p className="text-xs text-slate-500">Batch {a.batch} · {a.role}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
