import React, { createContext, useContext, useState, ReactNode } from 'react';
import { clinicConfig } from '../config/clinic';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Results Gallery',
    'nav.team': 'Medical Team',
    'nav.offers': 'Offers',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Dermatology, Aesthetic Medicine & Day Surgery',
    'hero.title': 'Confidence Starts',
    'hero.titleAccent': 'with Natural Beauty',
    'hero.subtitle': 'At Bura Clinic, Saudi consultant expertise meets precise medical standards to deliver safe, refined, natural-looking results.',
    'hero.cta': 'Book a Consultation',
    'hero.ctaSecondary': 'Explore Services',

    // Trust Badges
    'trust.certified': 'Saudi Consultant Expertise',
    'trust.treatments': 'Dermatology & Aesthetics',
    'trust.satisfaction': 'Day Surgery Services',
    'trust.experience': 'CBAHI 99% Accreditation',

    // Services
    'services.title': 'Bura Medical Services',
    'services.subtitle': 'Integrated dermatology, cosmetic medicine, and plastic surgery services under specialized medical supervision.',
    'services.surgery': 'Plastic Surgery & Day Surgery',
    'services.surgeryDesc': 'Advanced cosmetic and reconstructive procedures with consultant-led planning and strict safety protocols.',
    'services.dermatology': 'Dermatology',
    'services.dermatologyDesc': 'Medical evaluation and treatment plans for skin health, acne, pigmentation, scars, and hair concerns.',
    'services.laser': 'Laser Treatments',
    'services.laserDesc': 'Laser hair removal, skin resurfacing, pigmentation care, and scar improvement using modern technologies.',
    'services.injectables': 'Botox, Fillers & Skin Boosters',
    'services.injectablesDesc': 'Natural-looking injectable treatments for facial balancing, wrinkle softening, hydration, and collagen support.',
    'services.skincare': 'Medical Skincare',
    'services.skincareDesc': 'HydraFacial, chemical peels, mesotherapy, and personalized protocols for healthier, brighter skin.',
    'services.body': 'Body Contouring & Tightening',
    'services.bodyDesc': 'Surgical and non-surgical body contouring options tailored to your goals and clinical assessment.',
    'services.availableTreatments': 'Available Services',
    'services.duration': 'Session / Procedure Time',
    'services.plan': 'Treatment Plan',

    // Before/After
    'ba.title': 'Results Gallery',
    'ba.subtitle': 'A refined preview area for before/after cases. Replace placeholders with approved real cases before publishing.',
    'ba.viewGallery': 'View Full Gallery',
    'ba.before': 'Before',
    'ba.after': 'After',
    'ba.disclaimer': 'The gallery uses placeholder visuals until approved clinical images are added. Final results vary depending on the case, treatment plan, and medical assessment.',

    // Testimonials
    'testimonials.title': 'Patient Experience',
    'testimonials.subtitle': 'A calm, private, and medically led journey from consultation to follow-up.',
    'testimonials.happy_clients': 'Patient-Focused Care',
    'testimonials.satisfaction_rate': 'Medical Safety First',
    'testimonials.years_experience': 'Consultant Expertise',
    'testimonials.treatments': 'Integrated Services',

    // Doctors
    'doctors.title': 'Medical Team',
    'doctors.subtitle': 'Consultants and specialists focused on safe, natural-looking outcomes and personalized treatment plans.',

    // Offers
    'offers.title': 'Bura Offers',
    'offers.subtitle': 'Seasonal packages and treatment bundles. Final prices and availability are confirmed by the clinic team.',
    'offers.monthly': 'Monthly Offer',
    'offers.membership': 'VIP Package',
    'offers.combo': 'Combination Package',
    'offers.validityNote': 'Offer details are subject to clinical eligibility and current availability.',

    // Booking
    'booking.title': 'Book Your Consultation',
    'booking.subtitle': 'Share your details and our team will contact you to confirm the suitable appointment.',
    'booking.name': 'Full Name',
    'booking.phone': 'Phone Number',
    'booking.service': 'Select Service',
    'booking.date': 'Preferred Date',
    'booking.message': 'Additional Notes',
    'booking.submit': 'Book via WhatsApp',
    'booking.float': 'Book Now',
    'booking.redirectNote': 'You will be redirected to WhatsApp to send your booking request.',

    // Footer
    'footer.about': 'About Bura Clinic',
    'footer.aboutText': 'Bura Clinic is a specialized destination for dermatology, aesthetic medicine, plastic surgery, and day surgery in Riyadh.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.hours': 'Working Hours',
    'footer.location': 'Location',
    'footer.address': clinicConfig.addressEn,
    'footer.rights': '© 2026 Bura Clinic. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',

    // Pages
    'pages.servicesTitle': 'Medical & Aesthetic Services',
    'pages.servicesSubtitle': 'Explore Bura Clinic services across dermatology, aesthetic medicine, plastic surgery, and day surgery.',
    'pages.teamTitle': 'Meet the Medical Team',
    'pages.teamSubtitle': 'Consultant-led care with precise medical standards and individualized treatment planning.',
    'pages.valuesTitle': 'Our Values',
    'pages.valuesSubtitle': 'The principles that guide every patient experience at Bura Clinic.',
    'pages.credentialsTitle': 'Credentials & Standards',
    'pages.readyTitle': 'Ready to Start?',
    'pages.readySubtitle': 'Book a consultation and get a treatment plan tailored to your case.',
    'pages.galleryTitle': 'Results Gallery',
    'pages.gallerySubtitle': 'Prepared gallery structure for approved before/after images and treatment cases.',
    'pages.offersTitle': 'Offers & Packages',
    'pages.offersSubtitle': 'Packages designed to simplify your aesthetic journey. Confirm availability with the clinic team.',
    'pages.contactOffersTitle': 'Questions About the Offers?',
    'pages.contactOffersSubtitle': 'Contact us on WhatsApp for current packages and eligibility.',

    // Common
    'common.learnMore': 'Learn More',
    'common.bookNow': 'Book Now',
    'common.bookTreatment': 'Book This Service',
    'common.contact': 'Contact Us',
    'common.viewAll': 'View All Services',
    'common.call': 'Call',
    'common.whatsapp': 'WhatsApp',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.gallery': 'معرض النتائج',
    'nav.team': 'الفريق الطبي',
    'nav.offers': 'العروض',
    'nav.contact': 'تواصل معنا',

    // Hero
    'hero.badge': 'جلدية وتجميل وجراحة تجميل وجراحة اليوم الواحد',
    'hero.title': 'الثقة تبدأ',
    'hero.titleAccent': 'بجمال طبيعي',
    'hero.subtitle': 'في عيادات بيورا، تلتقي الخبرة الاستشارية السعودية مع المعايير الطبية الدقيقة لتجربة تجميل آمنة ونتائج طبيعية راقية.',
    'hero.cta': 'احجزي استشارة',
    'hero.ctaSecondary': 'استكشفي الخدمات',

    // Trust Badges
    'trust.certified': 'خبرة استشارية سعودية',
    'trust.treatments': 'جلدية وتجميل',
    'trust.satisfaction': 'جراحة اليوم الواحد',
    'trust.experience': 'اعتماد سباهي ٩٩٪',

    // Services
    'services.title': 'خدمات بيورا الطبية',
    'services.subtitle': 'خدمات متكاملة في الجلدية، طب التجميل، جراحة التجميل، وجراحة اليوم الواحد بإشراف طبي متخصص.',
    'services.surgery': 'جراحة التجميل وجراحة اليوم الواحد',
    'services.surgeryDesc': 'إجراءات تجميلية وترميمية متقدمة بتخطيط استشاري وبروتوكولات سلامة دقيقة.',
    'services.dermatology': 'الأمراض الجلدية',
    'services.dermatologyDesc': 'تقييم طبي وخطط علاجية لصحة البشرة، حب الشباب، التصبغات، الندبات، ومشاكل الشعر.',
    'services.laser': 'علاجات الليزر',
    'services.laserDesc': 'إزالة الشعر بالليزر، تجديد البشرة، علاج التصبغات، وتحسين آثار الحبوب بتقنيات حديثة.',
    'services.injectables': 'البوتكس والفيلر ومحفزات البشرة',
    'services.injectablesDesc': 'حقن تجميلية بنتائج طبيعية لتوازن ملامح الوجه، تخفيف التجاعيد، الترطيب، وتحفيز الكولاجين.',
    'services.skincare': 'العناية الطبية بالبشرة',
    'services.skincareDesc': 'هايدرافيشل، تقشير طبي، ميزوثيرابي، وبروتوكولات مخصصة لبشرة صحية وأكثر إشراقًا.',
    'services.body': 'نحت الجسم وشد الترهلات',
    'services.bodyDesc': 'خيارات جراحية وغير جراحية لنحت القوام وشد الجلد حسب التقييم الطبي وأهداف الحالة.',
    'services.availableTreatments': 'الخدمات المتاحة',
    'services.duration': 'مدة الجلسة / الإجراء',
    'services.plan': 'الخطة العلاجية',

    // Before/After
    'ba.title': 'معرض النتائج',
    'ba.subtitle': 'مساحة عرض راقية لحالات قبل وبعد. تُستبدل النماذج بصور حالات حقيقية معتمدة قبل النشر النهائي.',
    'ba.viewGallery': 'عرض المعرض الكامل',
    'ba.before': 'قبل',
    'ba.after': 'بعد',
    'ba.disclaimer': 'المعرض يستخدم نماذج عرض مؤقتة إلى حين إضافة صور حالات معتمدة. تختلف النتائج من حالة لأخرى حسب التقييم والخطة العلاجية.',

    // Testimonials
    'testimonials.title': 'تجربة المراجعين',
    'testimonials.subtitle': 'رحلة هادئة وخاصة تقودها الخبرة الطبية من الاستشارة حتى المتابعة.',
    'testimonials.happy_clients': 'رعاية تتمحور حول المراجع',
    'testimonials.satisfaction_rate': 'السلامة الطبية أولًا',
    'testimonials.years_experience': 'خبرة استشارية',
    'testimonials.treatments': 'خدمات متكاملة',

    // Doctors
    'doctors.title': 'الفريق الطبي',
    'doctors.subtitle': 'استشاريون وأخصائيون يركزون على الأمان، النتائج الطبيعية، والخطط العلاجية الشخصية.',

    // Offers
    'offers.title': 'عروض بيورا',
    'offers.subtitle': 'باقات موسمية ومجمعة. يتم تأكيد الأسعار والتوفر النهائي من فريق العيادة.',
    'offers.monthly': 'عرض شهري',
    'offers.membership': 'باقة مميزة',
    'offers.combo': 'باقة مجمعة',
    'offers.validityNote': 'تفاصيل العروض تخضع للتقييم الطبي والتوفر الحالي.',

    // Booking
    'booking.title': 'احجزي استشارتك',
    'booking.subtitle': 'أرسلي بياناتك وسيتواصل معك فريق بيورا لتأكيد الموعد المناسب.',
    'booking.name': 'الاسم الكامل',
    'booking.phone': 'رقم الجوال',
    'booking.service': 'اختاري الخدمة',
    'booking.date': 'الموعد المفضل',
    'booking.message': 'ملاحظات إضافية',
    'booking.submit': 'احجزي عبر الواتساب',
    'booking.float': 'احجزي الآن',
    'booking.redirectNote': 'عند الضغط على الزر، سيتم توجيهك للواتساب لإرسال طلب الحجز.',

    // Footer
    'footer.about': 'عن عيادات بيورا',
    'footer.aboutText': 'عيادات بيورا وجهة متخصصة في الجلدية، طب التجميل، جراحة التجميل، وجراحة اليوم الواحد في الرياض.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.hours': 'ساعات العمل',
    'footer.location': 'الموقع',
    'footer.address': clinicConfig.addressAr,
    'footer.rights': '© ٢٠٢٦ عيادات بيورا. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',

    // Pages
    'pages.servicesTitle': 'الخدمات الطبية والتجميلية',
    'pages.servicesSubtitle': 'تعرّفي على خدمات بيورا في الجلدية، طب التجميل، جراحة التجميل، وجراحة اليوم الواحد.',
    'pages.teamTitle': 'تعرفي على الفريق الطبي',
    'pages.teamSubtitle': 'رعاية يقودها استشاريون بمعايير طبية دقيقة وخطط علاجية مخصصة لكل حالة.',
    'pages.valuesTitle': 'قيمنا',
    'pages.valuesSubtitle': 'المبادئ التي تقود كل تجربة علاجية في عيادات بيورا.',
    'pages.credentialsTitle': 'الاعتمادات والمعايير',
    'pages.readyTitle': 'جاهزة تبدئين؟',
    'pages.readySubtitle': 'احجزي استشارة واحصلي على خطة علاجية تناسب حالتك وأهدافك.',
    'pages.galleryTitle': 'معرض النتائج',
    'pages.gallerySubtitle': 'هيكل جاهز لعرض صور قبل وبعد وحالات علاجية معتمدة.',
    'pages.offersTitle': 'العروض والباقات',
    'pages.offersSubtitle': 'باقات تساعدك على بدء رحلتك التجميلية. تأكدي من التوفر مع فريق العيادة.',
    'pages.contactOffersTitle': 'لديك سؤال عن العروض؟',
    'pages.contactOffersSubtitle': 'تواصلي معنا عبر الواتساب لمعرفة العروض الحالية ومدى ملاءمتها لك.',

    // Common
    'common.learnMore': 'اعرفي المزيد',
    'common.bookNow': 'احجزي الآن',
    'common.bookTreatment': 'احجزي هذه الخدمة',
    'common.contact': 'تواصل معنا',
    'common.viewAll': 'عرض كل الخدمات',
    'common.call': 'اتصال',
    'common.whatsapp': 'واتساب',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const isRTL = language === 'ar';

  React.useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
