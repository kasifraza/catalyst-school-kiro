"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LazyMap from "./LazyMap";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-teal-100 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="material-icons-round text-white text-2xl">
                  school
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Catalyst Public School</h3>
                <p className="text-teal-700 text-xs">
                  {t("West Champaran, Bihar", "पश्चिम चंपारण, बिहार")}
                </p>
              </div>
            </div>
            <p className="text-teal-700 text-sm leading-relaxed mb-4">
              {t(
                "Providing quality education with Indian values since 2009. Shaping future leaders of tomorrow.",
                "2009 से भारतीय मूल्यों के साथ गुणवत्तापूर्ण शिक्षा प्रदान कर रहे हैं।"
              )}
            </p>
            <div className="flex gap-3">
              {[
                { name: "facebook", icon: "facebook" },
                { name: "twitter", icon: "tag" },
                { name: "instagram", icon: "photo_camera" },
                { name: "youtube", icon: "play_arrow" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-full bg-teal-200 flex items-center justify-center hover:bg-teal-500 transition-colors"
                  aria-label={social.name}
                >
                  <span className="material-icons-round text-sm">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4 text-champagne-400">
              {t("Quick Links", "त्वरित लिंक")}
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: t("About Us", "हमारे बारे में") },
                { href: "/academics", label: t("Academics", "शिक्षा") },
                { href: "/admissions", label: t("Admissions", "प्रवेश") },
                { href: "/gallery", label: t("Gallery", "गैलरी") },
                { href: "/contact", label: t("Contact", "संपर्क") },
                { href: "/faculty", label: t("Faculty", "शिक्षक") },
                { href: "/achievements", label: t("Achievements", "उपलब्धियाँ") },
                { href: "/blog", label: t("Blog", "ब्लॉग") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-teal-700 hover:text-champagne-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="material-icons-round text-xs">
                      chevron_right
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4 text-champagne-400">
              {t("Contact Us", "संपर्क करें")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-teal-700 text-sm">
                <span className="material-icons-round text-teal-500 text-lg mt-0.5">
                  location_on
                </span>
                {t(
                  "West Champaran, Bihar - 845101, India",
                  "पश्चिम चंपारण, बिहार - 845101, भारत"
                )}
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-icons-round text-teal-500 text-lg">
                  phone
                </span>
                <a href="tel:+919876543210" className="text-teal-700 hover:text-champagne-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-icons-round text-teal-500 text-lg">
                  email
                </span>
                <a href="mailto:info@catalystschool.edu.in" className="text-teal-700 hover:text-champagne-400 transition-colors">
                  info@catalystschool.edu.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-teal-700 text-sm">
                <span className="material-icons-round text-teal-500 text-lg">
                  schedule
                </span>
                {t("Mon - Sat: 8:00 AM - 4:00 PM", "सोम - शनि: 8:00 AM - 4:00 PM")}
              </li>
            </ul>

            {/* Policy & Disclosure Links */}
            <h4 className="font-bold text-lg mt-6 mb-3 text-champagne-400">
              {t("Information", "जानकारी")}
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/policies", label: t("Policies", "नीतियाँ") },
                { href: "/disclosure", label: t("Mandatory Disclosure", "अनिवार्य प्रकटीकरण") },
                { href: "/notices", label: t("Notices", "सूचनाएँ") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-teal-700 hover:text-champagne-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="material-icons-round text-xs">
                      chevron_right
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Map / Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4 text-champagne-400">
              {t("Find Us", "हमें खोजें")}
            </h4>
            <div className="rounded-xl overflow-hidden border border-teal-200 h-40">
              <LazyMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114587.95!2d84.3!3d26.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993f1b0c0000001%3A0x1234567890abcdef!2sWest%20Champaran%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890"
                title="School Location"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-teal-700 text-sm">
              © 2025 Catalyst Public School. {t("All rights reserved.", "सर्वाधिकार सुरक्षित।")}
            </p>
            <p className="text-teal-700 text-sm flex items-center gap-1">
              {t("Made with", "बनाया गया")}{" "}
              <span className="material-icons-round text-red-500 text-sm">
                favorite
              </span>{" "}
              {t("in Bihar, India", "बिहार, भारत में")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
