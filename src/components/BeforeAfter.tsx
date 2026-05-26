import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { transformationsData } from '../data/transformations';

const BeforeAfter: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const previewItems = transformationsData.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F5F0] via-white to-[#FFF5F5]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] mb-4">
            {t('ba.title')}
          </h2>
          <p className="text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto">
            {t('ba.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{isArabic ? item.titleAr : item.title}</h3>
                  <p className="text-sm opacity-90">{isArabic ? item.treatmentAr : item.treatment}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF86]/0 to-[#D4AF86]/0 group-hover:from-[#D4AF86]/10 group-hover:to-[#C9A87C]/10 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-white text-[#2D2D2D] px-8 py-4 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-[#D4AF86]"
          >
            <span>{t('ba.viewGallery')}</span>
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/65 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto shadow-lg">
            <p className="text-lg text-[#2D2D2D]/80 italic">
              {t('ba.disclaimer')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
