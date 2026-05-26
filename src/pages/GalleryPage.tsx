import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { transformationsData } from '../data/transformations';
import { clinicConfig, createWhatsAppUrl } from '../config/clinic';

const GalleryPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Cases', labelAr: 'كل الحالات' },
    { id: 'surgery', label: 'Plastic Surgery', labelAr: 'جراحة التجميل' },
    { id: 'dermatology', label: 'Dermatology', labelAr: 'الجلدية' },
    { id: 'laser', label: 'Laser', labelAr: 'الليزر' },
    { id: 'skincare', label: 'Skincare', labelAr: 'العناية بالبشرة' },
    { id: 'injectables', label: 'Injectables', labelAr: 'الحقن التجميلية' },
    { id: 'body', label: 'Body', labelAr: 'الجسم' },
  ];

  const filteredTransformations = filter === 'all'
    ? transformationsData
    : transformationsData.filter((item) => item.category === filter);

  const bookingMessage = isArabic
    ? `مرحباً ${clinicConfig.brandAr}، أرغب في حجز استشارة ومعرفة الحالات المناسبة لي.`
    : `Hello ${clinicConfig.brandEn}, I would like to book a consultation and learn about suitable cases.`;

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
              {t('pages.galleryTitle')}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('pages.gallerySubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sticky top-20 bg-white/85 backdrop-blur-xl z-40 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] text-white shadow-lg'
                    : 'bg-[#F5F5F0] text-[#2D2D2D] hover:bg-[#D4AF86]/20'
                }`}
              >
                {isArabic ? category.labelAr : category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTransformations.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <div className={`aspect-[3/4] bg-gradient-to-br ${item.bgColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 bg-[#2D2D2D]/5 flex items-end justify-start p-6">
                        <span className="text-xs font-bold text-[#2D2D2D]/60 bg-white/80 px-3 py-1 rounded-full">
                          {t('ba.before')}
                        </span>
                      </div>
                      <div className="w-1/2 bg-[#D4AF86]/5 flex items-end justify-end p-6">
                        <span className="text-xs font-bold text-[#D4AF86] bg-white/80 px-3 py-1 rounded-full">
                          {t('ba.after')}
                        </span>
                      </div>
                    </div>

                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white shadow-lg" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-[#D4AF86] rounded-full" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF86]/0 to-[#D4AF86]/0 group-hover:from-[#D4AF86]/10 group-hover:to-[#C9A87C]/10 transition-all duration-300" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-xl font-bold mb-1">{isArabic ? item.titleAr : item.title}</h3>
                    <p className="text-sm opacity-90">{isArabic ? item.treatmentAr : item.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-white/65 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-lg text-center"
          >
            <p className="text-[#2D2D2D]/80 italic leading-relaxed">
              {t('ba.disclaimer')}
            </p>
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

export default GalleryPage;
