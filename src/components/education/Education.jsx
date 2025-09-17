import React from "react";
import Img1 from "../../assets/EducationalInst/neuLogo.png";
import Img2 from "../../assets/EducationalInst/clgLogo.jpg";
import Img3 from "../../assets/EducationalInst/schoolLogo.jpg";



const Education = () => {
  // Sample education data
  const educationData = [
    {
      id: 1,
      institute: "Netrokona University",
      logo: Img1,
      degree: "Msc in Computer Science",
      startDate: "Sep 2025",
      endDate: "Present",
      memory:
        "Currently pursuing my Master's degree with a focus on AI and Machine Learning.",
    },
    {
      id: 2,
      institute: "Netrokona University",
      logo: Img1,
      degree: "Bsc in Computer Science",
      startDate: "Janu 2020",
      endDate: "June 2025",
      memory: "Completed BSc in Computer Science at Netrokona University (2020–2025). Worked on multiple academic projects including machine learning and web development. Wrote Project based thesis on Chronic Kidney Disease prediction using ML. Active in coding club and departmental events.",
    },
    {
      id: 3,
      institute: "Dhaka State College",
      logo: Img2,
      degree: "Higher Secondary School Certificate",
      startDate: "June 2017",
      endDate: "April 2019",
      memory:
  "Completed HSC in Science at Dhaka State College (2017–2019). Took part in science fairs, group study sessions, and college events. Built strong foundations in math and programming basics while enjoying campus life with friends.",

    },
    {
      id: 4,
      institute: "Machpara High School",
      logo: Img3,
      degree: "Secondary School Certificate",
      startDate: "January 2012",
      endDate: "February 2017",
      memory:
        "Completed SSC in Science at Machpara High School (2012–2017). Actively participated in science club activities, cultural programs, and inter-school competitions. Built early interest in technology and problem-solving during these years.",
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
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-gray-300 p-1 border-2 border-primary/70 flex items-center justify-center">
                        <img
                          src={edu.logo}
                          alt={`${edu.institute} logo`}
                          className="w-10 h-10 sm:w-10 sm:h-10 object-contain"
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
