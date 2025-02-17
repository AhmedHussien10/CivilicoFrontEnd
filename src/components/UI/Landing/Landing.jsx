import landing from '../../../assets/Landingimg/Landing.svg';
import { useEffect, useState } from 'react';

function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="w-full min-h-screen relative"
      style={{ 
        backgroundImage: `url(${landing})`, 
        backgroundSize: 'cover', // Cover the container while maintaining aspect ratio
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Text Section */}
      <div className="absolute top-10 left-5 sm:top-20 sm:left-20 p-4">
        {/* First Line: WELCOME TO CIVILCO */}
        <div className="flex items-center">
          <p className="text-white text-sm sm:text-base md:text-lg font-bold"> {/* Responsive font size */}
            WELCOME TO CIVILCO
          </p>
          {/* Small Horizontal Line */}
          <div 
            className="w-20 sm:w-30 h-1 ml-2 sm:ml-4" 
            style={{ backgroundColor: '#C28E21' }} // Use the specified color
          ></div>
        </div>
        {/* Second Line: CIVILICO */}
        <p 
          className={`text-white mt-6 sm:mt-10 text-3xl sm:text-5xl md:text-6xl font-bold transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
        >
          CIVILCO
        </p>
        {/* Description */}
        <p 
          className={`text-white mt-6 sm:mt-12 text-sm sm:text-lg md:text-xl font-bold max-w-xs sm:max-w-md transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
        >
          Is online platform used to connect multiple civil projects to make it easy for volunteers to join their favorite civil work projects.
        </p>
      </div>
    </div>
  );
}

export default Landing;