import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Our Faculty | Catalyst Public School",
  description: "Meet the dedicated faculty of Catalyst Public School — experienced CBSE teachers across all subjects from Nursery to Class XII.",
  keywords: ["school faculty", "teachers Catalyst Public School", "CBSE teachers Bihar", "school staff West Champaran"],
  openGraph: { title: "Our Faculty | Catalyst Public School", description: "Meet our experienced CBSE teachers.", url: `${BASE_URL}/faculty`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Our Faculty | Catalyst Public School", description: "Meet our experienced CBSE teachers." },
  alternates: { canonical: `${BASE_URL}/faculty`, languages: { "en-IN": `${BASE_URL}/faculty`, "hi-IN": `${BASE_URL}/faculty` } },
};

const teachers = [
  { name: "Dr. Ramesh Prasad", designation: "Principal", subjects: "Physics, Administration", qualifications: "Ph.D. Physics, M.Ed.", img: 60 },
  { name: "Mrs. Kavita Singh", designation: "Vice Principal", subjects: "English Literature", qualifications: "M.A. English, B.Ed.", img: 32 },
  { name: "Mr. Sunil Kumar", designation: "PGT (Mathematics)", subjects: "Mathematics", qualifications: "M.Sc. Mathematics, B.Ed.", img: 53 },
  { name: "Mrs. Anita Devi", designation: "PGT (Chemistry)", subjects: "Chemistry", qualifications: "M.Sc. Chemistry, B.Ed.", img: 44 },
  { name: "Mr. Rajesh Verma", designation: "PGT (Biology)", subjects: "Biology", qualifications: "M.Sc. Zoology, B.Ed.", img: 57 },
  { name: "Mrs. Priya Sharma", designation: "TGT (Hindi)", subjects: "Hindi", qualifications: "M.A. Hindi, B.Ed.", img: 25 },
  { name: "Mr. Amit Tiwari", designation: "TGT (Social Science)", subjects: "History, Geography", qualifications: "M.A. History, B.Ed.", img: 15 },
  { name: "Mrs. Sunita Kumari", designation: "PRT", subjects: "EVS, General Science", qualifications: "B.Sc., D.El.Ed.", img: 9 },
  { name: "Mr. Vikash Ranjan", designation: "TGT (Computer Science)", subjects: "Computer Science, IT", qualifications: "MCA, B.Ed.", img: 12 },
  { name: "Mrs. Meena Gupta", designation: "PRT (Pre-Primary)", subjects: "Nursery & KG", qualifications: "B.A., NTT Diploma", img: 5 },
];

export default function FacultyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: teachers.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: t.name,
        jobTitle: t.designation,
        worksFor: { "@type": "Organization", name: "Catalyst Public School" },
      },
    })),
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: { en: "Faculty", hi: "शिक्षक" }, href: "/faculty" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Our Faculty</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((t) => (
            <div key={t.name} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 text-center">
              <Image
                src={`https://i.pravatar.cc/200?img=${t.img}`}
                alt={`Portrait of ${t.name}, ${t.designation} at Catalyst Public School`}
                width={96}
                height={96}
                className="rounded-full mx-auto mb-3"
              />
              <h2 className="font-semibold text-slate-800 dark:text-slate-100">{t.name}</h2>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">{t.designation}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.subjects}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{t.qualifications}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
