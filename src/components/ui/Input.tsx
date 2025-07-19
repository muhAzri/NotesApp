import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'search';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  autoFocus?: boolean;
  icon?: React.ReactNode;
}

export default function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
  required = false,
  autoFocus = false,
  icon
}: InputProps): React.JSX.Element {
  const baseClasses = 'w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200';
  const iconClasses = icon ? 'pl-12' : '';
  const classes = `${baseClasses} ${iconClasses} ${className}`;

  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classes}
        required={required}
        autoFocus={autoFocus}
      />
    </div>
  );
}