import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'start' | 'end';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'end',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#D4AF86] to-[#C9A87C] text-white shadow-xl hover:shadow-2xl hover:scale-105',
    secondary: 'bg-white/80 backdrop-blur-sm text-[#2D2D2D] border-2 border-[#D4AF86] hover:bg-white hover:scale-105 shadow-lg',
    ghost: 'bg-transparent text-[#D4AF86] border border-[#D4AF86] hover:bg-[#D4AF86]/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button className={classes} {...props}>
      {Icon && iconPosition === 'start' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'end' && <Icon className="w-5 h-5 rtl:rotate-180" />}
    </button>
  );
};
