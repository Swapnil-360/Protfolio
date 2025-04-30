// Define types for our portfolio data
export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
  level: number; // 1-5 representing skill level
  works: Work[];
}

export interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // URL to the image thumbnail
  projectUrl?: string; // Optional link to live project
  tags: string[];
  type: 'image' | 'video' | 'website'; // Type of work
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}