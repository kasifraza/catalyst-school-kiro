import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Mandatory Public Disclosure | Catalyst Public School, CBSE",
  description: "CBSE mandatory public disclosure for Catalyst Public School, West Champaran — affiliation details, staff, infrastructure, fees, and academic results.",
  keywords: ["CBSE mandatory disclosure", "school affiliation", "Catalyst Public School CBSE", "West Champaran school"],
  openGraph: { title: "Mandatory Public Disclosure | Catalyst Public School", description: "CBSE mandatory public disclosure — affiliation, staff, infrastructure, fees, results.", url: `${BASE_URL}/mandatory-public-disclosure`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Mandatory Public Disclosure | Catalyst Public School", description: "CBSE mandatory public disclosure — affiliation, staff, infrastructure, fees, results." },
  alternates: { canonical: `${BASE_URL}/mandatory-public-disclosure`, languages: { "en-IN": `${BASE_URL}/mandatory-public-disclosure`, "hi-IN": `${BASE_URL}/mandatory-public-disclosure` } },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">{title}</h2>
    {children}
  </section>
);

const Row = ({ label, value }: { label: string; value: string }) => (
  <tr className="border-b border-slate-100 dark:border-slate-800">
    <td className="py-2 pr-4 font-medium text-slate-700 dark:text-slate-300 w-1/2">{label}</td>
    <td className="py-2 text-slate-600 dark:text-slate-400">{value}</td>
  </tr>
);

export default function MandatoryPublicDisclosurePage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: { en: "Mandatory Public Disclosure", hi: "अनिवार्य सार्वजनिक प्रकटीकरण" }, href: "/mandatory-public-disclosure" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Mandatory Public Disclosure</h1>
        <p className="text-sm text-slate-500 mb-8">As on 2026-05-25</p>

        <Section title="A. General Information">
          <table className="w-full text-sm"><tbody>
            <Row label="Name of School" value="Catalyst Public School" />
            <Row label="Affiliation No." value="330726" />
            <Row label="School Code" value="65214" />
            <Row label="Complete Address" value="NH-28, Bettiah, West Champaran, Bihar — 845101" />
            <Row label="Principal" value="Dr. Ramesh Prasad" />
            <Row label="Name of Trust/Society" value="Catalyst Educational Trust" />
            <Row label="Trust/Society Registration No." value="BH/2009/00456" />
            <Row label="Year of Foundation" value="2009" />
            <Row label="Year of First Affiliation with CBSE" value="2012" />
            <Row label="Extension of Affiliation Up To" value="31 March 2028" />
          </tbody></table>
        </Section>

        <Section title="B. Documents & Information">
          <table className="w-full text-sm"><tbody>
            <Row label="NOC from State Government" value="Issued — Ref. No. EDU/NOC/2011/1234" />
            <Row label="Recognition Certificate under RTE Act" value="Available" />
            <Row label="Society/Trust Registration Certificate" value="BH/2009/00456 (Valid)" />
            <Row label="Building Safety Certificate" value="Issued by PWD, valid till 2027" />
            <Row label="Fire Safety Certificate" value="Issued by Fire Dept., valid till 2027" />
            <Row label="DEO Certificate" value="Issued by DEO, West Champaran" />
            <Row label="Water & Sanitation Certificate" value="Issued by PHE Dept." />
            <Row label="Health & Hygiene Certificate" value="Available" />
            <Row label="Fee Structure" value="See /admissions/fee-structure" />
            <Row label="Last 3 Years Board Results" value="See Academic Results section below" />
            <Row label="Last CBSE Inspection / 360° Visit" value="2024-25" />
          </tbody></table>
        </Section>

        <Section title="C. Staff (Teaching)">
          <table className="w-full text-sm"><thead><tr className="border-b-2 border-slate-300 dark:border-slate-600">
            <th className="py-2 text-left font-semibold text-slate-700 dark:text-slate-200">Category</th>
            <th className="py-2 text-left font-semibold text-slate-700 dark:text-slate-200">Sanctioned</th>
            <th className="py-2 text-left font-semibold text-slate-700 dark:text-slate-200">Filled</th>
          </tr></thead><tbody>
            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="py-2">PGT</td><td className="py-2">12</td><td className="py-2">10</td></tr>
            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="py-2">TGT</td><td className="py-2">18</td><td className="py-2">16</td></tr>
            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="py-2">PRT</td><td className="py-2">20</td><td className="py-2">18</td></tr>
            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="py-2">Administrative Staff</td><td className="py-2">8</td><td className="py-2">7</td></tr>
          </tbody></table>
        </Section>

        <Section title="D. Infrastructure">
          <table className="w-full text-sm"><tbody>
            <Row label="Total Campus Area" value="2.5 acres" />
            <Row label="Built-up Area" value="45,000 sq. ft." />
            <Row label="Number of Classrooms" value="42" />
            <Row label="Science Labs" value="3 (Physics, Chemistry, Biology)" />
            <Row label="Computer Lab" value="1 (40 workstations)" />
            <Row label="Library" value="1 (8,000+ books)" />
            <Row label="Playground" value="1 (multi-sport)" />
            <Row label="Auditorium" value="1 (500 capacity)" />
            <Row label="Smart Classrooms" value="20" />
          </tbody></table>
        </Section>

        <Section title="E. Fee Structure">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Detailed class-wise fee structure is available at{" "}
            <a href="/admissions/fee-structure" className="text-emerald-700 dark:text-emerald-400 underline">Fee Structure page</a>.
          </p>
        </Section>

        <Section title="F. Academic Results (Last 3 Sessions)">
          <table className="w-full text-sm"><thead><tr className="border-b-2 border-slate-300 dark:border-slate-600">
            <th className="py-2 text-left font-semibold">Session</th>
            <th className="py-2 text-left font-semibold">Class X Pass %</th>
            <th className="py-2 text-left font-semibold">Class XII Pass %</th>
          </tr></thead><tbody>
            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="py-2">2025–26</td><td className="py-2">98.5%</td><td className="py-2">97.2%</td></tr>
            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="py-2">2024–25</td><td className="py-2">97.8%</td><td className="py-2">96.5%</td></tr>
            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="py-2">2023–24</td><td className="py-2">96.2%</td><td className="py-2">95.8%</td></tr>
          </tbody></table>
        </Section>

        <Section title="G. Self-Certification">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg text-sm text-slate-700 dark:text-slate-300">
            <p>I hereby certify that the information provided above is true and correct to the best of my knowledge and belief. The school is compliant with all CBSE norms and regulations as applicable.</p>
            <p className="mt-4 font-semibold">Dr. Ramesh Prasad<br />Principal, Catalyst Public School<br />Date: 2026-05-25</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
