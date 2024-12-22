import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Compass, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { FeatureItem } from '../ui/FeatureItem';

const communityFeatures = [
  {
    icon: <Users className="w-5 h-5" />,
    text: "Find your squad! Connect with Brazil-loving friends worldwide 🌎"
  },
  {
    icon: <Compass className="w-5 h-5" />,
    text: 'Discover hidden gems & must-visit spots across Brazil 🏖️'
  },
  {
    icon: <Heart className="w-5 h-5" />,
    text: 'Share the love for Brazilian food, music & culture 💫'
  }
];

export function HeroContent() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-block animate-bounce mb-4">
        <span className="text-xl font-medium text-blue-400">Join the fun! 🎉</span>
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
        <span className="block mb-2">Your Brazilian</span>
        <span className="relative inline-block">
          Adventure Starts
          <span className="relative ml-2 inline-block group">
            <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 text-transparent bg-clip-text group-hover:animate-pulse">
              Here! ✨
            </span>
          </span>
        </span>
      </h1>
      
      <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
        Connect with fellow Brazil enthusiasts, explore amazing destinations, 
        and dive deep into the vibrant culture! 🇧🇷
      </p>
      
      <div className="mt-8 space-y-4 max-w-xl mx-auto">
        {communityFeatures.map((feature, index) => (
          <FeatureItem 
            key={index} 
            {...feature} 
            className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
          />
        ))}
      </div>
      
      <div className="mt-10 flex items-center gap-x-6 justify-center">
        <Button 
          variant="primary" 
          className="group px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={() => navigate('/signup')}
        >
          Get Started 
          <span className="ml-2 inline-block group-hover:rotate-12 transition-transform">
            🗺️
          </span>
        </Button>
        <Button 
          variant="outline" 
          className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
          onClick={() => navigate('/login')}
        >
          Sign In 👋
        </Button>
      </div>
    </div>
  );
}