import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import FiX for the close icon
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { Link } from "react-router-dom";

const navMenus = [
  { name: "Home", link: "/" },
  { name: "Resume", link: "/resume" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact"}
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <nav id="home" className="bg-secondary dark:bg-gray-900 ">
      <div className="container flex justify-between items-center py-3 sm:py-0">
        <Link to="/" className="text-3xl md:text-5xl font-bold text-primary flex justify-center items-center"
        data-aos="zoom-in" data-aos-duration="1000">
          Abir.
        </Link>
        <div className="hidden sm:block">
          <ul className="flex items-center gap-4 dark:text-white">
            {navMenus.map((navMenu, index) => (
              <li key={index}>
                {navMenu.link.startsWith("/#") ? (
                  <a
                    href={navMenu.link}
                    className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                  >
                    {navMenu.name}
                  </a>
                ) : (
                  <Link
                    to={navMenu.link}
                    className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                  >
                    {navMenu.name}
                  </Link>
                )}
              </li>
            ))}

            {/* Light/Dark Toggle */}
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl dark:text-white cursor-pointer"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl dark:text-white cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            )}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <div className="flex items-center gap-4">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl dark:text-white cursor-pointer"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl dark:text-white cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            )}
            
            {/* Toggle between menu and close icon */}
            {showMenu ? (
              <FiX
                className="text-2xl cursor-pointer dark:text-white"
                onClick={toggleMenu}
              />
            ) : (
              <FiMenu
                className="text-2xl cursor-pointer dark:text-white"
                onClick={toggleMenu}
              />
            )}
          </div>
          
          {/* Mobile menu panel that slides in from right */}
          <div className={`fixed top-0 right-0 h-full w-64 bg-white dark:text-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-end p-4">
              <FiX
                className="text-2xl cursor-pointer dark:text-white"
                onClick={toggleMenu}
              />
            </div>
            <ul className="flex flex-col items-start gap-6 p-6">
              {navMenus.map((navMenu, index) => (
                <li key={index} className="w-full">
                  {navMenu.link.startsWith("/#") ? (
                    <a
                      href={navMenu.link}
                      className="text-xl font-semibold py-2 inline-block cursor-pointer w-full"
                      onClick={() => setShowMenu(false)}
                    >
                      {navMenu.name}
                    </a>
                  ) : (
                    <Link
                      to={navMenu.link}
                      className="text-xl font-semibold py-2 inline-block cursor-pointer w-full"
                      onClick={() => setShowMenu(false)}
                    >
                      {navMenu.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Overlay background when menu is open */}
          {showMenu && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMenu}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;