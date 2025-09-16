import React, { useState } from 'react';

const Certificate = () => {
  // Sample certificate data
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "May 2023",
      image: "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=React+Cert",
      credentialLink: "#"
    },
    {
      id: 2,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "March 2023",
      image: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=JavaScript+Cert",
      credentialLink: "#"
    },
    {
      id: 3,
      title: "UI/UX Design Specialization",
      issuer: "Google",
      date: "January 2023",
      image: "https://via.placeholder.com/300x200/F97316/FFFFFF?text=UI/UX+Cert",
      credentialLink: "#"
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      issuer: "The Odin Project",
      date: "November 2022",
      image: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Full+Stack",
      credentialLink: "#"
    },
    {
      id: 5,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "September 2022",
      image: "https://via.placeholder.com/300x200/EC4899/FFFFFF?text=AWS+Cert",
      credentialLink: "#"
    },
    {
      id: 6,
      title: "Tailwind CSS Mastery",
      issuer: "Frontend Masters",
      date: "July 2022",
      image: "https://via.placeholder.com/300x200/0EA5E9/FFFFFF?text=Tailwind",
      credentialLink: "#"
    }
  ]);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="font-bold relative mb-16" data-aos="fade-down" data-aos-duration="1000">
          <div className="text-center text-5xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
            CERTIFICATE
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl dark:text-white">
            My Certificates
          </h1>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <a 
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                    >
                      Verify Credential
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (optional) */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-300">
            View All Certificates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificate;