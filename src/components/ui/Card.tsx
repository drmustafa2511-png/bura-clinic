import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'glass';
  hoverable?: boolean;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverable = true,
  className = '',
  delay = 0,
}) => {
  const variants = {
    default: 'bg-white shadow-lg',
    gradient: 'bg-gradient-to-br from-[#F5F5F0] to-white shadow-lg',
    glass: 'bg-white/60 backdrop-blur-sm shadow-lg',
  };

  const hoverClass = hoverable ? 'hover:shadow-2xl hover:-translate-y-2' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`
        ${variants[variant]}
        ${hoverClass}
        rounded-3xl
        transition-all duration-300
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </motion.div>
  );
};
