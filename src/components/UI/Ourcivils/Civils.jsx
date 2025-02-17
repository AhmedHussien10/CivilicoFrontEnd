// eslint-disable-next-line no-unused-vars
import React from 'react';
import safwa from '../../../assets/Civilsicon/Safwa.svg';
import hacker from '../../../assets/Civilsicon/Hacker.svg';
import broca from '../../../assets/Civilsicon/Broca.svg';
import org from '../../../assets/Civilsicon/Org.svg';
import semi from '../../../assets/Civilsicon/Semicolon.svg';
// import upgrade from '../../../assets/Civilsicon/Upgrade.svg';
import upgrade from "../../../assets/Civilsicon/upgrade.svg";
import { MdPostAdd } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";

const Civils = () => {
  return (
    <div className="flex flex-col items-center p-5">
      {/* Container with border, background color, and text */}
      <div className="w-full border-4 border-[#3B5F5D] bg-[#EEEEEE] rounded-2xl p-6">
        {/* Text inside the container */}
        <div className="text-center text-lg font-bold text-[#3B5F5D] mb-8">
          Join our civil work projects now
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Smaller images with hover effect and no border */}
          <div className="flex justify-center items-center">
            <img 
              src={safwa} 
              alt="Project 1" 
              className="w-50 h-50 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-0 outline-none" 
            />
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={hacker} 
              alt="Project 2" 
              className="w-50 h-50 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-0 outline-none" 
            />
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={org} 
              alt="Project 3" 
              className="w-50 h-50 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-0 outline-none" 
            />
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={broca} 
              alt="Project 4" 
              className="w-50 h-50 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-0 outline-none" 
            />
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={semi} 
              alt="Project 5" 
              className="w-50 h-50 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-0 outline-none" 
            />
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={upgrade} 
              alt="Project 6" 
              className="w-50 h-50 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-0 outline-none" 
            />
          </div>
        </div>
      </div>

      {/* New div with 3 icons and text - Placed outside the bordered container */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 w-full max-w-4xl px-6 gap-16">
        {/* First icon with text */}
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <div className="flex items-center">
            <FaRegSmile className="w-20 h-20 text-[#3B5F5D] hover:rotate-y-180 transition-transform duration-500 ease-in-out" /> {/* Added hover effect */}
            <span className="ml-6 text-[#C28E21] font-bold text-3xl">600+</span>
          </div>
          <p className="mt-4 text-center text-[#3B5F5D] font-medium text-l">
            Satisfied Volunteers around Alexandria.
          </p>
          {/* Line under the first icon */}
          <div
            className="w-50 h-1.5 mt-4"
            style={{ backgroundColor: '#C28E21' }}
          ></div>
        </div>

        {/* Second icon with text */}
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <div className="flex items-center">
            <MdPostAdd className="w-20 h-20 text-[#3B5F5D] hover:rotate-y-180 transition-transform duration-500 ease-in-out" /> {/* Added hover effect */}
            <span className="ml-6 text-[#C28E21] font-bold text-3xl">330+</span>
          </div>
          <p className="mt-4 text-center text-[#3B5F5D] font-medium text-l">
            Total Posts done by all Civils in one year.
          </p>
          {/* Line under the second icon */}
          <div
            className="w-50 h-1.5 mt-4"
            style={{ backgroundColor: '#C28E21' }}
          ></div>
        </div>

        {/* Third icon with text */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <BsCalendarEvent className="w-20 h-20 text-[#3B5F5D] hover:rotate-y-180 transition-transform duration-500 ease-in-out" /> {/* Added hover effect */}
            <span className="ml-6 text-[#C28E21] font-bold text-3xl">20+</span>
          </div>
          <p className="mt-4 text-center text-[#3B5F5D] font-medium text-l">
            Successful Events done in one year.
          </p>
          {/* Line under the third icon */}
          <div
            className="w-50 h-1.5 mt-4"
            style={{ backgroundColor: '#C28E21' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Civils;