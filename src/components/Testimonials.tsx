import React from 'react';
import { Section } from './ui/Section';
import { TestimonialCard } from './TestimonialCard';
import { useLanguage } from '../contexts/LanguageContext';
import { testimonialsData } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '01', labelKey: 'testimonials.happy_clients' },
    { number: '02', labelKey: 'testimonials.satisfaction_rate' },
    { number: '03', labelKey: 'testimonials.years_experience' },
    { number: '04', labelKey: 'testimonials.treatments' },
  ];

  return (
    <Section
      title={t('testimonials.title')}
      subtitle={t('testimonials.subtitle')}
      background="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            delay={index * 0.1}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.labelKey}
            className="text-center p-6 bg-gradient-to-br from-[#FFF5F5] to-[#F5F5F0] rounded-2xl"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF86] mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-[#2D2D2D]/70 font-medium">
              {t(stat.labelKey)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
