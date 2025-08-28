import React from "react";

export default function Resume() {
  const resumeData = [
    {
      year: "2021 – 2025",
      title: "Bachelor of Software Engineering",
      place: "National University of Modern Languages",
      desc: "Gained strong foundations in DSA, OOP, DBMS, and Software Engineering Principles. Completed academic projects like Digital Library System, Student Management System, and Intelligent YouTube Comment Analyzer, following the full SDLC process.",
    },
    {
      year: "2024",
      title: "MERN Stack Development",
      place: "Angela Yu (Online Course)",
      desc: "Learned to build full-stack apps using MongoDB, Express.js, React.js, and Node.js. Developed projects with authentication, APIs, and responsive UI while practicing scalable coding and deployment strategies.",
    },
    {
      year: "2024 – 2025",
      title: "Web Developer Intern",
      place: "KSoft – Islamabad",
      desc: "Built responsive web interfaces with React and improved client usability. Contributed to debugging, feature development, and testing live products while collaborating in Agile teams with Git version control.",
    },
    {
      year: "2022",
      title: "HTML, CSS, JavaScript – Web Development Bootcamp",
      place: "Udemy",
      desc: "Developed practical front-end skills for creating responsive, interactive websites. Built multiple projects using clean code practices, layout optimization, and dynamic JavaScript-based interactions.",
    },
    {
      year: "2025",
      title: "Generative AI Specialization",
      place: "Oracle",
      desc: "Studied AI concepts, prompt engineering, and model integration. Applied AI tools to create intelligent applications and explored AI's role in modern workflows and product innovation.",
    },
    {
      year: "2019 – Present",
      title: "YouTube Content Creator & Video Editor",
      place: "Uz MVs – YouTube Channel",
      desc: "Created and managed a YouTube channel with 200k+ subscribers. Produced high-quality edits, engaging visual content, and implemented audience engagement strategies to maintain loyal viewers.",
    },
  ];

  return (
    <section id="resume" className="bg-gradient-to-r from-green-100 via-gray-200 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20 ">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My <span className="text-blue-600 dark:text-amber-500">Resume</span>
        </h2>

        {/* Resume Cards */}
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {resumeData.map((item, index) => (
    <div
      key={index}
      className="flex "
    >
      <div className="flex flex-col justify-between h-full w-full overflow-hidden rounded-lg shadow-md border border-gray-400 dark:bg-gray-800 
                      transform transition-transform duration-300 hover:scale-105">
        <div className="p-8 text-left sm:p-9 md:p-7 xl:p-9">
          <p className="text-sm font-extrabold text-blue-600 dark:text-amber-500 mb-2">
            {item.year}
          </p>
          <h3 className="mb-3 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <h4 className="mb-4 text-base font-medium text-gray-900 dark:text-gray-300 italic">
            {item.place}
          </h4>
          <p className="text-gray-900 dark:text-gray-400 text-sm leading-relaxed line-clamp-6">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>




      </div>
    </section>
  );
}
