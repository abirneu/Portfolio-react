import React, { useState, useEffect } from "react";
import personImg from "../../assets/abir-trans.png";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = [
    "Full Stack Developer",
    "Programmer",
    "CS Student",
    "Photographer",
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
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
            <p className="text-3xl text-stone-500 dark:text-white min-h-[2.5rem]">
              {text}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
              A passionate Computer Science graduate who loves turning ideas
              into code. Skilled in web development and machine learning, with
              hands-on project experience. Always curious, always building.
            </p>

            <a
              href="mailto:abirhasan.shu@gmail.com"
              className="inline-block primary-btn !my-3"
            >
              Hire me
            </a>
            {/* social icon */}
            <div className="flex gap-4 text-gray-700 dark:text-white">
              <a
                href="https://github.com/abirneu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={24}
                  className=" cursor-pointer"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                />
              </a>
              <a 
               href="https://www.linkedin.com/in/abirneu/"
                target="_blank"
                rel="noopener noreferrer"
               
              >
                <CiLinkedin
                size={24}
                className=" cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
              />

              </a>
              <a 
              href="https://www.facebook.com/abir.neu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoFacebook
                size={24}
                className=" cursor-pointer"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
              />

              </a>
              
              
            </div>
            {/* main div for working details */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* image section - Modernized */}
        <div className="relative flex justify-center items-center">
          {/* Modern gradient background element */}
          <div className="absolute w-80 h-80 md:w-96 
          md:h-96 bg-gradient-to-r from-primary/30 via-purple-500/20 to-pink-500/30
           dark:from-gray-600/40 dark:via-purple-700/30 dark:to-pink-700/30 rounded-full blur-xl opacity-70 animate-pulse-slow"></div>
          
          {/* Geometric shape decoration */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-primary/10 dark:bg-gray-600/30 rounded-3xl rotate-12 shadow-lg"></div>
          
          {/* Floating image with modern shadow */}
          <div className="relative w-full max-w-sm md:max-w-md mx-auto transform transition-all duration-700 hover:scale-105">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 dark:from-gray-600/30 dark:to-purple-700/30 rounded-2xl blur-lg opacity-75"></div>
            <img
              src={personImg}
              className="relative w-full rounded-2xl  shadow-primary/20 dark:shadow-gray-800/50 backdrop-blur-sm animate-float"
              alt="Abir Hasan - Full Stack Developer"
            />
          </div>
          
          {/* Decorative dots */}
          <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-primary/20 dark:bg-purple-600/30 blur-sm"></div>
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-purple-500/20 dark:bg-pink-600/30 blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;