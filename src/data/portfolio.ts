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
      'Designed and maintained robust backend APIs with NestJS for real-time AI chat with OpenAI GPT-4o',
      'Analysed performance bottlenecks and implemented compound MongoDB indexes',
      'Conducted unit testing with Jest on auth and chat-history service layers, achieving 70%+ code coverage; documented API contracts with OpenAPI',
      'Collaborated across frontend and backend layers to clarify feature requirements and recommend UX improvements; shipped EN/VI multilingual support via i18n',
      'Deployed to Vercel + Render with GitHub Actions CI/CD pipeline, automating build-test-deploy cycle and ensuring zero-downtime releases',
    ],
    github: 'https://github.com/giabao123789/lingua-ai-studio',
    live: '',
    period: '02/2026 - 03/2026',
  },
  {
    id: '2',
    title: 'BlushTodo',
    description: 'AI-Powered Task Management Application',
    longDescription:
      'An AI-powered productivity platform featuring secure authentication, task management, and scalable NestJS modular backend architecture.',
    technologies: ['NestJS', 'Next.js', 'MongoDB', 'Docker', 'Docker Compose', 'JWT', 'OpenAI'],
    features: [
      'Developed and maintained fullstack AI-powered application with NestJS modular architecture; implemented DTO validation with class-validator',
      'Designed data schemas with Mongoose ODM on MongoDB Atlas; optimized query performance with selective field projection and document indexing',
      'Containerized entire application stack using Docker Compose; prepared cloud deployment for Vercel (frontend) and Render (backend)',
      'Implemented secure authentication flow: JWT access/refresh tokens, bcrypt password hashing, HTTP-only cookies, and protected route middleware',
    ],
    github: 'https://github.com/giabao123789/blushtodo',
    live: '',
    period: '11/2025 - 12/2025',
  },
  {
    id: '3',
    title: 'Music Streaming Web Application',
    description: 'Modern Fullstack Music Platform',
    longDescription:
      'A modern music streaming platform with Next.js SSG/ISR, optimized performance, and smooth user experience cutting average load time to ~1.2s.',
    technologies: ['Next.js', 'React', 'NextAuth', 'JWT', 'Tailwind CSS', 'Framer Motion', 'Axios'],
    features: [
      'Built and maintained fullstack music platform with Next.js SSG/ISR; optimised automated page generation process, cutting average load time to ~1.2s',
      'Implemented NextAuth + JWT session management with Axios interceptors for seamless token refresh; built 12+ API routes with full CRUD operations',
      'Resolved cross-browser audio playback issues and drag-and-drop edge cases through systematic root-cause analysis and regression testing',
    ],
    github: 'https://github.com/giabao123789/music-streaming-platform',
    live: '',
    period: '10/2025 - 12/2025',
  },
  {
    id: '4',
    title: 'Weather Forecast Web Application',
    description: 'Real-time Weather Application',
    longDescription:
      'A responsive real-time weather application with 100% TypeScript strict-mode coverage, Lighthouse 92/100 performance score, and mobile-first UI.',
    technologies: ['Next.js', 'TypeScript', 'OpenWeatherMap API', 'Tailwind CSS'],
    features: [
      'Built real-time weather app with 100% TypeScript strict-mode coverage; integrated external REST API with error handling and loading-state management',
      'Achieved Lighthouse performance 92/100 and accessibility 95/100; designed mobile-first responsive UI with Tailwind CSS',
    ],
    github: 'https://github.com/giabao123789/weather-forecast-app',
    live: '',
    period: '03/2026 - 04/2026',
  },
]
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Fullstack Developer',
    company: 'University of Transport Ho Chi Minh City',
    period: '2024 - Present',
    description: 'Internship as Fullstack Developer',
    responsibilities: [
      'Participated in the development of the university Library Management Web System using NestJS and ReactJS',
      'Identified and resolved UI and API bugs during the active development phase, contributing to overall system stability',
      'Followed team Git workflow and coding standards throughout the internship period.',
    ],
    technologies: ['Tech stack: NestJS, ReactJS, TypeScript, Git/GitHub'],
  },
  {
    id: '2',
    title: 'Crew Leader Level 3',
    company: 'Highlands Coffee',
    period: '2022 - 2024',
    description: 'Leadership and Team Management',
    responsibilities: ['Leadership', 'Team communication', 'Problem-solving', 'Adaptability', 'Responsibility'],
    technologies: ['Leadership', 'Team Management'],
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
  {
    category: 'Testing',
    items: ['Jest', 'Postman'],
  }
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

export const aboutText = `I am a recent Information Technology graduate with hands-on experience in building and deploying
fullstack web applications using NestJS and Next.js. I am seeking a Fullstack or Junior Backend Developer
position to apply my technical skills, contribute to scalable and high-performance web applications, and
grow into a professional Software Engineer`;

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
