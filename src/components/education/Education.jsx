import React from "react";

const Education = () => {
  // Sample education data
  const educationData = [
    {
      id: 1,
      institute: "Netrokona University",
      logo: "https://neu.ac.bd/wp-content/uploads/2025/03/Logo-NeU-jpg.jpg",
      degree: "Msc in Computer Science",
      startDate: "Sep 2025",
      endDate: "Present",
      memory:
        "Published research on machine learning applications in healthcare. Served as TA for Algorithms course.",
    },
    {
      id: 2,
      institute: "Netrokona University",
      logo: "https://www.dhakastatecollege.edu.bd/public/images/header_bg.pngdata:image/jpeg;base64,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",
      degree: "Bsc in Computer Science",
      startDate: "Janu 2020",
      endDate: "June 2025",
      memory:
        "Lead developer for student project management system. Member of the coding competition team.",
    },
    {
      id: 3,
      institute: "Dhaka State College",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_kdAU5EYeHUjbeY3JgIkgDCDpzHR9sKrzQ&s",
      degree: "Higher Secondary School Certificate",
      startDate: "June 2017",
      endDate: "April 2019",
      memory:
        "Worked on neural network optimization techniques. Collaborated with researchers from various countries.",
    },
    {
      id: 4,
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
        <div className="sm:order-2 font-bold relative mb-12" data-aos="fade-down" data-aos-duration="1000">
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

        <div className="space-y-12" data-aos="fade-up" data-aos-duration="1000"> 
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
                    <div className="relative mr-4" data-aos="zoom-in" data-aos-duration="1000">
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
                    <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                      {/* Date section for mobile */}
                      <div className="block sm:hidden mb-2">
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {edu.startDate} - {edu.endDate}
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {edu.degree}
                      </h3>
                      <p className="text-sm sm:text-lg text-stone-700 font-semibold dark:text-stone-100 mt-1">
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
