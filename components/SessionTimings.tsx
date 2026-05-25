"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const schedule = {
  en: {
    eyebrow: "Daily Routine",
    title: "Session Timings",
    subtitle: "A balanced day designed for learning, play, and growth.",
    summer: { label: "Summer (Apr–Sep)", start: "7:30 AM", end: "1:30 PM" },
    winter: { label: "Winter (Oct–Mar)", start: "8:30 AM", end: "2:30 PM" },
    saturday: { label: "Saturday", start: "8:00 AM", end: "12:00 PM" },
    blocks: [
      {
        time: "7:30 — 8:00",
        label: "Morning assembly",
        icon: "campaign",
        color: "bg-teal-500",
      },
      {
        time: "8:00 — 10:00",
        label: "Core academic periods",
        icon: "menu_book",
        color: "bg-sky-300",
      },
      {
        time: "10:00 — 10:30",
        label: "Recess & breakfast",
        icon: "lunch_dining",
        color: "bg-champagne-300",
      },
      {
        time: "10:30 — 12:30",
        label: "Subject periods",
        icon: "edit_note",
        color: "bg-teal-500",
      },
      {
        time: "12:30 — 1:00",
        label: "Lunch break",
        icon: "restaurant",
        color: "bg-champagne-300",
      },
      {
        time: "1:00 — 1:30",
        label: "Activities / sports",
        icon: "sports_soccer",
        color: "bg-sky-300",
      },
    ],
  },
  hi: {
    eyebrow: "दैनिक दिनचर्या",
    title: "सत्र का समय",
    subtitle: "शिक्षा, खेल और विकास के लिए डिज़ाइन किया गया एक संतुलित दिन।",
    summer: {
      label: "ग्रीष्म (अप्रै–सित)",
      start: "7:30 बजे",
      end: "1:30 बजे",
    },
    winter: { label: "शीत (अक्ट–मार्च)", start: "8:30 बजे", end: "2:30 बजे" },
    saturday: { label: "शनिवार", start: "8:00 बजे", end: "12:00 बजे" },
    blocks: [
      {
        time: "7:30 — 8:00",
        label: "प्रातः सभा",
        icon: "campaign",
        color: "bg-teal-500",
      },
      {
        time: "8:00 — 10:00",
        label: "मुख्य अकादमिक काल",
        icon: "menu_book",
        color: "bg-sky-300",
      },
      {
        time: "10:00 — 10:30",
        label: "अल्पाहार",
        icon: "lunch_dining",
        color: "bg-champagne-300",
      },
      {
        time: "10:30 — 12:30",
        label: "विषय कक्षाएं",
        icon: "edit_note",
        color: "bg-teal-500",
      },
      {
        time: "12:30 — 1:00",
        label: "मध्याह्न भोजन",
        icon: "restaurant",
        color: "bg-champagne-300",
      },
      {
        time: "1:00 — 1:30",
        label: "गतिविधियाँ / खेल",
        icon: "sports_soccer",
        color: "bg-sky-300",
      },
    ],
  },
};

export default function SessionTimings() {
  const { language } = useLanguage();
  const data = schedule[language];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-teal-200 via-teal-300 to-teal-200 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="material-icons-round text-sm">schedule</span>
            {data.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: timing summary cards */}
          <div className="space-y-4">
            {[data.summer, data.winter, data.saturday].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="material-icons-round text-white">
                      {i === 0
                        ? "wb_sunny"
                        : i === 1
                        ? "ac_unit"
                        : "weekend"}
                    </span>
                  </div>
                  <p className="font-semibold text-white truncate">{s.label}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                    {s.start}
                  </p>
                  <p className="text-xs text-white/70">to {s.end}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: timeline of daily blocks */}
          <div className="relative">
            <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-0.5 bg-white/30" />
            <ul className="space-y-4">
              {data.blocks.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex items-start gap-4 sm:gap-5"
                >
                  <div
                    className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${b.color} flex items-center justify-center shadow-lg shrink-0`}
                  >
                    <span className="material-icons-round text-white text-lg sm:text-xl">
                      {b.icon}
                    </span>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                    <p className="text-xs sm:text-sm font-semibold text-white/80">
                      {b.time}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      {b.label}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
