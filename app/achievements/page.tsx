import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Achievements | Catalyst Public School",
  description: "Academic, sports, cultural, and co-curricular achievements of Catalyst Public School students and faculty.",
  keywords: ["school achievements", "awards", "sports achievements Bihar", "academic excellence CBSE"],
  openGraph: { title: "Achievements | Catalyst Public School", description: "Our students' achievements in academics, sports, and culture.", url: `${BASE_URL}/achievements`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Achievements | Catalyst Public School", description: "Our students' achievements in academics, sports, and culture." },
  alternates: { canonical: `${BASE_URL}/achievements`, languages: { "en-IN": `${BASE_URL}/achievements`, "hi-IN": `${BASE_URL}/achievements` } },
};

const sections = [
  {
    title: "Academic",
    icon: "school",
    items: [
      { year: "2026", title: "NTSE Scholar", description: "3 students qualified for NTSE Stage-II scholarship." },
      { year: "2025", title: "Science Olympiad Gold", description: "2 students won gold medals at the National Science Olympiad." },
      { year: "2025", title: "100% Pass Rate — Class XII", description: "All 85 students passed CBSE Class XII with first division." },
      { year: "2024", title: "JEE Main Qualifier", description: "5 students qualified JEE Main with ranks under 50,000." },
    ],
  },
  {
    title: "Sports",
    icon: "sports_soccer",
    items: [
      { year: "2026", title: "District Cricket Champions", description: "U-17 boys team won the West Champaran District Cricket Championship." },
      { year: "2025", title: "State Athletics — 3 Medals", description: "Students won 1 gold and 2 silver medals at Bihar State Athletics Meet." },
      { year: "2025", title: "CBSE Cluster Kabaddi", description: "Girls team reached semi-finals at CBSE North-East Cluster." },
    ],
  },
  {
    title: "Cultural",
    icon: "palette",
    items: [
      { year: "2026", title: "Inter-School Debate Winner", description: "Priya K. won first prize at the Zonal Inter-School Debate Competition." },
      { year: "2025", title: "State-Level Dance", description: "School dance troupe performed at Bihar Rajya Mahotsav." },
      { year: "2024", title: "Hindi Kavita Sammelan", description: "3 students awarded at the District Hindi Poetry Recitation event." },
    ],
  },
  {
    title: "Co-curricular",
    icon: "emoji_events",
    items: [
      { year: "2026", title: "Robotics Club — Regional Finals", description: "Team reached regional finals of the National Robotics Challenge." },
      { year: "2025", title: "Eco-Club Recognition", description: "School Eco-Club received district-level Green School Award." },
      { year: "2025", title: "Quiz Competition", description: "Team won 2nd place at the Bihar State Quiz Championship." },
      { year: "2024", title: "Art Exhibition", description: "Student artwork exhibited at the Patna Art Gallery annual show." },
    ],
  },
];

export default function AchievementsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: { en: "Achievements", hi: "उपलब्धियां" }, href: "/achievements" }]} />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Achievements</h1>
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                <span className="material-icons-round text-emerald-600">{section.icon}</span>
                {section.title}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <div key={`${item.year}-${item.title}`} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">{item.year}</span>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100 mt-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
