import React from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Linkedin: <Linkedin size={20} />,
  Github: <Github size={20} />,
  Twitter: <Twitter size={20} />,
  Instagram: <Instagram size={20} />,
};

const SocialLinks = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
          aria-label={link.name}
        >
          {iconMap[link.icon]}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;