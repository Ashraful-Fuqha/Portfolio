import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import MyApproachSection from './components/TestimonialsSection'; // Corrected import
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

const PortfolioHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize dark mode from localStorage or system preference
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    // Apply or remove 'dark' class on the HTML element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    // The main div here won't need 'dark:bg-secondary' because the body element will handle the main background
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 nav-transition ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-minimal dark:bg-secondary/95 dark:shadow-minimal-dark' : 'bg-secondary dark:bg-secondary'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/portfolio-homepage" 
              className="flex items-center space-x-2 nav-transition hover:opacity-80"
            >
              <span className="text-xl font-bold text-primary">Mjafarsadiq D</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-text-primary hover:text-accent nav-transition font-medium">
                Services
              </a>
              <a href="#portfolio" className="text-text-primary hover:text-accent nav-transition font-medium">
                Portfolio
              </a>
              <a 
                href="/#contact"
                className="block text-text-primary hover:text-accent nav-transition font-medium"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg nav-transition hover:bg-surface focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="Toggle mobile menu"
              >
                <Icon 
                  name={mobileMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  color="currentColor" 
                  strokeWidth={2} 
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-border animate-fade-in">
            <nav className="px-4 py-4 space-y-4">
              <a 
                href="#services" 
                className="block text-text-primary hover:text-accent nav-transition font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="block text-text-primary hover:text-accent nav-transition font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#testimonials" 
                className="block text-text-primary hover:text-accent nav-transition font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a href="#contact"
                className="block text-text-primary hover:text-accent nav-transition font-medium"
                onClick={() => setMobileMenuOpen(false)}>
              Contact
              </a> 
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <MyApproachSection/>
        {/* <TestimonialsSection /> Removed comment around TestimonialsSection if it's meant to be included */}
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioHomepage;