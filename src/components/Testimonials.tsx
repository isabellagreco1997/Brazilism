import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "Through Brazilism, I've made amazing friends and learned so much about Brazilian culture. It's like having a piece of Brazil at home!",
    author: "Sarah Johnson",
    location: "United States",
  },
  {
    id: 2,
    content: "The interactive learning modules helped me understand Brazilian history in a way textbooks never could. Highly recommended!",
    author: "Marco Silva",
    location: "Portugal",
  },
  {
    id: 3,
    content: "As a Brazilian living abroad, this platform helps me stay connected to my roots and share my culture with others.",
    author: "Ana Santos",
    location: "Canada",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">
          What Our Community Says
        </h2>
        
        <div className="relative h-64">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute w-full transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <blockquote className="text-center">
                <p className="text-xl text-emerald-700 mb-6">"{testimonial.content}"</p>
                <footer>
                  <div className="font-semibold text-emerald-900">{testimonial.author}</div>
                  <div className="text-emerald-600">{testimonial.location}</div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-emerald-600' : 'bg-emerald-200'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}