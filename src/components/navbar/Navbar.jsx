import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { Link } from "react-router-dom";  // <-- add this

const navMenus = [
  { name: "Home", link: "/" },           // route use korlam
  { name: "About", link: "/#about" },    // scroll section (same page)
  { name: "Services", link: "/#services" },
  { name: "Projects", link: "/projects" }, // new page
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
        <h1 className="text-3xl md:text-5xl font-bold text-primary flex justify-center items-center ">
          Abir.
        </h1>
        <div className="hidden sm:block">
          <ul className="flex items-center gap-4 dark:text-white">
            {navMenus.map((navMenu, index) => (
              <li key={index}>
                {navMenu.link.startsWith("/#") ? (
                  // Normal anchor for same page scroll
                  <a
                    href={navMenu.link}
                    className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                  >
                    {navMenu.name}
                  </a>
                ) : (
                  // Router Link for new page
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
                className="text-2xl dark:text-white"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl dark:text-white"
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
                className="text-2xl dark:text-white"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl dark:text-white"
                onClick={() => setTheme("dark")}
              />
            )}
            <FiMenu
              className="text-2xl cursor-pointer dark:text-white "
              onClick={toggleMenu}
            />
          </div>
          {showMenu && (
            <div className=" fixed top-16 bg-white dark:text-white dark:bg-gray-950 shadow-md rounded-b-xl left-0 w-full z-10 py-10">
              <ul className="flex flex-col items-center gap-4">
                {navMenus.map((navMenu, index) => (
                  <li key={index}>
                    {navMenu.link.startsWith("/#") ? (
                      <a
                        href={navMenu.link}
                        className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                        onClick={() => setShowMenu(false)}
                      >
                        {navMenu.name}
                      </a>
                    ) : (
                      <Link
                        to={navMenu.link}
                        className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                        onClick={() => setShowMenu(false)}
                      >
                        {navMenu.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
