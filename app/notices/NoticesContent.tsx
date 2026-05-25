"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { Notice } from "./_data";

export default function NoticesContent({ notices }: { notices: Notice[] }) {
  const { t } = useLanguage();
  return (
    <div className="space-y-4">
      {notices.map((notice, i) => (
        <motion.a
          key={notice.slug}
          href={`/notices/${notice.slug}`}
          className="block p-5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors bg-white dark:bg-slate-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded">{notice.category}</span>
            <time dateTime={notice.date}>{notice.date}</time>
          </div>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{t(notice.title.en, notice.title.hi)}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t(notice.summary.en, notice.summary.hi)}</p>
        </motion.a>
      ))}
    </div>
  );
}
