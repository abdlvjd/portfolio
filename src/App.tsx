import { useState, useEffect } from 'react';
import planzo from './Assets/planzo creations.png'
import qrasys from './Assets/qrasys.png'
import rill from './Assets/rill.png'
import resume from './Assets/Abdul Vajid.pdf'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  ChevronDown,
  MapPin,
  Calendar,
  Send,
  Moon,
  Sun,
  X,
  ChevronRight,
  Target,
  Lightbulb,
  Zap,
  TrendingUp,
  AlertCircle,
  Briefcase,
  Award,
  Sparkles,
  MessageCircle,
  Instagram,
  Phone
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored ? stored === 'dark' : prefersDark;
    setIsDark(theme);
    applyTheme(theme);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setHasReducedMotion(prefersReducedMotion);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    applyTheme(newTheme);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Abdul_Vajid_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS',
    'Bootstrap', 'CSS Modules', 'React Hooks', 'Context API', 'Redux',
    'Git', 'GitHub', 'Postman', 'REST APIs', 'Netlify', 'Vercel'
  ];

  const projects = [
    {
      title: 'Planzo Creations',
      description: ' Designed and developed a responsive professional website for Planzo Creations, showcasing real estate back-office and marketing services with structured sections, portfolio, and lead-generation forms.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React.JS'],
      image: planzo,
      demo: 'https://www.planzocreations.com/',
      github: '#',
      problem: 'Planzo Creations required a professional, responsive business website to clearly present real estate back-office and marketing services, establish credibility, and generate qualified business leads through an online presence.',
      features: [
        'Responsive, mobile-first UI ensuring consistent experience across desktop, tablet, and mobile devices',
        'Service-focused content architecture to clearly present real estate back-office and marketing solutions',
        'Reusable React component structure for maintainable and scalable UI development',
        'Lead-generation contact forms to capture client inquiries',
        'Clean navigation and structured layouts to improve readability and user flow'
      ],
      challenges: [
        'Designed layouts that remained visually consistent across multiple screen sizes and resolutions',
        'Structured content-heavy service pages without overwhelming users',
        'Ensured smooth client-side rendering while integrating REST APIs',
        'Maintained clean component separation to simplify future updates and enhancements'
      ],
      solutions: [
        'Implemented a component-based architecture using React to improve reusability and development efficiency',
        'Applied responsive CSS techniques to maintain layout stability across devices',
        'Integrated REST APIs for handling dynamic form data',
        'Optimized UI structure for clarity, accessibility, and performance'
      ],
      impact: [
        'Delivered a production-ready business website used in a real-world commercial environment',
        'Improved service visibility and brand credibility through a modern, structured UI',
        'Enabled effective lead capture through integrated inquiry forms',
        'Reduced future development effort through reusable UI components'
      ]
    },
    // {
    //   title: 'Qrasys Technologies',
    //   description: 'Designed and developed a responsive corporate website for Qrasys Technologies to showcase IT services, company information, and enable client inquiries through a clean and professional interface.',
    //   tech: ['HTML', 'CSS', 'JavaScript'],
    //   image: qrasys,
    //   demo: 'https://www.qrasys.com/',
    //   github: '#',
    //   problem: 'Qrasys Technologies needed a professional corporate website to present its IT services, build online credibility, and provide an easy way for potential clients to understand offerings and get in touch.',
    //   features: [
    //     'Responsive layout optimized for desktop, tablet, and mobile devices',
    //     'Clear service presentation highlighting IT and software solutions',
    //     'Structured content sections for About, Services, and Contact',
    //     'User-friendly navigation for improved accessibility and usability',
    //     'Contact form integration for client inquiries'
    //   ],
    //   challenges: [
    //     'Maintaining consistent layout and styling across different screen sizes',
    //     'Presenting multiple services clearly without overwhelming users',
    //     'Ensuring fast load times with media-rich content',
    //     'Creating a clean and professional UI suitable for a corporate audience'
    //   ],
    //   solutions: [
    //     'Used semantic HTML and structured CSS for maintainable layouts',
    //     'Applied responsive design principles to ensure cross-device compatibility',
    //     'Optimized images and assets for better performance',
    //     'Implemented simple JavaScript enhancements for smooth interactions'
    //   ],
    //   impact: [
    //     'Delivered a professional corporate website used to represent an IT services company online',
    //     'Improved clarity of service offerings and company presentation',
    //     'Enabled direct client communication through integrated contact forms',
    //     'Provided a scalable base for future content and service expansion'
    //   ]
    // },
    {
      title: 'Rill Hospital',
      description: 'Built and deployed a responsive healthcare services website for Rill Hospital, providing clear information about hospital departments, services, and patient inquiry options.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: rill,
      demo: 'https://rillhospital.com/',
      github: '#',
      problem: 'Rill Hospital required an accessible and responsive website to present healthcare services, hospital departments, and essential patient information while improving online visibility and engagement.',
      features: [
        'Responsive, mobile-friendly design for patients across devices',
        'Structured service and department sections for easy information access',
        'Clear presentation of hospital information and contact details',
        'Simple inquiry functionality for patient communication',
        'Clean UI focused on readability and accessibility'
      ],
      challenges: [
        'Designing layouts suitable for a wide range of users, including non-technical visitors',
        'Ensuring content readability across different devices and screen sizes',
        'Organizing healthcare-related information without clutter',
        'Maintaining consistent styling across multiple content sections'
      ],
      solutions: [
        'Designed clear, section-based layouts to improve content discoverability',
        'Applied responsive CSS techniques to support various screen sizes',
        'Focused on accessibility-friendly UI with readable typography and spacing',
        'Optimized structure for ease of navigation and user understanding'
      ],
      impact: [
        'Delivered a production-ready healthcare website used by real users',
        'Improved accessibility and clarity of hospital service information',
        'Enhanced patient engagement through clear navigation and inquiry options',
        'Established a reliable online presence for the hospital'
      ]
    },
    // {
    //   title: 'Netflix Clone',
    //   description: 'Netflix-style UI with dynamic movie data from TMDB API',
    //   tech: ['React', 'REST API', 'CSS'],
    //   image: 'https://images.pexels.com/photos/7234390/pexels-photo-7234390.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   demo: '#',
    //   github: '#',
    //   problem: 'Portfolio project to demonstrate React mastery with real API integration.',
    //   features: [
    //     'Dynamic movie data from TMDB API',
    //     'Infinite scroll pagination',
    //     'Search and filter functionality',
    //     'Movie detail modals',
    //     'Responsive grid layout'
    //   ],
    //   challenges: [
    //     'Managed API rate limiting and caching strategies',
    //     'Optimized re-renders with useCallback and useMemo',
    //     'Handled large datasets with virtual scrolling'
    //   ]
    // },
    // {
    //   title: 'Media Player App',
    //   description: 'Media player with playlists and playback controls',
    //   tech: ['React', 'JavaScript', 'CSS'],
    //   image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   demo: '#',
    //   github: '#',
    //   problem: 'Build a feature-rich media player supporting playlists and user preferences.',
    //   features: [
    //     'Full playback controls (play, pause, seek, volume)',
    //     'Playlist management and persistence',
    //     'Current time and duration display',
    //     'Keyboard shortcuts for accessibility',
    //     'Next/previous track navigation'
    //   ],
    //   challenges: [
    //     'Synchronized UI state with HTML5 audio events',
    //     'Persisted playlist data using localStorage',
    //     'Implemented smooth progress bar interactions'
    //   ]
    // }
  ];

  const experience = [
    {
      title: 'React Developer',
      company: 'Planzo Creations',
      period: '2024 – Present',
      description: 'Building responsive web applications with React, implementing UI/UX designs, and optimizing frontend performance.'
    },
    {
      title: 'Junior Zoho Developer',
      company: 'Nurture Spark Digital',
      period: '2024',
      description: 'Developed custom solutions using Zoho tools, integrated APIs, and created automated workflows.'
    },
    {
      title: 'MERN Stack Developer Intern',
      company: 'Luminar Technolab',
      period: '2023',
      description: 'Built full-stack applications using MongoDB, Express, React, and Node.js with focus on frontend development.'
    },
    {
      title: 'UI/UX Designer Intern',
      company: 'DSN Digital',
      period: '2022 – 2023',
      description: 'Designed user interfaces and prototypes, conducted user research, and collaborated with development teams.'
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors ${hasReducedMotion ? 'motion-reduce' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-slate-800/50 shadow-sm transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent hover:from-purple-700 hover:to-indigo-700 dark:hover:from-purple-300 dark:hover:to-indigo-300 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg px-2 sm:px-3 py-1 sm:py-2"
              aria-label="Abdul Vajid - Go to home"
            >
              AV
            </button>
            <div className="hidden md:flex gap-6 lg:gap-8">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm lg:text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors capitalize focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg px-2 lg:px-3 py-1 lg:py-2 font-medium relative group"
                  aria-label={`Navigate to ${section} section`}
                >
                  {section}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
            <div className="flex gap-2 sm:gap-3 items-center">
              <a
                href="https://github.com/abdlvjd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg p-1.5 sm:p-2"
                aria-label="GitHub profile"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-vajid-509255312/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg p-1.5 sm:p-2"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <button
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg p-1.5 sm:p-2"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 sm:pt-16 px-4 sm:px-6 pb-12 sm:pb-0 relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <div className={`mb-4 sm:mb-6 ${hasReducedMotion ? '' : 'opacity-0 animate-fade-in'}`}>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm mb-6 sm:mb-8 border border-purple-200/50 dark:border-purple-700/50 shadow-sm">
              <MapPin size={14} className="sm:w-4 sm:h-4 animate-pulse flex-shrink-0" />
              <span className="whitespace-nowrap">Malappuram, Kerala, India</span>
            </div>
          </div>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 dark:from-white dark:via-purple-200 dark:to-indigo-200 bg-clip-text text-transparent mb-4 sm:mb-6 ${hasReducedMotion ? '' : 'opacity-0 animate-fade-in-delay-1'}`}>
            Abdul Vajid
          </h1>
          <p className={`text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 font-medium ${hasReducedMotion ? '' : 'opacity-0 animate-fade-in-delay-2'}`}>
            Frontend Developer <span className="text-purple-600 dark:text-purple-400">(React)</span>
          </p>
          <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 ${hasReducedMotion ? '' : 'opacity-0 animate-fade-in-delay-3'}`}>
            Building responsive, user-focused interfaces that combine clean design with performance
          </p>
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 ${hasReducedMotion ? '' : 'opacity-0 animate-fade-in-delay-4'}`}>
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 font-medium text-sm sm:text-base"
            >
              View Projects
            </button>
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 rounded-xl hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium text-sm sm:text-base"
            >
              Download Resume
            </button>
          </div>
          <div className={`mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 px-4 ${hasReducedMotion ? '' : 'opacity-0 animate-fade-in-delay-5'}`}>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-emerald-100/80 dark:bg-emerald-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-200/50 dark:border-emerald-700/50">
              <Calendar size={14} className="sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-700 dark:text-emerald-300 font-medium whitespace-nowrap">Immediate Joiner</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-blue-100/80 dark:bg-blue-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-200/50 dark:border-blue-700/50">
              <Sparkles size={14} className="sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span className="text-blue-700 dark:text-blue-300 font-medium whitespace-nowrap">Visiting Visa Available</span>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className={`mt-12 sm:mt-16 text-gray-400 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg p-2 ${hasReducedMotion ? '' : 'animate-bounce'}`}
            aria-label="Scroll to about section"
          >
            <ChevronDown size={28} className="sm:w-8 sm:h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-purple-200/50 dark:border-purple-700/50">
              <Award size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Get to know me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">About Me</h2>
          </div>
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-2xl border border-gray-100 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I'm a Frontend Developer specializing in React, with a strong foundation in HTML, CSS, and JavaScript.
              I focus on converting UI/UX designs into clean, production-ready code that users enjoy interacting with.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
              My experience ranges from building responsive websites to developing dynamic React applications that consume
              REST APIs. I prioritize writing maintainable code, optimizing performance, and delivering projects that meet
              both user needs and business goals.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently available for immediate joining with visiting visa arrangements in place. I'm looking for opportunities
              where I can contribute to meaningful projects and continue growing as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-20 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-indigo-200/50 dark:border-indigo-700/50">
              <Code2 size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">My Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 dark:from-white dark:to-indigo-200 bg-clip-text text-transparent mb-2 sm:mb-3">Skills</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Technologies I work with</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group px-4 sm:px-6 py-2.5 sm:py-3.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-slate-700 rounded-lg sm:rounded-xl text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-700 dark:hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all cursor-default focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-medium relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 group-hover:via-purple-500/10 transition-all"></div>
                <span className="relative">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-purple-200/50 dark:border-purple-700/50">
              <Briefcase size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent mb-2 sm:mb-3">Projects</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Recent work and side projects</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group flex flex-col h-full border border-gray-100 dark:border-slate-700/50 hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden h-40 sm:h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 ${hasReducedMotion ? '' : 'group-hover:scale-110'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full border border-purple-200/50 dark:border-purple-700/50 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 sm:gap-3 mt-auto">
                    <button
                      onClick={() => setSelectedProject(index)}
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg sm:rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 font-medium text-xs sm:text-sm"
                      aria-label={`View details for ${project.title}`}
                    >
                      <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                      <span>Details</span>
                    </button>
                    <a
                      href={project.demo}
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 rounded-lg sm:rounded-xl hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium text-xs sm:text-sm"
                      aria-label={`View live demo for ${project.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-${selectedProject}-title`}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-gradient-to-br from-purple-500/10 via-purple-400/5 to-indigo-500/10 dark:from-purple-500/20 dark:via-purple-400/10 dark:to-indigo-500/20 px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-200 dark:border-slate-700/50">
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 sm:top-6 sm:right-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg sm:rounded-xl p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-slate-800"
                aria-label="Close project details"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
              <div className="pr-10 sm:pr-12">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  {projects[selectedProject].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full border border-purple-200/50 dark:border-purple-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3
                  id={`project-${selectedProject}-title`}
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent"
                >
                  {projects[selectedProject].title}
                </h3>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] sm:max-h-[calc(90vh-140px)] px-4 sm:px-8 py-4 sm:py-6">
              <div className="space-y-6 sm:space-y-8">
                {/* Problem Statement */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-purple-100/80 dark:bg-purple-900/30 rounded-lg sm:rounded-xl border border-purple-200/50 dark:border-purple-700/50">
                      <Target className="text-purple-600 dark:text-purple-400" size={16} />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Problem Statement</h4>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed ml-0 sm:ml-14">
                    {projects[selectedProject].problem}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-blue-100/80 dark:bg-blue-900/30 rounded-lg sm:rounded-xl border border-blue-200/50 dark:border-blue-700/50">
                      <Zap className="text-blue-600 dark:text-blue-400" size={16} />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Key Features</h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 ml-0 sm:ml-14">
                    {projects[selectedProject].features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                      >
                        <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center text-white text-xs font-semibold mt-0.5 shadow-sm">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Challenges */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-amber-100/80 dark:bg-amber-900/30 rounded-lg sm:rounded-xl border border-amber-200/50 dark:border-amber-700/50">
                      <AlertCircle className="text-amber-600 dark:text-amber-400" size={16} />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Technical Challenges</h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 ml-0 sm:ml-14">
                    {projects[selectedProject].challenges.map((challenge, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 bg-amber-50/80 dark:bg-amber-900/10 p-2 sm:p-3 rounded-lg sm:rounded-xl border-l-4 border-amber-400 dark:border-amber-500 backdrop-blur-sm"
                      >
                        <AlertCircle className="flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" size={16} />
                        <span className="leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution Approach */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-emerald-100/80 dark:bg-emerald-900/30 rounded-lg sm:rounded-xl border border-emerald-200/50 dark:border-emerald-700/50">
                      <Lightbulb className="text-emerald-600 dark:text-emerald-400" size={16} />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Solution Approach</h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 ml-0 sm:ml-14">
                    {projects[selectedProject].solutions.map((solution, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 bg-emerald-50/80 dark:bg-emerald-900/10 p-2 sm:p-3 rounded-lg sm:rounded-xl border-l-4 border-emerald-400 dark:border-emerald-500 backdrop-blur-sm"
                      >
                        <Lightbulb className="flex-shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" size={16} />
                        <span className="leading-relaxed">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact & Results */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-indigo-100/80 dark:bg-indigo-900/30 rounded-lg sm:rounded-xl border border-indigo-200/50 dark:border-indigo-700/50">
                      <TrendingUp className="text-indigo-600 dark:text-indigo-400" size={16} />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Impact & Results</h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 ml-0 sm:ml-14">
                    {projects[selectedProject].impact.map((impacts, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 bg-indigo-50/80 dark:bg-indigo-900/10 p-2 sm:p-3 rounded-lg sm:rounded-xl border-l-4 border-indigo-400 dark:border-indigo-500 backdrop-blur-sm"
                      >
                        <TrendingUp className="flex-shrink-0 text-indigo-600 dark:text-indigo-400 mt-0.5" size={16} />
                        <span className="leading-relaxed">{impacts}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-indigo-200/50 dark:border-indigo-700/50">
              <Briefcase size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Career Path</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 dark:from-white dark:to-indigo-200 bg-clip-text text-transparent mb-2 sm:mb-3">Experience</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Professional journey</p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all border-l-4 border-purple-500 dark:border-purple-400 hover:scale-[1.02] duration-300 border border-gray-100 dark:border-slate-700/50"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 sm:mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">{job.title}</h3>
                  <span className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-semibold bg-purple-100/80 dark:bg-purple-900/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-purple-200/50 dark:border-purple-700/50 inline-block w-fit">{job.period}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                  <Briefcase size={14} className="sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                  {job.company}
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-purple-200/50 dark:border-purple-700/50">
              <Send size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Let's Connect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent mb-2 sm:mb-3">Get In Touch</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Available for immediate joining</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Email Card */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-gray-100 dark:border-slate-700/50 hover:scale-105 duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-purple-100/80 dark:bg-purple-900/30 rounded-xl sm:rounded-2xl border border-purple-200/50 dark:border-purple-700/50 flex-shrink-0">
                  <Mail className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 text-base sm:text-lg">Email</h3>
                  <a
                    href="mailto:abdulvajidonwork@gmail.com"
                    className="text-sm sm:text-base text-purple-600 dark:text-purple-400 hover:underline focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg px-2 py-1 font-medium break-all"
                  >
                    abdulvajidonwork@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-gray-100 dark:border-slate-700/50 hover:scale-105 duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-emerald-100/80 dark:bg-emerald-900/30 rounded-xl sm:rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 flex-shrink-0">
                  <Phone className="text-emerald-600 dark:text-emerald-400" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 text-base sm:text-lg">Phone</h3>
                  <a
                    href="tel:+971544551920"
                    className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-lg px-2 py-1 font-medium"
                  >
                    +971544551920
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Card - Full Width */}
            <div className="sm:col-span-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-gray-100 dark:border-slate-700/50">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-indigo-100/80 dark:bg-indigo-900/30 rounded-xl sm:rounded-2xl border border-indigo-200/50 dark:border-indigo-700/50 flex-shrink-0">
                  <Code2 className="text-indigo-600 dark:text-indigo-400" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">Social Links</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    <a
                      href="https://github.com/abdlvjd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-100 dark:bg-slate-700 rounded-lg sm:rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-all hover:scale-105 font-medium text-gray-700 dark:text-gray-300"
                    >
                      <Github size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="truncate">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abdul-vajid-509255312/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg sm:rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all hover:scale-105 font-medium text-blue-700 dark:text-blue-300"
                    >
                      <Linkedin size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="truncate">LinkedIn</span>
                    </a>
                    <a
                      href="https://wa.me/+971544551920"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 bg-green-100 dark:bg-green-900/30 rounded-lg sm:rounded-xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-all hover:scale-105 font-medium text-green-700 dark:text-green-300"
                    >
                      <MessageCircle size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="truncate">WhatsApp</span>
                    </a>
                    <a
                      href="https://www.instagram.com/abdl_vjd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 bg-pink-100 dark:bg-pink-900/30 rounded-lg sm:rounded-xl hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-all hover:scale-105 font-medium text-pink-700 dark:text-pink-300"
                    >
                      <Instagram size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="truncate">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-2xl border border-gray-100 dark:border-slate-700/50">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Your name"
                  aria-label="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="your.email@example.com"
                  aria-label="Your email"
                />
              </div>
            </div>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="message" className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-none transition-all"
                placeholder="Your message..."
                aria-label="Your message"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg sm:rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 font-semibold text-base sm:text-lg"
            >
              <Send size={18} className="sm:w-5 sm:h-5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-200 dark:border-slate-800/50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-colors">
        <div className="max-w-6xl mx-auto text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
          <p className="font-medium">© 2026 Abdul Vajid. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;