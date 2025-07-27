// src/components/SkillsSection.jsx
import React from 'react';

const SkillsSection = () => {
  const skillsCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "Next.js","App Router", "JavaScript (ES6+)", "TypeScript", "Zustand", "HTML5", "CSS3", "Tailwind CSS", "Sass", "Redux", "Context API"]
    },
    {
        category: "Authentication & Security",
        skills: ["NextAuth.js", "JWT", "OAuth", "Session Management", "Password Hashing", "Clerk Authentication"]
    },
    {
      category: "Backend Development",
      skills: ["Prisma", "Mongoose", "Node.js", "Express.js", "RESTful APIs"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Oracle", "SQLite"]
    },
    {
        category: "Libraries",
        skills: ["Shadcn UI", "Tailwind CSS", "Bycrypt", "Zod", "Axios", "React Hook Form", "React Query", "React Router", "Redux Toolkit", "Redux", "NodeMailer"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "Docker","Netlify", "Vercel", "Postman", "API Integration", "AI Integration", "AppWrite", "Cloudinary"]
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-surface text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-minimal-dark">
              <h3 className="text-xl font-semibold mb-4 text-accent">{category.category}</h3>
              <ul className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-text-secondary">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;