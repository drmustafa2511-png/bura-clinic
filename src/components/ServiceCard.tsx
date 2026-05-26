import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Droplet, Syringe, Sparkles, Heart, Flower2, Shield, HeartPulse } from 'lucide-react';
import { Card } from './ui/Card';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  id?: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
  gradient: string;
  delay?: number;
}

const iconMap = {
  zap: Zap,
  droplet: Droplet,
  syringe: Syringe,
  sparkles: Sparkles,
  heart: Heart,
  flower2: Flower2,
  shield: Shield,
  heartPulse: HeartPulse,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  titleKey,
  descriptionKey,
  icon,
  gradient,
  delay = 0,
}) => {
  const { t } = useLanguage();
  const Icon = iconMap[icon as keyof typeof iconMap] || Sparkles;

  return (
    <Card variant="gradient" delay={delay} className="p-8 relative overflow-hidden group h-full flex flex-col">
      <div
        className={`absolute top-8 end-8 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`}
      />

      <div className="relative mb-6">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#D4AF86] transition-colors">
        {t(titleKey)}
      </h3>
      <p className="text-[#2D2D2D]/70 leading-relaxed mb-6 flex-grow">{t(descriptionKey)}</p>

      <Link
        to={id ? `/services#${id}` : '/services'}
        className="text-[#D4AF86] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
      >
        <span>{t('common.learnMore')}</span>
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </Card>
  );
};
