import React from 'react';

interface IconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  title?: string;
  color?: 'red' | 'yellow' | 'blue' | 'gray';
  className?: string;
}

export default function IconButton({
  children,
  onClick,
  title,
  color = 'gray',
  className = ''
}: IconButtonProps): React.JSX.Element {
  const colorClasses = {
    red: 'text-red-600 hover:bg-red-50',
    yellow: 'text-yellow-600 hover:bg-yellow-50',
    blue: 'text-blue-600 hover:bg-blue-50',
    gray: 'text-gray-600 hover:bg-gray-50'
  };

  const classes = `p-2 rounded-lg transition-colors duration-200 ${colorClasses[color]} ${className}`;

  return (
    <button
      onClick={onClick}
      className={classes}
      title={title}
    >
      {children}
    </button>
  );
}