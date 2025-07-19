import React from 'react';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
  iconBgColor?: string;
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  iconBgColor = 'bg-gray-100'
}: EmptyStateProps): React.JSX.Element {
  return (
    <div className="text-center py-12">
      <div className={`w-24 h-24 mx-auto mb-4 ${iconBgColor} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-600 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 mb-6">
        {description}
      </p>
      {action && (
        <div className="flex justify-center">
          {action}
        </div>
      )}
    </div>
  );
}