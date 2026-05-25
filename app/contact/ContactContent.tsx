"use client";

import { useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import { useLanguage } from "@/context/LanguageContext";

const subscribeNoop = () => () => {};
const getIsOpen = () => {
  const now = new Date();
  const day = now.getDay();
  const time = now.getHours() * 60 + now.getMinutes();
  return day >= 1 && day <= 6 && time >= 480 && time < 960;
};
const getServerIsOpen = () => false;

function OfficeStatus() {
  const { t } = useLanguage();
  const isOpen = useSyncExternalStore(subscribeNoop, getIsOpen, getServerIsOpen);

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
      <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`} />
      {isOpen ? t("Open Now", "अभी खुला") : t("Closed", "बंद")}
    </span>
  );
}

const departments = [
  { icon: "school", name: { en: "Principal Office", hi: "प्रधानाचार्य कार्यालय" }, phone: "+91 98765 43210", email: "principal@catalystschool.edu.in" },
  { icon: "how_to_reg", name: { en: "Admissions", hi: "प्रवेश" }, phone: "+91 98765 43211", email: "admissions@catalystschool.edu.in" },
  { icon: "account_balance_wallet", name: { en: "Accounts", hi: "लेखा" }, phone: "+91 98765 43212", email: "accounts@catalystschool.edu.in" },
  { icon: "directions_bus", name: { en: "Transport", hi: "परिवहन" }, phone: "+91 98765 43213", email: "transport@catalystschool.edu.in" },
];

export default function ContactContent() {
  const { t, language } = useLanguage();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" alt="Contact Catalyst Public School" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-200/80 to-teal-100/90" />
          <div className="relative text-center text-white z-10">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black mb-4">{t("Contact Us", "संपर्क करें")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl text-champagne-500">{t("We'd Love to Hear From You", "हम आपसे सुनना चाहेंगे")}</motion.p>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-20 bg-champagne-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">{t("Department Contacts", "विभागीय संपर्क")}</h2>
              <OfficeStatus />
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg border border-champagne-800/50 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-4">
                    <span className="material-icons-round text-white text-2xl">{dept.icon}</span>
                  </div>
                  <h4 className="font-bold text-black mb-3">{dept.name[language]}</h4>
                  <a href={`tel:${dept.phone.replace(/\s/g, "")}`} className="block text-sm text-black-700 hover:text-teal-500 mb-1">{dept.phone}</a>
                  <a href={`mailto:${dept.email}`} className="block text-xs text-black-700 hover:text-teal-500 break-all">{dept.email}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions + Office Hours */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-black mb-6">{t("Quick Connect", "त्वरित संपर्क")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="tel:+919876543210" className="flex flex-col items-center gap-2 p-5 bg-green-50 rounded-2xl border border-green-200 hover:shadow-lg transition-shadow">
                  <span className="material-icons-round text-green-600 text-3xl">call</span>
                  <span className="font-semibold text-green-700 text-sm">{t("Call Now", "कॉल करें")}</span>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-5 bg-emerald-50 rounded-2xl border border-emerald-200 hover:shadow-lg transition-shadow">
                  <span className="material-icons-round text-emerald-600 text-3xl">chat</span>
                  <span className="font-semibold text-emerald-700 text-sm">WhatsApp</span>
                </a>
                <a href="mailto:info@catalystschool.edu.in" className="flex flex-col items-center gap-2 p-5 bg-blue-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow">
                  <span className="material-icons-round text-blue-600 text-3xl">email</span>
                  <span className="font-semibold text-blue-700 text-sm">{t("Email", "ईमेल")}</span>
                </a>
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-black mb-6">{t("Office Hours", "कार्यालय समय")}</h3>
              <div className="bg-champagne-900 rounded-2xl p-6 border border-champagne-800/50">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { day: t("Monday – Friday", "सोमवार – शुक्रवार"), time: "8:00 AM – 4:00 PM" },
                      { day: t("Saturday", "शनिवार"), time: "8:00 AM – 1:00 PM" },
                      { day: t("Sunday", "रविवार"), time: t("Closed", "बंद") },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-champagne-800/30 last:border-0">
                        <td className="py-3 font-medium text-black">{row.day}</td>
                        <td className="py-3 text-right text-black-700">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form + Map */}
        <section className="py-24 bg-champagne-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Map */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold text-black mb-6">{t("Find Us", "हमें खोजें")}</h3>
                <div className="rounded-2xl overflow-hidden shadow-lg h-80 border border-champagne-800/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114587.95!2d84.3!3d26.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993f1b0c0000001%3A0x1234567890abcdef!2sWest%20Champaran%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Catalyst Public School Location - West Champaran, Bihar"
                  />
                </div>
                <p className="mt-4 text-black-700 text-sm flex items-start gap-2">
                  <span className="material-icons-round text-teal-500 text-lg shrink-0">location_on</span>
                  {t("Catalyst Public School, West Champaran, Bihar - 845101, India", "कैटालिस्ट पब्लिक स्कूल, पश्चिम चंपारण, बिहार - 845101, भारत")}
                </p>
              </motion.div>

              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 bg-white rounded-3xl shadow-lg">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="material-icons-round text-green-600 text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">{t("Message Sent!", "संदेश भेजा गया!")}</h3>
                    <p className="text-black-700 mb-6">{t("We'll get back to you soon.", "हम जल्द ही आपसे संपर्क करेंगे।")}</p>
                    <button onClick={() => setSent(false)} className="px-6 py-3 bg-teal-500 text-white rounded-full font-semibold">{t("Send Another", "एक और भेजें")}</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 shadow-lg border border-champagne-800/50">
                    <h3 className="text-2xl font-bold text-black mb-6">{t("Send us a Message", "हमें संदेश भेजें")}</h3>
                    {/* Honeypot */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
                    </div>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-black-600 mb-2">{t("Your Name *", "आपका नाम *")}</label>
                        <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-khaki-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all bg-champagne-900" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black-600 mb-2">{t("Email *", "ईमेल *")}</label>
                        <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-khaki-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all bg-champagne-900" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black-600 mb-2">{t("Subject *", "विषय *")}</label>
                        <input type="text" name="subject" required className="w-full px-4 py-3 rounded-xl border border-khaki-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all bg-champagne-900" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black-600 mb-2">{t("Message *", "संदेश *")}</label>
                        <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-khaki-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all bg-champagne-900 resize-none" />
                      </div>
                      <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 disabled:opacity-60">
                        <span className="material-icons-round">{loading ? "hourglass_empty" : "send"}</span>
                        {loading ? t("Sending...", "भेज रहे हैं...") : t("Send Message", "संदेश भेजें")}
                      </motion.button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyApplyCTA />
    </>
  );
}
