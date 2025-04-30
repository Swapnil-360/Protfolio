import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Work } from '../types';

// Collect all works from all skills
const allWorks: Work[] = skillsData.flatMap(skill => skill.works);

// Get unique tags from all works
const allTags = [...new Set(allWorks.flatMap(work => work.tags))];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredWorks, setFilteredWorks] = useState<Work[]>(allWorks);
  
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredWorks(allWorks);
    } else {
      const filtered = allWorks.filter(work => 
        work.tags.includes(filter) || work.type === filter
      );
      setFilteredWorks(filtered);
    }
  };
  
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">My Projects</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse through my portfolio of projects. Use the filters to view projects by category or technology.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === 'all'
                ? 'bg-teal-600 dark:bg-teal-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === 'website'
                ? 'bg-teal-600 dark:bg-teal-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => handleFilterClick('website')}
          >
            Websites
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === 'video'
                ? 'bg-teal-600 dark:bg-teal-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => handleFilterClick('video')}
          >
            Videos
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === 'image'
                ? 'bg-teal-600 dark:bg-teal-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => handleFilterClick('image')}
          >
            Designs
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div 
              key={work.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden relative group">
                {work.type === 'video' ? (
                  <video 
                    src={work.imageUrl} 
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={work.imageUrl} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                )}
                {work.projectUrl && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <a 
                      href={work.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{work.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{work.description}</p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 rounded-full cursor-pointer hover:bg-teal-200 dark:hover:bg-teal-900"
                      onClick={() => handleFilterClick(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredWorks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No projects found matching your filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;