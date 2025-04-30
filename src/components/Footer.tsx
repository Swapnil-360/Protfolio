import React from 'react';
import { Heart } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">Portfolio</h2>
            <p className="max-w-md">
              Thank you for visiting my portfolio website. Feel free to reach out if you have any questions or would like to collaborate.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks />
            <p className="mt-6 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> in Bangladesh
            </p>
            <p className="mt-2">
              &copy; {currentYear} | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;