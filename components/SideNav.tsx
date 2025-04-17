'use client';

import { useState, useEffect } from 'react';

const sections = [
  {
    id: 'about',
    label: 'About',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M3 7l6-5h6l6 5" />
      </svg>
    ),
  },
  {
    id: 'certifications',
    label: 'Certifications',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="8" r="6" />
        <path d="M9.5 14L8 21l4-2 4 2-1.5-7" />
      </svg>
    ),
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3v4M8 3v4" />
      </svg>
    ),
  },
  {
    id: 'education',
    label: 'Education',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 12l-10 6-10-6 10-6 10 6z" />
        <path d="M17 18v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2" />
      </svg>
    ),
  },
];

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-full 
              ${activeSection === id ? 'bg-red-100 dark:bg-red-500/20' : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'} 
              transition-all duration-300`}
          >
            <span className="text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400">{icon}</span>
            <span className="absolute left-full ml-4 rounded bg-gray-900 px-2 py-1 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
