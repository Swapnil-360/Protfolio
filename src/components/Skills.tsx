import React, { useState } from 'react';
import { Code, Video, Palette } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { Skill as SkillType } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={24} />,
  Video: <Video size={24} />,
  Palette: <Palette size={24} />,
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillType | null>(null);

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the key skills I've developed throughout my professional journey. 
            Click on any skill to see related work samples.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <div 
              key={skill.id}
              className={`bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-lg ${
                selectedSkill?.id === skill.id
                  ? 'ring-2 ring-teal-500 dark:ring-teal-400'
                  : ''
              }`}
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
                  {iconMap[skill.icon]}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{skill.name}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-teal-600 dark:bg-teal-400 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{skill.level}/5</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {selectedSkill && (
          <div className="mt-16">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {selectedSkill.name} - Work Samples
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {selectedSkill.works.map((work) => (
                  <div 
                    key={work.id}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={work.imageUrl} 
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{work.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{work.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-xs bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {work.projectUrl && (
                        <a 
                          href={work.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors text-sm"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;