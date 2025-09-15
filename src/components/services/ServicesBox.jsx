import React from "react";
import { 
  AiFillLayout, 
  AiOutlineMobile, 
  AiOutlineDesktop, 
  AiOutlineSecurityScan 
} from "react-icons/ai";

const ServicesData = [
  {
    id: 1,
    name: "Full Stack Development",
    description: "Building responsive and high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I focus on creating seamless user experiences and robust back-end solutions.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    icon: <AiFillLayout className="text-2xl text-white" />,
    bgColor: "bg-blue-500/90",
    delay: 100,
    features: [
      "User interviews and surveys",
      "Usability testing",
      "Persona development",
      "Journey mapping"
    ]
  },
  {
    id: 2,
    name: "Frontend Development",
    description: "Native and cross-platform mobile applications built with cutting-edge technologies for optimal performance. I develop apps for both iOS and Android platforms using modern frameworks.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: <AiOutlineMobile className="text-2xl text-white" />,
    bgColor: "bg-emerald-500/90",
    delay: 200,
    features: [
      "iOS and Android development",
      "React Native & Flutter",
      "API integration",
      "App store deployment"
    ]
  },
  {
    id: 3,
    name: "Web Development",
    description: "Responsive, modern websites and web applications that deliver exceptional user experiences across all devices. Using the latest technologies like React, Next.js, and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
    icon: <AiOutlineDesktop className="text-2xl text-white" />,
    bgColor: "bg-purple-500/90",
    delay: 300,
    features: [
      "Responsive design",
      "React/Next.js development",
      "SEO optimization",
      "Performance tuning"
    ]
  },
  {
    id: 4,
    name: "Security Solutions",
    description: "Comprehensive security assessments and implementations to protect your digital assets and user data. I conduct thorough security audits and implement best practices for data protection.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: <AiOutlineSecurityScan className="text-2xl text-white" />,
    bgColor: "bg-amber-500/90",
    delay: 400,
    features: [
      "Security audits",
      "Vulnerability assessment",
      "Data protection strategies",
      "Compliance consulting"
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
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-700 ease-in-out">
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