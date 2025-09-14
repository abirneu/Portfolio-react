import React, { useState, useEffect } from "react";
import personImg from "../../assets/person2.png";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full Stack Developer', 'Student', 'Programmer'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 30 : 150);
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
        <div className="">
          <div className="space-y-2 grid justify-items-center sm:justify-items-start">
            <p className="uppercase ">Hello</p>
            <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
              I'm Abir Hasan
            </p>
            <p className="text-3xl text-gray-700 dark:text-white min-h-[2.5rem]">
              {text}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae quod accusamus accusantium voluptas autem doloribus?
            </p>
            <a
              href="mailto:michle@test.com"
              className="inline-block primary-btn !my-3"
            >
              Hire me
            </a>
            {/* social icon */}
            <div className="flex gap-4 text-gray-700 dark:text-white">
              <a href="https://github.com/abirneu" target="_blank" rel="noopener noreferrer">
                <FaGithub 
                size={24}  
                className=" cursor-pointer"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                />
              </a>
              <CiLinkedin 
              size={24}  
              className=" cursor-pointer" 
              data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
              />
              <IoLogoFacebook 
              size={24}  
              className=" cursor-pointer"
              data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
              />
            </div>
            {/* main div for working details */}
            <div className="grid grid-cols-3 gap-4 w-full h-20 sm:w-3/4 mt-4">
              {/* experience div */}
              <div
                className="bg-primary text-white
                rounded-xl shadow-lg hover:shadow-primary/60 p-4 flex flex-col items-center justify-center
                transition-all duration-300 transform  hover:bg-primary/80 "
                >
                <p className="text-center font-bold text-xl">2+</p>
                <p className="text-center text-sm">Years Experience</p>
              </div>
              {/* completed project div */}
              <div className="bg-primary text-white
                rounded-xl shadow-lg hover:shadow-primary/60 p-4 flex flex-col items-center justify-center
                transition-all duration-300 transform  hover:bg-primary/80 ">
                <p className="text-xl">20+</p>
                <p className="text-sm">Projects</p>
              </div>
              {/* client service div */}
              <div className="bg-primary text-white
                rounded-xl shadow-lg hover:shadow-primary/60 p-4 flex flex-col items-center justify-center
                transition-all duration-300 transform  hover:bg-primary/80 ">
                <p className="text-xl">100+</p>
                <p className="text-sm">Clients</p>
              </div>
            </div>
          </div>
        </div>
        {/* image section */}
        <div>
          <img
            src={personImg}
            className="w-full md:max-w-lg mx-auto backdrop-blur-sm"
            alt="person"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;