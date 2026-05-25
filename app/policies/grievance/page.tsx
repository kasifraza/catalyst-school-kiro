import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Grievance Redressal | Catalyst Public School",
  description: "Grievance redressal mechanism at Catalyst Public School — committee composition, procedure, timelines, and contact information.",
  keywords: ["grievance redressal", "school complaints", "parent grievance", "Catalyst Public School"],
  openGraph: { title: "Grievance Redressal | Catalyst Public School", description: "Grievance redressal mechanism and procedure.", url: `${BASE_URL}/policies/grievance`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Grievance Redressal | Catalyst Public School", description: "Grievance redressal mechanism and procedure." },
  alternates: { canonical: `${BASE_URL}/policies/grievance`, languages: { "en-IN": `${BASE_URL}/policies/grievance`, "hi-IN": `${BASE_URL}/policies/grievance` } },
};

export default function GrievancePage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs items={[
        { label: { en: "Policies", hi: "नीतियां" }, href: "/policies/grievance" },
        { label: { en: "Grievance Redressal", hi: "शिकायत निवारण" }, href: "/policies/grievance" },
      ]} />
      <main className="max-w-3xl mx-auto px-4 py-10 prose prose-slate dark:prose-invert max-w-none">
        <h1>Grievance Redressal Mechanism</h1>

        <h2>Objective</h2>
        <p>To provide a transparent, time-bound, and fair mechanism for addressing grievances of students, parents, and staff members of Catalyst Public School.</p>

        <h2>Scope</h2>
        <p>This mechanism covers grievances related to academic matters, fee disputes, disciplinary actions, infrastructure, safety, discrimination, and any other school-related concerns.</p>

        <h2>Grievance Redressal Committee</h2>
        <table className="text-sm">
          <thead><tr><th>Name</th><th>Designation</th><th>Role</th></tr></thead>
          <tbody>
            <tr><td>Dr. Ramesh Prasad</td><td>Principal</td><td>Chairperson</td></tr>
            <tr><td>Mrs. Kavita Singh</td><td>Vice Principal</td><td>Convener</td></tr>
            <tr><td>Mr. Sunil Kumar</td><td>Senior Faculty</td><td>Member</td></tr>
            <tr><td>Parent Representative (elected)</td><td>—</td><td>Member</td></tr>
            <tr><td>Student Representative (Class XI/XII)</td><td>—</td><td>Member</td></tr>
          </tbody>
        </table>

        <h2>Procedure</h2>
        <ol>
          <li><strong>Step 1:</strong> Submit a written complaint to the class teacher or section head within 7 days of the incident.</li>
          <li><strong>Step 2:</strong> If unresolved within 3 working days, escalate to the Vice Principal in writing.</li>
          <li><strong>Step 3:</strong> The Grievance Committee will hear the matter within 7 working days and communicate its decision in writing.</li>
          <li><strong>Step 4:</strong> If still unsatisfied, appeal to the Principal within 5 days of the committee&apos;s decision.</li>
          <li><strong>Step 5:</strong> The Principal&apos;s decision is final and will be communicated within 10 working days.</li>
        </ol>

        <h2>Timelines</h2>
        <ul>
          <li>Acknowledgement of complaint: within 2 working days</li>
          <li>Resolution at class level: 3 working days</li>
          <li>Committee hearing: within 7 working days of escalation</li>
          <li>Final appeal resolution: 10 working days</li>
        </ul>

        <h2>Contact</h2>
        <div className="bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 rounded-lg p-5 not-prose">
          <h3 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Submit a Grievance</h3>
          <ul className="text-sm text-cyan-800 dark:text-cyan-200 space-y-1">
            <li><strong>Email:</strong> grievance@catalystschool.edu.in</li>
            <li><strong>Phone:</strong> +91-98765-43210 (Mon–Sat, 9 AM – 3 PM)</li>
            <li><strong>In person:</strong> Administrative Office</li>
            <li><strong>Online:</strong> <a href="/contact" className="underline">Contact Form</a></li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
