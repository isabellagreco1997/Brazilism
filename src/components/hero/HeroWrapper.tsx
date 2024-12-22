import React from 'react';

type HeroWrapperProps = {
  children: React.ReactNode;
};

export function HeroWrapper({ children }: HeroWrapperProps) {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1551972873-b7e8754e8e26?auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}