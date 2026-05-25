"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const features = {
  en: [
    {
      icon: "menu_book",
      title: "Quality Education",
      desc: "CBSE-aligned curriculum with modern teaching methodologies and experienced faculty.",
    },
    {
      icon: "groups",
      title: "Holistic Development",
      desc: "Focus on academics, sports, arts, and character building for well-rounded growth.",
    },
    {
      icon: "computer",
      title: "Smart Classrooms",
      desc: "Technology-enabled learning with digital boards and computer labs.",
    },
    {
      icon: "sports_soccer",
      title: "Sports & Activities",
      desc: "Extensive sports facilities including cricket, football, and indoor games.",
    },
    {
      icon: "local_library",
      title: "Rich Library",
      desc: "Well-stocked library with thousands of books, journals, and digital resources.",
    },
    {
      icon: "security",
      title: "Safe Environment",
      desc: "CCTV monitored campus with trained security staff ensuring student safety.",
    },
  ],
  hi: [
    {
      icon: "menu_book",
      title: "गुणवत्तापूर्ण शिक्षा",
      desc: "आधुनिक शिक्षण पद्धतियों और अनुभवी शिक्षकों के साथ CBSE-संरेखित पाठ्यक्रम।",
    },
    {
      icon: "groups",
      title: "समग्र विकास",
      desc: "सर्वांगीण विकास के लिए शिक्षा, खेल, कला और चरित्र निर्माण पर ध्यान।",
    },
    {
      icon: "computer",
      title: "स्मार्ट कक्षाएं",
      desc: "डिजिटल बोर्ड और कंप्यूटर लैब के साथ प्रौद्योगिकी-सक्षम शिक्षा।",
    },
    {
      icon: "sports_soccer",
      title: "खेल और गतिविधियाँ",
      desc: "क्रिकेट, फुटबॉल और इनडोर खेलों सहित व्यापक खेल सुविधाएं।",
    },
    {
      icon: "local_library",
      title: "समृद्ध पुस्तकालय",
      desc: "हजारों पुस्तकों, पत्रिकाओं और डिजिटल संसाधनों से सुसज्जित पुस्तकालय।",
    },
    {
      icon: "security",
      title: "सुरक्षित वातावरण",
      desc: "प्रशिक्षित सुरक्षा कर्मचारियों के साथ CCTV निगरानी वाला परिसर।",
    },
  ],
};

export default function FeaturesSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-champagne-900 to-white dark:from-[#0f1410] dark:to-[#1a1f1b] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-900/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-teal-900/50 text-teal-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="material-icons-round text-sm">star</span>
            {t("Why Choose Us", "हमें क्यों चुनें")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t("Excellence in Education", "शिक्षा में उत्कृष्टता")}
          </h2>
          <p className="text-lg text-black-700 dark:text-teal-800 max-w-2xl mx-auto">
            {t(
              "We provide a nurturing environment where every student can discover their potential and achieve greatness.",
              "हम एक पोषण वातावरण प्रदान करते हैं जहाँ हर छात्र अपनी क्षमता खोज सकता है।"
            )}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features[language].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white dark:bg-teal-100/80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-champagne-800/50 dark:border-teal-300/30"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
              >
                <span className="material-icons-round text-white text-3xl">
                  {feature.icon}
                </span>
              </motion.div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-teal-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-black-700 dark:text-teal-800 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
