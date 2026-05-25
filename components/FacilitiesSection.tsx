"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const facilities = {
  en: {
    eyebrow: "Campus Facilities",
    title: "Everything Your Child Needs",
    subtitle:
      "A complete learning ecosystem with safety, comfort, and inspiration at every corner.",
    items: [
      {
        icon: "directions_bus",
        title: "Transport",
        desc: "GPS-tracked buses with trained drivers and attendants on every route.",
        gradient: "from-teal-400 to-teal-600",
      },
      {
        icon: "menu_book",
        title: "Library",
        desc: "10,000+ books, magazines, and digital resources in a calm reading hall.",
        gradient: "from-champagne-300 to-champagne-400",
      },
      {
        icon: "biotech",
        title: "Science Labs",
        desc: "Fully-equipped Physics, Chemistry, and Biology labs for hands-on learning.",
        gradient: "from-sky-300 to-sky-400",
      },
      {
        icon: "computer",
        title: "Computer Lab",
        desc: "Modern systems with high-speed internet for digital literacy from day one.",
        gradient: "from-teal-400 to-sky-300",
      },
      {
        icon: "sports_soccer",
        title: "Sports Ground",
        desc: "Open playground for cricket, football, athletics, and indoor games hall.",
        gradient: "from-sky-300 to-teal-400",
      },
      {
        icon: "music_note",
        title: "Arts & Music",
        desc: "Dedicated studios for music, dance, painting, and creative expression.",
        gradient: "from-champagne-300 to-teal-500",
      },
      {
        icon: "restaurant",
        title: "Cafeteria",
        desc: "Hygienic kitchen serving fresh, balanced meals supervised by nutritionists.",
        gradient: "from-teal-400 to-champagne-300",
      },
      {
        icon: "medical_services",
        title: "Medical Room",
        desc: "On-campus infirmary with a trained nurse and tie-up with nearby hospitals.",
        gradient: "from-sky-300 to-champagne-400",
      },
      {
        icon: "videocam",
        title: "Smart Classes",
        desc: "Every classroom is equipped with a digital board and audio system.",
        gradient: "from-teal-500 to-sky-300",
      },
    ],
  },
  hi: {
    eyebrow: "परिसर सुविधाएँ",
    title: "आपके बच्चे की हर ज़रूरत",
    subtitle:
      "सुरक्षा, आराम और प्रेरणा के साथ एक संपूर्ण शिक्षण पारिस्थितिकी तंत्र।",
    items: [
      {
        icon: "directions_bus",
        title: "परिवहन",
        desc: "GPS-ट्रैक की गई बसें, प्रशिक्षित चालक एवं परिचारक हर मार्ग पर।",
        gradient: "from-teal-400 to-teal-600",
      },
      {
        icon: "menu_book",
        title: "पुस्तकालय",
        desc: "10,000+ पुस्तकें, पत्रिकाएँ और डिजिटल संसाधन शांत वाचनालय में।",
        gradient: "from-champagne-300 to-champagne-400",
      },
      {
        icon: "biotech",
        title: "विज्ञान प्रयोगशालाएँ",
        desc: "भौतिकी, रसायन और जीव विज्ञान की पूर्ण-सुसज्जित प्रयोगशालाएँ।",
        gradient: "from-sky-300 to-sky-400",
      },
      {
        icon: "computer",
        title: "कंप्यूटर लैब",
        desc: "हाई-स्पीड इंटरनेट के साथ आधुनिक सिस्टम — प्रथम दिन से डिजिटल साक्षरता।",
        gradient: "from-teal-400 to-sky-300",
      },
      {
        icon: "sports_soccer",
        title: "खेल मैदान",
        desc: "क्रिकेट, फुटबॉल, एथलेटिक्स और इनडोर खेल हॉल के लिए खुला मैदान।",
        gradient: "from-sky-300 to-teal-400",
      },
      {
        icon: "music_note",
        title: "कला और संगीत",
        desc: "संगीत, नृत्य, चित्रकला और रचनात्मक अभिव्यक्ति के लिए समर्पित स्टूडियो।",
        gradient: "from-champagne-300 to-teal-500",
      },
      {
        icon: "restaurant",
        title: "कैंटीन",
        desc: "पोषण विशेषज्ञों की निगरानी में ताजा, संतुलित भोजन।",
        gradient: "from-teal-400 to-champagne-300",
      },
      {
        icon: "medical_services",
        title: "चिकित्सा कक्ष",
        desc: "प्रशिक्षित नर्स वाला चिकित्सा कक्ष और निकटवर्ती अस्पतालों से समझौता।",
        gradient: "from-sky-300 to-champagne-400",
      },
      {
        icon: "videocam",
        title: "स्मार्ट कक्षाएँ",
        desc: "प्रत्येक कक्षा डिजिटल बोर्ड और ऑडियो सिस्टम से सुसज्जित।",
        gradient: "from-teal-500 to-sky-300",
      },
    ],
  },
};

export default function FacilitiesSection() {
  const { language } = useLanguage();
  const data = facilities[language];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-champagne-900 to-white dark:from-[#0f1410] dark:to-[#1a1f1b] relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-sky-900 text-sky-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="material-icons-round text-sm">domain</span>
            {data.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-black-700 dark:text-teal-800 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {data.items.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white dark:bg-teal-100/80 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-shadow border border-champagne-800/40 dark:border-teal-300/30 overflow-hidden"
            >
              {/* gradient blob top-right */}
              <div
                className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${f.gradient} opacity-15 group-hover:opacity-30 transition-opacity`}
              />

              <div
                className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-md mb-4`}
              >
                <span className="material-icons-round text-white text-3xl">
                  {f.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-teal-500 transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-black-700 dark:text-teal-800 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
