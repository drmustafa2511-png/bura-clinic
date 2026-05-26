import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { clinicConfig, googleMapsUrl } from '../config/clinic';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/team', label: t('nav.team') },
    { to: '/offers', label: t('nav.offers') },
  ];

  const hours = isArabic ? clinicConfig.workingHoursAr : clinicConfig.workingHoursEn;

  return (
    <footer className="bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-[#D4AF86]">عيادات</span>
              <span className="text-white"> بيورا</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              {t('footer.aboutText')}
            </p>
            <div className="flex gap-4">
              <a
                href={clinicConfig.phoneHref}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF86] transition-colors flex items-center justify-center"
                aria-label="Call Bura Clinic"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${clinicConfig.email}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF86] transition-colors flex items-center justify-center"
                aria-label="Email Bura Clinic"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={clinicConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF86] transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-[#D4AF86] transition-colors inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF86] me-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.hours')}</h3>
            <div className="space-y-4">
              {hours.map((item) => (
                <div key={item.days} className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF86] mt-1 flex-shrink-0" />
                  <div className="text-white/70">
                    <p className="font-medium text-white mb-1">{item.days}</p>
                    <p className="text-sm" dir="ltr">{item.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.location')}</h3>
            <div className="space-y-4">
              <a href={googleMapsUrl()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#D4AF86] mt-1 flex-shrink-0" />
                <div className="text-white/70 group-hover:text-white transition-colors">
                  <p className="font-medium text-white mb-1">{isArabic ? clinicConfig.brandAr : clinicConfig.brandEn}</p>
                  <p className="text-sm">{t('footer.address')}</p>
                </div>
              </a>
              <a href={clinicConfig.phoneHref} className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-[#D4AF86] mt-1 flex-shrink-0" />
                <p className="text-sm" dir="ltr">{clinicConfig.phoneDisplay}</p>
              </a>
              <a href={`mailto:${clinicConfig.email}`} className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-[#D4AF86] mt-1 flex-shrink-0" />
                <p className="text-sm" dir="ltr">{clinicConfig.email}</p>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link to="/" className="hover:text-[#D4AF86] transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/" className="hover:text-[#D4AF86] transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
