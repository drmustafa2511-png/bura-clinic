import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Users, Heart, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Doctors from '../components/Doctors';
import { clinicConfig, createWhatsAppUrl } from '../config/clinic';

const TeamPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      titleAr: 'رعاية تتمحور حول المراجع',
      description: 'Comfort, privacy, and clear communication guide every step.',
      descriptionAr: 'الراحة والخصوصية والوضوح أساس كل خطوة.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety First',
      titleAr: 'السلامة أولًا',
      description: 'Medical suitability and aftercare are prioritized before aesthetics.',
      descriptionAr: 'تقييم الملاءمة والمتابعة يسبقان أي قرار تجميلي.',
    },
    {
      icon: GraduationCap,
      title: 'Consultant Expertise',
      titleAr: 'خبرة استشارية',
      description: 'Specialized doctors plan treatments based on each case.',
      descriptionAr: 'أطباء متخصصون يضعون الخطط حسب كل حالة.',
    },
    {
      icon: Users,
      title: 'Integrated Teamwork',
      titleAr: 'عمل طبي متكامل',
      description: 'Dermatology, aesthetics, laser, and surgery work together.',
      descriptionAr: 'الجلدية والتجميل والليزر والجراحة يعملون بتناغم.',
    },
  ];

  const credentials = [
    {
      en: 'Saudi consultant expertise across dermatology and plastic surgery',
      ar: 'خبرة استشارية سعودية في الجلدية وجراحة التجميل',
    },
    {
      en: 'Day surgery services with clinical eligibility assessment',
      ar: 'خدمات جراحة اليوم الواحد مع تقييم الملاءمة الطبية',
    },
    {
      en: 'CBAHI quality and patient-safety accreditation highlighted by the clinic',
      ar: 'اعتماد جودة وسلامة مرضى من سباهي كما تُبرز العيادة',
    },
    {
      en: 'Personalized treatment plans and follow-up standards',
      ar: 'خطط علاجية شخصية ومعايير متابعة واضحة',
    },
    {
      en: 'Natural-looking aesthetic planning and conservative decision-making',
      ar: 'تخطيط تجميلي لنتائج طبيعية وقرارات علاجية متوازنة',
    },
    {
      en: 'Privacy-focused patient journey from consultation to aftercare',
      ar: 'رحلة مراجعة تراعي الخصوصية من الاستشارة حتى المتابعة',
    },
  ];

  const bookingMessage = isArabic
    ? `مرحباً ${clinicConfig.brandAr}، أرغب في حجز استشارة مع الفريق الطبي.`
    : `Hello ${clinicConfig.brandEn}, I would like to book a consultation with the medical team.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] via-white to-[#FFF5F5]">
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              {t('pages.teamTitle')}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('pages.teamSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <Doctors />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] mb-4">
              {t('pages.valuesTitle')}
            </h2>
            <p className="text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto">
              {t('pages.valuesSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#F5F5F0] to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#D4AF86] to-[#C9A87C] shadow-lg mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                  {isArabic ? value.titleAr : value.title}
                </h3>
                <p className="text-[#2D2D2D]/70 leading-relaxed">
                  {isArabic ? value.descriptionAr : value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F5F5F0] via-white to-[#FFF5F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#2D2D2D] mb-8">
                {t('pages.credentialsTitle')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#2D2D2D]/80">
                {credentials.map((credential) => (
                  <div key={credential.en} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#D4AF86] mt-0.5 flex-shrink-0" />
                    <p>{isArabic ? credential.ar : credential.en}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              {t('pages.readyTitle')}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t('pages.readySubtitle')}
            </p>
            <a
              href={createWhatsAppUrl(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] text-white px-8 py-4 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>{t('booking.float')}</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
