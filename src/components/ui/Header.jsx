import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', anchor: 'home', path: '/portfolio-homepage' },
    { label: 'Portfolio', anchor: 'portfolio', path: '/portfolio-homepage#portfolio' },
    { label: 'Services', anchor: 'services', path: '/portfolio-homepage#services' },
    { label: 'About', anchor: 'about', path: '/portfolio-homepage#about' },
    { label: 'Contact', anchor: 'contact', path: '/contact-project-inquiry-form' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const handleSectionClick = (anchor, path) => {
    setMobileMenuOpen(false);
    setActiveSection(anchor);
    
    if (path.includes('#')) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (anchor, path) => {
    if (path === '/contact-project-inquiry-form') {
      return location.pathname === '/contact-project-inquiry-form';
    }
    return activeSection === anchor;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-100 nav-transition ${
      isScrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-minimal' : 'bg-secondary'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/portfolio-homepage" 
            className="flex items-center space-x-2 nav-transition hover:opacity-80"
            onClick={() => handleSectionClick('home', '/portfolio-homepage')}
          >
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Palette" size={20} color="white" strokeWidth={2} />
            </div>
            <span className="text-xl font-bold text-primary">DesignStudio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.anchor}
                to={item.path}
                onClick={() => handleSectionClick(item.anchor, item.path)}
                className={`nav-transition font-medium ${
                  isActive(item.anchor, item.path)
                    ? 'text-accent border-b-2 border-accent pb-1' :'text-text-primary hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden mobile-menu-container">
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

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-200 modal-backdrop"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <div className="absolute top-full right-0 mt-2 w-64 bg-secondary rounded-lg shadow-hover border border-border z-300 animate-slide-in-right">
                  <nav className="py-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.anchor}
                        to={item.path}
                        onClick={() => handleSectionClick(item.anchor, item.path)}
                        className={`block px-6 py-3 nav-transition font-medium ${
                          isActive(item.anchor, item.path)
                            ? 'text-accent bg-surface border-r-4 border-accent' :'text-text-primary hover:text-accent hover:bg-surface'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;