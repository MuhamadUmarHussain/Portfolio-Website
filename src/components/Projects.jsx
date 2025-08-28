import React, { useState, useEffect } from "react";
import Modal from "./Modal";

// Assets
import { Github } from "lucide-react";

import DashBoard from "../assets/Student Management System/Dashboard.png";
import AdminPannel from "../assets/Student Management System/AdminPannel.png";
import UserPannel from "../assets/Student Management System/UserPannel.png";
import UserData from "../assets/Student Management System/UserData.png";

import Signup from "../assets/Leave_Management_System/Signup.png";
import Login from "../assets/Leave_Management_System/Login.png";
import Dashboard from "../assets/Leave_Management_System/Dashboard.png";
import AddMember from "../assets/Leave_Management_System/Add Member.png";
import RemoveMember from "../assets/Leave_Management_System/RemoveMembers.png";
import TeamData from "../assets/Leave_Management_System/team data.png";

import Res1 from "../assets/Responsive/ResponsiveDesign1.png";
import Res2 from "../assets/Responsive/ResponsiveDesign2.png";
import Res3 from "../assets/Responsive/ResponsiveDesign3.png";

import AdminDashboard from "../assets/Hall Management System/AdminDashboard.png";
import BookingManagment from "../assets/Hall Management System/BookingManagment.png";
import HallManagment from "../assets/Hall Management System/HallManagment.png";
import ReportManagment from "../assets/Hall Management System/ReportManagment.png";
import ServicesDiscount from "../assets/Hall Management System/Services&Discount.png";
import UserManagement from "../assets/Hall Management System/UserManagement.png";
import UserDashboard from "../assets/Hall Management System/UserDashboard.png";
import Booking from "../assets/Hall Management System/Booking.png";
import FeedBack from "../assets/Hall Management System/FeedBack.png";
import Services from "../assets/Hall Management System/Services.png";
import Packages from "../assets/Hall Management System/Packages.png";
import Payments from "../assets/Hall Management System/Payments.png";

import Userpannel from "../assets/Digital Library/UserPannel.png";
import SearchBooks from "../assets/Digital Library/SearchBooks.png";
import BorrowedBooks from "../assets/Digital Library/BorrowedBooks.png";
import Adminpannel from "../assets/Digital Library/AdminPannel.png";
import AddBooks from "../assets/Digital Library/AddBooks.png";
import RemoveBooks from "../assets/Digital Library/RemoveBooks.png";
import Removemember from "../assets/Digital Library/RemoveMember.png";

import Main from "../assets/Youtube Comment Analyzer/Main.png";
import Features from "../assets/Youtube Comment Analyzer/Features.png";
import Working from "../assets/Youtube Comment Analyzer/Working.png";
import About from "../assets/Youtube Comment Analyzer/About.png";
import SignUp from "../assets/Youtube Comment Analyzer/Signup.png";
import LogIn from "../assets/Youtube Comment Analyzer/Login.png";
import Data from "../assets/Youtube Comment Analyzer/Data.jpg";

const projects = [
  {
    title: "Intelligent Youtube Comment Analyzer",
    category: "Python - Machine Learning",
    src: [Main, Features, Working, About, SignUp, LogIn, Data],
    github: "https://github.com/SM649/Intelligent-Youtube-Comment-Analyzer.git",
  },
  {
    title: "Break Management System",
    category: "Web App - PHP/MySql",
    src: [Signup, Login, Dashboard, AddMember, RemoveMember, TeamData],
    github: "https://github.com/MuhamadUmarHussain/Break_Management_System.git",
  },
  {
    title: "Responsive Web Design",
    category: "HTML/CSS/JS - Tailwind/Bootstrap",
    src: [Res1, Res2, Res3],
    github: "https://github.com/MuhamadUmarHussain/Responsive-Tailwind-design.git",
  },
  {
    title: "Student Management System",
    category: "Console App - DSA",
    src: [DashBoard, AdminPannel, UserPannel, UserData],
    github: "https://github.com/MuhamadUmarHussain/Student_Management_System_DSA.git",
  },
  {
    title: "Hall Management System",
    category: ".Net - Application",
    src: [
      AdminDashboard,
      BookingManagment,
      HallManagment,
      ReportManagment,
      ServicesDiscount,
      UserManagement,
      UserDashboard,
      Booking,
      FeedBack,
      Services,
      Packages,
      Payments,
    ],
    github: "https://github.com/MuhamadUmarHussain/Hall-Management-System---Front-End",
  },
  {
    title: "Digital Library",
    category: "Web App - PHP/MySql",
    src: [SearchBooks, Userpannel, BorrowedBooks, Adminpannel, AddBooks, RemoveBooks, Removemember],
    github: "https://github.com/MuhamadUmarHussain/Digital-Library.git",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const colSpanPattern = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2", "md:col-span-2", "md:col-span-1"];

  const handleCardClick = (proj) => {
    setSelectedProject(proj);
    setCurrentImg(0);
  };

  const handleClose = () => setSelectedProject(null);

  const handleNext = () =>
    setCurrentImg((prev) => (prev === selectedProject.src.length - 1 ? 0 : prev + 1));

  const handlePrev = () =>
    setCurrentImg((prev) => (prev === 0 ? selectedProject.src.length - 1 : prev - 1));

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
            My <span className="text-blue-600 dark:text-amber-500">Projects</span>
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
                    <h3 className="text-2xl font-semibold text-blue-600 dark:text-amber-600">{proj.title}</h3>
                    <p className="mt-2 text-sm text-black dark:text-white font-semibold">{proj.category}</p>
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
