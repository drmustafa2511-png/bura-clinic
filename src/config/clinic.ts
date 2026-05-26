export const clinicConfig = {
  brandAr: 'عيادات بيورا',
  brandEn: 'Bura Clinic',
  shortBrandAr: 'بيورا',
  shortBrandEn: 'Bura',
  phoneDisplay: '920019974',
  phoneHref: 'tel:920019974',
  whatsappDisplay: '0535185802',
  whatsappNumber: '966535185802',
  email: 'info@buramed.com',
  website: 'https://buramed.com/',
  instagram: 'https://www.instagram.com/buraclinic1/',
  addressAr: 'حي المغرزات، شارع عثمان بن عفان، الرياض',
  addressEn: 'Al Mughrizat, Othman Bin Affan Road, Riyadh',
  mapQuery: 'Bura Clinic Riyadh Othman Bin Affan',
  workingHoursAr: [
    { days: 'السبت - الخميس', hours: '10:00 AM - 10:00 PM' },
    { days: 'الجمعة', hours: '4:00 PM - 10:00 PM' },
  ],
  workingHoursEn: [
    { days: 'Saturday - Thursday', hours: '10:00 AM - 10:00 PM' },
    { days: 'Friday', hours: '4:00 PM - 10:00 PM' },
  ],
};

export const createWhatsAppUrl = (message: string) =>
  `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const googleMapsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicConfig.mapQuery)}`;
