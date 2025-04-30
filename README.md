# Personal Portfolio Website

This is the source code for my personal portfolio website. The site is built using React, TypeScript, and Tailwind CSS, featuring a modern, responsive design with dark mode support.

## Updating Content

### Personal Information
To update your personal information, modify the `aboutMeData` object in `src/data/portfolioData.ts`:

```typescript
export const aboutMeData = {
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  bio: 'Your Bio',
  profileImage: 'URL to your profile image',
  resumeUrl: 'Path to your resume PDF',
};
```

### Skills and Projects
Add or modify skills and projects in the `skillsData` array in `src/data/portfolioData.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Skill Name',
  description: 'Skill Description',
  icon: 'IconName', // Available icons: Code, Video, Palette, Share2, Brain
  level: 5, // 1-5
  works: [
    {
      id: 'work-id',
      title: 'Project Title',
      description: 'Project Description',
      imageUrl: 'Project Image URL',
      projectUrl: 'Live Project URL', // Optional
      tags: ['Tag1', 'Tag2'],
      type: 'website' | 'video' | 'image'
    }
  ]
}
```

### Social Links
Update social media links in the `socialLinks` array in `src/data/portfolioData.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Platform Name',
  url: 'Your Profile URL',
  icon: 'IconName' // Available icons: Linkedin, Github, Twitter, Instagram
}
```

### Updating CV
To update your CV:
1. Replace the existing CV file in the public directory
2. Update the `resumeUrl` in `aboutMeData` to point to the new file

### Adding Work Samples
To add new work samples:
1. Add the work sample details to the appropriate skill's `works` array in `skillsData`
2. For videos, host them on a video platform and use the embed URL
3. For images, use direct image URLs

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## File Structure
```
src/
├── components/     # React components
├── context/       # Context providers
├── data/          # Content data
├── types/         # TypeScript types
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## Deployment
The site can be deployed to any static hosting service (Netlify, Vercel, etc.). The build command will generate a `dist` folder with the production-ready files.