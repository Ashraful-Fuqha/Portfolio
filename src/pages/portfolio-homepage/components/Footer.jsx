import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/mjafarsadiqd/",
    },
    {
      name: "GitHub",
      icon: "Github",
      url: "https://github.com/Ashraful-Fuqha",
    }
  ];

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Full-Stack Development",
    "API Development & Integration",
    "UI/UX Design",
    "Database Management",
    "Deployment & Hosting",
    "Web Design",
    "Mobile Design"
  ];

  return (
    <footer className="bg-primary text-secondary"> {/* bg-primary and text-secondary will adapt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <Link 
                to="/portfolio-homepage" 
                className="flex items-center space-x-2 mb-6 hover:opacity-80 nav-transition"
              >
                <span className="text-2xl font-bold">Mjafarsadiq D</span> {/* text-secondary is the default for footer */}
              </Link>
              
              <p className="text-secondary/80 leading-relaxed mb-6 max-w-md"> {/* text-secondary/80 will adapt */}
                Creating beautiful, functional, and user-centered digital experiences that help businesses grow and connect with their audience. Let's bring your vision to life.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} strokeWidth={2} className="text-accent" />
                  <a 
                    href="mailto:sadiqd890@gmail.com" // Corrected email
                    className="text-secondary/80 hover:text-accent nav-transition"
                  >
                    sadiqd890@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} strokeWidth={2} className="text-accent" />
                  <a 
                    href="tel:+918904265395" // Corrected phone
                    className="text-secondary/80 hover:text-accent nav-transition"
                  >
                    +91 8904265395
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3> {/* text-secondary is the default for footer */}
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary/80 hover:text-accent nav-transition flex items-center group"
                    >
                      <Icon 
                        name="ArrowRight" 
                        size={14} 
                        strokeWidth={2} 
                        className="mr-2 opacity-0 group-hover:opacity-100 nav-transition" 
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3> {/* text-secondary is the default for footer */}
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-secondary/80 flex items-center group">
                      <Icon 
                        name="Check" 
                        size={14} 
                        strokeWidth={2} 
                        className="mr-2 text-accent" 
                      />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-secondary/20 py-8"> {/* border-secondary/20 will adapt */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-secondary/60 text-sm">Follow me:</span> {/* text-secondary/60 will adapt */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center hover:bg-accent nav-transition group"
                  >
                    <Icon 
                      name={social.icon} 
                      size={18} 
                      strokeWidth={2}
                      className="text-secondary/80 group-hover:text-secondary nav-transition"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup (commented out) */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 py-6"> {/* border-secondary/20 will adapt */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-secondary/60"> {/* text-secondary/60 will adapt */}
              <span>&copy; {currentYear} Mjafarsadiq D. All rights reserved.</span>
              <a href="#" className="hover:text-accent nav-transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent nav-transition">Terms of Service</a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-secondary/60">
              <span>Made with</span>
              <Icon name="Heart" size={14} strokeWidth={2} className="text-accent fill-current" />
              <span>by Mjafarsadiq D</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;