import React from 'react';
import Icon from '../AppIcon';

const MobileNavToggle = ({ 
  isOpen, 
  onToggle, 
  className = "",
  iconSize = 24,
  strokeWidth = 2 
}) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-lg nav-transition hover:bg-surface focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${className}`}
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      aria-expanded={isOpen}
    >
      <Icon 
        name={isOpen ? "X" : "Menu"} 
        size={iconSize} 
        color="currentColor" 
        strokeWidth={strokeWidth}
        className="nav-transition"
      />
    </button>
  );
};

export default MobileNavToggle;