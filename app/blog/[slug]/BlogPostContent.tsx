"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function BlogPostContent({ body }: { body: { en: string; hi: string } }) {
  const { t } = useLanguage();
  return <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">{t(body.en, body.hi)}</p>;
}
