import React, { useState, useEffect, useRef } from "react";
import { FaHtml5, FaReact, FaNodeJs, FaDatabase, FaFigma, FaVideo } from "react-icons/fa";
import CountUp from "react-countup";

// ProgressBar Component
function ProgressBar({ value, animate }) {
  return (
    <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
      <div
        className="h-3 bg-blue-600 dark:bg-amber-500 transition-all duration-2000 ease-out"
        style={{ width: animate ? `${value}%` : "0%" }}
      />
    </div>
  );
}

export default function MySkills() {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "HTML / CSS / JavaScript", value: 90, icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
    { name: "React.js", value: 85, icon: <FaReact className="text-blue-500 text-2xl" /> },
    { name: "Node.js / Express.js", value: 80, icon: <FaNodeJs className="text-green-600 text-2xl" /> },
    { name: "MySQL / MongoDB", value: 75, icon: <FaDatabase className="text-indigo-500 text-2xl" /> },
    { name: "Canva / Figma", value: 85, icon: <FaFigma className="text-pink-500 text-2xl" /> },
    { name: "Video Editing", value: 70, icon: <FaVideo className="text-red-500 text-2xl" /> },
  ];

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 } // 30% of section visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-green-100 via-gray-200 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          My <span className="text-blue-600 dark:text-amber-500">Skills</span>
        </h2>
        <p className="mt-4 text-center text-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
          A versatile skill set in modern web technologies, blending front-end finesse with back-end strength to build
          complete digital solutions.
        </p>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                  {skill.icon}
                  {skill.name}
                </div>
                <span className="text-blue-600 dark:text-amber-500 font-semibold">
                  {startAnimation && (
                    <CountUp start={0} end={skill.value} duration={2.5} />
                  )}
                  {startAnimation && "%"}
                </span>
              </div>

              {/* Progress Bar */}
              <ProgressBar value={skill.value} animate={startAnimation} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
