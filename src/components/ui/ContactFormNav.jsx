import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const ContactFormNav = ({ 
  currentStep = 1,
  totalSteps = 3,
  showProgress = true,
  className = ""
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/portfolio-homepage');
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <header className={`bg-secondary border-b border-border ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand/Logo */}
          <Link 
            to="/portfolio-homepage" 
            className="flex items-center space-x-2 nav-transition hover:opacity-80"
          >
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Palette" size={20} color="white" strokeWidth={2} />
            </div>
            <span className="text-xl font-bold text-primary">DesignStudio</span>
          </Link>

          {/* Progress Indicator */}
          {showProgress && (
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm font-medium text-text-secondary">
                Step {currentStep} of {totalSteps}
              </span>
              <div className="w-32 h-2 bg-surface rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent nav-transition"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          )}

          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-text-primary hover:text-accent nav-transition rounded-lg hover:bg-surface focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <Icon name="ArrowLeft" size={16} strokeWidth={2} />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>

        {/* Mobile Progress */}
        {showProgress && (
          <div className="md:hidden pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-secondary">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-text-secondary">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
            <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent nav-transition"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ContactFormNav;