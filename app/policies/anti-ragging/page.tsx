import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Anti-Ragging Policy | Catalyst Public School",
  description: "Anti-ragging policy of Catalyst Public School as per CBSE and UGC guidelines. Zero tolerance for ragging — committee details and grievance contacts.",
  keywords: ["anti-ragging policy", "school safety", "CBSE anti-ragging", "student safety Bihar"],
  openGraph: { title: "Anti-Ragging Policy | Catalyst Public School", description: "Zero tolerance anti-ragging policy and grievance mechanism.", url: `${BASE_URL}/policies/anti-ragging`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Anti-Ragging Policy | Catalyst Public School", description: "Zero tolerance anti-ragging policy and grievance mechanism." },
  alternates: { canonical: `${BASE_URL}/policies/anti-ragging`, languages: { "en-IN": `${BASE_URL}/policies/anti-ragging`, "hi-IN": `${BASE_URL}/policies/anti-ragging` } },
};

export default function AntiRaggingPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs items={[
        { label: { en: "Policies", hi: "नीतियां" }, href: "/policies/anti-ragging" },
        { label: { en: "Anti-Ragging", hi: "रैगिंग विरोधी" }, href: "/policies/anti-ragging" },
      ]} />
      <main className="max-w-3xl mx-auto px-4 py-10 prose prose-slate dark:prose-invert max-w-none">
        <h1>Anti-Ragging Policy</h1>
        <p className="text-sm text-slate-500">Effective from: 1 April 2024 | As per CBSE Circular and UGC Regulations</p>

        <h2>Policy Statement</h2>
        <p>Catalyst Public School maintains a <strong>zero-tolerance policy</strong> towards ragging in any form — physical, verbal, psychological, or cyber. This policy applies to all students, staff, and visitors on campus and during school-related activities.</p>

        <h2>Definition of Ragging</h2>
        <p>Any act that causes or is likely to cause physical or psychological harm, fear, or apprehension to a student, including but not limited to: teasing, bullying, intimidation, forcing to perform acts against will, verbal abuse, exclusion, or any form of harassment.</p>

        <h2>Consequences</h2>
        <ul>
          <li>Immediate suspension pending inquiry</li>
          <li>Expulsion from school for proven cases</li>
          <li>FIR with local police as per law</li>
          <li>Debarment from examinations</li>
          <li>Withholding of transfer certificate with adverse remarks</li>
        </ul>

        <h2>Anti-Ragging Committee</h2>
        <table className="text-sm">
          <thead><tr><th>Name</th><th>Designation</th><th>Role</th></tr></thead>
          <tbody>
            <tr><td>Dr. Ramesh Prasad</td><td>Principal</td><td>Chairperson</td></tr>
            <tr><td>Mrs. Kavita Singh</td><td>Vice Principal</td><td>Member</td></tr>
            <tr><td>Mr. Amit Tiwari</td><td>TGT (Social Science)</td><td>Member</td></tr>
            <tr><td>Mrs. Sunita Kumari</td><td>PRT</td><td>Member</td></tr>
            <tr><td>Parent Representative</td><td>—</td><td>Member</td></tr>
          </tbody>
        </table>

        <h2>Reporting & Grievance</h2>
        <div className="bg-rose-50 dark:bg-rose-950 border border-rose-200 dark:border-rose-800 rounded-lg p-5 not-prose">
          <h3 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">Report Ragging</h3>
          <ul className="text-sm text-rose-800 dark:text-rose-200 space-y-1">
            <li><strong>Helpline:</strong> +91-98765-43210</li>
            <li><strong>Email:</strong> antiragging@catalystschool.edu.in</li>
            <li><strong>In person:</strong> Principal&apos;s Office, any working day 9 AM – 3 PM</li>
            <li><strong>Anonymous:</strong> Drop box outside the Principal&apos;s Office</li>
          </ul>
          <p className="text-xs text-rose-600 dark:text-rose-400 mt-2">All complaints are treated confidentially. Retaliation against complainants is strictly prohibited.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
