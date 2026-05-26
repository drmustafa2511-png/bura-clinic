import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Gift, Crown, Zap, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { offersData } from '../data/offers';
import { clinicConfig, createWhatsAppUrl } from '../config/clinic';

const iconMap = {
  zap: Zap,
  crown: Crown,
  gift: Gift,
  sparkles: Sparkles,
};

const OffersPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const monthlyDeals = [
    {
      title: 'Laser Care',
      titleAr: 'عناية الليزر',
      discount: 'Ask for current offer',
      discountAr: 'اسألي عن العرض الحالي',
      description: 'Area-based laser packages',
      descriptionAr: 'باقات ليزر حسب المنطقة',
      color: 'from-rose-100 to-pink-100',
    },
    {
      title: 'Skin Glow',
      titleAr: 'نضارة البشرة',
      discount: 'Seasonal bundle',
      discountAr: 'باقة موسمية',
      description: 'Facial care and glow protocols',
      descriptionAr: 'جلسات عناية ونضارة البشرة',
      color: 'from-purple-100 to-pink-100',
    },
    {
      title: 'Injectables',
      titleAr: 'الحقن التجميلية',
      discount: 'After consultation',
      discountAr: 'بعد الاستشارة',
      description: 'Natural facial balancing options',
      descriptionAr: 'خيارات تناغم الملامح الطبيعية',
      color: 'from-blue-100 to-cyan-100',
    },
    {
      title: 'Combination Plans',
      titleAr: 'خطط مجمعة',
      discount: 'Custom plan',
      discountAr: 'خطة مخصصة',
      description: 'Dermatology, laser, skincare, and aesthetic combinations',
      descriptionAr: 'خطط تجمع الجلدية والليزر والعناية والتجميل',
      color: 'from-emerald-100 to-teal-100',
    },
  ];

  const bookingMessage = isArabic
    ? `مرحباً ${clinicConfig.brandAr}، أرغب في معرفة العروض الحالية وحجز استشارة.`
    : `Hello ${clinicConfig.brandEn}, I would like to know the current offers and book a consultation.`;

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
              {t('pages.offersTitle')}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('pages.offersSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offersData.map((offer, index) => {
              const Icon = iconMap[offer.icon as keyof typeof iconMap] || Gift;
              return (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                    offer.popular ? 'ring-4 ring-[#D4AF86] scale-105' : ''
                  }`}
                >
                  {offer.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] text-white text-center py-2 font-bold">
                      <Star className="w-4 h-4 inline-block me-1 fill-white" />
                      {isArabic ? 'الأكثر طلبًا' : 'Most Requested'}
                    </div>
                  )}

                  <div className={`h-48 bg-gradient-to-br ${offer.gradient} p-8 flex flex-col justify-end ${offer.popular ? 'pt-16' : ''}`}>
                    <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-sm w-fit mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-white/90 text-sm font-medium mb-2">
                      {isArabic ? offer.badgeAr : offer.badge}
                    </span>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-serif font-bold text-[#2D2D2D] mb-4">
                      {isArabic ? offer.titleAr : offer.title}
                    </h3>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold text-[#D4AF86]">
                          {isArabic ? offer.price : offer.price}
                        </span>
                      </div>
                      <p className="text-sm text-[#2D2D2D]/60">
                        {isArabic ? offer.durationAr : offer.duration}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {(isArabic ? offer.featuresAr : offer.features).map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#D4AF86] flex-shrink-0 mt-0.5" />
                          <span className="text-[#2D2D2D]/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={createWhatsAppUrl(bookingMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-4 rounded-full font-medium transition-all duration-300 ${
                        offer.popular
                          ? 'bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] text-white shadow-lg hover:shadow-xl'
                          : 'bg-[#F5F5F0] text-[#2D2D2D] hover:bg-[#D4AF86]/20'
                      }`}
                    >
                      {t('common.bookNow')}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-[#2D2D2D]/60">
            {t('offers.validityNote')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-[#2D2D2D] mb-4">
              {isArabic ? 'خيارات إضافية' : 'Additional Options'}
            </h2>
            <p className="text-lg text-[#2D2D2D]/70">
              {isArabic ? 'اختاري المجال الأنسب، وسيؤكد الفريق التفاصيل الحالية عند التواصل.' : 'Choose the right area and our team will confirm current details.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyDeals.map((deal, index) => (
              <motion.div
                key={deal.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${deal.color} rounded-3xl p-6 shadow-lg`}
              >
                <div className="text-3xl font-bold text-[#D4AF86] mb-2">
                  {isArabic ? deal.discountAr : deal.discount}
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">
                  {isArabic ? deal.titleAr : deal.title}
                </h3>
                <p className="text-[#2D2D2D]/70">
                  {isArabic ? deal.descriptionAr : deal.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              {t('pages.contactOffersTitle')}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t('pages.contactOffersSubtitle')}
            </p>
            <a
              href={createWhatsAppUrl(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] text-white px-8 py-4 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>{t('common.whatsapp')}</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OffersPage;
