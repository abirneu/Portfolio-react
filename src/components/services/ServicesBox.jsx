import React from "react";
import Img1 from "../../assets/ServiceImage/fulllStack.png";
import Img2 from "../../assets/ServiceImage/frontend.jpg";
import { 
  AiFillLayout, 
  AiOutlineMobile, 
  AiOutlineDesktop, 
  AiOutlineSecurityScan 
} from "react-icons/ai";

const ServicesData = [
  {
    id: 1,
    name: "Django Full Stack Development",
    description: "Building robust web applications using the Python Django stack (Django, PostgreSQL, REST APIs). I focus on creating secure, scalable solutions with Django's powerful features.",
    image: Img1,
    icon: <AiFillLayout className="text-2xl text-stone-200" />,
    bgColor: "bg-blue-500/90",
    delay: 100,
    features: [
      "Django Models & ORM",
      "REST API Development",
      "PostgreSQL Database",
      "Authentication & Security"
    ]
  },
  {
    id: 2,
    name: "Frontend Development",
    description: "Specialized in frontend development using React.js, Tailwind CSS, and AOS animation. Experienced in crafting responsive, modern, and interactive user interfaces with a focus on performance and smooth user experience.",
    image: Img2,
    icon: <AiOutlineMobile className="text-2xl text-stone-200" />,
    bgColor: "bg-emerald-500/90",
    delay: 200,
    features: [
      "Django REST Framework",
      "Database Optimization",
      "Celery Task Queue",
      "API Documentation"
    ]
  },
  {
    id: 3,
    name: "Django Templates & Frontend",
    description: "Creating dynamic web interfaces using Django's template system integrated with modern frontend technologies. Ensuring smooth user experiences and responsive designs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
    icon: <AiOutlineDesktop className="text-2xl text-white" />,
    bgColor: "bg-purple-500/90",
    delay: 300,
    features: [
      "Django Templates",
      "Frontend Integration",
      "AJAX & jQuery",
      "Responsive Design"
    ]
  },
  {
    id: 4,
    name: "Django Security & Testing",
    description: "Implementing comprehensive security measures and testing strategies for Django applications. Following best practices for secure development and deployment.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: <AiOutlineSecurityScan className="text-2xl text-white" />,
    bgColor: "bg-amber-500/90",
    delay: 400,
    features: [
      "Security Middleware",
      "Unit Testing",
      "Integration Testing",
      "Deployment Security"
    ]
  },
];

const ServicesBox = ({ onLearnMore }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
        {ServicesData.map((service) => (
          <div
            key={service.id}
            className="group relative overflow-hidden rounded-2xl
             shadow-lg hover:shadow-xl transition-all duration-700
              ease-in-out transform hover:-translate-y-2
               dark:border-gray-700
              "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={service.delay}
          >
            <div 
              className={`h-64 bg-cover bg-center bg-no-repeat relative ${service.bgColor} transition-transform duration-700 ease-in-out group-hover:scale-105`}
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-all duration-700 ease-in-out"></div>
              
              <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-700 ease-in-out">
                {service.icon}
              </div>
              
              <div className="absolute bottom-5 left-5 right-5 text-primary transition-all duration-700 ease-in-out">
                <h3 className="text-xl font-bold mb-2 transform transition-transform duration-700 ease-in-out group-hover:translate-y-[-4px]">{service.name}</h3>
                <p className="text-sm text-gray-950 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-700 ease-in-out">
                  {service.description.substring(0, 80)}...
                </p>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <button 
                    onClick={() => onLearnMore(service)}
                    className="text-xs font-medium px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 ease-in-out"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;