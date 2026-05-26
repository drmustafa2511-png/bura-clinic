import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { servicesData as defaultServices } from '../data/services';
import { testimonialsData as defaultTestimonials } from '../data/testimonials';
import { doctorsData as defaultDoctors } from '../data/doctors';
import { offersData as defaultOffers } from '../data/offers';
import { clinicConfig } from '../config/clinic';

interface AdminContextType {
  isAuthenticated: boolean;
  isAdminEnabled: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  services: typeof defaultServices;
  testimonials: typeof defaultTestimonials;
  doctors: typeof defaultDoctors;
  offers: typeof defaultOffers;
  contactInfo: ContactInfo;
  updateServices: (services: typeof defaultServices) => void;
  updateTestimonials: (testimonials: typeof defaultTestimonials) => void;
  updateDoctors: (doctors: typeof defaultDoctors) => void;
  updateOffers: (offers: typeof defaultOffers) => void;
  updateContactInfo: (info: ContactInfo) => void;
}

interface ContactInfo {
  whatsapp: string;
  email: string;
  phone: string;
  address: string;
  addressAr: string;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_PASSWORD = (import.meta.env.VITE_ADMIN_PASSWORD as string | undefined) || '';
const STORAGE_KEY = 'bura_clinic_admin_data';
const AUTH_KEY = 'bura_clinic_admin_auth';

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [services, setServices] = useState(defaultServices);
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [doctors, setDoctors] = useState(defaultDoctors);
  const [offers, setOffers] = useState(defaultOffers);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    whatsapp: clinicConfig.whatsappNumber,
    email: clinicConfig.email,
    phone: clinicConfig.phoneDisplay,
    address: clinicConfig.addressEn,
    addressAr: clinicConfig.addressAr,
  });

  const isAdminEnabled = Boolean(ADMIN_PASSWORD);

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        if (data.services) setServices(data.services);
        if (data.testimonials) setTestimonials(data.testimonials);
        if (data.doctors) setDoctors(data.doctors);
        if (data.offers) setOffers(data.offers);
        if (data.contactInfo) setContactInfo(data.contactInfo);
      } catch (error) {
        console.error('Error loading admin data:', error);
      }
    }

    const authStatus = sessionStorage.getItem(AUTH_KEY);
    if (isAdminEnabled && authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, [isAdminEnabled]);

  useEffect(() => {
    const data = {
      services,
      testimonials,
      doctors,
      offers,
      contactInfo,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [services, testimonials, doctors, offers, contactInfo]);

  const login = (password: string): boolean => {
    if (isAdminEnabled && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_KEY);
  };

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        isAdminEnabled,
        login,
        logout,
        services,
        testimonials,
        doctors,
        offers,
        contactInfo,
        updateServices: setServices,
        updateTestimonials: setTestimonials,
        updateDoctors: setDoctors,
        updateOffers: setOffers,
        updateContactInfo: setContactInfo,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};
