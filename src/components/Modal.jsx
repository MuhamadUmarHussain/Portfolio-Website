import React from "react";
import { Github } from "lucide-react";

export default function Modal({ selectedProject, currentImg, handleClose, handleNext, handlePrev }) {
  if (!selectedProject) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 
                 motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] 
                 motion-opacity-in-[0%] motion-rotate-in-[-25deg] motion-blur-in-[5px] 
                 motion-duration-[0.35s] motion-duration-[0.53s]/scale 
                 motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-r from-green-100 via-gray-200 to-blue-100 
                   dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
                   backdrop-blur-md border border-black dark:border-white 
                   rounded-xl shadow-lg w-full max-w-[95%] md:max-w-3xl 
                   relative p-6 max-h-[90vh] overflow-y-auto"
      >

        {/* Image Gallery */}
        <div className="relative">
          <img
            src={selectedProject.src[currentImg]}
            alt={selectedProject.title}
            className="w-full max-h-72 md:max-h-96 object-contain rounded-lg"
          />
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white px-3 py-1 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white px-3 py-1 rounded-full"
          >
            ›
          </button>
        </div>

        {/* Title & Category */}
        <div className="text-center mt-4">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-amber-500">
            {selectedProject.title}
          </h3>
          <p className="text-black dark:text-white font-semibold text-sm md:text-base">
            {selectedProject.category}
          </p>
        </div>

        {/* GitHub Button */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent hover:bg-gray-800 
                       border border-black text-black hover:text-white 
                       dark:text-white px-6 py-2 rounded-full transition"
          >
            <span className="text-sm">GitHub</span> <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
