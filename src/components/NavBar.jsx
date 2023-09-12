import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Hamburger from "./Hamburger";
const navlinks = [
  {
    title: "About me",
    link: "#",
  },
  {
    title: "Skills",
    link: "#",
  },
  {
    title: "Projects",
    link: "#",
  },
  {
    title: "Contact me",
    link: "#",
  },
];

export default function NavBar({ isSmallScreen, nav }) {
  const [showHam, setShowHam] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down, hide the navbar
        setIsHidden(true);
      } else {
        // Scrolling up, show the navbar
        setIsHidden(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const navbarClasses = `flex justify-between m-0 md:m-4 fixed top-0 left-0 right-2 z-10 backdrop-blur-sm w-full p-4 transition-transform duration-300 ease-in-out transform ${
    isHidden ? "-translate-y-36" : "translate-y-0"
  }`;

  const toggleHam = () => {
    showHam ? setShowHam(false) : setShowHam(true);
  };

  return (
    <div className={navbarClasses}>
      {isSmallScreen && showHam ? (
        <Hamburger navlinks={navlinks} nav={nav} ham={toggleHam} />
      ) : null}
      <div className="flex justify-center items-center  h-16 w-16">
        <h3 className="font-logo text-5xl md:text-7xl text-slate-50 relative top-1 hover:text-cyan-300 cursor-pointer">
          <a href="#">H</a>
        </h3>
      </div>
      {isSmallScreen ? (
        <div
          onClick={toggleHam}
          className="flex justify-center items-center mr-4 z-10"
        >
          <FaBars color="white" size={27} />
        </div>
      ) : (
        <ul className="font-poppins text-slate-50 flex gap-9 text-lg m-6">
          {navlinks.map((e, i) => (
            <li key={i}>
              <button
                className="group transition duration-300"
                onClick={() => {
                  if (i === 0) nav(i, 100);
                  else if (i === 1) nav(i, -100);
                  else if (i === 3) nav(i, 150);
                  else nav(i, 0);
                }}
              >
                {e.title}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-300"></span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
