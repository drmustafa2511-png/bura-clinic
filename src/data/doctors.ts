import { Doctor } from '../types';

export const doctorsData: Doctor[] = [
  {
    id: 'sari-rabah',
    name: 'Dr. Sari Bin Rabah',
    nameAr: 'د. ساري بن رباح',
    title: 'Consultant Plastic, Reconstructive & Aesthetic Surgeon',
    titleAr: 'استشاري جراحة التجميل والترميم',
    specialty: 'Facial aesthetics, plastic surgery, reconstructive surgery, and day-surgery planning',
    specialtyAr: 'جراحات الوجه والتجميل والترميم وتخطيط جراحة اليوم الواحد',
    credentials: [
      'Canadian fellowship in plastic and reconstructive surgery',
      'Consultant-led cosmetic surgery planning',
      'Focus on natural, balanced outcomes',
    ],
    credentialsAr: [
      'زمالات كندية في الجراحة التجميلية والترميمية',
      'تخطيط جراحي يقوده استشاري',
      'تركيز على نتائج طبيعية ومتوازنة',
    ],
    color: 'from-rose-400 to-pink-500',
  },
  {
    id: 'eman-almukhadeb',
    name: 'Dr. Eman Al Mukhadeb',
    nameAr: 'د. إيمان المخضب',
    title: 'Consultant Dermatologist',
    titleAr: 'استشارية الأمراض الجلدية',
    specialty: 'Dermatology, cosmetic dermatology, acne scars, pigmentation, and skin rejuvenation',
    specialtyAr: 'الأمراض الجلدية والتجميل الجلدي وآثار الحبوب والتصبغات وتجديد البشرة',
    credentials: [
      'Consultant dermatologist',
      'Academic and clinical dermatology expertise',
      'Special interest in safe aesthetic dermatology',
    ],
    credentialsAr: [
      'استشارية أمراض جلدية',
      'خبرة أكاديمية وسريرية في الجلدية',
      'اهتمام بالتجميل الجلدي الآمن',
    ],
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 'bura-medical-team',
    name: 'Bura Medical Team',
    nameAr: 'فريق بيورا الطبي',
    title: 'Dermatology & Aesthetic Medicine Team',
    titleAr: 'فريق الجلدية وطب التجميل',
    specialty: 'Integrated consultations, treatment planning, laser, injectables, skincare, and follow-up',
    specialtyAr: 'استشارات متكاملة، تخطيط علاجي، ليزر، حقن، عناية بالبشرة، ومتابعة',
    credentials: [
      'Multidisciplinary medical approach',
      'Personalized plans for each case',
      'Safety, privacy, and follow-up standards',
    ],
    credentialsAr: [
      'نهج طبي متعدد التخصصات',
      'خطط مخصصة لكل حالة',
      'معايير سلامة وخصوصية ومتابعة',
    ],
    color: 'from-blue-400 to-cyan-500',
  },
];
