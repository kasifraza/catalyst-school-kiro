import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Fee Structure 2026–27 | Catalyst Public School",
  description: "Class-wise fee structure for Nursery to Class XII at Catalyst Public School, West Champaran. Admission fee, tuition, transport, and annual charges.",
  keywords: ["fee structure", "school fees Bihar", "Catalyst Public School fees", "CBSE school fees West Champaran"],
  openGraph: { title: "Fee Structure 2026–27 | Catalyst Public School", description: "Class-wise fee structure for Nursery to Class XII.", url: `${BASE_URL}/admissions/fee-structure`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Fee Structure 2026–27 | Catalyst Public School", description: "Class-wise fee structure for Nursery to Class XII." },
  alternates: { canonical: `${BASE_URL}/admissions/fee-structure`, languages: { "en-IN": `${BASE_URL}/admissions/fee-structure`, "hi-IN": `${BASE_URL}/admissions/fee-structure` } },
};

const fees = [
  { class: "Nursery", admission: 8000, tuition: 4500, annual: 3000, transport: 1500, total: 17000 },
  { class: "LKG", admission: 8000, tuition: 4500, annual: 3000, transport: 1500, total: 17000 },
  { class: "UKG", admission: 8000, tuition: 4800, annual: 3000, transport: 1500, total: 17300 },
  { class: "I–II", admission: 10000, tuition: 5500, annual: 3500, transport: 1800, total: 20800 },
  { class: "III–V", admission: 10000, tuition: 6000, annual: 3500, transport: 1800, total: 21300 },
  { class: "VI–VIII", admission: 12000, tuition: 7000, annual: 4000, transport: 2000, total: 25000 },
  { class: "IX–X", admission: 15000, tuition: 8500, annual: 4500, transport: 2000, total: 30000 },
  { class: "XI–XII (Science)", admission: 18000, tuition: 10000, annual: 5000, transport: 2000, total: 35000 },
  { class: "XI–XII (Commerce/Arts)", admission: 16000, tuition: 9000, annual: 5000, transport: 2000, total: 32000 },
];

const faqs = [
  { q: "Is the admission fee refundable?", a: "The admission fee is non-refundable once the student is enrolled. However, if admission is cancelled before the session starts, 50% may be refunded as per CBSE norms." },
  { q: "Is there a sibling discount?", a: "Yes, a 10% discount on tuition fee is offered for the second sibling and 15% for the third sibling studying concurrently." },
  { q: "When is the fee due?", a: "Tuition fee is payable term-wise: Term 1 (April–June) by 15 May, Term 2 (July–September) by 15 August, Term 3 (October–December) by 15 November, Term 4 (January–March) by 15 February." },
  { q: "Is transport fee mandatory?", a: "No, transport fee is optional and applicable only for students availing the school bus facility." },
  { q: "Are there any hidden charges?", a: "No. The fee structure above is comprehensive. Additional charges apply only for optional activities like excursions, special coaching, or extra-curricular certifications, which are communicated in advance." },
];

export default function FeeStructurePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[
        { label: { en: "Admissions", hi: "प्रवेश" }, href: "/admissions" },
        { label: { en: "Fee Structure", hi: "शुल्क संरचना" }, href: "/admissions/fee-structure" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Fee Structure 2026–27</h1>
        <p className="text-sm text-slate-500 mb-8">All amounts in ₹ (Indian Rupees). Transport fee is optional.</p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <caption className="sr-only">Class-wise fee structure for academic session 2026–27</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th scope="col" className="py-3 px-3 text-left font-semibold">Class</th>
                <th scope="col" className="py-3 px-3 text-right font-semibold">Admission</th>
                <th scope="col" className="py-3 px-3 text-right font-semibold">Tuition/Term</th>
                <th scope="col" className="py-3 px-3 text-right font-semibold">Annual</th>
                <th scope="col" className="py-3 px-3 text-right font-semibold">Transport*</th>
                <th scope="col" className="py-3 px-3 text-right font-semibold">Total (Year)</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((f) => (
                <tr key={f.class} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-2 px-3 font-medium">{f.class}</td>
                  <td className="py-2 px-3 text-right">₹{f.admission.toLocaleString("en-IN")}</td>
                  <td className="py-2 px-3 text-right">₹{f.tuition.toLocaleString("en-IN")}</td>
                  <td className="py-2 px-3 text-right">₹{f.annual.toLocaleString("en-IN")}</td>
                  <td className="py-2 px-3 text-right">₹{f.transport.toLocaleString("en-IN")}</td>
                  <td className="py-2 px-3 text-right font-semibold">₹{f.total.toLocaleString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-5 mb-10">
          <h2 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h2>
          <ul className="list-disc list-inside text-sm text-amber-800 dark:text-amber-200 space-y-1">
            <li>10% sibling discount on tuition fee for the second child; 15% for the third.</li>
            <li>Late fee of ₹50/day applicable after due date.</li>
            <li>Refund policy as per CBSE guidelines — 50% refund if cancelled before session start.</li>
            <li>Transport fee varies by distance; above figures are for Zone 1 (up to 5 km).</li>
          </ul>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 group">
                <summary className="font-medium text-slate-800 dark:text-slate-100 cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="material-icons-round text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
