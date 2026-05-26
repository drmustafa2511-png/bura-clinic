import React from 'react';
import { Star } from 'lucide-react';
import { Card } from './ui/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay = 0 }) => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <Card variant="gradient" delay={delay} className="p-8">
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#D4AF86] text-[#D4AF86]" />
        ))}
      </div>

      <p className="text-[#2D2D2D]/80 leading-relaxed mb-6 italic">
        "{isArabic ? testimonial.textAr : testimonial.text}"
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-[#D4AF86]/20">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF86] to-[#C9A87C] flex items-center justify-center text-white font-bold">
          {testimonial.initial}
        </div>
        <div>
          <h4 className="font-bold text-[#2D2D2D]">
            {isArabic ? testimonial.nameAr : testimonial.name}
          </h4>
          <p className="text-sm text-[#2D2D2D]/60">
            {isArabic ? testimonial.treatmentAr : testimonial.treatment}
          </p>
        </div>
      </div>
    </Card>
  );
};
