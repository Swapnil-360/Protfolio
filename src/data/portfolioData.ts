import { Skill, SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    name: 'LinkedIn',
    url: 'https://linkedin.com/',
    icon: 'Linkedin',
  },
  {
    id: '2',
    name: 'GitHub',
    url: 'https://github.com/',
    icon: 'Github',
  },
  {
    id: '3',
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: 'Twitter',
  },
  {
    id: '4',
    name: 'Instagram',
    url: 'https://instagram.com/',
    icon: 'Instagram',
  },
];

export const skillsData: Skill[] = [
  {
    id: '1',
    name: 'Video Editing',
    description: 'Professional video editing with expertise in motion graphics, color grading, and storytelling techniques.',
    icon: 'Video',
    level: 5,
    works: [
      {
        id: '101',
        title: 'Corporate Brand Video',
        description: 'A dynamic corporate brand video showcasing company culture and values.',
        imageUrl: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg',
        projectUrl: 'https://example.com/corporate-video',
        tags: ['After Effects', 'Premiere Pro', 'Motion Graphics'],
        type: 'video',
      },
      {
        id: '102',
        title: 'Product Commercial',
        description: 'High-energy product commercial with modern transitions and effects.',
        imageUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
        tags: ['Final Cut Pro', 'Color Grading', 'Sound Design'],
        type: 'video',
      },
    ],
  },
  {
    id: '2',
    name: 'Graphic Design',
    description: 'Creating visually stunning designs for digital and print media, with a focus on brand identity and marketing materials.',
    icon: 'Palette',
    level: 4,
    works: [
      {
        id: '201',
        title: 'Brand Identity Package',
        description: 'Complete brand identity design including logo, color palette, and brand guidelines.',
        imageUrl: 'https://images.pexels.com/photos/5626027/pexels-photo-5626027.jpeg',
        tags: ['Adobe Illustrator', 'Branding', 'Logo Design'],
        type: 'image',
      },
      {
        id: '202',
        title: 'Social Media Campaign',
        description: 'Engaging social media graphics package for a marketing campaign.',
        imageUrl: 'https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg',
        tags: ['Photoshop', 'Social Media', 'Digital Marketing'],
        type: 'image',
      },
    ],
  },
  {
    id: '3',
    name: 'Web Development',
    description: 'Building modern, responsive websites and web applications using the latest technologies.',
    icon: 'Code',
    level: 4,
    works: [
      {
        id: '301',
        title: 'E-commerce Website',
        description: 'Modern e-commerce platform with seamless user experience and payment integration.',
        imageUrl: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg',
        projectUrl: 'https://example.com/ecommerce',
        tags: ['React', 'Node.js', 'Tailwind CSS'],
        type: 'website',
      },
      {
        id: '302',
        title: 'Company Website',
        description: 'Professional company website with modern design and animations.',
        imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
        projectUrl: 'https://example.com/company',
        tags: ['TypeScript', 'Next.js', 'Responsive Design'],
        type: 'website',
      },
    ],
  },
  {
    id: '4',
    name: 'Social Media Management',
    description: 'Strategic social media management and content creation to build brand presence and engagement.',
    icon: 'Share2',
    level: 4,
    works: [
      {
        id: '401',
        title: 'Brand Growth Campaign',
        description: 'Successful social media campaign that increased brand engagement by 200%.',
        imageUrl: 'https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg',
        tags: ['Strategy', 'Content Creation', 'Analytics'],
        type: 'image',
      },
    ],
  },
  {
    id: '5',
    name: 'AI & Machine Learning',
    description: 'Leveraging artificial intelligence and machine learning technologies for innovative solutions.',
    icon: 'Brain',
    level: 3,
    works: [
      {
        id: '501',
        title: 'AI Content Generation',
        description: 'Automated content generation system using advanced AI models.',
        imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
        tags: ['Machine Learning', 'NLP', 'Python'],
        type: 'website',
      },
    ],
  },
];

export const aboutMeData = {
  name: 'Md. Miftahur Rahman Swapnil',
  title: 'Creative Professional',
  location: 'Bangladesh',
  bio: `I am a versatile creative professional with expertise in video editing, graphic design, web development, and social media management. With a passion for creating engaging digital content, I help businesses and individuals bring their visions to life.

My diverse skill set allows me to approach projects from multiple angles, ensuring comprehensive solutions that meet modern digital needs. I specialize in video production, brand identity design, web development, and strategic social media management, complemented by my knowledge of AI technologies.

I believe in staying ahead of industry trends and continuously expanding my capabilities to deliver innovative solutions that drive results.`,
  profileImage: '/images/pfp_picture.png',
  resumeUrl: '/resume.pdf',
};
