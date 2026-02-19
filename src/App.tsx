import { useState, useEffect } from 'react';
import planzo from './Assets/planzo creations.png'
import rill from './Assets/rill.png'
import resume from './Assets/Abdul Vajid.pdf'
import avatar from './Assets/avatar.png'
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
  Phone,
  GraduationCap,
  Lock,
  Clock,
  Menu,
  Star,
  BadgeCheck,
  User
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showHireMe, setShowHireMe] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored ? stored === 'dark' : prefersDark;
    setIsDark(theme);
    applyTheme(theme);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setHasReducedMotion(prefersReducedMotion);
  }, []);

  // Scroll progress bar + active section + hire me button visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowHireMe(window.scrollY > 400);

      // Active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when modal or mobile menu is open
  useEffect(() => {
    if (selectedProject !== null || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject, mobileMenuOpen]);

  const applyTheme = (dark: boolean) => {
    dark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    applyTheme(newTheme);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      toast.success('Message sent successfully. I will get back to you soon.', {
        position: 'top-right',
        autoClose: 3000,
        theme: isDark ? 'dark' : 'light'
      });
    }, 1000);
  };

  const handleCloseModal = () => setSelectedProject(null);

  const handleDownloadResume = () => {
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

  const navSections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];

  const certifications = [
    {
      title: 'MERN Stack Development',
      issuer: 'Luminar Technolab',
      year: '2023',
      icon: '🏆'
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'DSN Digital',
      year: '2022',
      icon: '🎨'
    }
  ];

  const testimonials = [
    {
      quote: "Abdul delivered clean, well-structured React components that were easy to maintain and scale. His attention to detail and ability to translate requirements into working UI was impressive.",
      name: "Manager, Planzo Creations",
      role: "Real Estate & Marketing",
      initials: "PC"
    },
  ];

  const projects = [
    {
      title: 'Planzo Creations',
      description: 'Designed and developed a responsive professional website for Planzo Creations, showcasing real estate back-office and marketing services with structured sections, portfolio, and lead-generation forms.',
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
        'Delivered a fully responsive business website actively used to present services and capture client inquiries, improving online credibility and lead accessibility.',
        'Structured service content and navigation to make offerings clearer and easier to understand for potential clients.',
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
        'Organized healthcare content into structured sections to improve readability and make essential information easier for patients to access.',
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
      description: 'Developing and maintaining production React applications, implementing responsive UI components, integrating APIs, and improving performance across devices.'
    },
    {
      title: 'Junior Zoho Developer',
      company: 'Nurture Spark Digital',
      period: '2024',
      description: 'Built custom workflows and integrations using Zoho tools to automate business processes and improve operational efficiency.'
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

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Calicut',
      period: '2019 – 2022',
      description: 'Focused on computer science fundamentals, programming, and software development principles.'
    },
    {
      degree: 'Full Stack Web Development (MERN)',
      institution: 'Luminar Technolab',
      period: '2023',
      description: 'Intensive training in MongoDB, Express, React, and Node.js with hands-on project work.'
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors ${hasReducedMotion ? 'motion-reduce' : ''}`}>

      {/* ── Scroll Progress Bar ── */}
      <div className="fixed top-0 left-0 z-[60] h-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 transition-all duration-75 shadow-sm shadow-purple-400/50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-slate-800/50 shadow-sm transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">

            <button
              onClick={() => scrollToSection('hero')}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent hover:from-purple-700 hover:to-indigo-700 transition-all rounded-lg px-2 sm:px-3 py-1 sm:py-2"
              aria-label="Abdul Vajid - Go to home"
            >
              AV
            </button>

            {/* Desktop nav with active highlight */}
            <div className="hidden md:flex gap-6 lg:gap-8">
              {navSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm lg:text-base transition-colors capitalize rounded-lg px-2 lg:px-3 py-1 lg:py-2 font-medium relative group ${activeSection === section
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                >
                  {section}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 ${activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </button>
              ))}
            </div>

            <div className="flex gap-1 sm:gap-2 items-center">
              <a href="https://github.com/abdlvjd" target="_blank" rel="noopener noreferrer"
                className="hidden sm:flex text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:-translate-y-0.5 rounded-lg p-1.5 sm:p-2"
                aria-label="GitHub profile">
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.linkedin.com/in/abdul-vajid-509255312/" target="_blank" rel="noopener noreferrer"
                className="hidden sm:flex text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:-translate-y-0.5 rounded-lg p-1.5 sm:p-2"
                aria-label="LinkedIn profile">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <button onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:-translate-y-0.5 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg p-1.5 sm:p-2"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
                {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg p-1.5"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-gray-100 dark:border-slate-800/50 px-4 py-4 flex flex-col gap-1">
            {navSections.map((section) => (
              <button key={section} onClick={() => scrollToSection(section)}
                className={`text-left w-full px-4 py-3 text-base font-medium rounded-xl capitalize transition-all ${activeSection === section
                  ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                  : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                  }`}>
                {section}
              </button>
            ))}
            <div className="flex gap-4 mt-3 pt-3 border-t border-gray-100 dark:border-slate-800 px-4">
              <a href="https://github.com/abdlvjd" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abdul-vajid-509255312/" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* ── Sticky "Hire Me" floating button ── */}
      <div className={`fixed bottom-6 right-5 z-40 transition-all duration-300 ${showHireMe ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <button
          onClick={() => scrollToSection('contact')}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all"
          aria-label="Contact me"
        >
          <Mail size={15} />
          Hire Me
        </button>
      </div>

      {/* ── Hero Section — avatar + text side by side ── */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 sm:px-6 pb-12 sm:pb-0 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-2xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          {/* Location pill — centered above the split layout */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm border border-purple-200/50 dark:border-purple-700/50 shadow-sm">
              <MapPin size={13} className="animate-pulse flex-shrink-0" />
              <span className="whitespace-nowrap">Malappuram, Kerala, India</span>
            </div>
          </div>

          {/* Two-column layout: avatar left, text right */}
          <div className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

            {/* Text side */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 dark:from-white dark:via-purple-200 dark:to-indigo-200 bg-clip-text text-transparent mb-3 sm:mb-4">
                Abdul Vajid
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Frontend Developer <span className="text-purple-600 dark:text-purple-400">(React)</span>
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-xl">
                I build fast, scalable React applications that turn complex requirements into clean, reliable user experiences.
              </p>

              {/* Experience pills */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium border border-indigo-200/50 dark:border-indigo-700/50">
                  <Sparkles size={12} className="flex-shrink-0" />
                  <span className="whitespace-nowrap">~2 yrs professional exp</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium border border-indigo-200/50 dark:border-indigo-700/50">
                  <Sparkles size={12} className="flex-shrink-0" />
                  <span className="whitespace-nowrap">3+ yrs overall dev</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start mb-6">
                <button onClick={() => scrollToSection('projects')}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 font-medium text-sm sm:text-base">
                  View Projects
                </button>
                <button onClick={handleDownloadResume}
                  className="px-6 sm:px-8 py-3 border-2 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 rounded-xl hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all hover:-translate-y-1 font-medium text-sm sm:text-base">
                  Download Resume
                </button>
              </div>

              {/* Status badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 bg-emerald-100/80 dark:bg-emerald-900/30 px-3 py-1.5 rounded-full border border-emerald-200/50 dark:border-emerald-700/50">
                  <Calendar size={13} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-700 dark:text-emerald-300 font-medium whitespace-nowrap">Immediate Joiner</span>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-100/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-full border border-blue-200/50 dark:border-blue-700/50">
                  <Sparkles size={13} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-blue-700 dark:text-blue-300 font-medium whitespace-nowrap">Visiting Visa</span>
                </div>
              </div>
            </div>

            {/* Avatar side */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 blur-xl opacity-30 dark:opacity-40 scale-110" />
                {/* Avatar circle */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 flex items-center justify-center">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="Abdul Vajid"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-purple-400 dark:text-purple-500">
                      <User size={56} strokeWidth={1.2} />
                      <span className="text-xs font-medium px-2 text-center leading-tight">
                        Add your photo here
                      </span>
                    </div>
                  )}
                </div>
                {/* Small floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full px-2.5 py-1 shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 sm:mt-16">
            <button onClick={() => scrollToSection('about')}
              className={`text-gray-400 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all rounded-lg p-2 ${hasReducedMotion ? '' : 'animate-pulse'}`}
              aria-label="Scroll to about section">
              <ChevronDown size={28} className="sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-2xl" />
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
              I'm a React frontend developer with hands-on experience building production websites used by real businesses. I specialize in translating complex requirements into scalable, maintainable UI systems.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I've worked on commercial projects across real estate and healthcare domains, building responsive interfaces, integrating APIs, and improving usability across devices.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
              My focus is writing clean, modular code that is easy to maintain, performs reliably, and supports business growth — not just visually appealing interfaces.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently available to join immediately and contribute to product teams that value ownership and execution.
            </p>
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-emerald-200/50 dark:border-emerald-700/50">
              <Sparkles size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">My Value</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">What I Bring to a Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-3">
              Core strengths I focus on when building production frontend systems.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: '🏗️', text: 'Scalable component architecture designed for long-term maintainability' },
              { icon: '🎯', text: 'Ability to translate complex business requirements into intuitive UX' },
              { icon: '✨', text: 'Clean, readable frontend code with strong separation of concerns' },
              { icon: '🚀', text: 'Proven ability to ship production-ready features efficiently' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/80 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-20 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full blur-2xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-indigo-200/50 dark:border-indigo-700/50">
              <Code2 size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">My Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 dark:from-white dark:to-indigo-200 bg-clip-text text-transparent mb-2 sm:mb-3">Skills</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Technologies I use to build scalable frontend applications and production websites.</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="group px-4 sm:px-6 py-2.5 sm:py-3.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-lg sm:rounded-xl text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-700 dark:hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 transition-all cursor-default font-medium relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 group-hover:via-purple-500/10 transition-all" />
                <span className="relative">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full blur-2xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-purple-200/50 dark:border-purple-700/50">
              <Briefcase size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent mb-2 sm:mb-3">Projects</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Production projects and real client work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group flex flex-col h-full border border-gray-100 dark:border-slate-700/50 hover:-translate-y-1">
                <div className="relative overflow-hidden h-40 sm:h-48">
                  <img src={project.image} alt={project.title} loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 ${hasReducedMotion ? '' : 'group-hover:-translate-y-0.5'}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full border border-purple-200/50 dark:border-purple-700/50 font-medium">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 sm:gap-3 mt-auto">
                    <button onClick={() => setSelectedProject(index)}
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg sm:rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/30 font-medium text-xs sm:text-sm"
                      aria-label={`View details for ${project.title}`}>
                      <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                      <span>Details</span>
                    </button>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 rounded-lg sm:rounded-xl hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all font-medium text-xs sm:text-sm"
                      aria-label={`View live demo for ${project.title}`}>
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-dashed border-purple-300/60 dark:border-purple-600/40 flex flex-col h-full group hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white/40 to-indigo-50/80 dark:from-purple-950/40 dark:via-slate-900/20 dark:to-indigo-950/40 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center justify-center flex-grow p-8 sm:p-10 text-center min-h-[340px]">
                <div className="mb-5 relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 border border-purple-200/70 dark:border-purple-700/50 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Lock className="text-purple-500 dark:text-purple-400" size={24} />
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-purple-400/30 dark:border-purple-500/20 animate-ping" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100/80 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-semibold border border-amber-200/60 dark:border-amber-700/40 mb-4">
                  <Clock size={11} />
                  In Progress
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                  Something is being built
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px] mb-6">
                  I'm currently working on a new project. Details will be revealed soon — stay tuned.
                </p>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 dark:from-purple-500/20 dark:to-indigo-500/20 border border-purple-300/50 dark:border-purple-600/40 rounded-full">
                  <Sparkles size={13} className="text-purple-500 dark:text-purple-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 tracking-wide">Stay Tuned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4" onClick={handleCloseModal} role="dialog" aria-modal="true">
          <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700/50" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-gradient-to-br from-purple-500/10 via-purple-400/5 to-indigo-500/10 dark:from-purple-500/20 dark:via-purple-400/10 dark:to-indigo-500/20 px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-200 dark:border-slate-700/50">
              <button onClick={handleCloseModal} className="absolute top-3 right-3 sm:top-6 sm:right-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all rounded-lg sm:rounded-xl p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-slate-800" aria-label="Close project details">
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
              <div className="pr-10 sm:pr-12">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  {projects[selectedProject].tech.map((tech, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full border border-purple-200/50 dark:border-purple-700/50">{tech}</span>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">{projects[selectedProject].title}</h3>
              </div>
            </div>
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] sm:max-h-[calc(90vh-140px)] px-4 sm:px-8 py-4 sm:py-6">
              <div className="space-y-6 sm:space-y-8">
                {[
                  { icon: <Target className="text-purple-600 dark:text-purple-400" size={16} />, bg: 'bg-purple-100/80 dark:bg-purple-900/30 border-purple-200/50 dark:border-purple-700/50', title: 'Problem Statement', content: projects[selectedProject].problem, type: 'text' },
                ].map((block, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className={`p-1.5 sm:p-2 ${block.bg} rounded-lg sm:rounded-xl border`}>{block.icon}</div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{block.title}</h4>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed ml-0 sm:ml-14">{block.content as string}</p>
                  </div>
                ))}
                {[
                  { icon: <Zap className="text-blue-600 dark:text-blue-400" size={16} />, bg: 'bg-blue-100/80 dark:bg-blue-900/30 border-blue-200/50 dark:border-blue-700/50', title: 'Key Features', items: projects[selectedProject].features, color: 'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500', type: 'numbered' },
                ].map((block, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className={`p-1.5 sm:p-2 ${block.bg} rounded-lg sm:rounded-xl border`}>{block.icon}</div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{block.title}</h4>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 ml-0 sm:ml-14">
                      {(block.items as string[]).map((item, j) => (
                        <li key={j} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                          <span className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${block.color} flex items-center justify-center text-white text-xs font-semibold mt-0.5 shadow-sm`}>{j + 1}</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {[
                  { icon: <AlertCircle className="text-amber-600 dark:text-amber-400" size={16} />, iconInline: <AlertCircle className="flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" size={16} />, bg: 'bg-amber-100/80 dark:bg-amber-900/30 border-amber-200/50 dark:border-amber-700/50', title: 'Technical Challenges', items: projects[selectedProject].challenges, rowBg: 'bg-amber-50/80 dark:bg-amber-900/10', border: 'border-amber-400 dark:border-amber-500' },
                  { icon: <Lightbulb className="text-emerald-600 dark:text-emerald-400" size={16} />, iconInline: <Lightbulb className="flex-shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" size={16} />, bg: 'bg-emerald-100/80 dark:bg-emerald-900/30 border-emerald-200/50 dark:border-emerald-700/50', title: 'Solution Approach', items: projects[selectedProject].solutions, rowBg: 'bg-emerald-50/80 dark:bg-emerald-900/10', border: 'border-emerald-400 dark:border-emerald-500' },
                  { icon: <TrendingUp className="text-indigo-600 dark:text-indigo-400" size={16} />, iconInline: <TrendingUp className="flex-shrink-0 text-indigo-600 dark:text-indigo-400 mt-0.5" size={16} />, bg: 'bg-indigo-100/80 dark:bg-indigo-900/30 border-indigo-200/50 dark:border-indigo-700/50', title: 'Impact & Results', items: projects[selectedProject].impact, rowBg: 'bg-indigo-50/80 dark:bg-indigo-900/10', border: 'border-indigo-400 dark:border-indigo-500' },
                ].map((block, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className={`p-1.5 sm:p-2 ${block.bg} rounded-lg sm:rounded-xl border`}>{block.icon}</div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{block.title}</h4>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 ml-0 sm:ml-14">
                      {(block.items as string[]).map((item, j) => (
                        <li key={j} className={`flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 ${block.rowBg} p-2 sm:p-3 rounded-lg sm:rounded-xl border-l-4 ${block.border} backdrop-blur-sm`}>
                          {block.iconInline}
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-2xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-indigo-200/50 dark:border-indigo-700/50">
              <Briefcase size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Career Path</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 dark:from-white dark:to-indigo-200 bg-clip-text text-transparent mb-2 sm:mb-3">Experience</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Professional experience</p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all border-l-4 border-purple-500 dark:border-purple-400 hover:-translate-y-1 duration-300 border border-gray-100 dark:border-slate-700/50">
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

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full blur-2xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-purple-200/50 dark:border-purple-700/50">
              <GraduationCap size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent mb-2 sm:mb-3">Education</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Academic and professional training</p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all border-l-4 border-indigo-400 dark:border-indigo-500 hover:-translate-y-1 duration-300 border border-gray-100 dark:border-slate-700/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 sm:mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">{edu.degree}</h3>
                  <span className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-100/80 dark:bg-indigo-900/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-indigo-200/50 dark:border-indigo-700/50 inline-block w-fit">{edu.period}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                  <GraduationCap size={14} className="sm:w-4 sm:h-4 text-indigo-500 dark:text-indigo-400" />
                  {edu.institution}
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications Section ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-0 w-56 h-56 bg-amber-200/20 dark:bg-amber-800/10 rounded-full blur-2xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-amber-100/80 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-amber-200/50 dark:border-amber-700/50">
              <BadgeCheck size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-amber-700 dark:from-white dark:to-amber-300 bg-clip-text text-transparent mb-2 sm:mb-3">Certifications</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Verified training and professional credentials</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-md hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors leading-snug">{cert.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">{cert.issuer}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/30 px-2 py-1 rounded-full border border-amber-200/50 dark:border-amber-700/40">
                  <BadgeCheck size={11} />
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GitHub Stats Section ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-gray-200 dark:border-slate-700">
              <Github size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Open Source</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">GitHub Activity</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Check out my contributions and projects</p>
          </div>

          {/* Clean card-based approach instead of relying on external images */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <a href="https://github.com/abdlvjd?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-md hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100/80 dark:bg-purple-900/30 rounded-xl border border-purple-200/50 dark:border-purple-700/50">
                  <Code2 size={22} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Public Repositories</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Explore my open source projects and code samples</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/abdlvjd?tab=stars" target="_blank" rel="noopener noreferrer"
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100/80 dark:bg-indigo-900/30 rounded-xl border border-indigo-200/50 dark:border-indigo-700/50">
                  <Star size={22} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Starred Projects</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">See what technologies and tools I'm following</p>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <a href="https://github.com/abdlvjd" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 dark:from-gray-600 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-800 text-white rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 font-medium">
              <Github size={18} />
              View Full GitHub Profile
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-2xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-purple-200/50 dark:border-purple-700/50">
              <Quote size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Social Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent mb-2 sm:mb-3">What They Say</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Feedback from clients and collaborators</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <div className="relative mb-5">
                  <Quote size={20} className="text-purple-300 dark:text-purple-700 absolute -top-1 -left-1 opacity-60" />
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed pl-5 italic">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-slate-700/50">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-4">
            * Replace with real quotes from your managers or clients for maximum impact
          </p>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-2xl" />
          <div className="absolute top-20 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full blur-2xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-purple-200/50 dark:border-purple-700/50">
              <Send size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium">Let's Connect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent mb-2 sm:mb-3">Get In Touch</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Available for immediate joining and open to frontend or React development opportunities.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-gray-100 dark:border-slate-700/50 hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-purple-100/80 dark:bg-purple-900/30 rounded-xl sm:rounded-2xl border border-purple-200/50 dark:border-purple-700/50 flex-shrink-0">
                  <Mail className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 text-base sm:text-lg">Email</h3>
                  <a href="mailto:abdulvajidonwork@gmail.com" className="text-sm sm:text-base text-purple-600 dark:text-purple-400 hover:underline font-medium break-all">
                    abdulvajidonwork@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-gray-100 dark:border-slate-700/50 hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-emerald-100/80 dark:bg-emerald-900/30 rounded-xl sm:rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 flex-shrink-0">
                  <Phone className="text-emerald-600 dark:text-emerald-400" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 text-base sm:text-lg">Phone</h3>
                  <a href="tel:+971544551920" className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                    +971544551920
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-gray-100 dark:border-slate-700/50">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-indigo-100/80 dark:bg-indigo-900/30 rounded-xl sm:rounded-2xl border border-indigo-200/50 dark:border-indigo-700/50 flex-shrink-0">
                  <Code2 className="text-indigo-600 dark:text-indigo-400" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">Social Links</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    <a href="https://github.com/abdlvjd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-100 dark:bg-slate-700 rounded-lg sm:rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-all hover:-translate-y-1 font-medium text-gray-700 dark:text-gray-300">
                      <Github size={16} className="flex-shrink-0" /><span className="truncate">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/abdul-vajid-509255312/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg sm:rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all hover:-translate-y-1 font-medium text-blue-700 dark:text-blue-300">
                      <Linkedin size={16} className="flex-shrink-0" /><span className="truncate">LinkedIn</span>
                    </a>
                    <a href="https://wa.me/+971544551920" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm px-3 sm:px-4 py-2 sm:py-2.5 bg-green-100 dark:bg-green-900/30 rounded-lg sm:rounded-xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-all hover:-translate-y-1 font-medium text-green-700 dark:text-green-300">
                      <MessageCircle size={16} className="flex-shrink-0" /><span className="truncate">WhatsApp</span>
                    </a>
                    <a href="https://www.instagram.com/abdl_vjd/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm px-3 sm:px-4 py-2 sm:py-2.5 bg-pink-100 dark:bg-pink-900/30 rounded-lg sm:rounded-xl hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-all hover:-translate-y-1 font-medium text-pink-700 dark:text-pink-300">
                      <Instagram size={16} className="flex-shrink-0" /><span className="truncate">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-2xl border border-gray-100 dark:border-slate-700/50">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition-all"
                  placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition-all"
                  placeholder="your.email@example.com" />
              </div>
            </div>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="message" className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
              <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none resize-none transition-all"
                placeholder="Your message..." />
            </div>
            <button type="submit" disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg sm:rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-base sm:text-lg">
              <Send size={18} className="sm:w-5 sm:h-5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover draggable theme={isDark ? 'dark' : 'light'} />

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-200 dark:border-slate-800/50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-colors">
        <div className="max-w-6xl mx-auto text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
          <p className="font-medium">© 2026 Abdul Vajid. Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;