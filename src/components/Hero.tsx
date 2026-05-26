import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, HeartPulse, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { icon: Shield, label: t('trust.certified') },
    { icon: Award, label: t('trust.treatments') },
    { icon: HeartPulse, label: t('trust.satisfaction') },
    { icon: Sparkles, label: t('trust.experience') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F0] via-[#FFF5F5] to-[#F5F5F0]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF86]/10 via-transparent to-[#D4AF86]/5" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D4AF86]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#FFF5F5]/50 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8"
          >
            <Sparkles className="w-5 h-5 text-[#D4AF86]" />
            <span className="text-sm font-medium text-[#2D2D2D]">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            <span className="text-[#2D2D2D]">{t('hero.title')}</span>
            <br />
            <span className="bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] bg-clip-text text-transparent">
              {t('hero.titleAccent')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#2D2D2D]/75 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={scrollToBooking}
              className="group bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] text-white px-8 py-4 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
            </button>
            <a
              href="#services"
              className="px-8 py-4 rounded-full font-medium text-lg bg-white/85 backdrop-blur-sm text-[#2D2D2D] hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <badge.icon className="w-8 h-8 text-[#D4AF86] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#2D2D2D]">{badge.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#D4AF86] rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#D4AF86] rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
