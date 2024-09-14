"use client"; // Client-side component
import { useState } from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { TfiMedallAlt } from "react-icons/tfi";
import { CiFileOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

import { IoClose } from "react-icons/io5"; // Close Icon

const Sidebar = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu toggle

  const handleClick = (index) => {
    setSelected(index);
    setIsOpen(false); // Collapse the sidebar when an item is clicked
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <>
      {/* Hamburger icon (shown on small screens) */}
      <div className="fixed top-14 left-6 z-50  lg:hidden">
        <button
          onClick={toggleSidebar}
          className="text-2xl text-black focus:outline-none"
        >
          {isOpen ? <IoClose /> : <FaArrowRight className="text-sm"/>}
        </button>
      </div>

      {/* Sidebar (visible on larger screens or when the hamburger is clicked) */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 p-4 bg-white border-r border-slate-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-1/5 lg:p-4 lg:pl-0 lg:border-r`}
      >
        <ul className="list-none p-0 m-0 max-[1100px]:mt-20">
          {["Dashboard", "Skill Test", "Internship"].map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)} // Collapse the sidebar when clicking an item
              className={`p-5 font-bold cursor-pointer rounded-l-lg rounded-r-full flex items-center text-black ${
                selected === index
                  ? "bg-gray-200 text-blue-500"
                  : "hover:bg-gray-100"
              }`}
            >
              {index === 0 ? (
                <BiSolidBarChartAlt2 className="mr-2 text-xl" />
              ) : index === 1 ? (
                <TfiMedallAlt className="mr-2 text-2xl" />
              ) : (
                <CiFileOn className="mr-2 text-xl" />
              )}
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (shows when the sidebar is open on small screens) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
