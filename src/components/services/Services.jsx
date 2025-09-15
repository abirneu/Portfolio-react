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
    <section className="bg-secondary  dark:bg-gray-900 py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div 
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
         <div className=" font-bold relative">
          <div className=" text-center text-5xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
            SERVICES
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl dark:text-white">
            Services
          </h1>
        </div>
        
          
        </div>
        
      </div>
      
      <ServicesBox onLearnMore={handleLearnMore} />
      
      <LearnMore 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default Services;