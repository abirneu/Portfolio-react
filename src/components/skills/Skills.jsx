import React, { useEffect, useState } from "react";
import SkillsLevel from "./SkillsLevel";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState([]);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Crafting modern & responsive interfaces",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      title: "Backend Development",
      description: "Building robust server-side solutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      title: "Tools & Design",
      description: "Mastering modern dev tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      title: "Programming Languages",
      description: "Core programming expertise",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  ];

  // Filter skills based on active category
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredSkills(skillCategories);
    } else {
      const filtered = skillCategories.filter(category => category.id === activeCategory);
      setFilteredSkills(filtered);
    }
  }, [activeCategory, skillCategories]);

  const colorClasses = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      border: "hover:border-blue-500/30 dark:hover:border-blue-500/30",
      shadow: "hover:shadow-blue-500/10",
      text: "from-blue-600 to-blue-400"
    },
    emerald: {
      bg: "from-emerald-500 to-emerald-600",
      border: "hover:border-emerald-500/30 dark:hover:border-emerald-500/30",
      shadow: "hover:shadow-emerald-500/10",
      text: "from-emerald-600 to-emerald-400"
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      border: "hover:border-purple-500/30 dark:hover:border-purple-500/30",
      shadow: "hover:shadow-purple-500/10",
      text: "from-purple-600 to-purple-400"
    },
    amber: {
      bg: "from-amber-500 to-amber-600",
      border: "hover:border-amber-500/30 dark:hover:border-amber-500/30",
      shadow: "hover:shadow-amber-500/10",
      text: "from-amber-600 to-amber-400"
    }
  };

  return (
    <section id="skills" className="bg-secondary dark:bg-gray-900 py-24 overflow-hidden relative transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.075] dark:opacity-[0.05]"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="sm:order-2 font-bold relative mb-12" data-aos="fade-down" data-aos-duration="1000">
          {/* Big shadow text */}
          <div className="text-center text-5xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
            SKILLS & EXPERTISE
          </div>

          {/* Foreground title */}
          <h1
            
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white"
          >
            Skills  & Expertise
          </h1>
        </div>
          <p className="mt-8 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-300">
            A curated showcase of my technical proficiency and expertise across various modern technologies and development tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 " data-aos="fade-up">
          <div className="inline-flex bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-1.5 shadow-lg border border-slate-200/50 dark:border-slate-700/30">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === "all" 
                ? "bg-primary text-white shadow-md" 
                : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"}`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === category.id 
                  ? "bg-primary text-white shadow-md" 
                  : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary/50"}`}
              >
                {category.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
          {filteredSkills.map((category, categoryIndex) => (
            <div 
              key={category.id}
              className={`group  bg-stone-100 dark:bg-gray-800 backdrop-blur-lg p-8 rounded-3xl shadow-xl dark:shadow-slate-900/50 border border-white/20 dark:border-slate-700/30 ${colorClasses[category.color].border} transition-all duration-300 ${colorClasses[category.color].shadow} relative overflow-hidden`} 
              data-aos={categoryIndex % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={categoryIndex * 100}
            >
              <div className="relative z-10 flex items-center mb-10 group">
                <div className={`w-14 h-14 rounded-2xl   dark:text-white  bg-gradient-to-br ${colorClasses[category.color].bg} flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className={`text-2xl font-bold text-black   dark:text-gray-200  bg-gradient-to-r ${colorClasses[category.color].text} bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-blue-300 transition-all duration-300`}>
                    {category.title}
                  </h2>
                  <p className="text-slate-600 dark:text-gray-200 mt-1">{category.description}</p>
                </div>
              </div>
              <div className="space-y-7">
                {category.skills.map((skill, index) => (
                  <SkillsLevel
                    key={index}
                    skillsName={skill.name}
                    percentage={skill.percentage}
                    index={index + categoryIndex * 5}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when no categories match (shouldn't happen with our filter but good practice) */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up">
            <div className="text-slate-400 dark:text-slate-500 text-lg">
              No skills found for this category.
            </div>
          </div>
        )}

        {/* Skills Summary */}
        <div className="mt-16 bg-stone-200 dark:bg-gray-800 p-8 rounded-3xl border border-blue-100/30 dark:border-slate-700/30" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Looking to leverage these skills?</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2">Let's discuss how I can contribute to your next project.</p>
            </div>
            <button className="px-6 py-3 bg-primary/70 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;