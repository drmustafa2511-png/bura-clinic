import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { clinicConfig, createWhatsAppUrl } from '../config/clinic';

const FloatingBooking: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);

    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setShowTooltip(false), 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleClick = () => {
    const message = language === 'ar'
      ? `مرحباً ${clinicConfig.brandAr}، أرغب في حجز موعد استشارة.`
      : `Hello ${clinicConfig.brandEn}, I would like to book a consultation.`;
    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl p-4 min-w-[220px]"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-[#2D2D2D]/40 hover:text-[#2D2D2D] transition-colors"
                  aria-label="Close tooltip"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="text-sm text-[#2D2D2D] font-medium pe-6">
                  {language === 'ar' ? 'تحتاجين مساعدة؟ راسلينا على الواتساب.' : 'Need help? Message us on WhatsApp.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="group relative bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
            aria-label="Book via WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
            <MessageCircle className="w-7 h-7 relative z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingBooking;
