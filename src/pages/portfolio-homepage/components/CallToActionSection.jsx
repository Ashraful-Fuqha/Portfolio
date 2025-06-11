import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const CallToActionSection = () => {
  const projectSteps = [
    {
      id: 1,
      title: "Discovery Call",
      description: "We'll discuss your project goals, requirements, and timeline in detail.",
      icon: "Phone",
      duration: "30 mins"
    },
    {
      id: 2,
      title: "Proposal & Planning",
      description: "I'll create a detailed proposal with project scope, timeline, and pricing.",
      icon: "FileText",
      duration: "2-3 days"
    },
    {
      id: 3,
      title: "Design & Development",
      description: "Collaborative design process with regular check-ins and feedback sessions.",
      icon: "Palette",
      duration: "2-6 weeks"
    },
    {
      id: 4,
      title: "Launch & Support",
      description: "Final delivery, launch assistance, and ongoing support for your project.",
      icon: "Rocket",
      duration: "Ongoing"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary"> {/* bg-secondary will change with dark mode */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6"> {/* text-primary will change */}
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-12"> {/* text-text-secondary will change */}
            Let's work together to create something amazing. I'm here to help bring your vision to life with thoughtful design and seamless user experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">

            <a
              href="mailto:sadiqd890@gmail.com" // Update this email
              className="inline-flex items-center px-8 py-4 border border-border text-text-primary font-semibold rounded-lg hover:bg-surface nav-transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <Icon name="Mail" size={20} strokeWidth={2} className="mr-2" />
              Start Your Project
            </a>
          </div>
        </div>

        {/* Project Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              How We'll Work Together
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              My proven process ensures we create the best possible solution for your needs while keeping you involved every step of the way.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-minimal nav-transition"> {/* bg-background, border-border */}
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-accent text-secondary rounded-full flex items-center justify-center text-sm font-bold">
                      {step.id}
                    </div>
                    <span className="text-xs text-text-secondary bg-surface px-2 py-1 rounded-full"> {/* text-text-secondary, bg-surface */}
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={step.icon} size={24} color="var(--color-accent)" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < projectSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border -translate-y-1/2"> {/* bg-border */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;