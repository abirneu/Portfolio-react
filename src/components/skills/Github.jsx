import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";

const Github = () => {
  return (
    <section id="github" className="bg-secondary dark:bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title with background text */}
        <div className="relative font-bold mb-12">
          <div className="text-5xl xl:text-8xl text-black/5 dark:text-gray-700">
            GITHUB 
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl dark:text-white">
            Github 
          </h1>
        </div>

        {/* Contributions Graph */}
        <div className="bg-secondary dark:bg-slate-800 p-6 rounded-2xl border-2 border-primary dark:border-primary/60  overflow-x-auto" data-aos="fade-up" data-aos-duration="1000">
          <GitHubCalendar
            username="abirneu"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#4b5563", "#0e4429", "#006d32", "#26a641", "#39d353"], // gray-600
            }}
          />
        </div>

        {/* Override text color inside SVG */}
         {/* Custom CSS overrides */}
        <style>
          {`
            /* Month labels + footer */
            .react-activity-calendar text {
              fill: black;
            }
            .dark .react-activity-calendar text {
              fill: white !important;
            }

            /* Force empty boxes to gray-600 in dark mode */
            .dark .react-activity-calendar rect[fill="#ebedf0"],
            .dark .react-activity-calendar rect[fill="#161b22"] {
              fill: #4b5563 !important; /* Tailwind gray-600 */
            }
          `}
        </style>
        {/* GitHub Icon */}
        <div className="mt-10 border-2 border-primary p-6 dark:border-primary/60 rounded-2xl inline-block">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 mt-8">Find me on GitHub</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Check out my repositories and projects on GitHub.</p>
            <a href="https://github.com/abirneu" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center px-4 py-2 bg-primary dark:bg-primary/80 dark:hover:bg-primary/60 text-white rounded-lg hover:bg-primary/80 transition-colors duration-300">
                    <FaGithub className="mr-2" />
                    Visit My GitHub
                </button>
            </a>
        </div>
        
      </div>
    </section>
  );
};

export default Github;
