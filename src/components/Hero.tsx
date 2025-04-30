import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { aboutMeData } from '../data/portfolioData';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center items-center pt-16 pb-0 px-4 bg-gradient-to-b from-white to-teal-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Hello, I'm <span className="text-teal-600 dark:text-teal-400">{aboutMeData.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
            {aboutMeData.title} from {aboutMeData.location}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
            {aboutMeData.bio.split('\n\n')[0]}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-colors shadow-md inline-flex items-center justify-center"
            >
              Contact Me
            </a>
            <a 
              href={aboutMeData.resumeUrl} 
              className="px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-teal-600 dark:text-teal-400 border border-teal-600 dark:border-teal-400 rounded-full transition-colors shadow-md inline-flex items-center justify-center"
              download
            >
              Download CV <Download size={16} className="ml-2" />
            </a>
          </div>
          
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-teal-600 dark:border-teal-400 shadow-xl">
            <img 
              src={aboutMeData.profileImage} 
              alt={aboutMeData.name}
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md animate-bounce text-teal-600 dark:text-teal-400"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;