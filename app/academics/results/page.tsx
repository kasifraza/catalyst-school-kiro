import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Board Results — Class X & XII | Catalyst Public School",
  description: "CBSE Board results for Class X and XII at Catalyst Public School — pass percentages, top scorers, and subject toppers for the last 3 sessions.",
  keywords: ["CBSE results", "Class X results", "Class XII results", "Catalyst Public School results", "top scorers Bihar"],
  openGraph: { title: "Board Results | Catalyst Public School", description: "CBSE Class X & XII results — pass percentages and top scorers.", url: `${BASE_URL}/academics/results`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Board Results | Catalyst Public School", description: "CBSE Class X & XII results — pass percentages and top scorers." },
  alternates: { canonical: `${BASE_URL}/academics/results`, languages: { "en-IN": `${BASE_URL}/academics/results`, "hi-IN": `${BASE_URL}/academics/results` } },
};

const results = [
  { session: "2025–26", classX: 98.5, classXII: 97.2 },
  { session: "2024–25", classX: 97.8, classXII: 96.5 },
  { session: "2023–24", classX: 96.2, classXII: 95.8 },
];

const toppers = {
  classX: [
    { initials: "A.K.", percentage: 98.4, session: "2025–26" },
    { initials: "P.S.", percentage: 97.8, session: "2025–26" },
    { initials: "R.M.", percentage: 97.2, session: "2025–26" },
  ],
  classXII: [
    { initials: "S.V.", percentage: 97.6, session: "2025–26" },
    { initials: "N.P.", percentage: 96.8, session: "2025–26" },
    { initials: "D.K.", percentage: 96.2, session: "2025–26" },
  ],
};

const subjectToppers = [
  { subject: "Mathematics", class: "X", initials: "A.K.", marks: 100 },
  { subject: "Science", class: "X", initials: "P.S.", marks: 99 },
  { subject: "English", class: "X", initials: "M.J.", marks: 98 },
  { subject: "Physics", class: "XII", initials: "S.V.", marks: 99 },
  { subject: "Chemistry", class: "XII", initials: "N.P.", marks: 98 },
  { subject: "Biology", class: "XII", initials: "D.K.", marks: 97 },
];

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs items={[
        { label: { en: "Academics", hi: "शिक्षाविद" }, href: "/academics" },
        { label: { en: "Results", hi: "परिणाम" }, href: "/academics/results" },
      ]} />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">CBSE Board Results</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Stats Panel */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Pass Percentage (Last 3 Sessions)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <caption className="sr-only">CBSE Board pass percentages for Class X and XII</caption>
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th scope="col" className="py-3 px-3 text-left font-semibold">Session</th>
                    <th scope="col" className="py-3 px-3 text-right font-semibold">Class X</th>
                    <th scope="col" className="py-3 px-3 text-right font-semibold">Class XII</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r) => (
                    <tr key={r.session} className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 font-medium">{r.session}</td>
                      <td className="py-2 px-3 text-right">{r.classX}%</td>
                      <td className="py-2 px-3 text-right">{r.classXII}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mt-8 mb-4">Subject Toppers (2025–26)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <caption className="sr-only">Subject-wise toppers for session 2025–26</caption>
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th scope="col" className="py-3 px-3 text-left font-semibold">Subject</th>
                    <th scope="col" className="py-3 px-3 text-left font-semibold">Class</th>
                    <th scope="col" className="py-3 px-3 text-left font-semibold">Student</th>
                    <th scope="col" className="py-3 px-3 text-right font-semibold">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectToppers.map((s) => (
                    <tr key={`${s.subject}-${s.class}`} className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3">{s.subject}</td>
                      <td className="py-2 px-3">{s.class}</td>
                      <td className="py-2 px-3 font-medium">{s.initials}</td>
                      <td className="py-2 px-3 text-right">{s.marks}/100</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Topper List */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Top Scorers — Class X (2025–26)</h2>
            <div className="space-y-3 mb-8">
              {toppers.classX.map((t, i) => (
                <div key={t.initials} className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">{t.initials}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{t.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Top Scorers — Class XII (2025–26)</h2>
            <div className="space-y-3">
              {toppers.classXII.map((t, i) => (
                <div key={t.initials} className="flex items-center gap-3 p-3 rounded-lg bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-600 text-white font-bold text-sm">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">{t.initials}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{t.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
