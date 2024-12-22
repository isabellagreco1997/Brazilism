import React from 'react';
import { StatsCard } from '../ui/StatsCard';

export function HeroImage() {
  return (
    <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
      <div className="relative">
        {/* Main Image Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 group">
          {/* Primary Image */}
          <div className="aspect-w-5 aspect-h-4">
            <img
              src="https://images.unsplash.com/photo-1551972873-b7e8754e8e26?auto=format&fit=crop&q=80"
              alt="Young people celebrating carnival"
              className="object-cover w-full h-full transform scale-105 group-hover:scale-100 transition-transform duration-700"
            />
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Floating Stats Cards */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <StatsCard
                label="Squad Members"
                value="5K+"
                className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl"
              />
              <StatsCard
                label="Daily Vibes"
                value="100+"
                className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Floating Secondary Images */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-xl overflow-hidden shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1565059891160-5b8c03c89bd6?auto=format&fit=crop&q=80"
            alt="Young friends at the beach"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-xl overflow-hidden shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1617138473695-50d3eaf0aa48?auto=format&fit=crop&q=80"
            alt="Friends enjoying music"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Gradient Border */}
        <div className="absolute inset-0 -m-2 bg-gradient-to-r from-yellow-400 via-blue-500 to-green-400 rounded-2xl opacity-20 blur-2xl animate-pulse" />
      </div>
    </div>
  );
}