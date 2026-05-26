import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicConfig, createWhatsAppUrl, googleMapsUrl } from '../config/clinic';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/team', label: t('nav.team') },
    { to: '/offers', label: t('nav.offers') },
  ];

  const isActive = (path: string) => location.pathname === path;
  const bookingMessage = language === 'ar'
    ? `مرحباً ${clinicConfig.brandAr}، أرغب في حجز موعد استشارة.`
    : `Hello ${clinicConfig.brandEn}, I would like to book a consultation.`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-lg py-3'
            : 'bg-white/70 backdrop-blur-md py-4 border-b border-white/40'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" aria-label={clinicConfig.brandAr}>
              <div className="text-2xl lg:text-3xl font-bold tracking-tight">
                <span className="text-[#D4AF86]">عيادات</span>
                <span className="text-[#2D2D2D]"> بيورا</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative font-medium text-[#2D2D2D] hover:text-[#D4AF86] transition-colors"
                >
                  {link.label}
                  {isActive(link.to) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 start-0 end-0 h-0.5 bg-[#D4AF86]"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-[#F5F5F0] text-[#2D2D2D] hover:bg-[#D4AF86]/20 transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'ع'}</span>
              </button>

              <a
                href={createWhatsAppUrl(bookingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>{t('booking.float')}</span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#2D2D2D] hover:bg-[#F5F5F0] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white shadow-2xl lg:hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-medium transition-colors ${
                      isActive(link.to) ? 'text-[#D4AF86]' : 'text-[#2D2D2D]'
                    } hover:text-[#D4AF86]`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setLanguage(language === 'en' ? 'ar' : 'en');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 text-[#2D2D2D] hover:text-[#D4AF86] transition-colors w-full"
                  >
                    <Globe className="w-5 h-5" />
                    <span className="text-lg font-medium">
                      {language === 'ar' ? 'English' : 'العربية'}
                    </span>
                  </button>
                </div>

                <a
                  href={createWhatsAppUrl(bookingMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] text-white px-6 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('booking.float')}</span>
                </a>

                <div className="flex items-center justify-center gap-6 pt-4">
                  <a href={clinicConfig.phoneHref} className="text-[#2D2D2D] hover:text-[#D4AF86] transition-colors" aria-label="Call Bura Clinic">
                    <Phone className="w-6 h-6" />
                  </a>
                  <a href={googleMapsUrl()} target="_blank" rel="noopener noreferrer" className="text-[#2D2D2D] hover:text-[#D4AF86] transition-colors" aria-label="Open location">
                    <MapPin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
