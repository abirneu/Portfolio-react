import React from "react";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#",
      image: "https://picsum.photos/id/1/200/300",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      githubLink: "#",
      liveLink: "#",
      image: "https://picsum.photos/id/2/200/300",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather forecasting application with location detection",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      githubLink: "#",
      liveLink: "#",
      image: "https://picsum.photos/id/3/200/300",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and Tailwind CSS",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubLink: "#",
      liveLink: "#",
      image: "https://picsum.photos/id/4/200/300",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and Tailwind CSS",
      technologies: ["React", "Tailwind CSS", "Vite", "Html", "Test"],
      githubLink: "#",
      liveLink: "#",
      image: "https://picsum.photos/id/5/200/300",
    },
  ];

  return (
    <section className="min-h-screen bg-secondary dark:bg-gray-900 ">
      <div className="container mx-auto px-4 py-12">
        <div className=" font-bold relative">
          <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
            PROJECTS
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl dark:text-white">
            Projects
          </h1>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents
          my skills and passion for web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projectsData.map((project) => (
            <div
              data-aos="fade-up"
              key={project.id}
              className="group bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl 
             transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 
             overflow-hidden relative"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                {/* Live Demo Badge */}
                {project.liveLink && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-300 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                      Live
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-2 mb-5 ">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1  text-white text-xs font-medium 
                     rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 primary-btn"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.githubLink}
                    className="flex items-center justify-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white 
                 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-200 
                 group/btn shadow-md hover:shadow-lg flex-1 text-sm font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Code
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      className="flex items-center justify-center px-4 py-2 bg-primary text-white 
                   rounded-lg hover:bg-primary/60 transition-all duration-200 
                   group/btn shadow-md hover:shadow-lg flex-1 text-sm font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 dark:group-hover:border-blue-400/20 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
