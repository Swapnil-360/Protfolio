import React, { useState } from 'react';
import FileUpload from './FileUpload';
import { Work } from '../types';

interface WorkUploadProps {
  onWorkAdded: (work: Work) => void;
}

const WorkUpload: React.FC<WorkUploadProps> = ({ onWorkAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [type, setType] = useState<'video' | 'image' | 'website'>('video');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !title || !description) {
      alert('Please fill in all required fields');
      return;
    }

    // In a real application, you would upload the file to a storage service
    // and get back a URL. For now, we'll create an object URL
    const imageUrl = URL.createObjectURL(file);

    const newWork: Work = {
      id: Date.now().toString(),
      title,
      description,
      imageUrl,
      tags: tags.split(',').map(tag => tag.trim()),
      type,
    };

    onWorkAdded(newWork);

    // Reset form
    setTitle('');
    setDescription('');
    setTags('');
    setType('video');
    setFile(null);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Add New Work
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            rows={3}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., React, Web Design, UI/UX"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Type *
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as Work['type'])}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          >
            <option value="video">Video</option>
            <option value="image">Image</option>
            <option value="website">Website</option>
          </select>
        </div>
        
        <FileUpload
          accept={type === 'video' ? 'video/*' : 'image/*'}
          onFileSelect={(file) => setFile(file)}
          label="Upload File *"
        />
        
        <button
          type="submit"
          className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors shadow-md"
        >
          Add Work
        </button>
      </form>
    </div>
  );
};

export default WorkUpload;