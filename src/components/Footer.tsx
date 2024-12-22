import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:contact@brazilism.com" className="flex items-center hover:text-emerald-200">
                <Mail className="w-5 h-5 mr-2" />
                contact@brazilism.com
              </a>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +1 (555) 123-4567
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-emerald-200">About Brazil</a></li>
              <li><a href="/faq" className="hover:text-emerald-200">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-emerald-200">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-emerald-200">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-emerald-700 text-center">
          <p>&copy; {new Date().getFullYear()} Brazilism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}