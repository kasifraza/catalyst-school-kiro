"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = {
  en: [
    {
      name: "Rajesh Kumar",
      role: "Parent",
      text: "Catalyst Public School has transformed my child's learning experience. The teachers are dedicated and the environment is nurturing.",
      avatar: "https://i.pravatar.cc/100?img=11",
    },
    {
      name: "Priya Singh",
      role: "Alumni (Batch 2020)",
      text: "The values and education I received here shaped my career. I'm now pursuing engineering at a top university.",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Amit Sharma",
      role: "Parent",
      text: "The school's focus on both academics and extracurricular activities ensures holistic development of students.",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Sunita Devi",
      role: "Parent",
      text: "Safe environment, excellent teachers, and modern facilities. Best school in West Champaran without a doubt.",
      avatar: "https://i.pravatar.cc/100?img=9",
    },
  ],
  hi: [
    {
      name: "राजेश कुमार",
      role: "अभिभावक",
      text: "कैटालिस्ट पब्लिक स्कूल ने मेरे बच्चे के सीखने के अनुभव को बदल दिया है। शिक्षक समर्पित हैं और वातावरण पोषणकारी है।",
      avatar: "https://i.pravatar.cc/100?img=11",
    },
    {
      name: "प्रिया सिंह",
      role: "पूर्व छात्रा (बैच 2020)",
      text: "यहाँ मिले मूल्यों और शिक्षा ने मेरे करियर को आकार दिया। मैं अब एक शीर्ष विश्वविद्यालय में इंजीनियरिंग कर रही हूँ।",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "अमित शर्मा",
      role: "अभिभावक",
      text: "स्कूल का शिक्षा और पाठ्येतर गतिविधियों दोनों पर ध्यान छात्रों के समग्र विकास को सुनिश्चित करता है।",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "सुनीता देवी",
      role: "अभिभावक",
      text: "सुरक्षित वातावरण, उत्कृष्ट शिक्षक और आधुनिक सुविधाएं। पश्चिम चंपारण का सबसे अच्छा स्कूल।",
      avatar: "https://i.pravatar.cc/100?img=9",
    },
  ],
};

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { language, t } = useLanguage();

  const items = testimonials[language];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-champagne-900 dark:from-[#0f1410] dark:to-[#1a1f1b] relative overflow-hidden">
      <div className="absolute top-20 right-10 opacity-5">
        <span className="material-icons-round text-[200px] text-teal">
          format_quote
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-sky-900 text-sky-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="material-icons-round text-sm">
              rate_review
            </span>
            {t("Testimonials", "प्रशंसापत्र")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t("What Parents Say", "अभिभावक क्या कहते हैं")}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-teal-100/80 rounded-3xl p-10 shadow-xl border border-champagne-800/50 dark:border-teal-300/30 text-center"
          >
            <span className="material-icons-round text-champagne-400 text-5xl mb-6">
              format_quote
            </span>
            <p className="text-xl text-black-600 dark:text-teal-800 leading-relaxed mb-8 italic">
              &ldquo;{items[active].text}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <Image
                src={items[active].avatar}
                alt={`${items[active].name} - testimonial at Catalyst Public School`}
                width={56}
                height={56}
                sizes="56px"
                className="rounded-full object-cover border-2 border-teal-500"
              />
              <div className="text-left">
                <p className="font-bold text-black dark:text-white">{items[active].name}</p>
                <p className="text-black-700 dark:text-teal-800 text-sm">{items[active].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-teal-500 w-8"
                    : "bg-khaki-600 hover:bg-teal-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
