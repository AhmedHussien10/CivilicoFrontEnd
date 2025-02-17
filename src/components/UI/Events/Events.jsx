// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon
import lock from "../../../assets/Events/lock.jpg";
import peoples from "../../../assets/Events/peoples.jpg";
import talking from "../../../assets/Events/talking.jpg";

const UpcomingEvents = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div>
      {/* Full-width separation line */}
      <div
        className="w-screen h-1 mt-16 my-8" // Full width, margin top, and margin bottom
        style={{ backgroundColor: "#C28E21" }} // Use the specified color
      ></div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center text-center p-4 md:p-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 md:p-10">
          {/* Flex container for heading and colored div */}
          <div className="flex items-center justify-center mb-4">
            <h1
              className="text-2xl md:text-3xl font-semibold mr-2 md:mr-4"
              style={{ color: "#3B5F5D" }}
            >
              WHO WE ARE
            </h1>
            <div
              className="w-20 md:w-30 h-1 ml-2 md:ml-4"
              style={{ backgroundColor: "#C28E21" }}
            ></div>
          </div>

          {/* Additional Text */}
          <h2
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ fontWeight: 600 }}
          >
            Upcoming Events
          </h2>
        </div>

        {/* Three Containers */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
          {/* Container 1 */}
          <div
            className="border rounded-lg flex flex-col items-center overflow-hidden w-full md:w-1/3 relative group"
            style={{
              height: "420px",
              borderRadius: "20px",
              borderWidth: "3px",
              borderColor: "#3B5F5D",
            }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-1/2 overflow-hidden">
              <img
                src={lock}
                alt="Event 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div
              className="w-full h-1/2 flex gap-4 md:gap-10 justify-between items-center p-4 md:p-10 group-hover:h-[55%] transition-all duration-300"
              style={{
                backgroundColor: hoveredCard === 0 ? "#3B5F5D" : "#F0F0F0",
              }}
            >
              <div>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: hoveredCard === 0 ? "white" : "#C28E21" }}
                >
                  Sep
                </p>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: hoveredCard === 0 ? "white" : "#3B5F5D" }}
                >
                  18
                </p>
              </div>
              <div className="mr-4 md:mr-20 relative flex items-center">
                <div>
                  <p
                    className="text-2xl md:text-3xl font-semibold"
                    style={{ color: hoveredCard === 0 ? "white" : "black" }}
                  >
                    Hackathon
                  </p>
                  <p
                    className="text-lg md:text-xl font-medium"
                    style={{ color: hoveredCard === 0 ? "white" : "black" }}
                  >
                    HackerRank
                  </p>
                </div>
                {/* Arrow Icon */}
                <FaArrowRight
                  className={`ml-2 transition-all duration-300 ${
                    hoveredCard === 0
                      ? "translate-x-[calc(100%+20px)] opacity-100"
                      : "translate-x-0 opacity-0"
                  }`}
                  style={{ color: "white" }}
                />
              </div>
            </div>
          </div>

          {/* Container 2 */}
          <div
            className="border rounded-lg flex flex-col items-center overflow-hidden w-full md:w-1/3 relative group"
            style={{
              height: "420px",
              borderRadius: "20px",
              borderWidth: "3px",
              borderColor: "#3B5F5D",
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-1/2 overflow-hidden">
              <img
                src={peoples}
                alt="Event 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div
              className="w-full h-1/2 flex gap-4 md:gap-10 justify-between items-center p-4 md:p-10 group-hover:h-[55%] transition-all duration-300"
              style={{
                backgroundColor: hoveredCard === 1 ? "#3B5F5D" : "#F0F0F0",
              }}
            >
              <div>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: hoveredCard === 1 ? "white" : "#C28E21" }}
                >
                  Nov
                </p>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: hoveredCard === 1 ? "white" : "#3B5F5D" }}
                >
                  7
                </p>
              </div>
              <div className="mr-4 md:mr-20 relative flex items-center">
                <div>
                  <p
                    className="text-2xl md:text-3xl font-semibold"
                    style={{ color: hoveredCard === 1 ? "white" : "black" }}
                  >
                    Art Tour
                  </p>
                  <p
                    className="text-lg md:text-xl font-medium"
                    style={{ color: hoveredCard === 1 ? "white" : "black" }}
                  >
                    Location
                  </p>
                </div>
                {/* Arrow Icon */}
                <FaArrowRight
                  className={`ml-2 transition-all duration-300 ${
                    hoveredCard === 1
                      ? "translate-x-[calc(100%+20px)] opacity-100"
                      : "translate-x-0 opacity-0"
                  }`}
                  style={{ color: "white" }}
                />
              </div>
            </div>
          </div>

          {/* Container 3 */}
          <div
            className="border rounded-lg flex flex-col items-center overflow-hidden w-full md:w-1/3 relative group"
            style={{
              height: "420px",
              borderRadius: "20px",
              borderWidth: "3px",
              borderColor: "#3B5F5D",
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-1/2 overflow-hidden">
              <img
                src={talking}
                alt="Event 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div
              className="w-full h-1/2 flex gap-4 md:gap-10 justify-between items-center p-4 md:p-10 group-hover:h-[55%] transition-all duration-300"
              style={{
                backgroundColor: hoveredCard === 2 ? "#3B5F5D" : "#F0F0F0",
              }}
            >
              <div>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: hoveredCard === 2 ? "white" : "#C28E21" }}
                >
                  Oct
                </p>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: hoveredCard === 2 ? "white" : "#3B5F5D" }}
                >
                  18
                </p>
              </div>
              <div className="mr-4 md:mr-20 relative flex items-center">
                <div>
                  <p
                    className="text-2xl md:text-3xl font-semibold"
                    style={{ color: hoveredCard === 2 ? "white" : "black" }}
                  >
                    Language Day
                  </p>
                  <p
                    className="text-lg md:text-xl font-medium"
                    style={{ color: hoveredCard === 2 ? "white" : "black" }}
                  >
                    Location
                  </p>
                </div>
                {/* Arrow Icon */}
                <FaArrowRight
                  className={`ml-2 transition-all duration-300 ${
                    hoveredCard === 2
                      ? "translate-x-[calc(100%+20px)] opacity-100"
                      : "translate-x-0 opacity-0"
                  }`}
                  style={{ color: "white" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;