import React, { useState, useMemo } from "react";
import SkillsLevel from "./SkillsLevel";
import Github from "./Github";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const skillCategories = useMemo(() => [
    {
      id: "frontend",
      title: "Frontend",
      description: "Modern & responsive interfaces",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "blue",
      skills: [
        { name: "HTML/CSS", percentage: "95%" },
        { name: "JavaScript (ES6+)", percentage: "90%" },
        { name: "React & Ecosystem", percentage: "92%" },
        { name: "Vue.js", percentage: "75%" },
        { name: "Tailwind CSS", percentage: "88%" }
      ]
    },
    {
      id: "backend",
      title: "Backend",
      description: "Server-side solutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: "emerald",
      skills: [
        { name: "Node.js", percentage: "85%" },
        { name: "Express.js", percentage: "80%" },
        { name: "Python/Django", percentage: "75%" },
        { name: "MongoDB", percentage: "70%" },
        { name: "PostgreSQL", percentage: "65%" }
      ]
    },
    {
      id: "tools",
      title: "Tools",
      description: "Development tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "purple",
      skills: [
        { name: "Figma", percentage: "88%" },
        { name: "Git & GitHub", percentage: "90%" },
        { name: "VS Code", percentage: "93%" },
        { name: "Webpack/Vite", percentage: "75%" },
        { name: "Adobe Creative Suite", percentage: "70%" }
      ]
    },
    {
      id: "languages",
      title: "Languages",
      description: "Programming expertise",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "amber",
      skills: [
        { name: "JavaScript/TypeScript", percentage: "90%" },
        { name: "Python", percentage: "80%" },
        { name: "Java", percentage: "65%" },
        { name: "C++", percentage: "60%" },
        { name: "PHP", percentage: "55%" }
      ]
    }
  ], []);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return skillCategories;
    return skillCategories.filter(category => category.id === activeCategory);
  }, [activeCategory, skillCategories]);

  const colorClasses = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      text: "text-blue-600 dark:text-blue-400"
    },
    emerald: {
      bg: "from-emerald-500 to-emerald-600",
      text: "text-emerald-600 dark:text-emerald-400"
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      text: "text-purple-600 dark:text-purple-400"
    },
    amber: {
      bg: "from-amber-500 to-amber-600",
      text: "text-amber-600 dark:text-amber-400"
    }
  };

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Skills & Expertise
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my technical proficiency across various modern technologies and development tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-slate-800 rounded-xl p-1 shadow-md border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === "all" 
                ? "bg-primary text-white" 
                : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"}`}
            >
              All
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-1 py-2 rounded-lg text-sm  font-medium transition-all ${activeCategory === category.id 
                  ? "bg-primary text-white" 
                  : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"}`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSkills.map((category) => (
            <div 
              key={category.id}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[category.color].bg} flex items-center justify-center mr-4 text-white`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${colorClasses[category.color].text}`}>
                    {category.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{category.description}</p>
                </div>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <SkillsLevel
                    key={index}
                    skillsName={skill.name}
                    percentage={skill.percentage}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Projects */}
        <div className="mt-12">
          <Github />
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-violet-50 dark:bg-slate-800 p-6 rounded-2xl border border-violet-100 dark:border-slate-700 text-center">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Ready to work together?</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Let's discuss how I can contribute to your next project.</p>
          <button className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;