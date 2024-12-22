import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-xl border border-gray-100 shadow-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}