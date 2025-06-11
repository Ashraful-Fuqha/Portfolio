import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const ModalNavContext = ({ 
  onClose,
  title = "",
  showBrand = true,
  showNavigation = false,
  className = ""
}) => {
  const navigationItems = [
    { label: 'Home', path: '/portfolio-homepage' },
    { label: 'Contact', path: '/contact-project-inquiry-form' }
  ];

  return (
    <header className={`flex items-center justify-between p-4 border-b border-border bg-secondary ${className}`}>
      {/* Brand/Logo */}
      {showBrand && (
        <Link 
          to="/portfolio-homepage" 
          className="flex items-center space-x-2 nav-transition hover:opacity-80"
        >
          <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
            <Icon name="Palette" size={16} color="white" strokeWidth={2} />
          </div>
          <span className="text-lg font-semibold text-primary">DesignStudio</span>
        </Link>
      )}

      {/* Modal Title */}
      {title && !showBrand && (
        <h2 className="text-lg font-semibold text-primary">{title}</h2>
      )}

      {/* Navigation Items (Optional) */}
      {showNavigation && (
        <nav className="hidden md:flex items-center space-x-4">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-medium text-text-primary hover:text-accent nav-transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      {/* Close Button */}
      <button
        onClick={onClose}
        className="p-2 rounded-lg nav-transition hover:bg-surface focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-label="Close modal"
      >
        <Icon name="X" size={20} color="currentColor" strokeWidth={2} />
      </button>
    </header>
  );
};

export default ModalNavContext;