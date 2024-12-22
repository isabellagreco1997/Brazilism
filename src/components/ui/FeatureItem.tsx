import React from 'react';

type FeatureItemProps = {
  icon: React.ReactNode;
  text: string;
  className?: string;
};

export function FeatureItem({ icon, text, className = '' }: FeatureItemProps) {
  return (
    <div className={`flex items-center group hover:-translate-y-1 transition-transform duration-200 rounded-xl p-3 ${className}`}>
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/80 to-yellow-500/80 text-black shadow-lg group-hover:shadow-xl transition-all duration-200">
          {icon}
        </div>
      </div>
      <p className="ml-4 text-lg">
        {text}
      </p>
    </div>
  );
}