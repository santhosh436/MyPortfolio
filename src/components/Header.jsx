import React, { useState } from 'react';
import '../App.css'; // Import Tailwind CSS

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 fixed z-10 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="w-full flex items-center justify-center sm:items-stretch sm:justify-around">
            <div className="flex-shrink-0">
              <a href="/" className="text-white mx-20 sm:mx-0 text-2xl font-bold font-poppins">Santhosh_Modi</a>
            </div>
            <div className="hidden sm:flex sm:justify-between sm:ml-6">
              <div className="flex space-x-4 font-poppins">
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-lg font-medium">Home</a>
                <a href="/#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-lg font-medium">About</a>
                <a href="/#services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-lg font-medium">Services</a>
                <a href="/#experience" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-lg font-medium">Experience</a>
                <a href="/#education" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-lg font-medium">Education</a>
              </div>
              <div>
                <button className='w-28 h-9 rounded-lg shadow-md shadow-black bg-orange-500 font-semibold font-poppins mr-5 '><a href="/portfolio">Portfolio</a></button>
                <button className='w-28 h-9 rounded-lg shadow-md shadow-black bg-orange-500 font-semibold font-poppins '><a href="/contact">Contact Me</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Home</a>
          <a href="#about" className= "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu} >About</a>
          <a href="#services" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Services</a>
          <a href="#experience" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Experience</a>
          <a href="#education" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu} >Education</a>
          <div className='flex flex-col'>
                <button className='w-28 h-9 rounded-lg shadow-md shadow-black bg-orange-500 font-semibold font-poppins mr-5 mb-3 sm:mb-0 '><a href="/portfolio">Portfolio</a></button>
                <button className='w-28 h-9 rounded-lg shadow-md shadow-black bg-orange-500 font-semibold font-poppins '><a href="/contact">Contact Me</a></button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;
