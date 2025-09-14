import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";
import Loader from "./components/loader/Loader.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Lazy import Projects
const Projects = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () => resolve(import("./components/Projects/Projects.jsx")),
        1500
      ); // 1.5s delay
    })
);
// Lazy load Contact with 1.5s delay
const Contact = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./components/contact/Contact.jsx")), 1500)
  )
);

// Lazy import Resume
const Resume = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () => resolve(import("./components/resume/Resume.jsx")),
        1500
      ); // 1.5s delay
    })
);

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
              <Skills />
              <Services />
              <Footer />
            </>
          }
        />

        {/* Projects with loader */}
        <Route
          path="/projects"
          element={
            <Suspense fallback={<Loader />}>
              <Projects />
            </Suspense>
          }
        />
        {/* Contact Page with Loader */}
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
        {/* Resume Page with Loader */}
        <Route
          path="/resume"
          element={
            <Suspense fallback={<Loader />}>
              <Resume />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
