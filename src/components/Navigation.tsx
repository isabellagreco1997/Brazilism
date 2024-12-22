import React from 'react';
import { Menu, User } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export function Navigation() {
  return (
    <nav className="py-4 border-b border-gray-100 bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-semibold text-gray-900">Brazilism</span>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="/discussions" className="text-gray-600 hover:text-gray-900">Discussions</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Sign in</Button>
            <Button variant="primary">Get Started</Button>
          </div>
          
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-50">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </Container>
    </nav>
  );
}