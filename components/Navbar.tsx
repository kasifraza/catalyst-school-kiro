"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = {
  en: [
    { href: "/", label: "Home", icon: "home" },
    { href: "/about", label: "About Us", icon: "info" },
    { href: "/academics", label: "Academics", icon: "menu_book" },
    { href: "/admissions", label: "Admissions", icon: "how_to_reg" },
    { href: "/gallery", label: "Gallery", icon: "photo_library" },
    { href: "/contact", label: "Contact", icon: "call" },
  ],
  hi: [
    { href: "/", label: "होम", icon: "home" },
    { href: "/about", label: "हमारे बारे में", icon: "info" },
    { href: "/academics", label: "शिक्षा", icon: "menu_book" },
    { href: "/admissions", label: "प्रवेश", icon: "how_to_reg" },
    { href: "/gallery", label: "गैलरी", icon: "photo_library" },
    { href: "/contact", label: "संपर्क", icon: "call" },
  ],
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { language } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = navLinks[language];

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-[60] bg-white px-3 py-2 rounded-full text-teal-300 font-medium"
      >
        Skip to main content
      </a>

      {/* Floating navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.2 }}
        className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none"
      >
        <motion.div
          animate={{
            scale: isScrolled ? 0.98 : 1,
          }}
          transition={{ duration: 0.3 }}
          className={`pointer-events-auto max-w-7xl mx-auto rounded-full
                      border border-white/20 dark:border-white/10
                      backdrop-blur-xl shadow-lg
                      transition-all duration-500
                      ${
                        isScrolled
                          ? "bg-white/70 dark:bg-teal-100/70 shadow-xl py-2"
                          : "bg-white/30 dark:bg-teal-100/30 py-3"
                      }`}
        >
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group shrink-0">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-md"
                >
                  <span className="material-icons-round text-white text-xl">
                    school
                  </span>
                </motion.div>
                <div className="hidden sm:block">
                  <h1
                    className={`font-bold text-base leading-tight transition-colors ${
                      isScrolled
                        ? "text-teal-300 dark:text-champagne-500"
                        : "text-white drop-shadow"
                    }`}
                  >
                    Catalyst Public School
                  </h1>
                  <p
                    className={`text-[11px] transition-colors ${
                      isScrolled
                        ? "text-khaki-400 dark:text-champagne-700"
                        : "text-champagne-500 drop-shadow"
                    }`}
                  >
                    {language === "hi"
                      ? "पश्चिम चंपारण, बिहार"
                      : "West Champaran, Bihar"}
                  </p>
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300
                                hover:bg-teal-500/15 hover:text-teal-500
                                dark:hover:bg-champagne-500/15 dark:hover:text-champagne-500
                                flex items-center gap-1.5 ${
                                  isScrolled
                                    ? "text-black-600 dark:text-champagne-700"
                                    : "text-white drop-shadow"
                                }`}
                  >
                    <span className="material-icons-outlined text-base">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Right side actions */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="hidden lg:block">
                  <LanguageSwitcher isScrolled={isScrolled} />
                </div>
                <ThemeToggle />

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  aria-label="Toggle menu"
                  className={`lg:hidden p-2 rounded-full transition-colors ${
                    isScrolled
                      ? "text-black dark:text-champagne-500"
                      : "text-white"
                  }`}
                >
                  <span className="material-icons-round text-2xl">
                    {isMobileOpen ? "close" : "menu"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-teal-100/95 backdrop-blur-lg lg:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-4 p-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="flex items-center gap-3 text-xl font-medium text-black-600 dark:text-champagne-700 hover:text-teal-500 dark:hover:text-champagne-500 transition-colors py-3"
                  >
                    <span className="material-icons-round text-teal-500 dark:text-champagne-500">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4"
              >
                <LanguageSwitcher isScrolled={true} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
