import React, { useEffect, useState } from "react";
import ServicesBox from "./ServicesBox";
import LearnMore from "./LearnMore";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="bg-secondary dark:bg-gray-900 py-16 lg:py-8 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div 
          className="text-center "
          data-aos="fade-up"
          data-aos-delay="100"
        >
        </div>
        
        {/* Why Hire Me Section - Modern Design */}
        <div className="w-full max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center " >
            {/* Services Title */}
            <div className=" font-bold relative" data-aos="fade-down" data-aos-duration="1000">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              SERVICES
            </div>
            <h1 className="dark:text-white  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl">
              Why Hire Me ?
            </h1>
          </div>
            
            {/* Call to Action Section */}
            <div className="border-2 border-primary dark:border-primary/50 dark:bg-gray-800 rounded-2xl p-8"
              data-aos="fade-left" data-aos-duration="1000">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Let's Work Together</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I'm ready to bring your ideas to life with clean, efficient code and modern design principles.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center" 
                data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center" 
                data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center" 
                data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <a
                  href="../../assets/Abir_resume(7-9-25).pdf"
                  className="bg-primary hover:bg-primary/90 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors"
                  download
                >
                  Download Resume
                </a>
                <a
                  href="tel:+8801736695636"
                  title="Call +8801736695636"
                  className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-center py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Boxes */}
        <ServicesBox onLearnMore={handleLearnMore} />
      </div>
      
      <LearnMore 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default Services;