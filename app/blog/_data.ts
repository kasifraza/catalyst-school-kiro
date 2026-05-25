export interface BlogPost {
  slug: string;
  title: { en: string; hi: string };
  date: string;
  author: string;
  excerpt: { en: string; hi: string };
  body: { en: string; hi: string };
  keywords: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "why-choose-cbse-in-west-champaran",
    title: { en: "Why Choose CBSE in West Champaran?", hi: "पश्चिम चंपारण में CBSE क्यों चुनें?" },
    date: "2026-04-10",
    author: "Dr. Ramesh Prasad",
    excerpt: { en: "Discover why CBSE curriculum offers the best foundation for students in West Champaran, Bihar.", hi: "जानें कि CBSE पाठ्यक्रम पश्चिम चंपारण, बिहार के छात्रों के लिए सर्वोत्तम आधार क्यों प्रदान करता है।" },
    body: { en: "The Central Board of Secondary Education (CBSE) curriculum is designed to provide a balanced and comprehensive education. For students in West Champaran, choosing CBSE means access to a nationally recognized curriculum that prepares them for competitive exams like JEE, NEET, and UPSC. CBSE schools follow NCERT textbooks which are concise and exam-oriented. The continuous and comprehensive evaluation (CCE) system ensures holistic development. At Catalyst Public School, we combine CBSE rigour with local cultural values, offering bilingual instruction and activity-based learning that connects global standards with regional identity.", hi: "केंद्रीय माध्यमिक शिक्षा बोर्ड (CBSE) का पाठ्यक्रम संतुलित और व्यापक शिक्षा प्रदान करने के लिए डिज़ाइन किया गया है। पश्चिम चंपारण के छात्रों के लिए CBSE चुनने का अर्थ है राष्ट्रीय स्तर पर मान्यता प्राप्त पाठ्यक्रम तक पहुंच जो उन्हें JEE, NEET और UPSC जैसी प्रतियोगी परीक्षाओं के लिए तैयार करता है। CBSE स्कूल NCERT की पाठ्यपुस्तकों का पालन करते हैं जो संक्षिप्त और परीक्षा-उन्मुख हैं। कैटालिस्ट पब्लिक स्कूल में, हम CBSE की कठोरता को स्थानीय सांस्कृतिक मूल्यों के साथ जोड़ते हैं।" },
    keywords: ["CBSE West Champaran", "best school Bihar", "CBSE vs state board"],
  },
  {
    slug: "preparing-your-child-for-nursery-admission",
    title: { en: "Preparing Your Child for Nursery Admission", hi: "अपने बच्चे को नर्सरी प्रवेश के लिए तैयार करना" },
    date: "2026-03-20",
    author: "Mrs. Kavita Singh",
    excerpt: { en: "A parent's guide to making nursery admission smooth and stress-free for your little one.", hi: "अपने नन्हे-मुन्ने के लिए नर्सरी प्रवेश को सहज और तनाव-मुक्त बनाने के लिए अभिभावक मार्गदर्शिका।" },
    body: { en: "Starting school is a major milestone for both children and parents. Here are practical tips to prepare your child for nursery admission: 1) Establish a routine — regular sleep and meal times help children adjust to school schedules. 2) Encourage social interaction through playdates and park visits. 3) Practice basic self-help skills like using the washroom and eating independently. 4) Read together daily to build vocabulary and attention span. 5) Visit the school campus beforehand so the environment feels familiar. At Catalyst Public School, our nursery programme uses play-based learning with a gentle transition period of two weeks where parents can stay on campus.", hi: "स्कूल शुरू करना बच्चों और माता-पिता दोनों के लिए एक बड़ा मील का पत्थर है। अपने बच्चे को नर्सरी प्रवेश के लिए तैयार करने के लिए व्यावहारिक सुझाव: 1) एक दिनचर्या स्थापित करें। 2) खेल-तिथियों के माध्यम से सामाजिक संपर्क को प्रोत्साहित करें। 3) बुनियादी स्व-सहायता कौशल का अभ्यास करें। 4) शब्दावली बनाने के लिए प्रतिदिन एक साथ पढ़ें। 5) पहले से स्कूल परिसर का दौरा करें। कैटालिस्ट पब्लिक स्कूल में, हमारा नर्सरी कार्यक्रम खेल-आधारित शिक्षा का उपयोग करता है।" },
    keywords: ["nursery admission tips", "preschool preparation", "school readiness Bihar"],
  },
  {
    slug: "bihar-board-vs-cbse-parents-guide",
    title: { en: "Bihar Board vs CBSE — A Parent's Guide", hi: "बिहार बोर्ड बनाम CBSE — अभिभावक मार्गदर्शिका" },
    date: "2026-02-28",
    author: "Mr. Sunil Kumar",
    excerpt: { en: "An honest comparison of Bihar State Board and CBSE to help parents make an informed decision.", hi: "अभिभावकों को सूचित निर्णय लेने में मदद करने के लिए बिहार राज्य बोर्ड और CBSE की ईमानदार तुलना।" },
    body: { en: "Choosing between Bihar Board and CBSE is one of the most important decisions parents face. Here's an objective comparison: Curriculum — CBSE follows NCERT with a focus on conceptual understanding; Bihar Board uses state-prescribed textbooks with more rote learning. Competitive Exams — CBSE syllabus aligns closely with JEE/NEET patterns. Transferability — CBSE is recognized nationwide, making school transfers easier. Medium of Instruction — Both offer Hindi and English medium. Fee — Bihar Board schools are generally cheaper, but CBSE schools like Catalyst Public School offer value through better infrastructure, trained faculty, and holistic development programmes.", hi: "बिहार बोर्ड और CBSE के बीच चयन अभिभावकों के सामने सबसे महत्वपूर्ण निर्णयों में से एक है। एक वस्तुनिष्ठ तुलना: पाठ्यक्रम — CBSE अवधारणात्मक समझ पर ध्यान केंद्रित करता है; बिहार बोर्ड में अधिक रटने पर जोर है। प्रतियोगी परीक्षाएं — CBSE पाठ्यक्रम JEE/NEET पैटर्न से मेल खाता है। स्थानांतरणीयता — CBSE राष्ट्रव्यापी मान्यता प्राप्त है। शुल्क — बिहार बोर्ड स्कूल आम तौर पर सस्ते हैं, लेकिन कैटालिस्ट पब्लिक स्कूल जैसे CBSE स्कूल बेहतर बुनियादी ढांचे के माध्यम से मूल्य प्रदान करते हैं।" },
    keywords: ["Bihar Board vs CBSE", "CBSE school Bihar", "board comparison parents"],
  },
];
