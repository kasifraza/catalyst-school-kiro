"use client";

import BookLoader from "@/components/BookLoader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import AcademicCalendar from "@/components/AcademicCalendar";
import SessionTimings from "@/components/SessionTimings";
import SlogansBanner from "@/components/SlogansBanner";
import FacilitiesSection from "@/components/FacilitiesSection";
import AdmissionProcess from "@/components/AdmissionProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomeContent() {
  return (
    <>
      <BookLoader />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <AboutPreview />
        <AcademicCalendar />
        <SessionTimings />
        <SlogansBanner />
        <FacilitiesSection />
        <AdmissionProcess />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
