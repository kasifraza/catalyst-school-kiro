"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white dark:bg-[#0f1410] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                alt="Catalyst Public School students studying in classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-300/30 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white dark:bg-teal-100/80 rounded-2xl p-6 shadow-xl border border-champagne-800 dark:border-teal-300/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-champagne-300 to-champagne-500 flex items-center justify-center">
                  <span className="material-icons-round text-white text-2xl">
                    workspace_premium
                  </span>
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white text-lg">
                    {t("Since 2009", "2009 से")}
                  </p>
                  <p className="text-black-700 dark:text-teal-800 text-sm">
                    {t("Serving Education", "शिक्षा की सेवा")}
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-900/50 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-champagne-800 text-champagne-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="material-icons-round text-sm">info</span>
              {t("About Our School", "हमारे विद्यालय के बारे में")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              {t(
                "A Legacy of Academic Excellence",
                "शैक्षणिक उत्कृष्टता की विरासत"
              )}
            </h2>
            <p className="text-lg text-black-700 dark:text-teal-800 mb-6 leading-relaxed">
              {t(
                "Catalyst Public School, located in the heart of West Champaran, Bihar, has been a beacon of quality education since 2009. We believe in nurturing not just academic excellence but also moral values, creativity, and leadership skills.",
                "कैटालिस्ट पब्लिक स्कूल, पश्चिम चंपारण, बिहार के हृदय में स्थित, 2009 से गुणवत्तापूर्ण शिक्षा का प्रतीक रहा है। हम न केवल शैक्षणिक उत्कृष्टता बल्कि नैतिक मूल्यों, रचनात्मकता और नेतृत्व कौशल को भी पोषित करने में विश्वास करते हैं।"
              )}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "verified", text: t("CBSE Affiliated", "CBSE संबद्ध") },
                { icon: "diversity_3", text: t("Inclusive Education", "समावेशी शिक्षा") },
                { icon: "psychology", text: t("Modern Pedagogy", "आधुनिक शिक्षाशास्त्र") },
                { icon: "eco", text: t("Green Campus", "हरित परिसर") },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="material-icons-round text-teal-500 text-xl">
                    {item.icon}
                  </span>
                  <span className="text-black-600 dark:text-teal-800 font-medium text-sm">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-400 transition-colors shadow-lg"
            >
              {t("Learn More About Us", "हमारे बारे में और जानें")}
              <span className="material-icons-round">arrow_forward</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
