import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  background?: 'white' | 'gradient' | 'beige';
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  title,
  subtitle,
  className = '',
  background = 'white',
}) => {
  const backgrounds = {
    white: 'bg-white',
    gradient: 'bg-gradient-to-br from-[#F5F5F0] via-white to-[#FFF5F5]',
    beige: 'bg-[#F5F5F0]',
  };

  return (
    <section id={id} className={`py-20 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
