import React from 'react';
import { Navigation } from '../components/Navigation';
import { WelcomeBanner } from '../components/WelcomeBanner';
import { AboutSection } from '../components/AboutSection';
import { CommunityHighlights } from '../components/community/CommunityHighlights';
import { FeaturedDiscussions } from '../components/community/FeaturedDiscussions';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <WelcomeBanner />
      <AboutSection />
      <CommunityHighlights />
      <FeaturedDiscussions />
      <Testimonials />
      <Footer />
    </div>
  );
}