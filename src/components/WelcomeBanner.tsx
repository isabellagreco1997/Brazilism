import React from 'react';
import { Container } from './ui/Container';
import { HeroContent } from './hero/HeroContent';
import { HeroBackground } from './hero/HeroBackground';

export function WelcomeBanner() {
  return (
    <Container>
      <div className="relative overflow-hidden rounded-2xl my-8">
        <div className="relative min-h-[80vh] flex items-center justify-center bg-gray-900">
          {/* Animated background */}
          <HeroBackground />
          
          {/* Content */}
          <div className="relative z-10 py-16 px-4">
            <HeroContent />
          </div>
        </div>
      </div>
    </Container>
  );
}