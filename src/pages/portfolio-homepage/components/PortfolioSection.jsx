import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id:1,
      title: "FoodAI",
      category: "AI Integration",
      description:
        "FoodAI: Uncover comprehensive nutritional facts and AI-powered insights (pros, cons, organ impact) for any food. Built with Next.js, Prisma, and Shadcn UI, featuring user authentication, search history, and email verification. Optimized for seamless deployment on Vercel.",
      image: "/assets/images/FoodAI.png", // Use the path relative to public/
      tags: ["Next.js 14+", "NextAuth.js", "Prisma", "PostgreSQL", "Zod", "GEMINI API", "Nutritionix API", "Nodemailer", "Shadcn UI", "AI", "Vercel"],
      color: "accent",
      github: "https://github.com/Ashraful-Fuqha/FoodAI",
      liveDemo: "https://food-ai-ten.vercel.app", // Ensure this is the correct live demo URL
    },
    {
      id: 2,
      title: "Social - Video Sharing Platform",
      category: "Full-Stack Development",
      description:
        "Developed a full-stack video-sharing platform with features like user authentication, media uploads, and responsive design. Focused on implementing an intuitive user interface and an efficient backend using Express.js and MongoDB.",
      image: "/assets/images/social.png", // Use the path relative to public/
      tags: ["React", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      color: "accent",
      github: "https://github.com/Ashraful-Fuqha/Social_Video_Sharing_Platform",
      liveDemo: "https://social-video-sharing-platform.vercel.app",
    },
    {
      id: 3, // Ensure unique IDs for projects
      title: "Modern Bank App Design",
      category: "UI/UX Design",
      description:
        "Designed a modern banking app UI with a focus on user experience. Implemented a clean, responsive, and user-friendly interface using React and Tailwind CSS.",
      image: "/assets/images/banking_design.png", // Use the path relative to public/
      tags: ["React", "Tailwind CSS", "UI/UX"],
      color: "warning",
      github: "https://github.com/Ashraful-Fuqha/Modern-Bank-App-Design",
      liveDemo: "https://modern-bank-app-design.netlify.app",
    },
    {
      id: 4, // Ensure unique IDs for projects
      title: "IP Address Tracker",
      category: "Web Application",
      description: "A web-based IP Address Tracker that visualizes an IP's location on a map and displays details such as timezone and ISP, utilizing external APIs for data fetching and Leaflet.js for interactive mapping.",
      image: "/assets/images/ipaddress.png", // Example image name for your IP tracker
      tags: ["JavaScript", "Leaflet.js", "HTML", "Tailwind CSS", "Fetch API", "IP Geolocation API"],
      color: "error",
      github: "https://github.com/Ashraful-Fuqha/ip-address-tracker-master",
      liveDemo: "https://ashraful-fuqha.github.io/ip-address-tracker-master/",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      accent: 'bg-accent text-secondary',
      success: 'bg-success text-secondary',
      warning: 'bg-warning text-primary',
      error: 'bg-error text-secondary'
    };
    return colorMap[color] || colorMap.accent;
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary"> {/* bg-secondary will adapt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6"> {/* text-primary will adapt */}
            Featured Work
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto"> {/* text-text-secondary will adapt */}
            Explore some of my recent projects that showcase my design process and problem-solving approach. Each project represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-surface rounded-2xl overflow-hidden shadow-minimal hover:shadow-hover nav-transition cursor-pointer" // bg-surface will adapt
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 nav-transition"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 nav-transition flex items-center justify-center`}> {/* bg-primary/60 will adapt */}
                  <div className="text-center text-secondary p-6">
                    <Icon name="Eye" size={32} strokeWidth={2} className="mx-auto mb-4" />
                    <a href={project.github} target="_blank" rel="noopener noreferrer"  className="text-sm font-medium">View Project</a>
                  </div>
                </div>

                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(project.color)}`}>
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent nav-transition"> {/* text-primary will adapt */}
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed"> {/* text-text-secondary will adapt */}
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-background text-text-secondary text-xs rounded-lg border border-border" // bg-background, text-text-secondary, border-border will adapt
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 nav-transition">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <span>View Project</span>
                  </a>
                  <Icon name="ArrowRight" size={16} strokeWidth={2} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <a href="https://github.com/Ashraful-Fuqha" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center px-8 py-4 border border-border text-text-primary font-semibold rounded-lg hover:bg-surface nav-transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"> {/* border-border, text-text-primary, hover:bg-surface will adapt */}
              <Icon name="Grid" size={20} strokeWidth={2} className="mr-2" />
              View All Projects
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;