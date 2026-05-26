import React from 'react';
import { Award } from 'lucide-react';
import { Card } from './ui/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  delay?: number;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, delay = 0 }) => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <Card delay={delay} className="overflow-hidden">
      <div className={`h-80 bg-gradient-to-br ${doctor.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 start-6 end-6">
          <h3 className="text-2xl font-bold text-white mb-1">
            {isArabic ? doctor.nameAr : doctor.name}
          </h3>
          <p className="text-white/90 text-sm">{isArabic ? doctor.titleAr : doctor.title}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-3 mb-6">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${doctor.color} bg-opacity-10`}>
            <Award className="w-5 h-5 text-[#D4AF86]" />
          </div>
          <div>
            <p className="font-medium text-[#2D2D2D] leading-relaxed">
              {isArabic ? doctor.specialtyAr : doctor.specialty}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {(isArabic ? doctor.credentialsAr : doctor.credentials).map((credential, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF86] mt-2" />
              <p className="text-sm text-[#2D2D2D]/70">{credential}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
