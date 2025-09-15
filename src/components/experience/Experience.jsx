import React from "react";

const Experience = () => {
  return (
    <div className="min-h-screen bg-secondary   dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="font-bold relative mb-16 md:mb-20" data-aos="fade-down" data-aos-duration="1000">
          <div className="text-center text-5xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
            EXPERIENCE
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
            My Journey
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Skills */}
          <div className="lg:col-span-1" data-aos="fade-right" data-aos-duration="800">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Skills & Expertise</h2>
              
              <div className="space-y-4">
                {/* forntend div */}
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Frontend Development</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS','HTML'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* backend div */}
                 <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Backend Development</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Python', 'Django', 'React.js', 'MySQL', 'PostgreSQL', ].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Other Technologies</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Git', 'REST APIs', 'Figma', 'VS Code'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Languages</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['English', 'Bangla'].map(lang => (
                      <span key={lang} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Timeline */}
          <div className="lg:col-span-2" data-aos="fade-left" data-aos-duration="800">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Career Timeline</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-1 h-full w-0.5 bg-blue-200 dark:bg-blue-900/50"></div>
                
                {/* Timeline items */}
                <div className="space-y-8 pl-12">
                  {/* Education Item */}
                  <div className="relative">
                    <div className="absolute -left-12 top-1 h-8 w-8 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white dark:bg-gray-200"></div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                        2021 - Present
                      </span>
                      <h3 className="font-bold text-lg mt-2 text-gray-800 dark:text-white">Computer Science Student</h3>
                      <p className="text-gray-600 dark:text-gray-400">Netrokona University </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        Currently pursuing my degree with a focus on web development and user experience design.
                      </p>
                    </div>
                  </div>
                  
                  {/* Project Item */}
                  <div className="relative">
                    <div className="absolute -left-12 top-1 h-8 w-8 rounded-full bg-purple-500 dark:bg-purple-600 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white dark:bg-gray-200"></div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                        2022 - 2023
                      </span>
                      <h3 className="font-bold text-lg mt-2 text-gray-800 dark:text-white">Personal Projects</h3>
                      <p className="text-gray-600 dark:text-gray-400">Full-Stack Applications</p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        Developed several React applications with modern UI/UX design principles. Implemented responsive designs and optimized performance.
                      </p>
                    </div>
                  </div>
                  
                  {/* Looking for internship */}
                  <div className="relative">
                    <div className="absolute -left-12 top-1 h-8 w-8 rounded-full bg-green-500 dark:bg-green-600 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white dark:bg-gray-200"></div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-100 dark:border-green-800/50">
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                        Now Seeking
                      </span>
                      <h3 className="font-bold text-lg mt-2 text-gray-800 dark:text-white">Internship Opportunity</h3>
                      <p className="text-gray-600 dark:text-gray-400">Frontend Development / Web Development</p>
                      <p className="mt-3 text-gray-700 dark:text-gray-300">
                        Eager to apply my skills in a professional environment and contribute to real-world projects. 
                        Looking for opportunities to learn from experienced developers and grow as a professional.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <span className="px-3 py-1.5 bg-green-500 dark:bg-green-600 text-white rounded-full text-sm font-medium">
                          React.js
                        </span>
                        <span className="px-3 py-1.5 bg-green-500 dark:bg-green-600 text-white rounded-full text-sm font-medium">
                          JavaScript
                        </span>
                        <span className="px-3 py-1.5 bg-green-500 dark:bg-green-600 text-white rounded-full text-sm font-medium">
                          UI/UX Design
                        </span>
                      </div>
                      <button className="mt-6 px-6 py-2.5 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white rounded-lg font-medium transition-colors duration-300">
                        Contact Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;