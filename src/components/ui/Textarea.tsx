import React from 'react';

interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
  required?: boolean;
}

export default function Textarea({
  value,
  onChange,
  placeholder,
  rows = 6,
  className = '',
  required = false
}: TextareaProps): React.JSX.Element {
  const baseClasses = 'w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none';
  const classes = `${baseClasses} ${className}`;

  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={classes}
      required={required}
    />
  );
}