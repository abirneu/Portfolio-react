import React from "react";

const Education = () => {
  // Sample education data
  const educationData = [
    {
      id: 1,
      institute: "Netrokona University",
      logo: "https://neu.ac.bd/wp-content/uploads/2025/03/Logo-NeU-jpg.jpg",
      degree: "Master of Science in Computer Science",
      startDate: "Sep 2018",
      endDate: "May 2020",
      memory:
        "Published research on machine learning applications in healthcare. Served as TA for Algorithms course.",
    },
    {
      id: 2,
      institute: "University of Michigan",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/University_of_Michigan_seal.svg/1200px-University_of_Michigan_seal.svg.png",
      degree: "Bachelor of Science in Software Engineering",
      startDate: "Aug 2014",
      endDate: "May 2018",
      memory:
        "Lead developer for student project management system. Member of the coding competition team.",
    },
    {
      id: 3,
      institute: "Machpara High School",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_kdAU5EYeHUjbeY3JgIkgDCDpzHR9sKrzQ&s",
      degree: "Secondary School Certificate",
      startDate: "January 2012",
      endDate: "February 2017",
      memory:
        "Worked on neural network optimization techniques. Collaborated with researchers from various countries.",
    },
  ];

  return (
    <section className="md:px-8 min-h-screen lg:px-16 bg-secondary dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="sm:order-2 font-bold relative mb-12">
          {/* Big shadow text */}
          <div className="text-center text-5xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
            EDUCATION
          </div>

          {/* Foreground title */}
          <h1
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white"
          >
            Education
          </h1>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="relative">
              {/* Timeline connector for all but last item */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-5 sm:left-7 top-14 h-full w-0.5 bg-primary/40 dark:bg-primary/30"></div>
              )}

              <div className="flex flex-col sm:flex-row">
                {/* Date section - hidden on mobile, shown on sm and above */}
                <div className="hidden sm:block sm:w-1/4 mb-4 sm:mb-0">
                  <div className="text-sm font-medium text-primary/70 dark:primary/60">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>

                {/* Content section */}
                <div className="sm:w-3/4">
                  <div className="flex items-start">
                    {/* Logo and timeline dot */}
                    <div className="relative mr-4">
                      <div className="absolute top-1 left-1 w-3 h-3 sm:w-3 sm:h-3 bg-primary rounded-full z-10"></div>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-gray-800 p-1 border-2 border-primary/70 flex items-center justify-center">
                        <img
                          src={edu.logo}
                          alt={`${edu.institute} logo`}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                        />
                      </div>
                    </div>

                    {/* Education details */}
                    <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      {/* Date section for mobile */}
                      <div className="block sm:hidden mb-2">
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {edu.startDate} - {edu.endDate}
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {edu.degree}
                      </h3>
                      <p className="text-sm sm:text-lg text-stone-700 font-semibold dark:text-stone-600 mt-1">
                        {edu.institute}
                      </p>
                      <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic">
                          {edu.memory}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
