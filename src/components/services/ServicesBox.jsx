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
    name: "UX Research",
    description: "In-depth user research to create intuitive experiences that delight your audience and drive engagement. I use a combination of qualitative and quantitative methods to understand user behaviors, needs, and motivations.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
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
    name: "App Development",
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
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={service.delay}
          >
            <div 
              className={`h-64 bg-cover bg-center bg-no-repeat relative ${service.bgColor}`}
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <div className="absolute bottom-5 left-5 right-5 text-primary">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500">
                  {service.description.substring(0, 80)}...
                </p>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <button 
                    onClick={() => onLearnMore(service)}
                    className="text-xs font-medium px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
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