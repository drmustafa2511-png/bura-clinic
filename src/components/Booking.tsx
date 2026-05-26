import React, { useState } from 'react';
import { Phone, Calendar, User, MessageSquare, MapPin } from 'lucide-react';
import { Section } from './ui/Section';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { clinicConfig, createWhatsAppUrl } from '../config/clinic';
import { servicesData } from '../data/services';

const Booking: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const serviceOptions = [
    ...servicesData.map((service) => ({
      value: isArabic ? t(service.titleKey) : t(service.titleKey),
      label: t(service.titleKey),
    })),
    { value: isArabic ? 'أخرى' : 'Other', label: isArabic ? 'أخرى' : 'Other' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = isArabic
      ? `مرحباً ${clinicConfig.brandAr}،\n\nأرغب في حجز موعد استشارة:\n\n👤 الاسم: ${formData.name}\n📱 الجوال: ${formData.phone}\n💆 الخدمة: ${formData.service}\n📅 الموعد المفضل: ${formData.date}\n${formData.message ? `📝 ملاحظات: ${formData.message}\n` : ''}\nبانتظار تواصلكم، وشكرًا.`
      : `Hello ${clinicConfig.brandEn},\n\nI would like to book a consultation:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred date: ${formData.date}\n${formData.message ? `Notes: ${formData.message}\n` : ''}\nThank you.`;

    window.open(createWhatsAppUrl(message), '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      titleAr: 'اتصلي بنا',
      info: clinicConfig.phoneDisplay,
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      titleAr: 'واتساب',
      info: clinicConfig.whatsappDisplay,
    },
    {
      icon: MapPin,
      title: 'Location',
      titleAr: 'الموقع',
      info: clinicConfig.addressEn,
      infoAr: clinicConfig.addressAr,
    },
  ];

  return (
    <Section
      id="booking"
      title={t('booking.title')}
      subtitle={t('booking.subtitle')}
      background="gradient"
    >
      <div className="max-w-4xl mx-auto">
        <Card variant="default" className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label={t('booking.name')}
              name="name"
              value={formData.name}
              onChange={handleChange}
              icon={User}
              placeholder={isArabic ? 'الاسم الكامل' : 'Full name'}
              required
            />

            <Input
              label={t('booking.phone')}
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              icon={Phone}
              placeholder="05XX XXX XXX"
              dir="ltr"
              required
            />

            <Select
              label={t('booking.service')}
              name="service"
              value={formData.service}
              onChange={handleChange}
              options={serviceOptions}
              placeholder={isArabic ? 'اختاري الخدمة' : 'Select a service'}
              required
            />

            <Input
              label={t('booking.date')}
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              icon={Calendar}
              required
            />

            <Textarea
              label={t('booking.message')}
              name="message"
              value={formData.message}
              onChange={handleChange}
              icon={MessageSquare}
              placeholder={isArabic ? 'هل لديك أي استفسارات أو ملاحظات؟' : 'Any questions or notes?'}
              rows={4}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={Phone}
              iconPosition="start"
              fullWidth
            >
              {t('booking.submit')}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#2D2D2D]/60">
              {t('booking.redirectNote')}
            </p>
          </div>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white/65 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg"
            >
              <item.icon className="w-8 h-8 text-[#D4AF86] mx-auto mb-3" />
              <h4 className="font-bold text-[#2D2D2D] mb-1">{isArabic ? item.titleAr : item.title}</h4>
              <p className="text-sm text-[#2D2D2D]/70" dir={index < 2 ? 'ltr' : undefined}>{isArabic ? item.infoAr || item.info : item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Booking;
