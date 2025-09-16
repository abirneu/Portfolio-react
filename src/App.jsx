import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Footer from "./components/footer/Footer.jsx";
// import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Resume from "./components/resume/Resume.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100, // Offset (in pixels) from the original trigger point
      duration: 800, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      delay: 100, // Delay before the animation starts (in milliseconds)
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              {/* <Skills /> */}
              {/* <Services /> */}
              <Footer />
            </>
          }
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={<Projects />}
        />
        {/* Contact Page */}
        <Route
          path="/contact"
          element={<Contact />}
        />
        {/* Resume Page */}
        <Route
          path="/resume"
          element={<Resume />}
        />
        {/* Services Page */}
        <Route
          path="/services"
          element={<Services />}
        />
      </Routes>
    </div>
  );
};

export default App;
