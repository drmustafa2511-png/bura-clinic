import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Syringe, Sparkles, Flower2, Check, Shield, HeartPulse } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { servicesData } from '../data/services';

const iconMap = {
  zap: Zap,
  syringe: Syringe,
  sparkles: Sparkles,
  flower2: Flower2,
  shield: Shield,
  heartPulse: HeartPulse,
};

const ServicesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const scrollToBooking = (serviceTitle: string) => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `/services#${serviceTitle}`);
    }
  };

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
              {t('pages.servicesTitle')}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('pages.servicesSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles;
              const title = t(service.titleKey);
              const treatments = isArabic ? service.treatmentsAr : service.treatments;

              return (
                <motion.div
                  id={service.id}
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`scroll-mt-28 flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  <div className="flex-1 w-full">
                    <div className={`relative h-96 rounded-3xl bg-gradient-to-br ${service.gradient} overflow-hidden shadow-2xl`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-32 h-32 text-white/20" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-4`}>
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <h2 className="text-4xl font-serif font-bold text-[#2D2D2D] mb-4">
                      {title}
                    </h2>
                    <p className="text-lg text-[#2D2D2D]/70 mb-8 leading-relaxed">
                      {t(service.descriptionKey)}
                    </p>

                    <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                      <h3 className="font-bold text-[#2D2D2D] mb-4">{t('services.availableTreatments')}</h3>
                      <ul className="space-y-3">
                        {treatments.map((treatment) => (
                          <li key={treatment} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#D4AF86] flex-shrink-0 mt-0.5" />
                            <span className="text-[#2D2D2D]/80">{treatment}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-[#F5F5F0] to-white rounded-xl p-4 shadow">
                        <p className="text-sm text-[#2D2D2D]/60 mb-1">{t('services.duration')}</p>
                        <p className="font-bold text-[#2D2D2D]">{isArabic ? service.durationAr : service.duration}</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#FFF5F5] to-white rounded-xl p-4 shadow">
                        <p className="text-sm text-[#2D2D2D]/60 mb-1">{t('services.plan')}</p>
                        <p className="font-bold text-[#2D2D2D]">{isArabic ? service.sessionsAr : service.sessions}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => scrollToBooking(service.id)}
                      className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <span>{t('common.bookTreatment')}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] text-white">
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
              href="/#booking"
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

export default ServicesPage;
