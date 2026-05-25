"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PAGE_COUNT = 4;

/**
 * Cinematic book opening loader.
 *
 * Stages:
 *   0 — closed book appears with a gentle entry from below
 *   1 — front cover swings open in an elegant arc, exposing its inside
 *   2 — inner pages flip one by one with a slight stagger
 *   3 — exit: scene zooms toward the camera (entering the book)
 *
 * Each flippable element uses a "leaf" pattern: a 3D parent that rotates,
 * with two child <div> faces glued back-to-back. The back face is rotated
 * 180° so when the leaf flips, that face becomes visible to the camera.
 * This keeps the cover and pages visible in their open state instead of
 * disappearing past 90° due to backface-visibility: hidden.
 */
export default function BookLoader() {
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  // On narrow screens, the opened book spread is 2× the book width, so the
  // cover swings off the left edge. Shift the scene right by half the book
  // width while the book is open so the opened spread is centered.
  const [bookOffset, setBookOffset] = useState(0);

  useEffect(() => {
    setMounted(true);
    const vw = window.innerWidth;
    if (vw < 380) setBookOffset(79); // small phone: book 158 wide
    else if (vw < 640) setBookOffset(90); // mobile: book 180 wide
    else setBookOffset(0); // desktop: enough room, keep centered

    const t1 = setTimeout(() => setStage(1), 1100); // open cover
    const t2 = setTimeout(() => setStage(2), 2100); // flip pages
    const t3 = setTimeout(() => setStage(3), 4400); // begin exit
    const t4 = setTimeout(() => setIsVisible(false), 5300);
    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, []);

  // Sparkle positions are randomized per mount; only generated on the client
  // to avoid a server/client hydration mismatch. Distance scales with the
  // viewport so sparkles stay visually balanced on small screens.
  const sparkles = useMemo(() => {
    if (!mounted) return [];
    const vw = window.innerWidth;
    const isMobile = vw < 640;
    const baseDistance = isMobile ? 80 : 120;
    const spread = isMobile ? 220 : 380;
    const count = isMobile ? 18 : 28;
    return [...Array(count)].map(() => {
      const angle = Math.random() * Math.PI * 2;
      const distance = baseDistance + Math.random() * spread;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance - (isMobile ? 50 : 80), // bias upward
        delay: Math.random() * 1.4,
        duration: 1.8 + Math.random() * 1.6,
        size: 3 + Math.random() * 5,
      };
    });
  }, [mounted]);

  const isOpening = stage >= 1;
  const arePagesFlipping = stage >= 2;
  const isExiting = stage === 3;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="book-loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="book-spotlight" />
          <div className="book-floor" />

          {/* Sparkles emerging once pages start flipping */}
          {arePagesFlipping &&
            sparkles.map((s, i) => (
              <motion.div
                key={i}
                className="book-sparkle"
                style={{
                  width: s.size,
                  height: s.size,
                  left: `calc(50% + ${bookOffset}px)`,
                }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: s.x,
                  y: s.y,
                  opacity: [0, 1, 0],
                  scale: [0, 1.4, 0],
                }}
                transition={{
                  duration: s.duration,
                  delay: s.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}

          {/* Tilted 3D scene */}
          <motion.div
            className="book-scene"
            initial={{
              rotateX: 35,
              rotateY: -28,
              scale: 0.4,
              opacity: 0,
              y: 80,
              x: 0,
            }}
            animate={
              isExiting
                ? {
                    rotateX: 0,
                    rotateY: 0,
                    scale: 6,
                    opacity: 0,
                    y: 0,
                    x: bookOffset,
                  }
                : {
                    rotateX: 12,
                    rotateY: -18,
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    x: isOpening ? bookOffset : 0,
                  }
            }
            transition={
              isExiting
                ? { duration: 0.95, ease: [0.7, 0, 0.84, 0] }
                : {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    x: { duration: 1.2, ease: [0.65, 0, 0.35, 1] },
                  }
            }
          >
            {/* Subtle floating idle for the book */}
            <motion.div
              className="book-3d"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="book-spine-3d" />
              <div className="book-edge-top" />
              <div className="book-bookmark" />

              {/* Final inner spread — visible after all pages flip */}
              <div className="book-final-page">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={
                    arePagesFlipping ? { opacity: 1, scale: 1 } : { opacity: 0 }
                  }
                  transition={{ delay: 1, duration: 0.7 }}
                  className="text-center px-4 sm:px-6"
                >
                  <motion.span
                    className="material-icons-round block mb-2 sm:mb-3 text-4xl sm:text-6xl"
                    style={{ color: "#84612b" }}
                    animate={
                      arePagesFlipping ? { rotateY: [0, 360] } : { rotateY: 0 }
                    }
                    transition={{ delay: 1.2, duration: 1.1, ease: "easeOut" }}
                  >
                    auto_stories
                  </motion.span>
                  <p
                    className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-1.5 sm:mb-2"
                    style={{ color: "#a37030" }}
                  >
                    Welcome to
                  </p>
                  <p
                    className="font-extrabold text-base sm:text-xl mb-1.5 sm:mb-2 leading-tight"
                    style={{ color: "#3a2410" }}
                  >
                    Catalyst Public School
                  </p>
                  <p
                    className="italic text-xs sm:text-sm font-[var(--font-hindi)]"
                    style={{ color: "#84612b" }}
                  >
                    ज्ञान की दुनिया
                  </p>
                </motion.div>
              </div>

              {/* Inner pages — each is a leaf with front + back faces */}
              {[...Array(PAGE_COUNT)].map((_, i) => (
                <motion.div
                  key={`page-${i}`}
                  className="book-leaf"
                  style={{ zIndex: PAGE_COUNT - i + 1 }}
                  animate={
                    arePagesFlipping ? { rotateY: -180 } : { rotateY: 0 }
                  }
                  transition={{
                    duration: 0.85,
                    delay: i * 0.14,
                    ease: [0.45, 0, 0.55, 1],
                  }}
                >
                  <div className="book-face book-page" />
                  <div className="book-face book-page-back" />
                </motion.div>
              ))}

              {/* Front cover — leaf with leather outside + decorated inside */}
              <motion.div
                className="book-leaf"
                style={{ zIndex: 20 }}
                animate={isOpening ? { rotateY: -180 } : { rotateY: 0 }}
                transition={{ duration: 1.25, ease: [0.65, 0, 0.35, 1] }}
              >
                {/* Outside (leather) */}
                <div className="book-face book-cover-front">
                  <motion.div
                    className="school-emblem"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                      stiffness: 160,
                      damping: 12,
                    }}
                  >
                    <span
                      className="material-icons-round text-3xl sm:text-4xl"
                      style={{ color: "#fff8eb" }}
                    >
                      school
                    </span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.65 }}
                  >
                    Catalyst
                    <br />
                    Public School
                  </motion.h1>
                  <motion.p
                    className="tagline"
                    initial={{ opacity: 0, letterSpacing: "0px" }}
                    animate={{ opacity: 1, letterSpacing: "4px" }}
                    transition={{ delay: 0.75, duration: 0.7 }}
                  >
                    Est. 2009
                  </motion.p>
                </div>

                {/* Inside of cover (cream + ornament) — visible once flipped */}
                <div className="book-face book-cover-inside">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isOpening ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-center"
                  >
                    <span
                      className="material-icons-round block mb-2 text-2xl sm:text-4xl"
                      style={{ color: "#a37030" }}
                    >
                      local_library
                    </span>
                    <p
                      className="text-[9px] sm:text-[10px] uppercase mb-1"
                      style={{
                        color: "#84612b",
                        letterSpacing: "0.3em",
                      }}
                    >
                      Ex Libris
                    </p>
                    <p
                      className="text-xs sm:text-sm italic"
                      style={{ color: "#a37030" }}
                    >
                      Catalyst Public School
                    </p>
                    <div
                      className="mt-2 sm:mt-3 h-px w-10 sm:w-12 mx-auto"
                      style={{ background: "rgba(195,144,69,0.5)" }}
                    />
                    <p
                      className="text-[9px] sm:text-[10px] mt-1.5 sm:mt-2 uppercase"
                      style={{
                        color: "#a37030",
                        letterSpacing: "0.25em",
                      }}
                    >
                      Volume I · 2009
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
