import React from 'react';
import { Tag } from 'lucide-react';

export function InterestsList({ interests }: { interests: string[] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Tag className="w-5 h-5 mr-2" />
        Interests
      </h2>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}