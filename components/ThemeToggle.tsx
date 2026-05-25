"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative w-9 h-9 rounded-full flex items-center justify-center
                 bg-teal-900/10 hover:bg-teal-900/20
                 dark:bg-champagne-500/10 dark:hover:bg-champagne-500/20
                 transition-colors duration-300 overflow-hidden"
    >
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`material-icons-round absolute text-[20px] ${
              isDark ? "text-champagne-500" : "text-teal-300"
            }`}
          >
            {isDark ? "light_mode" : "dark_mode"}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
