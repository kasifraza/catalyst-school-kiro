"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/* ------------------------------------------------------------------ */
/* Types & data                                                        */
/* ------------------------------------------------------------------ */

type EventType = "national" | "festival" | "school" | "exam" | "break";

type Bilingual = { en: string; hi: string };

type CalendarEvent = {
  /** YYYY-MM-DD */
  date: string;
  type: EventType;
  label: Bilingual;
};

const TYPE_META: Record<
  EventType,
  {
    dot: string;
    chipBg: string;
    chipText: string;
    cellBg: string;
    cellRing: string;
    label: Bilingual;
    icon: string;
  }
> = {
  national: {
    dot: "bg-rose-500",
    chipBg: "bg-rose-100",
    chipText: "text-rose-700",
    cellBg: "bg-rose-50",
    cellRing: "ring-rose-300",
    icon: "flag",
    label: { en: "National holiday", hi: "राष्ट्रीय अवकाश" },
  },
  festival: {
    dot: "bg-amber-500",
    chipBg: "bg-amber-100",
    chipText: "text-amber-800",
    cellBg: "bg-amber-50",
    cellRing: "ring-amber-300",
    icon: "celebration",
    label: { en: "Festival", hi: "त्योहार" },
  },
  school: {
    dot: "bg-emerald-500",
    chipBg: "bg-emerald-100",
    chipText: "text-emerald-800",
    cellBg: "bg-emerald-50",
    cellRing: "ring-emerald-300",
    icon: "school",
    label: { en: "School event", hi: "विद्यालय कार्यक्रम" },
  },
  exam: {
    dot: "bg-violet-500",
    chipBg: "bg-violet-100",
    chipText: "text-violet-800",
    cellBg: "bg-violet-50",
    cellRing: "ring-violet-300",
    icon: "edit_note",
    label: { en: "Examination", hi: "परीक्षा" },
  },
  break: {
    dot: "bg-cyan-500",
    chipBg: "bg-cyan-100",
    chipText: "text-cyan-800",
    cellBg: "bg-cyan-50",
    cellRing: "ring-cyan-300",
    icon: "beach_access",
    label: { en: "Vacation", hi: "अवकाश" },
  },
};

/* Academic year 2025-26 — events keyed to actual day-of-week */
const EVENTS: CalendarEvent[] = [
  // April 2025
  { date: "2025-04-01", type: "school", label: { en: "Session begins", hi: "सत्र प्रारंभ" } },
  { date: "2025-04-06", type: "festival", label: { en: "Ram Navami", hi: "राम नवमी" } },
  { date: "2025-04-10", type: "festival", label: { en: "Mahavir Jayanti", hi: "महावीर जयंती" } },
  { date: "2025-04-14", type: "national", label: { en: "Ambedkar Jayanti", hi: "अंबेडकर जयंती" } },
  { date: "2025-04-18", type: "festival", label: { en: "Good Friday", hi: "गुड फ्राइडे" } },

  // May 2025
  { date: "2025-05-01", type: "national", label: { en: "Labour Day", hi: "श्रमिक दिवस" } },
  { date: "2025-05-12", type: "festival", label: { en: "Buddha Purnima", hi: "बुद्ध पूर्णिमा" } },
  { date: "2025-05-26", type: "break", label: { en: "Summer break begins", hi: "ग्रीष्मावकाश प्रारंभ" } },

  // June 2025
  { date: "2025-06-07", type: "festival", label: { en: "Eid-ul-Adha", hi: "ईद-उल-अज़हा" } },
  { date: "2025-06-23", type: "break", label: { en: "School reopens", hi: "विद्यालय पुनः खुला" } },

  // July 2025
  { date: "2025-07-06", type: "festival", label: { en: "Muharram", hi: "मुहर्रम" } },

  // August 2025
  { date: "2025-08-09", type: "festival", label: { en: "Raksha Bandhan", hi: "रक्षा बंधन" } },
  { date: "2025-08-15", type: "national", label: { en: "Independence Day", hi: "स्वतंत्रता दिवस" } },
  { date: "2025-08-16", type: "festival", label: { en: "Janmashtami", hi: "जन्माष्टमी" } },
  { date: "2025-08-27", type: "festival", label: { en: "Ganesh Chaturthi", hi: "गणेश चतुर्थी" } },

  // September 2025
  { date: "2025-09-05", type: "school", label: { en: "Teachers' Day", hi: "शिक्षक दिवस" } },
  { date: "2025-09-15", type: "exam", label: { en: "Mid-term exams begin", hi: "मध्य-कालीन परीक्षा प्रारंभ" } },
  { date: "2025-09-16", type: "exam", label: { en: "Mid-term exams", hi: "मध्य-कालीन परीक्षा" } },
  { date: "2025-09-17", type: "exam", label: { en: "Mid-term exams", hi: "मध्य-कालीन परीक्षा" } },
  { date: "2025-09-18", type: "exam", label: { en: "Mid-term exams", hi: "मध्य-कालीन परीक्षा" } },
  { date: "2025-09-19", type: "exam", label: { en: "Mid-term exams end", hi: "मध्य-कालीन परीक्षा समाप्त" } },

  // October 2025
  { date: "2025-10-02", type: "national", label: { en: "Gandhi Jayanti", hi: "गांधी जयंती" } },
  { date: "2025-10-02", type: "festival", label: { en: "Dussehra", hi: "दशहरा" } },
  { date: "2025-10-20", type: "festival", label: { en: "Diwali", hi: "दीवाली" } },
  { date: "2025-10-21", type: "break", label: { en: "Diwali break", hi: "दीवाली अवकाश" } },
  { date: "2025-10-22", type: "break", label: { en: "Diwali break", hi: "दीवाली अवकाश" } },
  { date: "2025-10-23", type: "festival", label: { en: "Bhai Dooj", hi: "भाई दूज" } },
  { date: "2025-10-27", type: "festival", label: { en: "Chhath Puja", hi: "छठ पूजा" } },
  { date: "2025-10-28", type: "festival", label: { en: "Chhath Puja", hi: "छठ पूजा" } },

  // November 2025
  { date: "2025-11-05", type: "festival", label: { en: "Guru Nanak Jayanti", hi: "गुरु नानक जयंती" } },
  { date: "2025-11-12", type: "school", label: { en: "Annual Sports Day", hi: "वार्षिक खेल दिवस" } },
  { date: "2025-11-14", type: "school", label: { en: "Children's Day", hi: "बाल दिवस" } },

  // December 2025
  { date: "2025-12-23", type: "school", label: { en: "Cultural Fest", hi: "सांस्कृतिक उत्सव" } },
  { date: "2025-12-25", type: "national", label: { en: "Christmas", hi: "क्रिसमस" } },
  { date: "2025-12-29", type: "break", label: { en: "Winter break", hi: "शीतकालीन अवकाश" } },
  { date: "2025-12-30", type: "break", label: { en: "Winter break", hi: "शीतकालीन अवकाश" } },
  { date: "2025-12-31", type: "break", label: { en: "Winter break", hi: "शीतकालीन अवकाश" } },

  // January 2026
  { date: "2026-01-01", type: "break", label: { en: "Winter break", hi: "शीतकालीन अवकाश" } },
  { date: "2026-01-02", type: "break", label: { en: "Winter break", hi: "शीतकालीन अवकाश" } },
  { date: "2026-01-14", type: "festival", label: { en: "Makar Sankranti", hi: "मकर संक्रांति" } },
  { date: "2026-01-26", type: "national", label: { en: "Republic Day", hi: "गणतंत्र दिवस" } },

  // February 2026
  { date: "2026-02-05", type: "school", label: { en: "Science Exhibition", hi: "विज्ञान प्रदर्शनी" } },
  { date: "2026-02-15", type: "festival", label: { en: "Mahashivratri", hi: "महाशिवरात्रि" } },

  // March 2026
  { date: "2026-03-04", type: "festival", label: { en: "Holi", hi: "होली" } },
  { date: "2026-03-15", type: "exam", label: { en: "Annual exams begin", hi: "वार्षिक परीक्षा प्रारंभ" } },
  { date: "2026-03-16", type: "exam", label: { en: "Annual exams", hi: "वार्षिक परीक्षा" } },
  { date: "2026-03-17", type: "exam", label: { en: "Annual exams", hi: "वार्षिक परीक्षा" } },
  { date: "2026-03-18", type: "exam", label: { en: "Annual exams", hi: "वार्षिक परीक्षा" } },
  { date: "2026-03-19", type: "exam", label: { en: "Annual exams", hi: "वार्षिक परीक्षा" } },
  { date: "2026-03-20", type: "exam", label: { en: "Annual exams", hi: "वार्षिक परीक्षा" } },
  { date: "2026-03-21", type: "exam", label: { en: "Annual exams", hi: "वार्षिक परीक्षा" } },
  { date: "2026-03-23", type: "exam", label: { en: "Annual exams", hi: "वार्षिक परीक्षा" } },
  { date: "2026-03-24", type: "exam", label: { en: "Annual exams", hi: "वार्षिक परीक्षा" } },
  { date: "2026-03-25", type: "exam", label: { en: "Annual exams end", hi: "वार्षिक परीक्षा समाप्त" } },
  { date: "2026-03-31", type: "school", label: { en: "Session ends", hi: "सत्र समाप्त" } },
];

const HEADINGS = {
  en: {
    eyebrow: "Academic Year 2025–26",
    title: "Academic Calendar",
    subtitle:
      "Plan ahead with key holidays, festivals, exams and school events for the session.",
    months: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ],
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    today: "Today",
    legend: "Legend",
    eventsThisMonth: "Events this month",
    noEvents: "No events scheduled this month.",
  },
  hi: {
    eyebrow: "शैक्षणिक वर्ष 2025–26",
    title: "शैक्षणिक कैलेंडर",
    subtitle:
      "इस सत्र की प्रमुख छुट्टियों, त्योहारों, परीक्षाओं और विद्यालय कार्यक्रमों के साथ योजना बनाएं।",
    months: [
      "जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून",
      "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर",
    ],
    days: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
    today: "आज",
    legend: "संकेतसूची",
    eventsThisMonth: "इस माह के कार्यक्रम",
    noEvents: "इस माह कोई कार्यक्रम नहीं है।",
  },
};

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const pad = (n: number) => String(n).padStart(2, "0");
const ymd = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;

const SESSION_START = { year: 2025, month: 3 }; // April 2025
const SESSION_END = { year: 2026, month: 2 }; // March 2026

function clampToSession(year: number, month: number) {
  const v = year * 12 + month;
  const min = SESSION_START.year * 12 + SESSION_START.month;
  const max = SESSION_END.year * 12 + SESSION_END.month;
  if (v < min) return SESSION_START;
  if (v > max) return SESSION_END;
  return { year, month };
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function AcademicCalendar() {
  const { language } = useLanguage();
  const t = HEADINGS[language];

  /* Month state — start on the academic-year opening month */
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(3); // April (0-indexed)
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  /* Today (computed once on the client to avoid hydration mismatch — server
     and client must produce the same initial markup, so we update post-mount.) */
  const [today, setToday] = useState<{ y: number; m: number; d: number } | null>(null);
  useEffect(() => {
    const d = new Date();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday({ y: d.getFullYear(), m: d.getMonth(), d: d.getDate() });
  }, []);

  /* Index events by date string for quick lookup */
  const eventsByDate = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const ev of EVENTS) {
      const list = map.get(ev.date);
      if (list) list.push(ev);
      else map.set(ev.date, [ev]);
    }
    return map;
  }, []);

  /* Events that fall within the visible month, sorted by date */
  const monthEvents = useMemo(() => {
    const prefix = `${year}-${pad(month + 1)}-`;
    return EVENTS.filter((ev) => ev.date.startsWith(prefix)).sort((a, b) =>
      a.date.localeCompare(b.date)
    );
  }, [year, month]);

  /* Build the calendar grid (always 6 weeks × 7 days = 42 cells) */
  const grid = useMemo(() => {
    const firstDow = new Date(year, month, 1).getDay(); // 0..6
    const daysIn = new Date(year, month + 1, 0).getDate();
    const prevDays = new Date(year, month, 0).getDate();

    const cells: {
      year: number;
      month: number;
      day: number;
      inMonth: boolean;
    }[] = [];

    /* Leading days from previous month */
    for (let i = firstDow - 1; i >= 0; i--) {
      const d = prevDays - i;
      const m = month === 0 ? 11 : month - 1;
      const y = month === 0 ? year - 1 : year;
      cells.push({ year: y, month: m, day: d, inMonth: false });
    }
    /* Days of current month */
    for (let d = 1; d <= daysIn; d++) {
      cells.push({ year, month, day: d, inMonth: true });
    }
    /* Trailing days from next month to fill 42 */
    let tail = 1;
    while (cells.length < 42) {
      const m = month === 11 ? 0 : month + 1;
      const y = month === 11 ? year + 1 : year;
      cells.push({ year: y, month: m, day: tail++, inMonth: false });
    }
    return cells;
  }, [year, month]);

  /* Navigation */
  const goPrev = () => {
    setDirection(-1);
    const next = clampToSession(month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1);
    setYear(next.year);
    setMonth(next.month);
  };
  const goNext = () => {
    setDirection(1);
    const next = clampToSession(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1);
    setYear(next.year);
    setMonth(next.month);
  };
  const goToday = () => {
    if (!today) return;
    const cur = year * 12 + month;
    const tgt = today.y * 12 + today.m;
    setDirection(tgt > cur ? 1 : -1);
    const next = clampToSession(today.y, today.m);
    setYear(next.year);
    setMonth(next.month);
  };

  const monthKey = `${year}-${month}`;
  const atSessionStart =
    year === SESSION_START.year && month === SESSION_START.month;
  const atSessionEnd =
    year === SESSION_END.year && month === SESSION_END.month;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-champagne-900 to-white dark:from-[#0f1410] dark:via-[#1a1f1b] dark:to-[#0f1410] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-teal-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-900/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-teal-900/50 text-teal-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="material-icons-round text-sm">calendar_month</span>
            {t.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-black-700 dark:text-teal-800 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-8 items-start">
          {/* Calendar card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-teal-100/80 rounded-3xl shadow-xl border border-champagne-800/60 dark:border-teal-300/30 overflow-hidden"
          >
            {/* Top bar */}
            <div className="px-5 sm:px-7 py-5 bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200 text-white flex items-center justify-between gap-3">
              <button
                onClick={goPrev}
                disabled={atSessionStart}
                aria-label="Previous month"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                <span className="material-icons-round">chevron_left</span>
              </button>

              <div className="text-center min-w-0">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={monthKey}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl sm:text-2xl font-bold leading-tight truncate"
                  >
                    {t.months[month]}{" "}
                    <span className="text-white/80 font-semibold">{year}</span>
                  </motion.h3>
                </AnimatePresence>
                <button
                  onClick={goToday}
                  className="mt-1 text-xs text-white/85 hover:text-white inline-flex items-center gap-1 underline-offset-2 hover:underline"
                >
                  <span className="material-icons-round" style={{ fontSize: 14 }}>
                    today
                  </span>
                  {t.today}
                </button>
              </div>

              <button
                onClick={goNext}
                disabled={atSessionEnd}
                aria-label="Next month"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                <span className="material-icons-round">chevron_right</span>
              </button>
            </div>

            {/* Day-of-week header */}
            <div className="grid grid-cols-7 px-3 sm:px-5 pt-4 pb-2 text-center text-[10px] sm:text-xs font-bold tracking-wider uppercase text-black-700 dark:text-teal-800">
              {t.days.map((d, i) => (
                <div
                  key={i}
                  className={i === 0 ? "text-rose-500" : ""}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Day grid (animates between months) */}
            <div className="px-3 sm:px-5 pb-5 relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={monthKey}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="grid grid-cols-7 gap-1.5 sm:gap-2"
                >
                  {grid.map((cell, idx) => {
                    const dateStr = ymd(cell.year, cell.month, cell.day);
                    const evs = eventsByDate.get(dateStr) || [];
                    const dow = new Date(cell.year, cell.month, cell.day).getDay();
                    const isSunday = dow === 0;
                    const isToday =
                      !!today &&
                      cell.year === today.y &&
                      cell.month === today.m &&
                      cell.day === today.d;

                    /* Pick a "primary" event type for cell tinting (highest priority first) */
                    const priority: EventType[] = [
                      "national",
                      "exam",
                      "festival",
                      "school",
                      "break",
                    ];
                    const primary =
                      evs.length > 0
                        ? priority.find((p) => evs.some((e) => e.type === p)) ||
                          evs[0].type
                        : null;

                    const meta = primary ? TYPE_META[primary] : null;

                    /* Styling layers */
                    let cellClasses =
                      "relative aspect-square rounded-xl flex flex-col items-center justify-center p-1 text-sm sm:text-base font-semibold select-none transition-all";

                    if (!cell.inMonth) {
                      cellClasses += " text-black-800 bg-transparent";
                    } else if (meta) {
                      cellClasses += ` ${meta.cellBg} text-black hover:scale-[1.04] hover:shadow-md cursor-default`;
                    } else if (isSunday) {
                      cellClasses += " bg-champagne-800/60 text-rose-500";
                    } else {
                      cellClasses += " bg-champagne-900 dark:bg-teal-200/30 text-black dark:text-white hover:bg-champagne-800/70 dark:hover:bg-teal-200/50";
                    }

                    if (isToday && cell.inMonth) {
                      cellClasses += " ring-2 ring-teal-500 ring-offset-2 ring-offset-white dark:ring-offset-teal-100";
                    }

                    /* Distinct dot colours for stacked events */
                    const dotTypes = Array.from(
                      new Set(evs.map((e) => e.type))
                    ).slice(0, 3);

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.005 * idx, duration: 0.25 }}
                        className={cellClasses}
                        title={
                          evs.length > 0
                            ? evs.map((e) => e.label[language]).join(", ")
                            : undefined
                        }
                      >
                        <span className={!cell.inMonth ? "opacity-50" : ""}>
                          {cell.day}
                        </span>
                        {dotTypes.length > 0 && cell.inMonth && (
                          <span className="absolute bottom-1 sm:bottom-1.5 flex items-center gap-0.5">
                            {dotTypes.map((dt, j) => (
                              <span
                                key={j}
                                className={`w-1.5 h-1.5 rounded-full ${TYPE_META[dt].dot}`}
                              />
                            ))}
                          </span>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Legend */}
            <div className="px-5 sm:px-7 py-4 border-t border-champagne-800/60 dark:border-teal-300/30 bg-champagne-900/60 dark:bg-teal-100/40">
              <p className="text-[11px] font-bold uppercase tracking-wider text-black-700 dark:text-teal-800 mb-2">
                {t.legend}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {(Object.keys(TYPE_META) as EventType[]).map((tp) => {
                  const m = TYPE_META[tp];
                  return (
                    <span
                      key={tp}
                      className="inline-flex items-center gap-1.5 text-xs text-black-600 dark:text-teal-800"
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${m.dot}`} />
                      {m.label[language]}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Events list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white dark:bg-teal-100/80 rounded-3xl shadow-xl border border-champagne-800/60 dark:border-teal-300/30 p-5 sm:p-7"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="material-icons-round text-teal-500">event</span>
              <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                {t.eventsThisMonth}
              </h3>
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={monthKey}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 max-h-[440px] overflow-y-auto pr-1"
              >
                {monthEvents.length === 0 ? (
                  <li className="text-sm text-black-700 dark:text-teal-800 italic">{t.noEvents}</li>
                ) : (
                  monthEvents.map((ev, i) => {
                    const meta = TYPE_META[ev.type];
                    const day = parseInt(ev.date.slice(8, 10), 10);
                    const dow = new Date(ev.date).getDay();
                    return (
                      <motion.li
                        key={`${ev.date}-${i}`}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * i, duration: 0.3 }}
                        className="flex items-center gap-3 p-3 rounded-xl border border-champagne-800/60 dark:border-teal-300/30 hover:border-champagne-300/70 hover:shadow-md transition-all"
                      >
                        <div
                          className={`shrink-0 w-12 h-12 rounded-xl ${meta.chipBg} ${meta.chipText} flex flex-col items-center justify-center leading-none`}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            {t.days[dow]}
                          </span>
                          <span className="text-base font-extrabold mt-0.5">
                            {pad(day)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-black dark:text-white truncate">
                            {ev.label[language]}
                          </p>
                          <span
                            className={`inline-flex items-center gap-1 mt-1 text-[11px] font-medium px-2 py-0.5 rounded-full ${meta.chipBg} ${meta.chipText}`}
                          >
                            <span
                              className="material-icons-round"
                              style={{ fontSize: 12 }}
                            >
                              {meta.icon}
                            </span>
                            {meta.label[language]}
                          </span>
                        </div>
                      </motion.li>
                    );
                  })
                )}
              </motion.ul>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
