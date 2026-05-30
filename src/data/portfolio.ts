import { Project, Experience, TechStackCategory } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Lingua AI Studio',
    description: 'Multilingual AI Chat Application',
    longDescription:
      'A real-time multilingual AI chat application powered by OpenAI GPT-4o with scalable NestJS backend architecture and WebSocket communication.',
    technologies: ['NestJS', 'Next.js', 'MongoDB', 'JWT', 'OpenAI', 'WebSocket', 'CI/CD'],
    features: [
      'Real-time AI chat',
      'OpenAI integration',
      'JWT authentication',
      'WebSocket messaging',
      'i18n multilingual support',
      'MongoDB indexing optimization',
      'Jest unit testing',
      'CI/CD pipeline',
    ],
    github: 'https://github.com/giabao123789/lingua-ai-studio',
    live: 'https://example.com',
  },
  {
    id: '2',
    title: 'BlushTodo',
    description: 'AI-Powered Task Management Application',
    longDescription:
      'An AI-powered productivity platform featuring secure authentication, task management, and scalable backend architecture.',
    technologies: ['NestJS', 'Next.js', 'MongoDB', 'Docker', 'JWT', 'OpenAI'],
    features: [
      'JWT access/refresh tokens',
      'HTTP-only cookies',
      'Docker Compose setup',
      'DTO validation',
      'MongoDB indexing',
      'AI task assistance',
    ],
    github: 'https://github.com/giabao123789/blushtodo',
    live: 'https://example.com',
  },
  {
    id: '3',
    title: 'Music Streaming Platform',
    description: 'Modern music streaming web application',
    longDescription:
      'A modern music streaming platform with optimized performance, responsive UI, and smooth user experience.',
    technologies: ['Next.js', 'React', 'NextAuth', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'NextAuth authentication',
      'Token refresh flow',
      'Full CRUD API routes',
      'Drag & drop interactions',
      'Optimized page loading',
      'Audio playback system',
    ],
    github: 'https://github.com/giabao123789/music-streaming-platform',
    live: 'https://example.com',
  },
  {
    id: '4',
    title: 'Weather Forecast App',
    description: 'Real-time weather application',
    longDescription:
      'A responsive real-time weather application with API integration, accessibility optimization, and mobile-first UI.',
    technologies: ['Next.js', 'TypeScript', 'OpenWeatherMap API', 'Tailwind CSS'],
    features: [
      'Real-time weather data',
      'REST API integration',
      'TypeScript strict mode',
      'Loading states',
      'Error handling',
      'Lighthouse optimized',
    ],
    github: 'https://github.com/giabao123789/weather-forecast-app',
    live: 'https://example.com',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Fullstack Developer',
    company: 'University of Transport Ho Chi Minh City',
    period: '2024 - Present',
    description: 'Internship as Fullstack Developer',
    responsibilities: [
      'Developed Library Management System',
      'Worked with NestJS and ReactJS',
      'Fixed UI/API bugs',
      'Followed Git workflow',
      'Collaborated with development team',
    ],
  },
  {
    id: '2',
    title: 'Crew Leader Level 3',
    company: 'Highlands Coffee',
    period: '2022 - 2024',
    description: 'Leadership and Team Management',
    responsibilities: ['Leadership', 'Team communication', 'Problem-solving', 'Adaptability', 'Responsibility'],
  },
];

export const techStack: TechStackCategory[] = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion', 'React Query'],
  },
  {
    category: 'Backend',
    items: [
      'NestJS',
      'Node.js',
      'RESTful APIs',
      'GraphQL',
      'JWT Authentication',
      'Middleware & Guards',
      'Microservices',
      'DTO Validation',
      'WebSocket',
    ],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB Atlas', 'MySQL', 'Redis', 'Mongoose ODM', 'Indexing & Query Optimization'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Docker Compose', 'Git/GitHub', 'CI/CD', 'Vercel', 'Render', 'Postman', 'Jest'],
  },
  {
    category: 'AI & APIs',
    items: ['OpenAI API', 'Claude Code', 'GitHub Copilot', 'Cursor', 'Gemini', 'DeepSeek','Antigravity','Codex'],
  },
];

export const skills = [
  'NestJS',
  'Next.js',
  'React.js',
  'TypeScript',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'JWT Authentication',
  'OpenAI API',
];

export const aboutText = `I am a recent Information Technology graduate with hands-on experience building and deploying 
fullstack web applications using NestJS and Next.js. Passionate about backend architecture, scalable APIs, 
real-time systems, and modern frontend experiences.`;

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/giabao123789',
    icon: 'github',
  },
  {
    name: 'Email',
    url: 'mailto:giabao2461@gmail.com',
    icon: 'email',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/trangbaodev/',
    icon: 'linkedin',
  },
];
