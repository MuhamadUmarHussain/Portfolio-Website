import React from "react";

export default function Freelance() {
  return (
    <section
      className="relative h-72 flex items-center justify-center bg-center bg-cover shadow-[0_0_30px_rgba(59,130,246,0.7)] dark:shadow-[0_0_30px_rgba(245,158,11,0.7)]"
      style={{ backgroundImage: `url("/FreelanceSection.jpg")` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-white mb-6">
          I'm <span className="text-blue-500 dark:text-amber-500">Available</span> for Freelancing
        </h2>
        <a
          href="#contacts"
          className="inline-block bg-blue-500 dark:bg-amber-500 dark:hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition hover:motion-rotate-in-[0.5turn]"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}

