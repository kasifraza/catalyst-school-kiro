"use client";

import { useState } from "react";

interface LazyMapProps {
  src: string;
  title: string;
}

export default function LazyMap({ src, title }: LazyMapProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="w-full h-full relative flex items-center justify-center bg-teal-900 cursor-pointer group"
      aria-label={`Click to load ${title}`}
    >
      <svg
        viewBox="0 0 200 160"
        className="absolute inset-0 w-full h-full opacity-30"
        aria-hidden="true"
      >
        <rect width="200" height="160" fill="#e6eae7" />
        <path d="M20 140 L60 60 L100 100 L140 40 L180 120 Z" fill="#b4c0b7" />
        <circle cx="150" cy="30" r="12" fill="#d8b887" />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-1">
        <span className="material-icons-round text-champagne-400 text-2xl group-hover:scale-110 transition-transform">
          location_on
        </span>
        <span className="text-xs text-champagne-600 font-medium">
          Click to load map
        </span>
      </div>
    </button>
  );
}
