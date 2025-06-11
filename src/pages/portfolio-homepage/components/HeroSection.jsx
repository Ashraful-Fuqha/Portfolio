import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const HeroSection = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'Your vision, powered by code';

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setAnimatedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-surface px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          {/* Animated Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            {animatedText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12">
            Creating beautiful, functional, and user-centered digital experiences that help businesses grow and connect with their audience.
          </p>
        </div>

        {/* Browser Illustration */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-secondary rounded-2xl shadow-minimal border border-border overflow-hidden">
            {/* Browser Header */}
            <div className="bg-surface px-4 py-3 flex items-center space-x-2 border-b border-border">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-error rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded-lg px-3 py-1 text-sm text-text-secondary">
                  .com
                </div>
              </div>
            </div>
            
            {/* Browser Content */}
            <div className="p-8 md:p-16 bg-gradient-to-br from-accent/5 to-success/5">
              <div className="text-center">
                {/* Smiley Face */}
                <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <div className="text-6xl md:text-8xl">😊</div>
                </div>
                
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                  Beautiful Websites
                </h2>
                <p className="text-text-secondary text-lg">
                  Crafted with love and attention to detail
                </p>
                
                {/* Decorative Elements */}
                <div className="flex justify-center space-x-4 mt-8">
                  <div className="w-4 h-4 bg-accent rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-success rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-4 h-4 bg-warning rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#portfolio"
            className="inline-flex items-center px-8 py-4 bg-accent text-secondary font-semibold rounded-lg hover:bg-accent/90 nav-transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <Icon name="Eye" size={20} strokeWidth={2} className="mr-2" />
            View My Work
          </a>
          <a
            href="#services"
            className="inline-flex items-center px-8 py-4 border border-border text-text-primary font-semibold rounded-lg hover:bg-surface nav-transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <Icon name="ArrowDown" size={20} strokeWidth={2} className="mr-2" />
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;