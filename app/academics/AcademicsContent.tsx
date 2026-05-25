"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import { useLanguage } from "@/context/LanguageContext";

const stages = [
  {
    id: "pre-primary",
    label: { en: "Pre-primary", hi: "प्री-प्राइमरी" },
    icon: "child_care",
    subjects: { en: ["English", "Hindi", "EVS", "Numeracy", "Art & Craft", "Music & Movement"], hi: ["अंग्रेजी", "हिंदी", "पर्यावरण", "गणना", "कला और शिल्प", "संगीत और गति"] },
    pedagogy: { en: "Play-based and activity-driven learning with Montessori-inspired methods. Focus on sensory development, language acquisition, and social skills.", hi: "मॉन्टेसरी-प्रेरित विधियों के साथ खेल-आधारित और गतिविधि-संचालित शिक्षा। संवेदी विकास, भाषा अधिग्रहण और सामाजिक कौशल पर ध्यान।" },
    schedule: { en: ["Circle Time", "Free Play", "Language", "Snack", "Numeracy", "Art/Music", "Story Time"], hi: ["सर्कल टाइम", "फ्री प्ले", "भाषा", "नाश्ता", "गणना", "कला/संगीत", "कहानी"] },
  },
  {
    id: "primary",
    label: { en: "Primary (1-5)", hi: "प्राथमिक (1-5)" },
    icon: "auto_stories",
    subjects: { en: ["English", "Hindi", "Mathematics", "EVS/Science", "Social Studies", "Computer", "Art", "Physical Ed."], hi: ["अंग्रेजी", "हिंदी", "गणित", "पर्यावरण/विज्ञान", "सामाजिक अध्ययन", "कंप्यूटर", "कला", "शारीरिक शिक्षा"] },
    pedagogy: { en: "Activity-based learning with emphasis on conceptual understanding. Regular projects, group work, and experiential learning through field trips.", hi: "वैचारिक समझ पर जोर के साथ गतिविधि-आधारित शिक्षा। नियमित परियोजनाएं, समूह कार्य और फील्ड ट्रिप के माध्यम से अनुभवात्मक शिक्षा।" },
    schedule: { en: ["Assembly", "English", "Mathematics", "Hindi", "Break", "Science/SST", "Computer/Art", "Sports"], hi: ["सभा", "अंग्रेजी", "गणित", "हिंदी", "अवकाश", "विज्ञान/SST", "कंप्यूटर/कला", "खेल"] },
  },
  {
    id: "middle",
    label: { en: "Middle (6-8)", hi: "माध्यमिक (6-8)" },
    icon: "science",
    subjects: { en: ["English", "Hindi", "Sanskrit", "Mathematics", "Science", "Social Science", "Computer Science", "Art/Music"], hi: ["अंग्रेजी", "हिंदी", "संस्कृत", "गणित", "विज्ञान", "सामाजिक विज्ञान", "कंप्यूटर विज्ञान", "कला/संगीत"] },
    pedagogy: { en: "Subject specialization with hands-on lab experiments, project-based learning, and critical thinking exercises. Introduction to research methodology.", hi: "प्रयोगशाला प्रयोगों, परियोजना-आधारित शिक्षा और आलोचनात्मक सोच अभ्यासों के साथ विषय विशेषज्ञता।" },
    schedule: { en: ["Assembly", "Maths", "Science", "English", "Break", "Hindi/Sanskrit", "SST", "Lab/Sports"], hi: ["सभा", "गणित", "विज्ञान", "अंग्रेजी", "अवकाश", "हिंदी/संस्कृत", "SST", "लैब/खेल"] },
  },
  {
    id: "secondary",
    label: { en: "Secondary (9-10)", hi: "माध्यमिक (9-10)" },
    icon: "psychology",
    subjects: { en: ["English", "Hindi", "Mathematics", "Science", "Social Science", "IT/AI", "Physical Ed.", "Art Education"], hi: ["अंग्रेजी", "हिंदी", "गणित", "विज्ञान", "सामाजिक विज्ञान", "IT/AI", "शारीरिक शिक्षा", "कला शिक्षा"] },
    pedagogy: { en: "Board exam preparation with comprehensive study material, regular assessments, and personalized guidance. Focus on NCERT mastery and application-based learning.", hi: "व्यापक अध्ययन सामग्री, नियमित मूल्यांकन और व्यक्तिगत मार्गदर्शन के साथ बोर्ड परीक्षा की तैयारी।" },
    schedule: { en: ["Maths", "Science", "English", "Break", "SST", "Hindi", "IT/AI", "Revision/Sports"], hi: ["गणित", "विज्ञान", "अंग्रेजी", "अवकाश", "SST", "हिंदी", "IT/AI", "पुनरावृत्ति/खेल"] },
  },
  {
    id: "senior",
    label: { en: "Senior Sec (11-12)", hi: "उच्च माध्यमिक (11-12)" },
    icon: "biotech",
    subjects: { en: ["Physics", "Chemistry", "Maths/Biology", "English", "CS/Accountancy", "Physical Ed."], hi: ["भौतिकी", "रसायन", "गणित/जीवविज्ञान", "अंग्रेजी", "CS/लेखाशास्त्र", "शारीरिक शिक्षा"] },
    pedagogy: { en: "Stream-based specialization (Science/Commerce) with career counseling, competitive exam preparation (JEE/NEET), and practical lab sessions.", hi: "करियर काउंसलिंग, प्रतियोगी परीक्षा तैयारी (JEE/NEET) और प्रैक्टिकल लैब सत्रों के साथ स्ट्रीम-आधारित विशेषज्ञता।" },
    schedule: { en: ["Physics", "Chemistry", "Maths/Bio", "Break", "English", "CS/Accts", "Lab/PT", "Self-study"], hi: ["भौतिकी", "रसायन", "गणित/जीव", "अवकाश", "अंग्रेजी", "CS/लेखा", "लैब/PT", "स्वाध्याय"] },
  },
];

const coCurricular = [
  { icon: "sports_cricket", title: { en: "Sports", hi: "खेल" }, items: { en: "Cricket, Football, Athletics, Badminton, Kabaddi, Yoga", hi: "क्रिकेट, फुटबॉल, एथलेटिक्स, बैडमिंटन, कबड्डी, योग" } },
  { icon: "palette", title: { en: "Arts", hi: "कला" }, items: { en: "Drawing, Painting, Sculpture, Dance, Drama, Music", hi: "चित्रकला, पेंटिंग, मूर्तिकला, नृत्य, नाटक, संगीत" } },
  { icon: "groups", title: { en: "Clubs", hi: "क्लब" }, items: { en: "Science Club, Eco Club, Literary Club, Math Club, Robotics", hi: "विज्ञान क्लब, इको क्लब, साहित्यिक क्लब, गणित क्लब, रोबोटिक्स" } },
  { icon: "emoji_events", title: { en: "Olympiads", hi: "ओलंपियाड" }, items: { en: "SOF, NTSE, Science Olympiad, Math Olympiad, Spell Bee", hi: "SOF, NTSE, विज्ञान ओलंपियाड, गणित ओलंपियाड, स्पेल बी" } },
];

export default function AcademicsContent() {
  const { t, language } = useLanguage();
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80" alt="Catalyst Public School academics - books and education resources" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-200/80 to-teal-100/90" />
          <div className="relative text-center text-white z-10">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black mb-4">{t("Academics", "शिक्षा")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl text-champagne-500">{t("CBSE Curriculum | Nursery to Class XII", "CBSE पाठ्यक्रम | नर्सरी से कक्षा XII")}</motion.p>
          </div>
        </section>

        {/* Stage-tabbed Curriculum */}
        <section className="py-24 bg-champagne-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("Curriculum by Stage", "चरण-वार पाठ्यक्रम")}</h2>
              <p className="text-lg text-black-700 max-w-2xl mx-auto">{t("Explore our comprehensive CBSE curriculum designed for each developmental stage", "प्रत्येक विकासात्मक चरण के लिए डिज़ाइन किए गए हमारे व्यापक CBSE पाठ्यक्रम का अन्वेषण करें")}</p>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {stages.map((s, i) => (
                <button key={s.id} onClick={() => setActiveStage(i)} className={`px-4 py-2.5 rounded-full font-medium text-sm transition-all ${activeStage === i ? "bg-teal-500 text-white shadow-lg" : "bg-white text-black-600 hover:bg-teal-900 border border-champagne-800/50"}`}>
                  <span className="material-icons-round text-sm align-middle mr-1">{s.icon}</span>
                  {s.label[language]}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div key={stage.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="grid md:grid-cols-3 gap-6">
                {/* Subjects */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-champagne-800/50">
                  <h4 className="font-bold text-black text-lg mb-4 flex items-center gap-2">
                    <span className="material-icons-round text-teal-500">menu_book</span>
                    {t("Subjects", "विषय")}
                  </h4>
                  <ul className="space-y-2">
                    {stage.subjects[language].map((sub, i) => (
                      <li key={i} className="flex items-center gap-2 text-black-700 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Pedagogy */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-champagne-800/50">
                  <h4 className="font-bold text-black text-lg mb-4 flex items-center gap-2">
                    <span className="material-icons-round text-teal-500">lightbulb</span>
                    {t("Pedagogy", "शिक्षण पद्धति")}
                  </h4>
                  <p className="text-black-700 text-sm leading-relaxed">{stage.pedagogy[language]}</p>
                </div>
                {/* Sample Schedule */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-champagne-800/50">
                  <h4 className="font-bold text-black text-lg mb-4 flex items-center gap-2">
                    <span className="material-icons-round text-teal-500">schedule</span>
                    {t("Sample Day", "नमूना दिन")}
                  </h4>
                  <ol className="space-y-2">
                    {stage.schedule[language].map((slot, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-black-700">
                        <span className="w-6 h-6 rounded-full bg-champagne-800/40 flex items-center justify-center text-xs font-bold text-black shrink-0">{i + 1}</span>
                        {slot}
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Cross-link Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Link href="/academics/results" className="block bg-gradient-to-br from-teal-200 to-teal-300 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow group">
                  <span className="material-icons-round text-4xl mb-3 block">leaderboard</span>
                  <h3 className="text-2xl font-bold mb-2">{t("Board Results", "बोर्ड परिणाम")}</h3>
                  <p className="text-white/90 text-sm">{t("View Class X & XII results, toppers, and pass percentages", "कक्षा X और XII के परिणाम, टॉपर्स और उत्तीर्ण प्रतिशत देखें")}</p>
                  <span className="material-icons-round mt-4 inline-block group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Link href="/faculty" className="block bg-gradient-to-br from-champagne-300 to-champagne-200 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow group">
                  <span className="material-icons-round text-4xl mb-3 block">school</span>
                  <h3 className="text-2xl font-bold mb-2">{t("Our Faculty", "हमारे शिक्षक")}</h3>
                  <p className="text-white/90 text-sm">{t("Meet our qualified and experienced teaching staff", "हमारे योग्य और अनुभवी शिक्षण स्टाफ से मिलें")}</p>
                  <span className="material-icons-round mt-4 inline-block group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Co-curricular Grid */}
        <section className="py-24 bg-champagne-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("Co-Curricular Activities", "सह-पाठ्यचर्या गतिविधियाँ")}</h2>
              <p className="text-lg text-black-700">{t("Holistic development beyond the classroom", "कक्षा से परे समग्र विकास")}</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coCurricular.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }} className="bg-white rounded-2xl p-6 shadow-lg border border-champagne-800/50 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-4">
                    <span className="material-icons-round text-white text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="font-bold text-black text-lg mb-2">{item.title[language]}</h4>
                  <p className="text-black-700 text-sm">{item.items[language]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment & Exam Pattern */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("Assessment Pattern", "मूल्यांकन पद्धति")}</h2>
                <p className="text-lg text-black-700">{t("Continuous and comprehensive evaluation as per CBSE guidelines", "CBSE दिशानिर्देशों के अनुसार सतत और व्यापक मूल्यांकन")}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-champagne-900 rounded-2xl p-6 border border-champagne-800/50">
                  <h4 className="font-bold text-black text-lg mb-4 flex items-center gap-2">
                    <span className="material-icons-round text-teal-500">assignment</span>
                    {t("Term 1 (April–September)", "सत्र 1 (अप्रैल–सितंबर)")}
                  </h4>
                  <ul className="space-y-2 text-sm text-black-700">
                    <li className="flex justify-between"><span>{t("Periodic Test 1", "आवधिक परीक्षा 1")}</span><span className="font-semibold">10%</span></li>
                    <li className="flex justify-between"><span>{t("Periodic Test 2", "आवधिक परीक्षा 2")}</span><span className="font-semibold">10%</span></li>
                    <li className="flex justify-between"><span>{t("Mid-Term Exam", "मध्य-कालीन परीक्षा")}</span><span className="font-semibold">30%</span></li>
                  </ul>
                </div>
                <div className="bg-champagne-900 rounded-2xl p-6 border border-champagne-800/50">
                  <h4 className="font-bold text-black text-lg mb-4 flex items-center gap-2">
                    <span className="material-icons-round text-teal-500">assignment_turned_in</span>
                    {t("Term 2 (October–March)", "सत्र 2 (अक्टूबर–मार्च)")}
                  </h4>
                  <ul className="space-y-2 text-sm text-black-700">
                    <li className="flex justify-between"><span>{t("Periodic Test 3", "आवधिक परीक्षा 3")}</span><span className="font-semibold">10%</span></li>
                    <li className="flex justify-between"><span>{t("Notebook & Subject Enrichment", "नोटबुक और विषय संवर्धन")}</span><span className="font-semibold">10%</span></li>
                    <li className="flex justify-between"><span>{t("Annual Exam", "वार्षिक परीक्षा")}</span><span className="font-semibold">30%</span></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-24 bg-champagne-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("Our Facilities", "हमारी सुविधाएं")}</h2>
              <p className="text-lg text-black-700 max-w-2xl mx-auto">{t("State-of-the-art infrastructure for comprehensive learning", "व्यापक शिक्षा के लिए अत्याधुनिक बुनियादी ढांचा")}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "computer", title: t("Computer Lab", "कंप्यूटर लैब"), img: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&q=80" },
                { icon: "science", title: t("Science Lab", "विज्ञान प्रयोगशाला"), img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80" },
                { icon: "local_library", title: t("Library", "पुस्तकालय"), img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&q=80" },
                { icon: "sports_cricket", title: t("Sports Ground", "खेल मैदान"), img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" },
                { icon: "music_note", title: t("Music Room", "संगीत कक्ष"), img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80" },
                { icon: "brush", title: t("Art Studio", "कला स्टूडियो"), img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80" },
              ].map((facility, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group rounded-2xl overflow-hidden shadow-lg border border-champagne-800/50">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={facility.img} alt={`${facility.title} facility at Catalyst Public School`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                      <span className="material-icons-round">{facility.icon}</span>
                      <span className="font-bold text-lg">{facility.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyApplyCTA />
    </>
  );
}
