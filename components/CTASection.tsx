"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
          alt="Catalyst Public School students at graduation ceremony"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-200/95 to-teal-300/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t(
                "Admissions Open for 2025-26",
                "2025-26 के लिए प्रवेश खुले हैं"
              )}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t(
                "Give your child the gift of quality education. Join the Catalyst family and watch them grow into confident, capable individuals.",
                "अपने बच्चे को गुणवत्तापूर्ण शिक्षा का उपहार दें। कैटालिस्ट परिवार से जुड़ें।"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/admissions"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-teal-300 rounded-full font-bold text-lg shadow-xl flex items-center justify-center gap-2 hover:shadow-2xl transition-shadow"
              >
                <span className="material-icons-round">description</span>
                {t("Apply Now", "अभी आवेदन करें")}
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <span className="material-icons-round">call</span>
                {t("Contact Us", "संपर्क करें")}
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t("Quick Enquiry", "त्वरित पूछताछ")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/90">
                  <span className="material-icons-round text-champagne-400">
                    phone
                  </span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <span className="material-icons-round text-champagne-400">
                    email
                  </span>
                  <span>admissions@catalystschool.edu.in</span>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <span className="material-icons-round text-champagne-400">
                    schedule
                  </span>
                  <span>{t("Mon - Sat: 8:00 AM - 4:00 PM", "सोम - शनि: 8:00 AM - 4:00 PM")}</span>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <span className="material-icons-round text-champagne-400">
                    location_on
                  </span>
                  <span>{t("West Champaran, Bihar - 845101", "पश्चिम चंपारण, बिहार - 845101")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
