import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="AlertTriangle" size={48} color="var(--color-accent)" strokeWidth={1.5} />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/portfolio-homepage"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-secondary font-medium rounded-lg hover:bg-accent/90 nav-transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <Icon name="Home" size={20} strokeWidth={2} className="mr-2" />
            Back to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-border text-text-primary font-medium rounded-lg hover:bg-surface nav-transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <Icon name="ArrowLeft" size={20} strokeWidth={2} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;