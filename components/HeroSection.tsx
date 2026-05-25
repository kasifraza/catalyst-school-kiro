"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
          alt="Catalyst Public School building and campus in West Champaran"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-20 h-20 opacity-20"
        >
          <span className="material-icons-round text-champagne text-7xl">
            auto_stories
          </span>
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-40 right-20 w-16 h-16 opacity-20"
        >
          <span className="material-icons-round text-sky text-6xl">
            science
          </span>
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-40 left-1/4 w-14 h-14 opacity-15"
        >
          <span className="material-icons-round text-champagne text-5xl">
            calculate
          </span>
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-60 right-1/4 w-14 h-14 opacity-15"
        >
          <span className="material-icons-round text-sky text-5xl">
            palette
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.3, duration: 0.8, type: "spring" }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
            <span className="material-icons-round text-champagne-400 text-sm">
              location_on
            </span>
            <span className="text-champagne-500 text-sm font-medium">
              {t("West Champaran, Bihar, India", "पश्चिम चंपारण, बिहार, भारत")}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-champagne-400 via-champagne to-champagne-400 bg-clip-text text-transparent">
            Catalyst
          </span>
          <br />
          <span className="text-white">Public School</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          className="text-xl md:text-2xl text-champagne-600 mb-4 font-light"
        >
          {t(
            "Nurturing Young Minds, Building Tomorrow's Leaders",
            "युवा मस्तिष्कों का पोषण, कल के नेताओं का निर्माण"
          )}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="text-lg text-sky-500 mb-10 font-medium"
          style={{ fontFamily: "var(--font-hindi)" }}
        >
          {t(
            "Where Education Meets Excellence",
            "जहाँ शिक्षा उत्कृष्टता से मिलती है"
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="/admissions"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(131,151,136,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-full font-semibold text-lg shadow-xl flex items-center justify-center gap-2 hover:shadow-2xl transition-shadow"
          >
            <span className="material-icons-round">how_to_reg</span>
            {t("Apply for Admission", "प्रवेश के लिए आवेदन करें")}
          </motion.a>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border border-white/30 flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
          >
            <span className="material-icons-round">explore</span>
            {t("Explore More", "और जानें")}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs uppercase tracking-widest">
            {t("Scroll Down", "नीचे स्क्रॉल करें")}
          </span>
          <span className="material-icons-round text-white/60">
            keyboard_arrow_down
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
