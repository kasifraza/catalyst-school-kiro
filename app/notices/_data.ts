export interface Notice {
  slug: string;
  title: { en: string; hi: string };
  category: string;
  date: string;
  summary: { en: string; hi: string };
  body: { en: string; hi: string };
}

export const notices: Notice[] = [
  {
    slug: "admissions-open-2026-27",
    title: { en: "Admissions Open for Session 2026–27", hi: "सत्र 2026–27 के लिए प्रवेश खुला" },
    category: "Admissions",
    date: "2026-04-15",
    summary: { en: "Applications are invited for Nursery to Class XI for the academic session 2026–27.", hi: "शैक्षणिक सत्र 2026–27 के लिए नर्सरी से कक्षा XI तक आवेदन आमंत्रित हैं।" },
    body: { en: "Catalyst Public School invites applications for admission to Nursery through Class XI for the academic session 2026–27. The registration process is now open. Parents may collect forms from the school office or download from the website. Last date for submission: 30 May 2026. For queries, contact the admissions office at +91-98765-43210.", hi: "कैटालिस्ट पब्लिक स्कूल शैक्षणिक सत्र 2026–27 के लिए नर्सरी से कक्षा XI तक प्रवेश हेतु आवेदन आमंत्रित करता है। पंजीकरण प्रक्रिया अब खुली है। अभिभावक स्कूल कार्यालय से फॉर्म प्राप्त कर सकते हैं या वेबसाइट से डाउनलोड कर सकते हैं। जमा करने की अंतिम तिथि: 30 मई 2026। प्रश्नों के लिए प्रवेश कार्यालय से +91-98765-43210 पर संपर्क करें।" },
  },
  {
    slug: "summer-vacation-holiday-list",
    title: { en: "Summer Vacation & Holiday List 2026", hi: "ग्रीष्मकालीन अवकाश एवं छुट्टी सूची 2026" },
    category: "Holidays",
    date: "2026-05-01",
    summary: { en: "Summer vacation from 20 May to 30 June 2026. Complete holiday list enclosed.", hi: "20 मई से 30 जून 2026 तक ग्रीष्मकालीन अवकाश। पूर्ण छुट्टी सूची संलग्न।" },
    body: { en: "Dear Parents, please note that the school will remain closed for summer vacation from 20 May 2026 to 30 June 2026. Classes will resume on 1 July 2026. The complete holiday list for the academic year is available at the school office. Students are encouraged to complete their holiday homework during this period.", hi: "प्रिय अभिभावक, कृपया ध्यान दें कि विद्यालय 20 मई 2026 से 30 जून 2026 तक ग्रीष्मकालीन अवकाश के लिए बंद रहेगा। कक्षाएं 1 जुलाई 2026 से पुनः प्रारंभ होंगी। शैक्षणिक वर्ष की पूर्ण छुट्टी सूची विद्यालय कार्यालय में उपलब्ध है।" },
  },
  {
    slug: "annual-sports-day-2026",
    title: { en: "Annual Sports Day — 15 March 2026", hi: "वार्षिक खेल दिवस — 15 मार्च 2026" },
    category: "Events",
    date: "2026-03-01",
    summary: { en: "Annual Sports Day will be held on 15 March. All parents are cordially invited.", hi: "वार्षिक खेल दिवस 15 मार्च को आयोजित किया जाएगा। सभी अभिभावकों को सादर आमंत्रित किया जाता है।" },
    body: { en: "The Annual Sports Day of Catalyst Public School will be held on 15 March 2026 at the school grounds. Events include track and field, relay races, and inter-house competitions. Chief Guest: District Magistrate, West Champaran. Reporting time: 8:00 AM. All parents and guardians are cordially invited to attend and encourage the students.", hi: "कैटालिस्ट पब्लिक स्कूल का वार्षिक खेल दिवस 15 मार्च 2026 को विद्यालय मैदान में आयोजित किया जाएगा। कार्यक्रमों में ट्रैक एंड फील्ड, रिले दौड़ और अंतर-सदन प्रतियोगिताएं शामिल हैं। मुख्य अतिथि: जिला मजिस्ट्रेट, पश्चिम चंपारण। रिपोर्टिंग समय: सुबह 8:00 बजे।" },
  },
  {
    slug: "parent-teacher-meeting-april",
    title: { en: "Parent-Teacher Meeting — 20 April 2026", hi: "अभिभावक-शिक्षक बैठक — 20 अप्रैल 2026" },
    category: "Meeting",
    date: "2026-04-10",
    summary: { en: "PTM scheduled for 20 April to discuss student progress for Term 2.", hi: "छात्र प्रगति पर चर्चा हेतु 20 अप्रैल को PTM निर्धारित।" },
    body: { en: "A Parent-Teacher Meeting is scheduled for 20 April 2026 (Saturday) from 9:00 AM to 1:00 PM. Parents are requested to meet the respective class teachers to discuss their ward's academic progress, attendance, and areas of improvement. Please carry the student diary. Your cooperation is essential for the holistic development of your child.", hi: "20 अप्रैल 2026 (शनिवार) को सुबह 9:00 बजे से दोपहर 1:00 बजे तक अभिभावक-शिक्षक बैठक निर्धारित है। अभिभावकों से अनुरोध है कि वे अपने बच्चे की शैक्षणिक प्रगति, उपस्थिति और सुधार के क्षेत्रों पर चर्चा करने के लिए संबंधित कक्षा शिक्षक से मिलें।" },
  },
  {
    slug: "exam-schedule-term-2",
    title: { en: "Term 2 Examination Schedule", hi: "द्वितीय सत्र परीक्षा कार्यक्रम" },
    category: "Exams",
    date: "2026-02-15",
    summary: { en: "Term 2 exams for Classes I–XII from 1 March to 15 March 2026.", hi: "कक्षा I–XII के लिए द्वितीय सत्र परीक्षा 1 मार्च से 15 मार्च 2026 तक।" },
    body: { en: "The Term 2 examinations for Classes I to XII will be conducted from 1 March to 15 March 2026. Detailed date-sheet is available on the school notice board and website. Students must carry their admit cards. No re-examination will be conducted for absentees without valid medical certificate. Syllabus: as per the portion covered till 20 February 2026.", hi: "कक्षा I से XII के लिए द्वितीय सत्र परीक्षा 1 मार्च से 15 मार्च 2026 तक आयोजित की जाएगी। विस्तृत तिथि-पत्र विद्यालय सूचना पट्ट और वेबसाइट पर उपलब्ध है। छात्रों को अपना प्रवेश पत्र अवश्य लाना होगा।" },
  },
  {
    slug: "fee-payment-reminder-may",
    title: { en: "Fee Payment Reminder — May 2026", hi: "शुल्क भुगतान अनुस्मारक — मई 2026" },
    category: "Fee",
    date: "2026-05-05",
    summary: { en: "Fees for Term 1 (April–June) due by 15 May 2026. Late fee applicable after due date.", hi: "प्रथम सत्र (अप्रैल–जून) की फीस 15 मई 2026 तक देय। देय तिथि के बाद विलंब शुल्क लागू।" },
    body: { en: "Parents are reminded that the tuition fee for Term 1 (April–June 2026) is due by 15 May 2026. A late fee of ₹50 per day will be applicable after the due date. Payment can be made at the school accounts office or via bank transfer. For fee structure details, visit /admissions/fee-structure. Contact the accounts department for any queries.", hi: "अभिभावकों को सूचित किया जाता है कि प्रथम सत्र (अप्रैल–जून 2026) की ट्यूशन फीस 15 मई 2026 तक देय है। देय तिथि के बाद ₹50 प्रतिदिन विलंब शुल्क लागू होगा। भुगतान विद्यालय लेखा कार्यालय या बैंक ट्रांसफर द्वारा किया जा सकता है।" },
  },
];
