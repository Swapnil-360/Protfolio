import React from 'react';
import { aboutMeData } from '../data/portfolioData';

const About = () => {
  const bioLines = aboutMeData.bio.split('\n\n');
  
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {bioLines.map((paragraph, index) => (
            <p 
              key={index} 
              className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-white">Education</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-teal-600 dark:text-teal-400">Bachelor of Science in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-400">University of Dhaka, 2018-2022</p>
                </li>
                <li>
                  <h4 className="font-semibold text-teal-600 dark:text-teal-400">Web Development Bootcamp</h4>
                  <p className="text-gray-600 dark:text-gray-400">Tech Academy Bangladesh, 2022</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-white">Experience</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-teal-600 dark:text-teal-400">Web Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">TechSolutions Ltd, 2022-Present</p>
                </li>
                <li>
                  <h4 className="font-semibold text-teal-600 dark:text-teal-400">Freelance Video Editor</h4>
                  <p className="text-gray-600 dark:text-gray-400">Self-employed, 2020-Present</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;