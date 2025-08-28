import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import ProfilePic from "../assets/AboutPicture.png"; // replace with your image


import CountUp from "react-countup";


export default function AboutMe() {
  const personalInfo = [
    { 
      label: "Name", 
      value: "Muhammad Umar Hussain", 
      icon: <FaUser className="dark:text-amber-500" />, 
      link: "#home" // link to home section 
    },
    { 
      label: "Email", 
      value: "Uh819727@gmail.com", 
      icon: <FaEnvelope className="dark:text-amber-500" />, 
      link: "mailto:Uh819727@gmail.com" 
    },
    { 
      label: "Phone", 
      value: "+92 313-5082991", 
      icon: <FaPhone className="dark:text-amber-500" />, 
      link: "tel:+923135082991" 
    },
    { 
      label: "Address", 
      value: "Gulistan Colony, Lane 7, Rawalpindi, Punjab", 
      icon: <FaMapMarkerAlt className="dark:text-amber-500" />, 
      link: "https://www.google.com/maps/search/?api=1&query=Gulistan+Colony,+Lane+7,+Rawalpindi,+Punjab" 
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-green-100 via-gray-200 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          About <span className=" text-blue-600 dark:text-amber-500">Me</span>
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A passionate software engineer skilled in building modern, scalable, and user-friendly web applications.
        </p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-0 text-center">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">0<CountUp start={0} end={3} duration={2} enableScrollSpy scrollSpyOnce /> Years</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base">Experience</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"><CountUp start={0} end={138} duration={2} enableScrollSpy scrollSpyOnce />+</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"><CountUp start={0} end={150} duration={2} enableScrollSpy scrollSpyOnce />+</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base">Delivered Projects</p>
          </div>
        </div>

        {/* Profile Image + Personal Info */}
        <div className="mt-16 relative flex flex-col md:flex-row items-center justify-end gap-8">
          {/* Personal Info Section */}
          <div className="space-y-6 text-left md:w-2/5">
            {personalInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <a 
                  href={item.link} 
                  target={item.label === "Address" ? "_blank" : "_self"} 
                  rel="noopener noreferrer"
                  className="text-blue-600 bg-blue-100 p-3 rounded-lg text-xl hover:scale-110 transition-transform"
                >
                  {item.icon}
                </a>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.label}</h4>
                  <a 
                    href={item.link} 
                    target={item.label === "Address" ? "_blank" : "_self"} 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-400 text-sm hover:underline"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Image */}
          <div className="md:w-2/5 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden hidden md:block">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-full h-full object-contain mask-image"
              />
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="/Muhammad_Umar_Hussain_Resume.pdf" // place CV file in public folder
            download
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 dark:bg-amber-500 dark:hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg motion-preset-wobble motion-duration-1500  "
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
