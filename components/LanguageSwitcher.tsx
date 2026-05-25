"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher({
  isScrolled,
}: {
  isScrolled: boolean;
}) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 ml-4 bg-teal-900/20 rounded-full p-1">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
          language === "en"
            ? "bg-teal-500 text-white shadow-md"
            : isScrolled
            ? "text-black-600 hover:text-teal-500"
            : "text-white/80 hover:text-white"
        }`}
      >
        EN
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("hi")}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
          language === "hi"
            ? "bg-teal-500 text-white shadow-md"
            : isScrolled
            ? "text-black-600 hover:text-teal-500"
            : "text-white/80 hover:text-white"
        }`}
      >
        हिं
      </motion.button>
    </div>
  );
}
