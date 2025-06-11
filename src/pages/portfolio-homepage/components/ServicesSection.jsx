import React from 'react';
import Icon from 'components/AppIcon';

const ServicesSection = () => {
  const services = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "Building robust and scalable web applications from front-end to back-end using the MERN stack (MongoDB, Express.js, React, Node.js).",
    icon: "Code", // You might need to adjust this icon based on your icon library
    color: "accent",
  },
  {
    id: 2,
    title: "API Development & Integration",
    description:
      "Designing, developing, and integrating RESTful APIs to ensure seamless data flow and functionality across your applications.",
    icon: "Server", // You might need to adjust this icon based on your icon library
    color: "success",
  },
  {
    id: 3,
    title: "Database Management",
    description:
      "Implementing and managing NoSQL databases (MongoDB) for efficient data storage, retrieval, and organization.",
    icon: "Database", // You might need to adjust this icon based on your icon library
    color: "warning",
  },
  {
    id: 4,
    title: "Deployment & Hosting",
    description:
      "Deploying and hosting applications on various platforms, ensuring optimal performance, security, and continuous integration.",
    icon: "Cloud", // You might need to adjust this icon based on your icon library
    color: "error",
  },
];

  const getColorClasses = (color) => {
    const colorMap = {
      accent: 'bg-accent/10 text-accent border-accent/20',
      success: 'bg-success/10 text-success border-success/20',
      warning: 'bg-warning/10 text-warning border-warning/20',
      error: 'bg-error/10 text-error border-error/20'
    };
    return colorMap[color] || colorMap.accent;
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            My Services
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            I offer comprehensive design services to help bring your digital vision to life. From initial research to final prototype, I'm here to guide you through every step of the design process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-secondary rounded-2xl p-8 shadow-minimal border border-border hover:shadow-hover nav-transition hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 border ${getColorClasses(service.color)}`}>
                <Icon 
                  name={service.icon} 
                  size={28} 
                  strokeWidth={2}
                  className="group-hover:scale-110 nav-transition"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent nav-transition">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Arrow */}
              {/* <div className="mt-6 opacity-0 group-hover:opacity-100 nav-transition">
                <Icon 
                  name="ArrowRight" 
                  size={20} 
                  strokeWidth={2}
                  className="text-accent"
                /> */}
              {/* </div> */}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-accent text-secondary font-semibold rounded-lg hover:bg-accent/90 nav-transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <Icon name="MessageCircle" size={20} strokeWidth={2} className="mr-2" />
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;