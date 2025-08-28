import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // for fade effect



export default function HeroSection() {
  return (
    <div id="home" className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
        effect="slide" // 👈 smooth fade effect
        speed={1000}  // 👈 transition speed (ms)
        className="h-full"
      >
        {/* First Slide - Picture & Intro */}
        <SwiperSlide>
  <div className="relative flex flex-col md:flex-row items-center justify-between h-screen w-full bg-gradient-to-r from-gray-600 via-gray-400 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-0"></div>

    {/* Background Image for Mobile */}
    <div
        className="absolute inset-0 lg:hidden bg-cover bg-center mt-6"
        style={{ backgroundImage: `url(/main.png)` }}
      >
      <div className="absolute inset-0 bg-black/40 "></div>
    </div>

    

    {/* Left Content Section */}
    <div className="relative z-20 w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12 motion-translate-x-in-[166%] motion-translate-y-in-[-85%] motion-rotate-in-[34deg]">
      <span className="text-lg text-white/90 dark:text-gray-300">Hello!</span>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white dark:text-gray-100 mt-2 motion-preset-slide-right motion-duration-2000 ">
        I’m <span className="text-blue-600 dark:text-amber-500 ">Umar Hussain</span>
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-white dark:text-gray-300 mt-2 animation-typewriting-17">
        A Software Engineer
      </h2>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 dark:text-gray-300 max-w-md">
        Innovating through code to create seamless user experiences.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#contacts"
          className=" bg-blue-500 hover:bg-blue-600 dark:bg-amber-500 dark:hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition motion-preset-seesaw "
        >
          Hire Me
        </a>
        <a
          href="#projects"
          className="border border-white/70 text-white hover:bg-gray-400 hover:text-gray-900 font-medium py-3 px-6 rounded-lg shadow-lg transition"
        >
          My Works
        </a>
      </div>
    </div>

    {/* Right Image Section for Desktop */}
    <div className="hidden lg:flex relative w-1/2 h-full justify-end items-center z-10 mt-8">
      <div
        className="w-full h-full bg-contain bg-no-repeat bg-right md:rounded-l-3xl "
        style={{ backgroundImage: `url(/main.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 md:from-transparent"></div>
      </div>
    </div>

  </div>
</SwiperSlide>



        {/* Second Slide - Fornt-End Development */}
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full px-4 text-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 transition-all duration-700 ">
            <img
              src="/FrontEnd.png"
              alt="Front-End Development"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full shadow-lg mb-4 motion-preset-pulse"
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold   text-gray-900 dark:text-gray-100 font-sans animation-typewriting-20">
              Front-End Development
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-white dark:text-gray-950 font-semibold max-w-2xl ">
              React.js | HTML/CSS/JS | Tailwind.css
            </p>

          </div>
        </SwiperSlide>

        {/* Third Slide - Back-End Development */}
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full px-4 text-center bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-900 transition-all duration-700">
            <img
              src="BackEnd.webp"
              alt="Back-End Development"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full shadow-lg mb-4 motion-preset-pulse "
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold  text-gray-900 dark:text-gray-100 font-sans animation-typewriting-19">
              Back-End Development
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-white dark:text-gray-950 font-semibold max-w-2xl">
              Node/Express.js | Python/PHP| My-Sql/Mongo-DB
            </p>
          </div>
        </SwiperSlide>


        {/* Forth Slide - Content Creation */}
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full px-4 text-center bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 dark:from-gray-800 dark:to-gray-900 transition-all duration-700">
            <img
              src="Content.jpg"
              alt="Content Creation"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full shadow-lg mb-4  motion-preset-pulse"
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold  text-gray-900 dark:text-gray-100 font-sans animation-typewriting-14">
              Content Creation
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-white dark:text-gray-950 font-semibold max-w-2xl">
              Video Editing | SEO | Canva Templates
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
