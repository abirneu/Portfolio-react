import React, { useState } from 'react';
import Img1 from "/src/assets/certificateImg/ostad_img.jpg";


const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample certificate data with high-quality demo images
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "Full Stack Web Development with Python, Django & React",
      issuer: "OSTAD",
      date: "January 2025",
      image: Img1,
      credentialLink: "#"
    },
  ]);

  const openModal = (cert) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertificate(null), 300); // Delay to allow fade-out animation
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="py-2 px-4 md:px-8 bg-secondary dark:bg-gray-900 ">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="relative mb-16 text-center" data-aos="fade-down" data-aos-duration="1000">
          <div className="text-5xl xl:text-7xl font-bold text-gray-200 dark:text-gray-700 mb-4">
            ACHIEVEMENTS
          </div>
          <h1 className="text-3xl md:text-4xl font-bold dark:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            My Certificates
          </h1>
          <p className="text-gray-600 dark:text-gray-400 ">
            Professional credentials that validate my expertise and dedication to continuous learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id} 
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <div 
                className="relative overflow-hidden cursor-pointer"
                onClick={() => openModal(cert)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.date}</p>
                </div>
                <button 
                  onClick={() => openModal(cert)}
                  className="mt-4 w-full py-2 text-center text-black dark:text-white border border-primary dark:border-primary/60 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-gray-900 transition-colors duration-300"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
            data-aos="fade-in"
            data-aos-duration="300"
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-screen overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedCertificate && (
                <>
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {selectedCertificate.title}
                    </h3>
                    <button 
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-6">
                    <img 
                      src={selectedCertificate.image} 
                      alt={selectedCertificate.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="mt-6 flex justify-between items-center">
                      <div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Issued by: {selectedCertificate.issuer}</p>
                        <p className="text-gray-500 dark:text-gray-400">Date: {selectedCertificate.date}</p>
                      </div>
                      <a 
                        href={selectedCertificate.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                      >
                        Verify Credential
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificate;