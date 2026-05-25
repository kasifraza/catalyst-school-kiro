"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();

  const team = [
    { name: t("Dr. Ramesh Prasad", "डॉ. रमेश प्रसाद"), role: t("Principal", "प्रधानाचार्य"), initials: "RP" },
    { name: t("Mrs. Kavita Singh", "श्रीमती कविता सिंह"), role: t("Vice Principal", "उप-प्रधानाचार्य"), initials: "KS" },
    { name: t("Mr. Sunil Kumar", "श्री सुनील कुमार"), role: t("Academic Head", "शैक्षणिक प्रमुख"), initials: "SK" },
    { name: t("Mrs. Anita Devi", "श्रीमती अनीता देवी"), role: t("Admin Head", "प्रशासनिक प्रमुख"), initials: "AD" },
  ];

  const awards = [
    { icon: "emoji_events", title: t("Best CBSE School Award 2022", "सर्वश्रेष्ठ CBSE स्कूल पुरस्कार 2022"), desc: t("District-level recognition", "जिला स्तरीय मान्यता") },
    { icon: "military_tech", title: t("100% Board Results 2024", "100% बोर्ड परिणाम 2024"), desc: t("Class X & XII pass percentage", "कक्षा X और XII उत्तीर्ण प्रतिशत") },
    { icon: "workspace_premium", title: t("Green School Certification", "ग्रीन स्कूल प्रमाणन"), desc: t("Eco-friendly campus practices", "पर्यावरण अनुकूल परिसर") },
    { icon: "sports_score", title: t("State Sports Champions 2023", "राज्य खेल चैंपियन 2023"), desc: t("Athletics & cricket", "एथलेटिक्स और क्रिकेट") },
    { icon: "science", title: t("Science Olympiad Winners", "विज्ञान ओलंपियाड विजेता"), desc: t("National-level qualifiers", "राष्ट्रीय स्तर के क्वालीफायर") },
    { icon: "diversity_3", title: t("1500+ Alumni Network", "1500+ पूर्व छात्र नेटवर्क"), desc: t("Across India and abroad", "भारत और विदेश में") },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80"
            alt="Catalyst Public School campus building and grounds"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-200/80 to-teal-100/90" />
          <div className="relative text-center text-white z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-4"
            >
              {t("About Us", "हमारे बारे में")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-champagne-500"
            >
              {t("Our Story, Our Mission, Our Vision", "हमारी कहानी, हमारा मिशन, हमारा विज़न")}
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-champagne-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-10 shadow-xl border border-champagne-800/50">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6">
                  <span className="material-icons-round text-white text-3xl">flag</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">{t("Our Mission", "हमारा मिशन")}</h3>
                <p className="text-black-700 leading-relaxed text-lg">
                  {t("To provide accessible, high-quality education that empowers students from West Champaran and surrounding areas to become confident, knowledgeable, and responsible citizens who contribute positively to society.", "पश्चिम चंपारण और आसपास के क्षेत्रों के छात्रों को सुलभ, उच्च गुणवत्ता वाली शिक्षा प्रदान करना जो उन्हें आत्मविश्वासी, ज्ञानवान और जिम्मेदार नागरिक बनने के लिए सशक्त बनाती है।")}
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-10 shadow-xl border border-champagne-800/50">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-champagne-300 to-champagne-500 flex items-center justify-center mb-6">
                  <span className="material-icons-round text-white text-3xl">visibility</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">{t("Our Vision", "हमारा विज़न")}</h3>
                <p className="text-black-700 leading-relaxed text-lg">
                  {t("To be the leading educational institution in Bihar that nurtures innovation, creativity, and moral values while preparing students for global challenges and opportunities.", "बिहार में अग्रणी शैक्षणिक संस्थान बनना जो नवाचार, रचनात्मकता और नैतिक मूल्यों का पोषण करता है और छात्रों को वैश्विक चुनौतियों के लिए तैयार करता है।")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center shadow-xl overflow-hidden">
                  <span className="material-icons-round text-white" style={{ fontSize: 96 }}>person</span>
                </div>
                <div className="mt-4 h-12 w-36 bg-champagne-900 rounded-lg flex items-center justify-center">
                  <span className="text-sm italic text-black-700">{t("Signature", "हस्ताक्षर")}</span>
                </div>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 bg-teal-900/50 text-teal-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                  <span className="material-icons-round text-sm">record_voice_over</span>
                  {t("Principal's Message", "प्रधानाचार्य का संदेश")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">{t("Dr. Ramesh Prasad", "डॉ. रमेश प्रसाद")}</h2>
                <div className="space-y-4 text-black-700 leading-relaxed text-lg">
                  <p>{t("Dear Parents and Students, it gives me immense pleasure to welcome you to Catalyst Public School. Our institution stands as a beacon of quality education in West Champaran, committed to nurturing young minds with values, knowledge, and skills for the 21st century.", "प्रिय अभिभावकों और छात्रों, मुझे आपका कैटालिस्ट पब्लिक स्कूल में स्वागत करते हुए अत्यंत प्रसन्नता हो रही है। हमारा संस्थान पश्चिम चंपारण में गुणवत्तापूर्ण शिक्षा का प्रतीक है।")}</p>
                  <p>{t("We believe every child is unique and deserves an environment that fosters curiosity, creativity, and character. Our dedicated faculty, modern infrastructure, and holistic curriculum ensure that students are prepared not just for examinations, but for life.", "हम मानते हैं कि हर बच्चा अद्वितीय है और एक ऐसे वातावरण का हकदार है जो जिज्ञासा, रचनात्मकता और चरित्र को बढ़ावा दे। हमारे समर्पित शिक्षक, आधुनिक बुनियादी ढांचा और समग्र पाठ्यक्रम सुनिश्चित करते हैं कि छात्र न केवल परीक्षाओं के लिए बल्कि जीवन के लिए तैयार हों।")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust/Society & CBSE Affiliation */}
        <section className="py-24 bg-champagne-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-xl border border-champagne-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <span className="material-icons-round text-white">account_balance</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black">{t("Trust / Society", "ट्रस्ट / सोसाइटी")}</h3>
                </div>
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-champagne-800/30 pb-3">
                    <dt className="text-black-700 font-medium">{t("Society Name", "सोसाइटी का नाम")}</dt>
                    <dd className="font-semibold text-black">Catalyst Educational Trust</dd>
                  </div>
                  <div className="flex justify-between border-b border-champagne-800/30 pb-3">
                    <dt className="text-black-700 font-medium">{t("Registration No.", "पंजीकरण संख्या")}</dt>
                    <dd className="font-semibold text-black">SOC/WC/2009/1234</dd>
                  </div>
                  <div className="flex justify-between border-b border-champagne-800/30 pb-3">
                    <dt className="text-black-700 font-medium">{t("Established", "स्थापित")}</dt>
                    <dd className="font-semibold text-black">2009</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-black-700 font-medium">{t("School Code", "स्कूल कोड")}</dt>
                    <dd className="font-semibold text-black">65432</dd>
                  </div>
                </dl>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 shadow-xl border border-champagne-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-champagne-300 to-champagne-500 flex items-center justify-center">
                    <span className="material-icons-round text-white">verified</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black">{t("CBSE Affiliation", "CBSE संबद्धता")}</h3>
                </div>
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-champagne-800/30 pb-3">
                    <dt className="text-black-700 font-medium">{t("Affiliation No.", "संबद्धता संख्या")}</dt>
                    <dd className="font-semibold text-black">330XXX</dd>
                  </div>
                  <div className="flex justify-between border-b border-champagne-800/30 pb-3">
                    <dt className="text-black-700 font-medium">{t("School Code", "स्कूल कोड")}</dt>
                    <dd className="font-semibold text-black">65432</dd>
                  </div>
                  <div className="flex justify-between border-b border-champagne-800/30 pb-3">
                    <dt className="text-black-700 font-medium">{t("Board", "बोर्ड")}</dt>
                    <dd className="font-semibold text-black">CBSE, New Delhi</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-black-700 font-medium">{t("Valid Up To", "वैध तक")}</dt>
                    <dd className="font-semibold text-black">2028</dd>
                  </div>
                </dl>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("Our Journey", "हमारी यात्रा")}</h2>
              <p className="text-lg text-black-700 max-w-2xl mx-auto">{t("From humble beginnings to becoming a beacon of education in West Champaran", "विनम्र शुरुआत से पश्चिम चंपारण में शिक्षा का प्रतीक बनने तक")}</p>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-800 hidden md:block" />
              {[
                { year: "2009", title: t("Foundation", "स्थापना"), desc: t("School established with 50 students and a vision to transform education in the region.", "50 छात्रों के साथ स्कूल की स्थापना और क्षेत्र में शिक्षा को बदलने का विज़न।") },
                { year: "2012", title: t("CBSE Affiliation", "CBSE संबद्धता"), desc: t("Received CBSE affiliation, marking a milestone in our academic journey.", "CBSE संबद्धता प्राप्त की, हमारी शैक्षणिक यात्रा में एक मील का पत्थर।") },
                { year: "2016", title: t("Campus Expansion", "परिसर विस्तार"), desc: t("New building with smart classrooms, science labs, and sports facilities.", "स्मार्ट कक्षाओं, विज्ञान प्रयोगशालाओं और खेल सुविधाओं के साथ नई इमारत।") },
                { year: "2020", title: t("Digital Transformation", "डिजिटल परिवर्तन"), desc: t("Embraced technology with online learning platforms and digital infrastructure.", "ऑनलाइन शिक्षण प्लेटफॉर्म और डिजिटल बुनियादी ढांचे के साथ प्रौद्योगिकी को अपनाया।") },
                { year: "2024", title: t("1500+ Students", "1500+ छात्र"), desc: t("Growing strong with over 1500 students and 80+ dedicated teachers.", "1500 से अधिक छात्रों और 80+ समर्पित शिक्षकों के साथ मजबूती से बढ़ रहे हैं।") },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`flex items-center gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-champagne-900 rounded-2xl p-6 inline-block">
                      <span className="text-teal-500 font-black text-2xl">{item.year}</span>
                      <h4 className="text-xl font-bold text-black mt-2">{item.title}</h4>
                      <p className="text-black-700 mt-2">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-teal-500 items-center justify-center z-10 shrink-0">
                    <span className="material-icons-round text-white">circle</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Milestones */}
        <section className="py-24 bg-champagne-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("Awards & Milestones", "पुरस्कार और उपलब्धियाँ")}</h2>
              <p className="text-lg text-black-700">{t("Recognitions that inspire us to do better", "मान्यताएँ जो हमें बेहतर करने के लिए प्रेरित करती हैं")}</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }} className="bg-white rounded-2xl p-6 shadow-lg border border-champagne-800/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-champagne-300 to-champagne-500 flex items-center justify-center mb-4">
                    <span className="material-icons-round text-white">{award.icon}</span>
                  </div>
                  <h4 className="font-bold text-black text-lg mb-1">{award.title}</h4>
                  <p className="text-black-700 text-sm">{award.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-gradient-to-b from-champagne-900 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("Our Leadership", "हमारा नेतृत्व")}</h2>
              <p className="text-lg text-black-700">{t("Meet the dedicated team behind our success", "हमारी सफलता के पीछे की समर्पित टीम से मिलें")}</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="text-center group">
                  <div className="relative mb-6 inline-block">
                    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto border-4 border-teal-800 group-hover:border-teal-500 transition-colors bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">{member.initials}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-black">{member.name}</h4>
                  <p className="text-teal-500 font-medium">{member.role}</p>
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
