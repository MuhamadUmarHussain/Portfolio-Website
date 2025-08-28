import React from "react";
import { FaFlask, FaLightbulb, FaVideo, FaDatabase, FaPalette, FaDesktop } from "react-icons/fa";

const services = [
  {
    icon: <FaDesktop className="text-4xl text-blue-600 dark:text-amber-500" />,
    title: "Front-End UI/UX Design",
  },
  {
    icon: <FaFlask className="text-4xl text-blue-600 dark:text-amber-500" />,
    title: "Back-End Development & API Integration",
  },
  {
    icon: <FaLightbulb className="text-4xl text-blue-600 dark:text-amber-500" />,
    title: "Generative AI Solutions",
  },
  {
    icon: <FaVideo className="text-4xl text-blue-600 dark:text-amber-500" />,
    title: "Custom Video Editing & Content Creation",
  },
  {
    icon: <FaDatabase className="text-4xl text-blue-600 dark:text-amber-500" />,
    title: "Database Design & Optimization",
  },
  {
    icon: <FaPalette className="text-4xl text-blue-600 dark:text-amber-500" />,
    title: "Canva Design & Branding",
  },
];

const Service = () => {
  return (
    <section id="services" className="pb-12 pt-20 bg-gradient-to-r from-green-100 via-gray-200 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
  <div className="w-full px-4">
    <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-20">
      {/* Small Subheading */}
      <span className="mb-2 block text-3xl md:text-4xl font-bold ">
        Our <span className="text-blue-600 dark:text-amber-500">Services</span>
      </span>

      {/* Main Heading */}
      <h2 className="mb-4 text-lg  text-gray-900 dark:text-white">
        What We Offer
      </h2>

      {/* Paragraph */}

      <p className="mt-4 text-center text-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
          Blending code, creativity, and innovation to deliver web solutions, AI
        integration, and engaging digital experiences.
        </p>
    </div>
  </div>
</div>


        {/* Service Cards */}
<div className="grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
  {services.map((service, index) => (
    <div
      key={index}
      className="flex flex-col items-center rounded-2xl  p-6 text-center shadow-md border border-gray-400  hover:shadow-xl dark:bg-gray-800 transform transition-transform duration-300 hover:scale-105"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
        {service.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{service.title}</h3>
      <div className="mt-2 h-[2px] w-10 bg-blue-400 dark:bg-yellow-400"></div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Service;
