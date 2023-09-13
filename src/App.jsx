import React from "react";
import Homepage from "./pages/Homepage";
import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import AboutmePage from "./pages/AboutmePage";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const targetRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 640);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTarget = (index, offset = 0) => {
    const targetElement = targetRefs[index].current;

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="snap-y snap-mandatory w-screen">
      <Toaster />
      <NavBar isSmallScreen={isSmallScreen} nav={scrollToTarget} />
      <div className="flex w-screen justify-center">
        <Homepage isSmallScreen={isSmallScreen} nav={scrollToTarget} />
      </div>
      <div className="flex w-screen justify-center" ref={targetRefs[0]}>
        <AboutmePage isSmallScreen={isSmallScreen} />
      </div>
      <div className="flex w-screen justify-center" ref={targetRefs[1]}>
        <Skills isSmallScreen={isSmallScreen} />
      </div>
      <div className="flex w-screen justify-center" ref={targetRefs[2]}>
        <Projects isSmallScreen={isSmallScreen} />
      </div>
      <div className="flex w-screen justify-center" ref={targetRefs[3]}>
        <Contact isSmallScreen={isSmallScreen} />
      </div>
    </div>
  );
}
