import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-secondary dark:bg-slate-900 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500 ">
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              Hi, I’m <strong>Abir Hasan</strong> — a Computer Science graduate from Netrokona
              University with a deep interest in <strong>software development and
              problem-solving</strong> . I enjoy building projects that mix creativity
              with logic, from web apps to machine learning experiments.
            </p>
            <br />
            <p  data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              Over the past few years, I’ve worked on academic and personal
              projects including , Chronic Kidney Disease prediction using ML, <strong>Web Development</strong>, and modern web applications. Outside of
              coding, I’m passionate about <strong>photography</strong> and capturing stories
              through visuals. Always curious, always learning — that’s how I
              roll.
            </p>

            <div className="">
              <a
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                href="../../assets/Abir_resume(7-9-25).pdf"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Download Resume
              </a>
              <a
                href="tel:+8801736695636"
                title="Call +8801736695636"
                className="outline-btn my-6"
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
