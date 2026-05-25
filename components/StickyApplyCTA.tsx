"use client";

import { useSyncExternalStore, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const subscribe = () => () => {};
const getSnapshot = () => typeof window !== "undefined" && sessionStorage.getItem("cta-dismissed") !== "1";
const getServerSnapshot = () => false;

export default function StickyApplyCTA() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const dismiss = useCallback(() => {
    sessionStorage.setItem("cta-dismissed", "1");
    // Force re-render by dispatching storage event won't work for same-tab,
    // so we use a simple DOM trick: re-render via state-free approach
    document.getElementById("sticky-cta-root")?.remove();
  }, []);

  return (
    <div id="sticky-cta-root">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed bottom-0 inset-x-0 z-50 md:hidden"
          >
            <div className="flex items-center gap-3 bg-gradient-to-r from-teal-200 to-teal-300 px-4 py-3 shadow-2xl">
              <Link
                href="/admissions"
                className="flex-1 text-center py-2.5 bg-white text-teal-300 rounded-full font-bold shadow-lg text-sm"
              >
                Apply Now
              </Link>
              <button
                onClick={dismiss}
                aria-label="Dismiss"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white"
              >
                <span className="material-icons-round text-lg">close</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
