import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  icon: Icon,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute start-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF86]" />
        )}
        <input
          className={`
            w-full
            ${Icon ? 'ps-12' : 'px-4'}
            pe-4 py-4
            bg-[#F5F5F0]
            border-2 border-transparent
            rounded-2xl
            focus:border-[#D4AF86]
            focus:bg-white
            transition-all
            outline-none
            ${error ? 'border-red-500' : ''}
            ${className}
          `.trim().replace(/\s+/g, ' ')}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
