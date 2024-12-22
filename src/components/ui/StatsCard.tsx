import React from 'react';

type StatsCardProps = {
  label: string;
  value: string;
  className?: string;
};

export function StatsCard({ label, value, className = '' }: StatsCardProps) {
  return (
    <div className={`p-4 rounded-lg ${className}`}>
      <dt className="text-sm font-medium text-gray-600">{label}</dt>
      <dd className="text-2xl font-bold text-gray-900">{value}</dd>
    </div>
  );
}