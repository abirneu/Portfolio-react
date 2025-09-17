import React, { useState, useMemo } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = useMemo(
    () => [
      {
        id: "frontend",
        title: "Frontend",
        description: "Modern & responsive interfaces",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        ),
        color: "blue",
        skills: [
          { name: "HTML", percentage: "95%" },
          { name: "JavaScript (ES6+)", percentage: "60%" },
          { name: "React.Js", percentage: "70%" },
          { name: "CSS", percentage: "80%" },
          { name: "Tailwind CSS", percentage: "85%" },
        ],
      },
      {
        id: "backend",
        title: "Backend",
        description: "Server-side solutions",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        ),
        color: "emerald",
        skills: [
          { name: "Python", percentage: "80%" },
          { name: "Django", percentage: "85%" },
          { name: "MySQL", percentage: "75%" },
          { name: "SQLite3", percentage: "85%" },
        ],
      },
      {
        id: "tools",
        title: "Tools",
        description: "Development tools",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        ),
        color: "purple",
        skills: [
          { name: "Figma", percentage: "80%" },
          { name: "Git & GitHub", percentage: "90%" },
          { name: "VS Code", percentage: "90%" },
          { name: "Webpack/Vite", percentage: "75%" },
          { name: "Canva", percentage: "80%" },
        ],
      },
      {
        id: "languages",
        title: "Languages",
        description: "Programming expertise",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        ),
        color: "amber",
        skills: [
          { name: "JavaScript/TypeScript", percentage: "70%" },
          { name: "Python", percentage: "80%" },
          { name: "C", percentage: "90%" },
          { name: "C++", percentage: "90%" },
        ],
      },
      {
        id: "programming",
        title: "Problem Solving",
        description: "Algorithms & Data Structures",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
        color: "red",
        skills: [
          {
            name: "Data Structures",
            percentage: "85%",
            metrics: "Arrays, Linked Lists, Trees, Graphs, Hash Tables",
          },
          {
            name: "Algorithms",
            percentage: "80%",
            metrics:
              "Sorting, Searching, Divide & Conquer, Dynamic Programming",
          },
          {
            name: "Problem Solving",
            percentage: "90%",
            metrics: "200+ problems solved on LeetCode & CodeForces",
          },
          {
            name: "Time Complexity",
            percentage: "85%",
            metrics: "Big O, Omega",
          },
          {
            name: "Competitive Programming",
            percentage: "75%",
            metrics: "Participated in 20+ contests",
          },
        ],
      },
    ],
    []
  );

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return skillCategories;
    return skillCategories.filter((category) => category.id === activeCategory);
  }, [activeCategory, skillCategories]);

  const colorClasses = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      text: "text-blue-600 dark:text-blue-400",
    },
    emerald: {
      bg: "from-emerald-500 to-emerald-600",
      text: "text-emerald-600 dark:text-emerald-400",
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      text: "text-purple-600 dark:text-purple-400",
    },
    amber: {
      bg: "from-amber-500 to-amber-600",
      text: "text-amber-600 dark:text-amber-400",
    },
    red: {
      bg: "from-red-500 to-red-600",
      text: "text-red-600 dark:text-red-400",
    },
  };

  // SkillsLevel component for all skills
  const SkillsLevel = ({ skillsName, percentage, metrics, index }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
            {skillsName}
          </span>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {percentage}
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
            <div
              data-aos="fade-in" // trigger only visibility
              data-aos-duration="1000"
              data-aos-delay={index * 200} // staggered delay based on index              
              className="h-2.5 rounded-full bg-stone-500 transition-all duration-[2000ms] ease-in-out"
              style={{
                width: percentage,
                background:
                  "linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))",
                "--tw-gradient-from": "#242424",
                "--tw-gradient-to": "#ADADAD",
              }}
            ></div>
          </div>
        </div>
        {metrics && (
          <div className="mt-2">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {metrics}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="bg-secondary dark:bg-gray-900 py-16 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-8xl">
        {/* Section Header */}
        <div
          className="font-bold relative mb-16 md:mb-5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="text-center text-5xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
            SKILLS & EXPERTISE
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
            What I Bring to the Table
          </h1>
        </div>

        {/* Category Filter - Made Responsive */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 dark:bg-slate-800 rounded-xl p-2 border border-primary dark:border-slate-700">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-white"
                  : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
              }`}
            >
              All
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                }`}
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
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    colorClasses[category.color].bg
                  } flex items-center justify-center mr-4 text-black dark:text-white`}
                >
                  {category.icon}
                </div>
                <div>
                  <h2
                    className={`text-xl font-bold ${
                      colorClasses[category.color].text
                    }`}
                  >
                    {category.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <SkillsLevel
                    key={index}
                    skillsName={skill.name}
                    percentage={skill.percentage}
                    metrics={skill.metrics}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="mt-12 bg-secondary dark:bg-slate-900 p-6 rounded-2xl border-2 border-primary dark:border-primary/60 text-center w-auto mx-auto max-w-md"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            Ready to work together?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Let's discuss how I can contribute to your next project.
          </p>
          <button className="px-6 py-2.5 bg-primary dark:bg-primary/80 dark:hover:bg-primary/60 hover:bg-primary/80 text-white font-medium rounded-lg transition-colors duration-300">
            <a href="mailto:abirhasan.shu@gmail.com">Get In Touch</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
