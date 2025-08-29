import React, { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSectioin";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Service from "./components/Service";
import MySkills from "./components/MySkills";
import Freelance from "./components/Freelance";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { FaArrowUp } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [showButton, setShowButton] = useState(false);
  const heroRef = useRef(null);

  // Refs for sections
  const sectionsRef = {
    Hero: useRef(null),
    About: useRef(null),
    Resume: useRef(null),
    Service: useRef(null),
    Skills: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    // Scroll button handler
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || 0;
      setShowButton(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-title");
            if (sectionName === "Home") {
              document.title = "Umar Hussain - CCI";
            } else if (sectionName) {
              document.title = sectionName;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, [sectionsRef]);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <NavBar />

      {/* ✅ ToastContainer moved here (global, avoids reflow issues in Contact) */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <main className="text-gray-900 dark:text-gray-100 relative">
        <div ref={heroRef} data-title="Home">
          <HeroSection />
        </div>

        <div
          id="about"
          ref={sectionsRef.About}
          data-title="About Me"
        >
          <AboutMe />
        </div>

        <div
          id="resume"
          ref={sectionsRef.Resume}
          data-title="Resume"
        >
          <Resume />
        </div>

        <div
          id="services"
          ref={sectionsRef.Service}
          data-title="Services"
        >
          <Service />
        </div>

        <div
          id="skills"
          ref={sectionsRef.Skills}
          data-title="My Skills"
        >
          <MySkills />
        </div>

        <Freelance />

        <div
          id="projects"
          ref={sectionsRef.Projects}
          data-title="Projects"
        >
          <Projects />
        </div>

        <div
          id="contacts"
          ref={sectionsRef.Contact}
          data-title="Contact"
        >
          <Contact />
        </div>

        <Footer />
      </main>

      {showButton && (
        <button
          onClick={scrollToHero}
          className="fixed bottom-6 right-6 h-12 w-12 text-2xl bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none z-50 cursor-pointer dark:bg-amber-500 dark:hover:bg-amber-500 motion-preset-bounce -motion-translate-y-in-150"
        >
          <span className="flex justify-center items-center">
            <FaArrowUp className="dark:text-gray-900" />
          </span>
        </button>
      )}
    </div>
  );
}
