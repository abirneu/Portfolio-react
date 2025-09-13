// import React from "react";
import personImg from "../../assets/person2.png";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";

const Hero = () => {
  return (
    
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase ">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Abir Hasan
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                 Full stack Developer
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
              <div className="grid grid-cols-3 gap-2 w-full h-20 sm:w-3/4 mt-4">
                {/* experience div */}
                <div
                  className=" bg-primary/80 backdrop-blur-md 
                  rounded-xl shadow-lg hover:shadow-xl  hover:bg-primary/60  "
                  >
                  <p className="text-center font-bold">2+</p>
                  <p className="text-center">Experience</p>

                </div>
                {/* completed project div */}
                <div className=" bg-primary/80 backdrop-blur-md 
                  rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/60   text-center">
                  <p>20+ </p>
                  <p>Projects</p>
                </div>
                {/* client service div */}
                <div className="bg-primary/80 backdrop-blur-md 
                  rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/60 text-center">
                  <p>100+</p>
                  <p>Clients</p>
                </div>

              </div>
            </div>
          </div>
          {/* image section */}
          {/* <div
            className={`bg-[url("https://source.unsplash.com/random")] bg-no-repeat bg-center bg-cover `}
          > */}
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
