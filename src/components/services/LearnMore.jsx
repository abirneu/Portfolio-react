import React from "react";

const LearnMore = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        data-aos="zoom-in"
      >
        <div 
          className="h-48 bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url('${service.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
              {service.icon}
            </div>
            <h2 className="text-3xl font-bold">{service.name}</h2>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Service Overview</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {service.description}
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">What's Included</h3>
          <ul className="mb-6 space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Ready to get started?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Contact me to discuss how I can help with your project.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;