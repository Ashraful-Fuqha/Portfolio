import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
// No need for Image component if you're not using client avatars

const MyApproachSection = () => {
  // We'll keep the state for now, but the auto-scroll might not be as relevant
  // if you only have one or two "approach" statements.
  // Consider removing the auto-scroll if you have just one statement.
  const [currentStatement, setCurrentStatement] = useState(0);

  const approachStatements = [
    {
      id: 1,
      title: "User-Centered Development",
      content: `My core philosophy revolves around building applications that not only function flawlessly but also prioritize an intuitive and seamless user experience. I believe in understanding user needs deeply to craft truly impactful solutions.`,
      icon: "Users", // Use an icon that represents user-centricity
      color: "accent",
    },
    {
      id: 2,
      title: "Clean Code & Scalability",
      content: `I am committed to writing clean, maintainable, and well-documented code. My focus is on developing scalable solutions using the MERN stack that can grow with your business needs, ensuring long-term efficiency and stability.`,
      icon: "Code", // Represents coding and structure
      color: "success",
    },
    {
      id: 3,
    title: "Continuous Learning & Adaptation",
    content: `The tech landscape is constantly evolving, and I am dedicated to continuous learning. I actively explore new technologies and best practices to ensure that the solutions I deliver are modern, efficient, and robust.`,
    icon: "BookOpen", // Represents learning
    color: "warning",
    },
    {
      id: 4,
      title: "Problem Solving & Innovation",
      content: `I approach every project with a problem-solving mindset, eager to tackle challenges and find innovative solutions. I thrive on transforming complex requirements into functional and elegant web applications.`,
      icon: "Lightbulb", // Represents ideas and innovation
      color: "error",
    },
  ];

  useEffect(() => {
    // Only auto-scroll if there's more than one statement to cycle through
    if (approachStatements.length > 1) {
      const timer = setInterval(() => {
        setCurrentStatement((prev) => (prev + 1) % approachStatements.length);
      }, 7000); // Increased time to allow more reading
      return () => clearInterval(timer);
    }
  }, [approachStatements.length]);

  const nextStatement = () => {
    setCurrentStatement((prev) => (prev + 1) % approachStatements.length);
  };

  const prevStatement = () => {
    setCurrentStatement((prev) => (prev - 1 + approachStatements.length) % approachStatements.length);
  };

  const currentStatementData = approachStatements[currentStatement];

  return (
    <section id="my-approach" className="py-20 bg-gradient-to-br from-background to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            My Approach to Development
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            As a MERN Stack Developer, I am driven by a commitment to quality, efficiency, and user satisfaction. Here's what guides my work:
          </p>
        </div>

        {/* Main Approach Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary rounded-3xl p-8 md:p-12 shadow-minimal border border-border relative">
            {/* Icon related to the approach */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name={currentStatementData.icon} size={24} color={`var(--color-${currentStatementData.color})`} strokeWidth={2} />
            </div>

            {/* Approach Content */}
            <div className="pt-8">
              {/* No rating stars here */}

              {/* Approach Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {currentStatementData.title}
              </h3>

              {/* Approach Text */}
              <blockquote className="text-lg md:text-xl text-text-primary leading-relaxed mb-8 font-medium">
                "{currentStatementData.content}"
              </blockquote>

              {/* No project info or client info here */}
            </div>

            {/* Navigation Arrows (if more than one statement) */}
            {approachStatements.length > 1 && (
              <>
                <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12">
                  <button
                    onClick={prevStatement}
                    className="w-12 h-12 bg-secondary rounded-full shadow-minimal border border-border flex items-center justify-center hover:bg-surface nav-transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    aria-label="Previous statement"
                  >
                    <Icon name="ChevronLeft" size={20} strokeWidth={2} />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12">
                  <button
                    onClick={nextStatement}
                    className="w-12 h-12 bg-secondary rounded-full shadow-minimal border border-border flex items-center justify-center hover:bg-surface nav-transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    aria-label="Next statement"
                  >
                    <Icon name="ChevronRight" size={20} strokeWidth={2} />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Indicators (if more than one statement) */}
          {approachStatements.length > 1 && (
            <div className="flex items-center justify-center mt-8 space-x-2">
              {approachStatements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStatement(index)}
                  className={`w-3 h-3 rounded-full nav-transition focus:outline-none ${
                    index === currentStatement
                      ? 'bg-accent'
                      : 'bg-border hover:bg-text-secondary'
                  }`}
                  aria-label={`Go to statement ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* All Approach Statements Grid (instead of testimonials grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {approachStatements.map((statement, index) => (
            <div
              key={statement.id}
              className={`bg-secondary rounded-xl p-6 border nav-transition cursor-pointer ${
                index === currentStatement
                  ? 'border-accent shadow-hover'
                  : 'border-border hover:border-accent/50'
              }`}
              onClick={() => setCurrentStatement(index)}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex items-center justify-center bg-accent/10">
                  <Icon name={statement.icon} size={20} color={`var(--color-${statement.color})`} strokeWidth={2} />
                </div>
                <div>
                  <h5 className="font-semibold text-primary text-sm">
                    {statement.title}
                  </h5>
                  {/* No company or position here */}
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                "{statement.content.substring(0, 100)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApproachSection;