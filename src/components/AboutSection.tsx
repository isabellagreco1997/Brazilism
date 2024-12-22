import React from 'react';
import { Map, Utensils, Music2, Book } from 'lucide-react';

const categories = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: 'Brazilian Cuisine',
    description: 'Explore the rich flavors and traditional dishes of Brazil.',
  },
  {
    icon: <Music2 className="w-8 h-8" />,
    title: 'Festivals & Culture',
    description: 'Discover vibrant celebrations and cultural traditions.',
  },
  {
    icon: <Book className="w-8 h-8" />,
    title: 'History',
    description: 'Learn about Brazil\'s fascinating past and heritage.',
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: 'Geography',
    description: 'Explore diverse landscapes and natural wonders.',
  },
];

export function AboutSection() {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">About Brazil</h2>
          <p className="text-lg text-emerald-700">Discover the many facets of Brazilian culture and heritage</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-emerald-600 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">{category.title}</h3>
              <p className="text-emerald-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}