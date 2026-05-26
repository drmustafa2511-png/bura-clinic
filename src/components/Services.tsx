import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ServiceCard } from './ServiceCard';
import { servicesData } from '../data/services';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section
      id="services"
      title={t('services.title')}
      subtitle={t('services.subtitle')}
      background="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            titleKey={service.titleKey}
            descriptionKey={service.descriptionKey}
            icon={service.icon}
            gradient={service.gradient}
            delay={index * 0.1}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services">
          <Button variant="primary" size="lg">
            {t('common.viewAll')}
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default Services;
