import React from 'react';
import { Map } from 'lucide-react';
import type { UserProfile } from '../../types/user';

export function TravelMap({ places }: { places: UserProfile['visitedPlaces'] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Map className="w-5 h-5 mr-2" />
        Places Visited in Brazil
      </h2>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <iframe
          src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=-14.2350,-51.9253&zoom=4&maptype=roadmap`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="mt-4 space-y-2">
        {places.map((place, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className="text-gray-700">
              {place.city}, {place.state}
            </span>
            <span className="text-gray-500">{formatDate(place.visitDate)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}