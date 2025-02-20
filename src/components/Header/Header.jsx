import civilcoLogo from "../../assets/Header/civilco.svg";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };


  return (
    <header className="text-white p-4">
      {/* Logo, Search Bar, and Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <img
            src={civilcoLogo}
            alt="CIVILCO Logo"
            className="w-[200px] md:w-[274.81px] h-auto"
          />
        </div>

        {/* Search Bar and Buttons */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative w-full md:w-[392px]">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full px-4 py-2 w-full h-[55px] focus:outline-none focus:ring-2 focus:ring-[#3B5F5D] placeholder-[#3B5F5D] placeholder:font-semibold text-[#3B5F5D]"
            />
            {/* Search Icon */}
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black">
              <FaSearch />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <button 
              onClick={handleLoginClick}
              className="bg-[#3B5F5D] text-white px-4 py-2 rounded-3xl font-semibold w-full sm:w-[160px] h-[65px] shadow-[6px_8px_16px_rgba(0,0,0,0.3)] hover:shadow-[8px_10px_20px_rgba(0,0,0,0.3)] transition duration-300 hover:bg-[#C28E21] transition duration-300 cursor-pointer"
            >
              Log in
            </button>
            <button 
            onClick={handleSignupClick}
            className="bg-[#3B5F5D] text-white px-4 py-2 rounded-3xl font-semibold w-full sm:w-[160px] h-[65px] shadow-[6px_8px_16px_rgba(0,0,0,0.3)] hover:shadow-[8px_10px_20px_rgba(0,0,0,0.3)] transition duration-300 hover:bg-[#C28E21] transition duration-300 cursor-pointer">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-15 mt-6">
        <a
          href="#"
          className="text-[#3B5F5D] hover:text-[#C28E21] text-[24px] md:text-[28px] font-bold transition duration-300 text-center relative group"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C28E21] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="text-[#3B5F5D] hover:text-[#C28E21] text-[24px] md:text-[28px] font-bold transition duration-300 text-center relative group"
        >
          Civils
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C28E21] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="text-[#3B5F5D] hover:text-[#C28E21] text-[24px] md:text-[28px] font-bold transition duration-300 text-center relative group"
        >
          Posts
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C28E21] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="text-[#3B5F5D] hover:text-[#C28E21] text-[24px] md:text-[28px] font-bold transition duration-300 text-center relative group"
        >
          Events
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C28E21] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="text-[#3B5F5D] hover:text-[#C28E21] text-[24px] md:text-[28px] font-bold transition duration-300 text-center relative group"
        >
          About Us
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C28E21] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>
    </header>
  );
};

export default Header;