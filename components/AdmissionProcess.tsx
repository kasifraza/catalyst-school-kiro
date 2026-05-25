"use client";

import { motion, useAnimationFrame } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    eyebrow: "Admissions Open 2025–26",
    title: "How to Apply",
    subtitle:
      "Follow the journey from enquiry to enrolment — a simple, transparent path into the Catalyst family.",
    steps: [
      {
        icon: "edit_document",
        title: "Submit Enquiry",
        desc: "Fill the online enquiry form or visit the school office.",
      },
      {
        icon: "fact_check",
        title: "Form Submission",
        desc: "Submit the application form with required documents and fee.",
      },
      {
        icon: "psychology",
        title: "Interaction",
        desc: "Informal interaction with the child and parents.",
      },
      {
        icon: "verified",
        title: "Confirmation",
        desc: "Receive admission confirmation and begin your journey.",
      },
    ],
    docsTitle: "Documents Required",
    docs: [
      "Birth certificate",
      "Aadhaar card (child & parents)",
      "Previous school report card",
      "Transfer certificate (if applicable)",
      "Passport-size photographs",
      "Address proof",
    ],
    ctaTagline: "Ready to give your child the Catalyst advantage?",
    cta: "Start Application",
  },
  hi: {
    eyebrow: "प्रवेश 2025–26 खुले हैं",
    title: "आवेदन कैसे करें",
    subtitle:
      "पूछताछ से प्रवेश तक की यात्रा का अनुसरण करें — कैटलिस्ट परिवार में प्रवेश का सरल, पारदर्शी मार्ग।",
    steps: [
      {
        icon: "edit_document",
        title: "पूछताछ",
        desc: "ऑनलाइन फॉर्म भरें या विद्यालय कार्यालय आएं।",
      },
      {
        icon: "fact_check",
        title: "फॉर्म जमा करें",
        desc: "आवश्यक दस्तावेज और शुल्क के साथ आवेदन जमा करें।",
      },
      {
        icon: "psychology",
        title: "वार्तालाप",
        desc: "बच्चे और अभिभावकों से अनौपचारिक बातचीत।",
      },
      {
        icon: "verified",
        title: "पुष्टि",
        desc: "प्रवेश पुष्टि प्राप्त करें और यात्रा शुरू करें।",
      },
    ],
    docsTitle: "आवश्यक दस्तावेज़",
    docs: [
      "जन्म प्रमाण पत्र",
      "आधार कार्ड (बच्चा और अभिभावक)",
      "पिछले विद्यालय की रिपोर्ट कार्ड",
      "स्थानांतरण प्रमाण पत्र (यदि लागू हो)",
      "पासपोर्ट साइज़ फोटो",
      "पते का प्रमाण",
    ],
    ctaTagline: "अपने बच्चे को कैटलिस्ट का लाभ देने के लिए तैयार हैं?",
    cta: "आवेदन शुरू करें",
  },
};

/* SVG geometry — viewBox 1000 × 1240
   Stops (badges) sit at alternating sides, cards fill the opposite half.
   Path is a chain of 3 cubic-bezier S-curves that snake between them. */
const VIEW_W = 1000;
const VIEW_H = 1240;

const STOPS = [
  { x: 460, y: 160 }, // badge 1 — right edge of card 1 (left side)
  { x: 540, y: 460 }, // badge 2 — left edge of card 2 (right side)
  { x: 460, y: 760 }, // badge 3 — right edge of card 3 (left side)
  { x: 540, y: 1060 }, // badge 4 — left edge of card 4 (right side)
];

const PATH_D = [
  `M ${STOPS[0].x} ${STOPS[0].y}`,
  `C 460 380, 540 240, ${STOPS[1].x} ${STOPS[1].y}`,
  `C 540 680, 460 540, ${STOPS[2].x} ${STOPS[2].y}`,
  `C 460 980, 540 840, ${STOPS[3].x} ${STOPS[3].y}`,
].join(" ");

/* Card boxes (in viewBox %).  Each card is anchored beside its badge so
   they read like sign-posts on the journey. */
const CARDS = [
  { side: "left" as const, leftPct: 4, topPct: 4, widthPct: 40 },
  { side: "right" as const, leftPct: 56, topPct: 28.2, widthPct: 40 },
  { side: "left" as const, leftPct: 4, topPct: 52.4, widthPct: 40 },
  { side: "right" as const, leftPct: 56, topPct: 76.6, widthPct: 40 },
];

export default function AdmissionProcess() {
  const { language } = useLanguage();
  const data = content[language];

  const pathRef = useRef<SVGPathElement>(null);
  const travelerRef = useRef<SVGGElement>(null);
  const lastStepRef = useRef(-1);
  const [pathLength, setPathLength] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  /* Measure path length once it has mounted so we can map progress→pixels. */
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  /* Drive the traveler position every frame.  An 8-second loop with a
     slight pause at each stop is approximated by easing the progress curve. */
  useAnimationFrame((time) => {
    if (!pathRef.current || !travelerRef.current || pathLength === 0) return;

    const period = 9000; // ms — full loop
    const raw = (time % period) / period; // 0..1
    /* Ease-in-out on each quarter so the traveler appears to "arrive,
       linger, then take off" between stops. */
    const seg = raw * 4; // 0..4
    const segIdx = Math.min(3, Math.floor(seg));
    const segT = seg - segIdx; // 0..1 within segment
    const eased = segT * segT * (3 - 2 * segT); // smoothstep
    const progress = (segIdx + eased) / 4; // 0..1 over whole path

    const point = pathRef.current.getPointAtLength(progress * pathLength);
    travelerRef.current.setAttribute(
      "transform",
      `translate(${point.x} ${point.y})`
    );

    const nextStep = Math.min(3, Math.round(progress * 3));
    if (nextStep !== lastStepRef.current) {
      lastStepRef.current = nextStep;
      setActiveStep(nextStep);
    }
  });

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-champagne-900 to-white dark:from-[#0f1410] dark:via-[#1a1f1b] dark:to-[#0f1410] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-champagne-700/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-800/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-champagne-800 text-champagne-200 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="material-icons-round text-sm">how_to_reg</span>
            {data.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-black-700 dark:text-teal-800 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Desktop journey (md+) — curved SVG with auto-traveling icon */}
        <div className="hidden md:block">
          <div
            className="relative mx-auto w-full max-w-5xl"
            style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}
          >
            <svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#9bab9f" />
                  <stop offset="50%" stopColor="#c39045" />
                  <stop offset="100%" stopColor="#9bab9f" />
                </linearGradient>
                <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#9bab9f" />
                  <stop offset="100%" stopColor="#4d5c50" />
                </linearGradient>
                <linearGradient id="badgeGradActive" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f0d4a8" />
                  <stop offset="100%" stopColor="#c39045" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Faint base path */}
              <path
                d={PATH_D}
                fill="none"
                stroke="#d5cac1"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray="2 14"
                opacity="0.6"
              />

              {/* Animated foreground path — draws itself when in view */}
              <motion.path
                ref={pathRef}
                d={PATH_D}
                fill="none"
                stroke="url(#pathGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  pathLength: { duration: 2.2, ease: "easeInOut" },
                  opacity: { duration: 0.4 },
                }}
              />

              {/* Stop badges */}
              {STOPS.map((stop, i) => {
                const isActive = i === activeStep;
                const isDone = i < activeStep;
                return (
                  <g key={i} transform={`translate(${stop.x} ${stop.y})`}>
                    {/* Pulse ring for active */}
                    {isActive && (
                      <motion.circle
                        r="44"
                        fill="none"
                        stroke="#c39045"
                        strokeWidth="2"
                        initial={{ scale: 0.6, opacity: 0.9 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    )}
                    <motion.circle
                      r="38"
                      fill={isDone || isActive ? "url(#badgeGradActive)" : "url(#badgeGrad)"}
                      stroke="#ffffff"
                      strokeWidth="5"
                      animate={{ scale: isActive ? 1.12 : 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      style={{
                        filter: isActive ? "url(#glow)" : "none",
                      }}
                    />
                    <text
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="#ffffff"
                      fontFamily='"Material Icons Round"'
                      fontSize="32"
                      style={{ pointerEvents: "none" }}
                    >
                      {data.steps[i].icon}
                    </text>
                    {/* Step number tag */}
                    <g
                      transform={
                        CARDS[i].side === "left"
                          ? "translate(28 -34)"
                          : "translate(-28 -34)"
                      }
                    >
                      <circle r="14" fill="#2a1810" stroke="#f0d4a8" strokeWidth="2" />
                      <text
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="#f0d4a8"
                        fontSize="13"
                        fontWeight="800"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Traveler — graduation cap that auto-moves along the path */}
              <g ref={travelerRef}>
                <motion.circle
                  r="26"
                  fill="#ffffff"
                  stroke="#c39045"
                  strokeWidth="3"
                  style={{ filter: "url(#glow)" }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#c39045"
                  fontFamily='"Material Icons Round"'
                  fontSize="26"
                  style={{ pointerEvents: "none" }}
                >
                  school
                </text>
              </g>
            </svg>

            {/* HTML cards layered above the SVG, anchored to badge positions */}
            {CARDS.map((card, i) => {
              const isActive = i === activeStep;
              const isDone = i < activeStep;
              const step = data.steps[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: card.side === "left" ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="absolute"
                  style={{
                    left: `${card.leftPct}%`,
                    top: `${card.topPct}%`,
                    width: `${card.widthPct}%`,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.03 : 1,
                      y: isActive ? -4 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className={`relative bg-white dark:bg-teal-100/80 rounded-2xl p-5 lg:p-6 border shadow-lg transition-shadow ${
                      isActive
                        ? "border-champagne-300/70 shadow-2xl"
                        : isDone
                        ? "border-teal-700/50"
                        : "border-champagne-800/60 dark:border-teal-300/30"
                    }`}
                  >
                    {/* Side accent bar */}
                    <div
                      className={`absolute top-0 bottom-0 ${
                        card.side === "left" ? "right-0" : "left-0"
                      } w-1 rounded-full transition-colors duration-500 ${
                        isActive
                          ? "bg-gradient-to-b from-champagne-300 to-champagne-200"
                          : isDone
                          ? "bg-gradient-to-b from-teal-500 to-teal-400"
                          : "bg-champagne-800"
                      }`}
                    />
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                          isActive
                            ? "text-champagne-200"
                            : isDone
                            ? "text-teal-400"
                            : "text-black-700"
                        }`}
                      >
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      {isDone && (
                        <span className="material-icons-round text-teal-500 text-base">
                          check_circle
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-black dark:text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-black-700 dark:text-teal-800 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile journey (<md) — vertical timeline with traveling dot */}
        <div className="md:hidden relative">
          <div className="absolute left-7 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-teal-700 via-champagne-300 to-teal-700" />
          {/* Animated traveling dot on the line */}
          <motion.div
            className="absolute left-[18px] w-5 h-5 rounded-full bg-champagne-300 shadow-[0_0_18px_4px_rgba(195,144,69,0.55)] z-20"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute inset-0 flex items-center justify-center text-[10px]">
              <span className="material-icons-round text-white" style={{ fontSize: 14 }}>
                school
              </span>
            </span>
          </motion.div>

          <ul className="space-y-5">
            {data.steps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 ring-4 ring-white shadow-lg flex items-center justify-center">
                  <span className="material-icons-round text-white text-2xl">
                    {step.icon}
                  </span>
                </div>
                <div className="bg-white dark:bg-teal-100/80 rounded-2xl p-4 shadow-md border border-champagne-800/50 dark:border-teal-300/30">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-champagne-200 mb-1">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-base font-bold text-black dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-black-700 dark:text-teal-800 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Documents + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 bg-gradient-to-br from-teal-200 via-teal-300 to-teal-200 rounded-3xl p-8 sm:p-10 grid lg:grid-cols-2 gap-8 items-center relative overflow-hidden"
        >
          {/* Subtle dot pattern */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.5) 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 flex items-center gap-3">
              <span className="material-icons-round text-champagne-400">
                checklist
              </span>
              {data.docsTitle}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.docs.map((doc, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-2 text-white/95 text-sm"
                >
                  <span className="material-icons-round text-champagne-400 text-base mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>{doc}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col items-center lg:items-end gap-4 text-center lg:text-right">
            <p className="text-white/95 text-base sm:text-lg max-w-sm">
              {data.ctaTagline}
            </p>
            <Link
              href="/admissions"
              className="group px-6 py-3.5 bg-white text-teal-300 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span className="material-icons-round transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
              {data.cta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
