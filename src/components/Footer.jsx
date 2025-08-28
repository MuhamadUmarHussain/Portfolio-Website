import React from "react";
import { IoLocation, IoCallOutline} from "react-icons/io5";
import { SlSocialFacebook , SlSocialLinkedin } from "react-icons/sl";
import { SiUpwork } from "react-icons/si";
import { FiGithub, FiYoutube } from "react-icons/fi";

import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-r from-green-100 via-gray-200 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-6">
        {/* Top flex row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center  lg:justify-between">
          
          {/* Logo + About */}
          <div className="flex flex-col items-start">
            {/* Logo placeholder */}
            
            <div className="mb-4 flex justify-center items-center space-x-4">
              <img
                src={`${Logo}`}
                alt="logo"
                className="w-16 h-16"
              />

            {/* Name */}
            <h2 className="text-xl font-bold text-blue-500 dark:text-amber-500 cursor-pointer">
              Muhammad Umar Hussain
            </h2>

            </div>
            
            {/* Location */}
            <p className="text-black dark:text-white mt-1 flex items-center gap-x-4">
              <IoLocation className="text-blue-600 dark:text-amber-500 text-lg" />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Gulistan+Colony,+Lane+7,+Jinnah+Avenue,+Rawalpindi,+Punjab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Gulistan Colony, Lane 7, Jinnah Avenue, Rawalpindi, Punjab
              </a>
            </p>

            {/* Phone */}
            <p className="text-black dark:text-white mt-1 flex items-center gap-x-4">
              <IoCallOutline className="text-blue-600 dark:text-amber-500" />
              <a href="tel:+923135082991" className="hover:underline">
                +92 313-5082991
              </a>
            </p>

          </div>

          

          {/* Social Links */}
          <div className="flex flex-col justify-center items-center">
            <div>
            <h4 className="mb-4 text-lg font-bold text-blue-500 dark:text-amber-500 cursor-pointer">
              Follow Me
            </h4>
            </div>
            <div className="flex items-center space-x-4">
              <a
                    href="https://www.facebook.com/umer.baig.167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white dark:border-gray-600 dark:text-gray-300"
                    >
                    <SlSocialFacebook size={20} />
              </a>

              <a
                    href="https://www.linkedin.com/in/muhammad-umar-hussain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-600 dark:text-gray-300"
                    >
                    <SlSocialLinkedin size={20} />
              </a>
              <a
                    href="https://youtube.com/@uzmvs2001?si=gsq8QiWfA38rZYtI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white dark:border-gray-600 dark:text-gray-300"
                    >
                    <FiYoutube size={20} />
              </a>
              <a
                    href="https://www.upwork.com/freelancers/~01e9f2371f481a2a33?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-green-700 text-green-700 hover:bg-green-700 hover:text-white dark:border-gray-600 dark:text-gray-300"
                    >
                    <SiUpwork  size={20} />
              </a>

                <a
                    href="https://github.com/MuhamadUmarHussain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white dark:border-gray-600 dark:text-gray-300"
                    >
                    <FiGithub size={20} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Umar Hussain. All Rights Reserved 
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Designed by Umar Hussain</p>
        </div>
      </div>
    </footer>
  );
}
