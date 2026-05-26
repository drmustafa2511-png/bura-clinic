import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';
import { Section } from './ui/Section';
import { DoctorCard } from './DoctorCard';
import { useLanguage } from '../contexts/LanguageContext';
import { doctorsData } from '../data/doctors';

const Doctors: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const trustIndicators = [
    {
      icon: GraduationCap,
      title: 'Consultant-Led Care',
      titleAr: 'رعاية يقودها استشاريون',
      description: 'Specialized assessment before any procedure',
      descriptionAr: 'تقييم متخصص قبل أي إجراء',
    },
    {
      icon: Award,
      title: 'Medical Standards',
      titleAr: 'معايير طبية دقيقة',
      description: 'Safety, eligibility, and aftercare are part of every plan',
      descriptionAr: 'السلامة، الملاءمة، والمتابعة جزء من كل خطة',
    },
    {
      icon: Users,
      title: 'Personalized Plans',
      titleAr: 'خطط مخصصة',
      description: 'Treatment choices are tailored to each case and goal',
      descriptionAr: 'الخيارات العلاجية تُصمم حسب الحالة والهدف',
    },
  ];

  return (
    <Section
      title={t('doctors.title')}
      subtitle={t('doctors.subtitle')}
      background="gradient"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {doctorsData.map((doctor, index) => (
          <DoctorCard key={doctor.id} doctor={doctor} delay={index * 0.1} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trustIndicators.map((item, index) => (
          <div
            key={index}
            className="bg-white/65 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg"
          >
            <item.icon className="w-10 h-10 text-[#D4AF86] mx-auto mb-4" />
            <h4 className="font-bold text-[#2D2D2D] mb-2">{isArabic ? item.titleAr : item.title}</h4>
            <p className="text-sm text-[#2D2D2D]/70">{isArabic ? item.descriptionAr : item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Doctors;
