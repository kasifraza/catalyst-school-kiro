"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdmissionProcess from "@/components/AdmissionProcess";
import FAQ from "@/components/FAQ";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import { useLanguage } from "@/context/LanguageContext";

const faqItems = [
  { question: "What is the admission process for new students?", answer: "The admission process involves filling the online enquiry form, submitting required documents, an informal interaction with the child and parents, and finally admission confirmation upon availability of seats." },
  { question: "What is the age criteria for Nursery admission?", answer: "The child must be at least 3 years old as of 31st March of the academic year for Nursery admission. For LKG, the minimum age is 4 years, and for UKG, it is 5 years." },
  { question: "What documents are required for admission?", answer: "Birth certificate, Aadhaar card (child & parents), previous school report card, transfer certificate (if applicable), passport-size photographs, and address proof." },
  { question: "Is transport facility available?", answer: "Yes, we provide bus transport covering major areas of West Champaran including Bettiah, Narkatiaganj, Bagaha, and surrounding villages. Routes and fees are available at the office." },
  { question: "What are the school timings?", answer: "School timings are 8:00 AM to 2:30 PM for classes 1-12, and 8:30 AM to 12:30 PM for pre-primary (Nursery, LKG, UKG). Saturday is a half-day." },
  { question: "Does the school offer scholarships?", answer: "Yes, merit-based scholarships are available for students scoring above 90% in the previous class. Economically weaker section (EWS) scholarships are also available under RTE provisions." },
  { question: "What streams are available in Class 11?", answer: "We offer Science (PCM and PCB) and Commerce streams in Class 11-12. Subjects include Physics, Chemistry, Mathematics, Biology, Computer Science, Accountancy, and Business Studies." },
  { question: "Is mid-session admission possible?", answer: "Mid-session admissions are considered on a case-by-case basis subject to seat availability. A transfer certificate from the previous school is mandatory." },
  { question: "What is the fee payment schedule?", answer: "Fees can be paid quarterly (April, July, October, January). We also offer annual and half-yearly payment options with applicable discounts." },
  { question: "Are there any entrance tests?", answer: "For classes 2 and above, a basic assessment in English, Hindi, and Mathematics is conducted to understand the child's academic level. It is not eliminatory but diagnostic." },
  { question: "What co-curricular activities are offered?", answer: "We offer sports (cricket, football, athletics), arts (music, dance, drama), clubs (science, eco, literary), and participation in olympiads and inter-school competitions." },
  { question: "How can I track my child's progress?", answer: "Parents receive regular progress reports, can attend parent-teacher meetings held quarterly, and have access to the school diary for daily communication with teachers." },
  { question: "What safety measures are in place?", answer: "The campus has CCTV surveillance, trained security staff, fire safety equipment, and a strict visitor management system. All staff undergo background verification." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function AdmissionForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "", dob: "", gender: "", classApplied: "",
    fatherName: "", motherName: "", phone: "", email: "",
    address: "", previousSchool: "", category: "", aadhar: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <span className="material-icons-round text-green-600 text-5xl">check_circle</span>
        </div>
        <h3 className="text-3xl font-bold text-black mb-4">{t("Application Submitted!", "आवेदन जमा हो गया!")}</h3>
        <p className="text-black-700 text-lg mb-6">{t("Thank you for applying. We will contact you soon.", "आवेदन करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।")}</p>
        <button onClick={() => setSubmitted(false)} className="px-6 py-3 bg-teal-500 text-white rounded-full font-semibold">{t("Submit Another", "एक और जमा करें")}</button>
      </motion.div>
    );
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-khaki-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all bg-champagne-900";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-champagne-800/50">
        <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
          <span className="material-icons-round text-teal-500">person</span>
          {t("Student Information", "छात्र की जानकारी")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Student Full Name *", "छात्र का पूरा नाम *")}</label><input type="text" name="studentName" required value={formData.studentName} onChange={handleChange} className={inputCls} /></div>
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Date of Birth *", "जन्म तिथि *")}</label><input type="date" name="dob" required value={formData.dob} onChange={handleChange} className={inputCls} /></div>
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Gender *", "लिंग *")}</label><select name="gender" required value={formData.gender} onChange={handleChange} className={inputCls}><option value="">{t("Select", "चुनें")}</option><option value="male">{t("Male", "पुरुष")}</option><option value="female">{t("Female", "महिला")}</option><option value="other">{t("Other", "अन्य")}</option></select></div>
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Class Applied For *", "किस कक्षा के लिए *")}</label><select name="classApplied" required value={formData.classApplied} onChange={handleChange} className={inputCls}><option value="">{t("Select Class", "कक्षा चुनें")}</option><option value="nursery">Nursery</option><option value="lkg">LKG</option><option value="ukg">UKG</option>{[...Array(12)].map((_, i) => (<option key={i} value={`class-${i + 1}`}>{t(`Class ${i + 1}`, `कक्षा ${i + 1}`)}</option>))}</select></div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-champagne-800/50">
        <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
          <span className="material-icons-round text-teal-500">family_restroom</span>
          {t("Parent/Guardian Information", "अभिभावक की जानकारी")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Father's Name *", "पिता का नाम *")}</label><input type="text" name="fatherName" required value={formData.fatherName} onChange={handleChange} className={inputCls} /></div>
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Mother's Name *", "माता का नाम *")}</label><input type="text" name="motherName" required value={formData.motherName} onChange={handleChange} className={inputCls} /></div>
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Phone Number *", "फोन नंबर *")}</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputCls} placeholder="+91 XXXXX XXXXX" /></div>
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Email Address", "ईमेल पता")}</label><input type="email" name="email" value={formData.email} onChange={handleChange} className={inputCls} /></div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-champagne-800/50">
        <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
          <span className="material-icons-round text-teal-500">description</span>
          {t("Additional Information", "अतिरिक्त जानकारी")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2"><label className="block text-sm font-medium text-black-600 mb-2">{t("Residential Address *", "आवासीय पता *")}</label><textarea name="address" required value={formData.address} onChange={handleChange} rows={3} className={`${inputCls} resize-none`} /></div>
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Previous School", "पिछला विद्यालय")}</label><input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange} className={inputCls} /></div>
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Category", "श्रेणी")}</label><select name="category" value={formData.category} onChange={handleChange} className={inputCls}><option value="">{t("Select", "चुनें")}</option><option value="general">General</option><option value="obc">OBC</option><option value="sc">SC</option><option value="st">ST</option><option value="ews">EWS</option></select></div>
          <div><label className="block text-sm font-medium text-black-600 mb-2">{t("Aadhar Number", "आधार नंबर")}</label><input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} maxLength={12} className={inputCls} /></div>
        </div>
      </div>
      <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center gap-3 disabled:opacity-60">
        <span className="material-icons-round">{loading ? "hourglass_empty" : "send"}</span>
        {loading ? t("Submitting...", "जमा हो रहा है...") : t("Submit Application", "आवेदन जमा करें")}
      </motion.button>
    </form>
  );
}

export default function AdmissionsContent() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        {/* FAQ JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80" alt="Catalyst Public School students during admissions session" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-200/80 to-teal-100/90" />
          <div className="relative text-center text-white z-10">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black mb-4">{t("Admissions", "प्रवेश")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl text-champagne-500">{t("Session 2025-26 | Admissions Open", "सत्र 2025-26 | प्रवेश खुले हैं")}</motion.p>
          </div>
        </section>

        {/* At-a-Glance Card */}
        <section className="py-16 bg-champagne-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-xl border border-champagne-800/50">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="material-icons-round text-teal-500">info</span>
                {t("Admissions At-a-Glance", "प्रवेश एक नज़र में")}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-champagne-900 rounded-xl p-4 border border-champagne-800/30">
                  <p className="text-sm text-black-700 mb-1">{t("Registration Open", "पंजीकरण खुला")}</p>
                  <p className="font-bold text-black">{t("1 January – 31 March 2025", "1 जनवरी – 31 मार्च 2025")}</p>
                </div>
                <div className="bg-champagne-900 rounded-xl p-4 border border-champagne-800/30">
                  <p className="text-sm text-black-700 mb-1">{t("Classes Available", "उपलब्ध कक्षाएं")}</p>
                  <p className="font-bold text-black">Nursery – Class XII</p>
                </div>
                <div className="bg-champagne-900 rounded-xl p-4 border border-champagne-800/30">
                  <p className="text-sm text-black-700 mb-1">{t("Fee Starts At", "शुल्क शुरू")}</p>
                  <p className="font-bold text-black">₹18,000 / {t("year", "वर्ष")}</p>
                </div>
                <div className="bg-champagne-900 rounded-xl p-4 border border-champagne-800/30">
                  <p className="text-sm text-black-700 mb-1">{t("Last Date", "अंतिम तिथि")}</p>
                  <p className="font-bold text-black">31 March 2025</p>
                </div>
                <div className="bg-champagne-900 rounded-xl p-4 border border-champagne-800/30 sm:col-span-2 lg:col-span-2">
                  <p className="text-sm text-black-700 mb-2">{t("Age Criteria (as on 31 March)", "आयु मानदंड (31 मार्च तक)")}</p>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <span className="font-bold text-black">Nursery</span><span className="text-black-700">→</span><span>3+ {t("years", "वर्ष")}</span>
                    <span className="font-bold text-black">LKG</span><span className="text-black-700">→</span><span>4+ {t("years", "वर्ष")}</span>
                    <span className="font-bold text-black">UKG</span><span className="text-black-700">→</span><span>5+ {t("years", "वर्ष")}</span>
                    <span className="font-bold text-black">Class 1</span><span className="text-black-700">→</span><span>6+ {t("years", "वर्ष")}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Admission Process Component (DO NOT MODIFY) */}
        <AdmissionProcess />

        {/* Fee Summary + Dates Timeline */}
        <section className="py-20 bg-champagne-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
            {/* Fee Summary */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg border border-champagne-800/50">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="material-icons-round text-teal-500">payments</span>
                {t("Fee Summary", "शुल्क सारांश")}
              </h3>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between border-b border-champagne-800/30 pb-2"><span className="text-black-700">Nursery – UKG</span><span className="font-semibold text-black">₹18,000 – ₹22,000</span></div>
                <div className="flex justify-between border-b border-champagne-800/30 pb-2"><span className="text-black-700">Class 1 – 5</span><span className="font-semibold text-black">₹24,000 – ₹30,000</span></div>
                <div className="flex justify-between border-b border-champagne-800/30 pb-2"><span className="text-black-700">Class 6 – 8</span><span className="font-semibold text-black">₹32,000 – ₹36,000</span></div>
                <div className="flex justify-between border-b border-champagne-800/30 pb-2"><span className="text-black-700">Class 9 – 10</span><span className="font-semibold text-black">₹38,000 – ₹42,000</span></div>
                <div className="flex justify-between"><span className="text-black-700">Class 11 – 12</span><span className="font-semibold text-black">₹44,000 – ₹48,000</span></div>
              </div>
              <Link href="/admissions/fee-structure" className="inline-flex items-center gap-1 text-teal-500 font-semibold text-sm hover:underline">
                {t("View detailed fee structure", "विस्तृत शुल्क संरचना देखें")}
                <span className="material-icons-round text-sm">arrow_forward</span>
              </Link>
            </motion.div>

            {/* Dates Timeline */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg border border-champagne-800/50">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="material-icons-round text-teal-500">event</span>
                {t("Important Dates", "महत्वपूर्ण तिथियाँ")}
              </h3>
              <div className="space-y-4">
                {[
                  { date: "1 Jan 2025", event: t("Registration opens", "पंजीकरण शुरू") },
                  { date: "15 Feb 2025", event: t("Interaction rounds begin", "बातचीत दौर शुरू") },
                  { date: "31 Mar 2025", event: t("Last date for applications", "आवेदन की अंतिम तिथि") },
                  { date: "1 Apr 2025", event: t("Session begins", "सत्र प्रारंभ") },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-teal-500 shrink-0" />
                    <div>
                      <p className="font-semibold text-black text-sm">{item.date}</p>
                      <p className="text-black-700 text-sm">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brochure CTA */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-teal-200 to-teal-300 rounded-2xl p-8 text-white">
              <span className="material-icons-round text-4xl mb-3 block">picture_as_pdf</span>
              <h3 className="text-2xl font-bold mb-2">{t("Download Admission Brochure", "प्रवेश ब्रोशर डाउनलोड करें")}</h3>
              <p className="text-white/90 mb-4 text-sm">{t("Get complete details about curriculum, fees, and facilities", "पाठ्यक्रम, शुल्क और सुविधाओं के बारे में पूरी जानकारी प्राप्त करें")}</p>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-teal-300 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow">
                <span className="material-icons-round">download</span>
                {t("Download PDF", "PDF डाउनलोड करें")}
              </a>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-champagne-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">{t("Frequently Asked Questions", "अक्सर पूछे जाने वाले प्रश्न")}</h2>
              <p className="text-black-700 text-lg">{t("Find answers to common admission queries", "सामान्य प्रवेश प्रश्नों के उत्तर पाएं")}</p>
            </motion.div>
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* Admission Form */}
        <section className="py-24 bg-gradient-to-b from-champagne-900 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">{t("Admission Application Form", "प्रवेश आवेदन पत्र")}</h2>
              <p className="text-black-700 text-lg">{t("Fill in the details below to apply for admission", "प्रवेश के लिए नीचे विवरण भरें")}</p>
            </motion.div>
            <AdmissionForm />
          </div>
        </section>
      </main>
      <Footer />
      <StickyApplyCTA />
    </>
  );
}
