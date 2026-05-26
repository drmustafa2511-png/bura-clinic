export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
  gradient: string;
  treatments: string[];
  treatmentsAr: string[];
  duration: string;
  durationAr: string;
  sessions: string;
  sessionsAr: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameAr: string;
  treatment: string;
  treatmentAr: string;
  rating: number;
  text: string;
  textAr: string;
  initial: string;
}

export interface Doctor {
  id: string;
  name: string;
  nameAr: string;
  title: string;
  titleAr: string;
  specialty: string;
  specialtyAr: string;
  credentials: string[];
  credentialsAr: string[];
  color: string;
}

export interface Transformation {
  id: string;
  category: string;
  title: string;
  titleAr: string;
  treatment: string;
  treatmentAr: string;
  bgColor: string;
}

export interface Offer {
  id: string;
  badge: string;
  badgeAr: string;
  icon: string;
  title: string;
  titleAr: string;
  price: string;
  originalPrice: string;
  duration: string;
  durationAr: string;
  gradient: string;
  features: string[];
  featuresAr: string[];
  popular?: boolean;
}
