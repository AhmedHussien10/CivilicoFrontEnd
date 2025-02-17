import logo from '../../assets/footerlogo/logo.svg';
import email from '../../assets/footerlogo/email.svg';
import whats from '../../assets/footerlogo/whats.svg';
import phone from '../../assets/footerlogo/phone.svg';
import facebook from '../../assets/footerlogo/facebook.svg';
import twitter from '../../assets/footerlogo/X.svg';
import instagram from '../../assets/footerlogo/instagram.svg';
import linkedin from '../../assets/footerlogo/linkedin.svg';

function Footer() {
    return (
        <footer className="bg-[#3B5F5D] py-12 md:py-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-start items-start space-y-8 md:space-y-0 md:space-x-16">
                {/* Logo Section */}
                <div className="image transform translate-y-[-10px]">
                    <img src={logo} alt="Footer logo" className="w-40 md:w-67 h-auto" />
                </div>

                {/* Contact Us Section */}
                <div className="text-white">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-2">
                            <img src={email} alt="Email Icon" className="w-5 h-5" />
                            <span>Civilcowebsite2024@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={whats} alt="WhatsApp Icon" className="w-5 h-5" />
                            <span>+1024588059</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={phone} alt="Phone Icon" className="w-5 h-5" />
                            <span>+1024588059</span>
                        </li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div className="text-white">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <ul className="flex space-x-6">
                        <li>
                            <img src={facebook} alt="Facebook" className="w-6 h-6 cursor-pointer" />
                        </li>
                        <li>
                            <img src={twitter} alt="Twitter" className="w-6 h-6 cursor-pointer" />
                        </li>
                        <li>
                            <img src={instagram} alt="Instagram" className="w-6 h-6 cursor-pointer" />
                        </li>
                        <li>
                            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Separator Line */}
            <div className="max-w-7xl mx-auto border-t border-white my-8 md:my-4"></div>

            {/* Copyright Section */}
            <div>
                <div className="container mx-auto text-center text-white">
                    <p className="text-sm mt-6 md:mt-10">
                        Copyright © 2024 Civilco Website | Developed By Faculty Of Science Students
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;