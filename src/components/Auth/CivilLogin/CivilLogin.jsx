import { FaArrowLeft, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import LoginImg from '../../../assets/LoginImg/LoginImg.svg';
import civilcoLogo from "../../../assets/Header/civilco.svg";
import InputField from '../InputFields/InputField';
import Button from '../CustomButton/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CivilLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
      };
    
    return (
        <div className="flex flex-col sm:flex-row lg:flex-row h-screen">
            {/* Left side */}
            <div className="w-full sm:w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-10 bg-white h-full">
                {/* Logo and Back Button */}
                <div className="flex items-center mb-4 lg:-mt-20 sm:mb-6">
                    <div className="flex items-center cursor-pointer text-[#3B5F5D] transform -translate-x-4 lg:-translate-x-8 sm:-translate-x-2">
                        <FaArrowLeft className="text-2xl mr-2" />
                        <span className="text-sm lg:text-lg font-bold underline p-2" onClick={handleBackClick}>Back</span>
                    </div>
                    <div className="ml-4 transform -translate-x-6 lg:-translate-x-10 sm:-translate-x-4">
                        <img src={civilcoLogo} alt="Logo" className="h-12 lg:h-16" />
                    </div>
                </div>

                {/* Log in Heading */}
                <div>
                    <h2 className="text-2xl lg:text-3xl text-center mb-4 text-black">Log in As Civil Project</h2>
                </div>

                {/* Input Fields Container */}
                <div className="w-full max-w-md">
                    {/* Email Input Field */}
                    <div className="mb-4 relative">
                        <InputField
                            placeholder="Email"
                            type="email"
                            className="w-full pl-3 pr-10"  // Add padding for the icon
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-gray-400" />
                        </div>
                    </div>

                    {/* Password Input Field */}
                    <div className="mb-4 relative">
                        <InputField
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            className="w-full pl-3 pr-10"  // Add padding for the icon
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                        </div>
                    </div>

                    {/* Forgot Password Button */}
                    <div className="text-left mt-2">
                        <button className="text-xs lg:text-sm text-blue-500 hover:text-blue-600 focus:outline-none cursor-pointer underline">
                            Forgot Password?
                        </button>
                    </div>
                </div>

                {/* Login Button */}
                <div className="w-full max-w-md mt-6">
                    <Button
                        text="LOG IN"
                        onClick={() => {
                            // Add your login logic here
                        }}
                        className="w-full bg-[#3B5F5D] text-white py-3 rounded-lg cursor-pointer font-bold"
                    />
                </div>

                {/* Black Line Separator */}
                <div className="w-full max-w-md border-t border-black my-6"></div>

                {/* Don't have an account? and Sign Up Button */}
                <div className="w-full max-w-md text-center">
                    <p className="text-black font-bold mb-2">Don’t have an account?</p>
                    <Button
                        text="SIGN UP"
                        onClick={() => {
                            // Add your sign-up logic here
                        }}
                        className="w-full bg-[#3B5F5D] text-white py-3 rounded-lg cursor-pointer font-bold mt-6"
                    />
                </div>

            </div>

            {/* Right side with image */}
            <div className="hidden lg:block sm:hidden w-full lg:w-1/2 bg-gray-200 flex justify-center items-center">
                <div className="w-full h-full max-w-full overflow-hidden">
                    <img src={LoginImg} alt="Background" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default CivilLogin;