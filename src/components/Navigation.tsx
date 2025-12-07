import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import letterAAnimation from '../assets/favicon/letter-a.json';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'projects', label: 'Case Studies' },
    { id: 'about', label: 'About Me' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-lg rounded-2xl px-8 py-4'
            : 'bg-transparent px-8 py-6'
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            onMouseEnter={() => lottieRef.current?.play()} 
            onMouseLeave={() => lottieRef.current?.stop()}
            className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:opacity-100 grayscale hover:grayscale-0 opacity-80"
          >
            <Lottie 
              lottieRef={lottieRef}
              animationData={letterAAnimation} 
              autoplay={false} 
              loop={true}
              className="w-full h-full"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => window.open('https://drive.google.com/drive/folders/1jryu1WjmOVYJJHQUkRwMCdsID7qgVkIM', '_blank')}
              className="ml-2 px-5 py-2 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-lg transition-all duration-300"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'bg-neutral-100 text-neutral-900'
                    : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => window.open('https://drive.google.com/drive/folders/1jryu1WjmOVYJJHQUkRwMCdsID7qgVkIM', '_blank')}
              className="block w-full text-left px-4 py-2 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-lg transition-all duration-300"
            >
              Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
