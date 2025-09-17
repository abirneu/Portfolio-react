import React from "react";
import Img1 from "/src/assets/ServiceImage/fulllStack.png";
import Img2 from "/src/assets/ServiceImage/frontEnd.jpg";
import Img3 from "/src/assets/ServiceImage/backend.png";
import Img4 from "/src/assets/ServiceImage/machineLearning.png";
import Img5 from "/src/assets/ServiceImage/portraitphoto1.jpeg";

import {
  AiFillLayout,
  AiOutlineMobile,
  AiOutlineDesktop,
  AiOutlineSecurityScan,
  AiOutlineCode,
  AiOutlineCamera,
} from "react-icons/ai";

const ServicesData = [
  {
    id: 1,
    name: "Django Full Stack Development",
    description:
      "Building robust web applications using the Python Django stack (Django, PostgreSQL, REST APIs). I focus on creating secure, scalable solutions with Django's powerful features.",
    image: Img1,
    icon: <AiFillLayout className="text-2xl" />,
    bgColor: "bg-primary",
    delay: 100,
    features: [
      "Django Models & ORM",
      "REST API Development",
      "PostgreSQL Database",
      "Authentication & Security",
    ],
  },
  {
    id: 2,
    name: "Frontend Development",
    description:
      "Specialized in frontend development using React.js, Tailwind CSS, and AOS animation. Experienced in crafting responsive, modern, and interactive user interfaces.",
    image: Img2,
    icon: <AiOutlineMobile className="text-2xl" />,
    bgColor: "bg-gradient-to-r from-emerald-600 to-teal-700",
    delay: 200,
    features: [
      "React.js Development",
      "Tailwind CSS Styling",
      "AOS Animations",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    name: "Backend Development",
    description:
      "Creating dynamic web interfaces using Django's template system integrated with modern frontend technologies. Ensuring smooth user experiences and responsive designs.",
    image: Img3,
    icon: <AiOutlineDesktop className="text-2xl" />,
    bgColor: "bg-gradient-to-r from-purple-600 to-fuchsia-700",
    delay: 300,
    features: [
      "Django Templates",
      "Frontend Integration",
      "AJAX & jQuery",
      "Responsive Design",
    ],
  },
  {
    id: 4,
    name: "Machine Learning ",
    description:
      "Implementing comprehensive machine learning models and data analysis pipelines. Utilizing Python libraries for data-driven insights.",
    image: Img4,
    icon: <AiOutlineSecurityScan className="text-2xl" />,
    bgColor: "bg-gradient-to-r from-amber-600 to-orange-700",
    delay: 400,
    features: [
      "TensorFlow & Keras",
      "Data Analysis",
      "Predictive Modeling",
      "Data Visualization",
    ],
  },
  

  {
    id: 5,
    name: "Portrait Photography",
    description:
      "Professional portrait photography services with attention to lighting, composition, and post-processing for stunning results.",
    image: Img5,
    icon: <AiOutlineCamera className="text-2xl" />,
    bgColor: "bg-gradient-to-r from-violet-600 to-purple-700",
    delay: 700,
    features: [
      "Lighting Techniques",
      "Composition",
      "Post-Processing",
      "Portfolio Shoots",
    ],
  },
];

const ServicesBox = ({ onLearnMore }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {ServicesData.map((service) => (
          <div
            key={service.id}
            className="group relative overflow-hidden rounded-xl 
             hover:shadow-2xl transition-all duration-500
            ease-in-out transform hover:-translate-y-2 bg-white
            dark:bg-gray-800 dark:border-gray-700 border-2 border-primary/80 dark:border-primary/70"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={service.delay}
          >
            {/* Header with image and icon */}
            <div
              className={`h-40 bg-cover bg-center bg-no-repeat relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105 ${service.bgColor}`}
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500"></div> */}

              {/* Icon with floating animation */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all duration-500 ease-in-out shadow-md">
                <div className="text-black ">{service.icon}</div>
              </div>

              
            </div>

            {/* Content area */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">{service.name}</h3>
                <p className="w-full h-px bg-primary/70 dark:bg-gray-600 my-2"></p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description.substring(0, 100)}...
              </p>

              {/* Features list */}
              <ul className="mb-5 space-y-2">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-xs text-gray-500 dark:text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                    {feature}
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-xs text-gray-400 dark:text-gray-500">
                    +{service.features.length - 3} more features
                  </li>
                )}
              </ul>

              {/* Learn more button */}
              <button
                onClick={() => onLearnMore(service)}
                className="w-full py-2.5 rounded-lg bg-primary/85 hover:bg-primary/65 hover:to-gray-200 
               
                text-gray-700 dark:text-gray-300 font-medium text-sm transition-all duration-300 
                shadow-sm hover:shadow-inner border border-gray-200 dark:border-gray-700
                flex items-center justify-center group/btn"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
