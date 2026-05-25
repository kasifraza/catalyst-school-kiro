"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import { useLanguage } from "@/context/LanguageContext";

type GalleryImage = {
  src: string;
  alt: string;
  album: string;
  category: string;
  date: string;
  caption: { en: string; hi: string };
};

const galleryImages: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80", alt: "Annual Day celebration at Catalyst Public School", album: "Annual Day", category: "events", date: "2024-12-23", caption: { en: "Annual Day 2024 — Cultural performances", hi: "वार्षिक दिवस 2024 — सांस्कृतिक प्रस्तुतियाँ" } },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80", alt: "Annual Day stage performance", album: "Annual Day", category: "events", date: "2024-12-23", caption: { en: "Students performing on stage", hi: "मंच पर छात्रों का प्रदर्शन" } },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", alt: "Sports Day athletics event", album: "Sports Day", category: "sports", date: "2024-11-12", caption: { en: "Sports Day 2024 — Track events", hi: "खेल दिवस 2024 — ट्रैक इवेंट" } },
  { src: "https://images.unsplash.com/photo-1564429238961-bf8f8be2a4c5?w=600&q=80", alt: "Sports Day relay race", album: "Sports Day", category: "sports", date: "2024-11-12", caption: { en: "Inter-house relay race", hi: "अंतर-सदन रिले दौड़" } },
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", alt: "Independence Day flag hoisting", album: "Independence Day", category: "events", date: "2024-08-15", caption: { en: "Independence Day celebration", hi: "स्वतंत्रता दिवस समारोह" } },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80", alt: "Foundation Day ceremony", album: "Foundation Day", category: "events", date: "2024-04-01", caption: { en: "Foundation Day — 15th Anniversary", hi: "स्थापना दिवस — 15वीं वर्षगांठ" } },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", alt: "Students in classroom", album: "Daily Life", category: "students", date: "2024-09-10", caption: { en: "Classroom learning session", hi: "कक्षा शिक्षण सत्र" } },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80", alt: "Smart classroom session", album: "Daily Life", category: "classroom", date: "2024-10-05", caption: { en: "Smart classroom in action", hi: "स्मार्ट कक्षा सत्र" } },
  { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80", alt: "Science lab experiment", album: "Daily Life", category: "classroom", date: "2024-07-20", caption: { en: "Science lab practical session", hi: "विज्ञान प्रयोगशाला प्रैक्टिकल" } },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", alt: "Students learning together", album: "Daily Life", category: "students", date: "2024-08-22", caption: { en: "Group study and collaboration", hi: "समूह अध्ययन और सहयोग" } },
  { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80", alt: "Teacher conducting class", album: "Daily Life", category: "classroom", date: "2024-09-15", caption: { en: "Interactive teaching session", hi: "इंटरैक्टिव शिक्षण सत्र" } },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80", alt: "Campus aerial view", album: "Daily Life", category: "campus", date: "2024-06-01", caption: { en: "Campus overview", hi: "परिसर का दृश्य" } },
];

const albums = ["All", "Annual Day", "Sports Day", "Independence Day", "Foundation Day", "Daily Life"];

const imageGalleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Catalyst Public School Campus Gallery",
  description: "Photo gallery showcasing campus life, events, and activities at Catalyst Public School, West Champaran",
  url: "https://catalystpublicschool.in/gallery",
  image: galleryImages.map((img) => ({
    "@type": "ImageObject",
    contentUrl: img.src,
    name: img.alt,
    datePublished: img.date,
    description: img.caption.en,
  })),
};

export default function GalleryContent() {
  const { t, language } = useLanguage();
  const [albumFilter, setAlbumFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filtered = albumFilter === "All" ? galleryImages : galleryImages.filter((img) => img.album === albumFilter);

  return (
    <>
      <Navbar />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }} />

        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1920&q=80" alt="Catalyst Public School campus gallery showcase" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-200/80 to-teal-100/90" />
          <div className="relative text-center text-white z-10">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black mb-4">{t("Gallery", "गैलरी")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl text-champagne-500">{t("Moments That Define Us", "वे पल जो हमें परिभाषित करते हैं")}</motion.p>
          </div>
        </section>

        {/* Filter & Gallery */}
        <section className="py-24 bg-champagne-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Album filter chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {albums.map((album) => (
                <motion.button
                  key={album}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAlbumFilter(album)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${albumFilter === album ? "bg-teal-500 text-white shadow-lg" : "bg-white text-black-600 hover:bg-teal-900 border border-khaki-700"}`}
                >
                  {album === "All" ? t("All", "सभी") : album}
                </motion.button>
              ))}
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
              <AnimatePresence>
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    onClick={() => setSelectedImage(img)}
                    className="cursor-pointer group rounded-2xl overflow-hidden shadow-lg mb-6 break-inside-avoid"
                  >
                    <div className="relative aspect-[4/3] sm:aspect-auto sm:h-auto">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={600}
                        height={400}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                        <p className="text-white text-sm font-medium">{img.caption[language]}</p>
                        <p className="text-white/70 text-xs mt-1">{img.date} · {img.album}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer">
              <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }} className="relative max-w-full max-h-[90vh] w-[1200px] h-[800px]">
                <Image src={selectedImage.src.replace("w=600", "w=1200")} alt={selectedImage.alt} fill sizes="90vw" className="object-contain rounded-lg" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-medium">{selectedImage.caption[language]}</p>
                  <p className="text-white/70 text-sm">{selectedImage.date} · {selectedImage.album}</p>
                </div>
              </motion.div>
              <button className="absolute top-6 right-6 text-white" aria-label="Close">
                <span className="material-icons-round text-4xl">close</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <StickyApplyCTA />
    </>
  );
}
