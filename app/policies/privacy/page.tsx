import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export const metadata: Metadata = {
  title: "Privacy Policy | Catalyst Public School",
  description: "Privacy policy of Catalyst Public School — how we collect, use, and protect your personal data through our website and admission forms.",
  keywords: ["privacy policy", "data protection", "school privacy", "Catalyst Public School"],
  openGraph: { title: "Privacy Policy | Catalyst Public School", description: "How we collect, use, and protect your personal data.", url: `${BASE_URL}/policies/privacy`, siteName: "Catalyst Public School", type: "website" },
  twitter: { card: "summary", title: "Privacy Policy | Catalyst Public School", description: "How we collect, use, and protect your personal data." },
  alternates: { canonical: `${BASE_URL}/policies/privacy`, languages: { "en-IN": `${BASE_URL}/policies/privacy`, "hi-IN": `${BASE_URL}/policies/privacy` } },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs items={[
        { label: { en: "Policies", hi: "नीतियां" }, href: "/policies/privacy" },
        { label: { en: "Privacy Policy", hi: "गोपनीयता नीति" }, href: "/policies/privacy" },
      ]} />
      <main className="max-w-3xl mx-auto px-4 py-10 prose prose-slate dark:prose-invert max-w-none">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last updated: 25 May 2026</p>

        <h2>1. Information We Collect</h2>
        <p>We collect personal information through:</p>
        <ul>
          <li><strong>Admission Forms:</strong> Student name, date of birth, parent/guardian names, address, phone numbers, email, previous school details, Aadhaar number (optional).</li>
          <li><strong>Contact Form:</strong> Name, email, phone number, and message content.</li>
          <li><strong>Website Usage:</strong> IP address, browser type, pages visited, and time spent (via analytics).</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Processing admission applications</li>
          <li>Communicating about school events, fees, and academic matters</li>
          <li>Responding to enquiries submitted via the contact form</li>
          <li>Improving our website and services</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>Our website uses essential cookies for theme preference (light/dark mode) and language selection. No third-party tracking cookies are used for advertising purposes.</p>

        <h2>4. Third-Party Services</h2>
        <ul>
          <li><strong>Google Maps:</strong> Embedded on the contact page to show school location. Subject to Google&apos;s privacy policy.</li>
          <li><strong>Google Fonts / Material Icons:</strong> Loaded for typography. Google may collect usage data per their privacy policy.</li>
        </ul>

        <h2>5. Data Retention</h2>
        <ul>
          <li>Admission data: Retained for the duration of the student&apos;s enrollment plus 5 years.</li>
          <li>Contact form submissions: Retained for 1 year.</li>
          <li>Website analytics: Aggregated data retained for 2 years.</li>
        </ul>

        <h2>6. Data Security</h2>
        <p>We implement reasonable security measures to protect personal information from unauthorized access, alteration, or disclosure. Physical records are stored in locked cabinets. Digital records are password-protected.</p>

        <h2>7. Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data by contacting us. We will respond within 30 days.</p>

        <h2>8. Contact for Privacy Queries</h2>
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 not-prose text-sm">
          <p><strong>Data Protection Contact:</strong></p>
          <p>Email: privacy@catalystschool.edu.in</p>
          <p>Phone: +91-98765-43210</p>
          <p>Address: Catalyst Public School, NH-28, Bettiah, West Champaran, Bihar — 845101</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
