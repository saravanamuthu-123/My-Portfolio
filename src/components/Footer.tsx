import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">
              <span className="text-blue-400">Saravana</span>Portfolio
            </div>
            <p className="text-gray-400 max-w-md">
              Building scalable backend solutions and innovative applications with modern technologies.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-gray-500 mt-2">
            © 2024 SARAVANAMUTHU S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;