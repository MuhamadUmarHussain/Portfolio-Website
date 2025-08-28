import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Intelligent Youtube Comment Analyzer",
    category: "Python - Machine Learning",
    src: [
      "/Youtube-Comment-Analyzer/Main.PNG",
      "/Youtube-Comment-Analyzer/Features.PNG",
      "/Youtube-Comment-Analyzer/Working.PNG",
      "/Youtube-Comment-Analyzer/About.PNG",
      "/Youtube-Comment-Analyzer/Signup.png",
      "/Youtube-Comment-Analyzer/Login.png",
      "/Youtube-Comment-Analyzer/Data.jpg",
    ],
    github: "https://github.com/SM649/Intelligent-Youtube-Comment-Analyzer.git",
  },
  {
    title: "Break Management System",
    category: "Web App - PHP/MySql",
    src: [
      "/Leave-Management-System/Signup.PNG",
      "/Leave-Management-System/Login.PNG",
      "/Leave-Management-System/Dashboard.PNG",
      "/Leave-Management-System/Add Member.PNG",
      "/Leave-Management-System/RemoveMembers.PNG",
      "/Leave-Management-System/team data.PNG",
    ],
    github: "https://github.com/MuhamadUmarHussain/Break_Management_System.git",
  },
  {
    title: "Responsive Web Design",
    category: "HTML/CSS/JS - Tailwind/Bootstrap",
    src: [
      "/Responsive/ResponsiveDesign1.PNG",
      "/Responsive/ResponsiveDesign2.PNG",
      "/Responsive/ResponsiveDesign3.PNG",
    ],
    github: "https://github.com/MuhamadUmarHussain/Responsive-Tailwind-design.git",
  },
  {
    title: "Student Management System",
    category: "Console App - DSA",
    src: [
      "/Student-Management-System/Dashboard.PNG",
      "/Student-Management-System/AdminPannel.PNG",
      "/Student-Management-System/UserPannel.PNG",
      "/Student-Management-System/UserData.PNG",
    ],
    github: "https://github.com/MuhamadUmarHussain/Student_Management_System_DSA.git",
  },
  {
    title: "Hall Management System",
    category: ".Net - Application",
    src: [
      "/Hall-Management-System/AdminDashboard.PNG",
      "/Hall-Management-System/BookingManagment.PNG",
      "/Hall-Management-System/HallManagment.PNG",
      "/Hall-Management-System/ReportManagment.PNG",
      "/Hall-Management-System/Services&Discount.PNG",
      "/Hall-Management-System/UserManagement.PNG",
      "/Hall-Management-System/UserDashboard.PNG",
      "/Hall-Management-System/Booking.PNG",
      "/Hall-Management-System/FeedBack.PNG",
      "/Hall-Management-System/Services.PNG",
      "/Hall-Management-System/Packages.PNG",
      "/Hall-Management-System/Payments.PNG",
    ],
    github: "https://github.com/MuhamadUmarHussain/Hall-Management-System---Front-End",
  },
  {
    title: "Digital Library",
    category: "Web App - PHP/MySql",
    src: [
      "/Digital-Library/SearchBooks.png",
      "/Digital-Library/UserPannel.png",
      "/Digital-Library/BorrowedBooks.png",
      "/Digital-Library/AdminPannel.png",
      "/Digital-Library/AddBooks.png",
      "/Digital-Library/RemoveBooks.png",
      "/Digital-Library/RemoveMember.png",
    ],
    github: "https://github.com/MuhamadUmarHussain/Digital-Library.git",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const colSpanPattern = [
    "md:col-span-2",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-1",
  ];

  const handleCardClick = (proj) => {
    setSelectedProject(proj);
    setCurrentImg(0);
  };

  const handleClose = () => setSelectedProject(null);

  const handleNext = () =>
    setCurrentImg((prev) =>
      prev === selectedProject.src.length - 1 ? 0 : prev + 1
    );

  const handlePrev = () =>
    setCurrentImg((prev) =>
      prev === 0 ? selectedProject.src.length - 1 : prev - 1
    );

  // 🔑 Keyboard navigation
  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <section
        id="projects"
        className="py-20 bg-gradient-to-r from-green-100 via-gray-200 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            My{" "}
            <span className="text-blue-600 dark:text-amber-500">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => {
              const colSpanClass = colSpanPattern[idx] || "md:col-span-1";

              return (
                <div
                  key={idx}
                  className={`relative group overflow-hidden rounded-lg cursor-pointer ${colSpanClass}`}
                  onClick={() => handleCardClick(proj)}
                >
                  <img
                    src={proj.src[0]}
                    alt={proj.title}
                    className="w-full h-34 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gray-950/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4">
                    <h3 className="text-2xl font-semibold text-blue-600 dark:text-amber-600">
                      {proj.title}
                    </h3>
                    <p className="mt-2 text-sm text-black dark:text-white font-semibold">
                      {proj.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🔥 Modal rendered outside project grid */}
      <Modal
        selectedProject={selectedProject}
        currentImg={currentImg}
        handleClose={handleClose}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
}
