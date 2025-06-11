import React, { useState, useEffect } from 'react';


const SectionAnchorNav = ({ 
  sections = [],
  activeSection = '',
  onSectionChange,
  className = "",
  orientation = "horizontal"
}) => {
  const [currentActive, setCurrentActive] = useState(activeSection);

  const defaultSections = [
    { label: 'Portfolio', anchor: 'portfolio', description: 'View our work' },
    { label: 'Services', anchor: 'services', description: 'What we offer' },
    { label: 'About', anchor: 'about', description: 'Our story' },
    { label: 'Testimonials', anchor: 'testimonials', description: 'Client feedback' }
  ];

  const navigationSections = sections.length > 0 ? sections : defaultSections;

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setCurrentActive(sectionId);
          if (onSectionChange) {
            onSectionChange(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navigationSections.forEach((section) => {
      const element = document.getElementById(section.anchor);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navigationSections, onSectionChange]);

  const handleSectionClick = (anchor, event) => {
    event.preventDefault();
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setCurrentActive(anchor);
      if (onSectionChange) {
        onSectionChange(anchor);
      }
    }
  };

  const isActive = (anchor) => currentActive === anchor;

  const navClasses = orientation === "vertical" ?"flex flex-col space-y-2" :"flex items-center space-x-6";

  return (
    <nav className={`${navClasses} ${className}`} role="navigation" aria-label="Section navigation">
      {navigationSections.map((section) => (
        <a
          key={section.anchor}
          href={`#${section.anchor}`}
          onClick={(e) => handleSectionClick(section.anchor, e)}
          className={`nav-transition font-medium relative group ${
            isActive(section.anchor)
              ? 'text-accent' :'text-text-primary hover:text-accent'
          } ${orientation === "vertical" ? 'py-2 px-3 rounded-lg hover:bg-surface' : ''}`}
          title={section.description}
          aria-current={isActive(section.anchor) ? 'page' : undefined}
        >
          {section.label}
          {orientation === "horizontal" && isActive(section.anchor) && (
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
          )}
          {section.description && (
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-secondary bg-text-primary rounded opacity-0 group-hover:opacity-100 nav-transition pointer-events-none whitespace-nowrap z-50">
              {section.description}
            </span>
          )}
        </a>
      ))}
    </nav>
  );
};

export default SectionAnchorNav;