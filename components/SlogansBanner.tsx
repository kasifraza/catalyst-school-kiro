"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const slogans = {
  en: [
    {
      text: "Where curiosity meets character.",
      author: "Our Promise",
      icon: "auto_stories",
    },
    {
      text: "Roots to grow. Wings to fly.",
      author: "Our Vision",
      icon: "flight_takeoff",
    },
    {
      text: "Today's learners, tomorrow's leaders.",
      author: "Our Mission",
      icon: "rocket_launch",
    },
    {
      text: "Excellence is a habit, not an accident.",
      author: "Our Values",
      icon: "workspace_premium",
    },
  ],
  hi: [
    {
      text: "जहाँ जिज्ञासा से चरित्र मिलता है।",
      author: "हमारा वादा",
      icon: "auto_stories",
    },
    {
      text: "जड़ें भी, पंख भी।",
      author: "हमारी दृष्टि",
      icon: "flight_takeoff",
    },
    {
      text: "आज के विद्यार्थी, कल के नेता।",
      author: "हमारा लक्ष्य",
      icon: "rocket_launch",
    },
    {
      text: "उत्कृष्टता आदत है, संयोग नहीं।",
      author: "हमारे मूल्य",
      icon: "workspace_premium",
    },
  ],
};

export default function SlogansBanner() {
  const { language } = useLanguage();
  const list = slogans[language];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % list.length);
    }, 4500);
    return () => clearInterval(id);
  }, [list.length]);

  const current = list[index];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-teal-100">
      {/* Graffiti / texture background — built from CSS gradients & svg
          patterns (no external images required). */}
      <div className="absolute inset-0">
        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300" />

        {/* large diagonal sweep */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(195,144,69,0.5) 0%, transparent 30%, transparent 70%, rgba(238,224,203,0.4) 100%)",
          }}
        />

        {/* graffiti dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(238,224,203,0.7) 1px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* diagonal stripes */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 2px, transparent 2px 18px)",
          }}
        />

        {/* large blurred orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-champagne-300/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-400/30 blur-3xl" />

        {/* graffiti splash svg */}
        <svg
          className="absolute top-10 right-10 opacity-15 hidden md:block"
          width="180"
          height="180"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M 100 10 Q 130 40 160 30 Q 180 60 170 100 Q 190 130 150 150 Q 140 180 100 170 Q 60 190 40 160 Q 10 140 30 100 Q 5 70 40 50 Q 60 20 100 10 Z"
            fill="#fff"
          />
        </svg>

        {/* splatter dots */}
        <div className="absolute bottom-20 left-12 hidden sm:block">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-champagne-400/50" />
            <div className="w-5 h-5 rounded-full bg-white/40" />
            <div className="w-2 h-2 rounded-full bg-sky-300/60" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Big oversized quote mark */}
        <span
          className="material-icons-round absolute -top-2 left-1/2 -translate-x-1/2 text-white/15 select-none pointer-events-none"
          style={{ fontSize: 180 }}
        >
          format_quote
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
              <span className="material-icons-round text-white text-3xl">
                {current.icon}
              </span>
            </div>

            <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg max-w-3xl mx-auto">
              &ldquo;{current.text}&rdquo;
            </p>

            <p className="mt-6 text-sm sm:text-base font-semibold tracking-[0.3em] uppercase text-champagne-500 drop-shadow">
              — {current.author}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-10">
          {list.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slogan ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
