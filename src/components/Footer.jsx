import React from 'react';
import { FaGithub,FaLinkedin,FaFacebook,FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" border-t-2 border-orange-400 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* First Column: Profile Picture and Contact Info */}
        <div className="hidden sm:flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <img
              src="./images/ProfileJpg.png"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="text-lg font-semibold">Santhosh Modi</h4>
            </div>
          </div>
          <p><span className='text-orange-300'>Email:</span> santhoshmodi051@gmail.com</p>
          <p><span className='text-orange-300'>Phone:</span> 9701724657</p>
        </div>

        {/* Second Column: Feedback Form */}
        <div className="flex sm:flex-col items-center flex-wrap md:items-start">
          <h4 className="text-lg font-semibold mb-2 sm:mb-4">Feedback</h4>
          <input
            type="text"
            placeholder="Your feedback"
            className="w-full p-2 mb-2 text-black rounded-md bg-transparent border-2 outline-none border-orange-400"
          />
          <button className="bg-orange-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
            Send
          </button>
        </div>

        {/* Third Column: Social Icons */}
        <div className="flex flex-col items-center md:items-center ">
          <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            <a href="https://github.com/santhosh436" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-orange-400 text-3xl' />
            </a>
            <a href="https://linkedin.com/in/santhosh-modi01" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-orange-400 text-3xl' />
            </a>
            <a href="https://www.instagram.com/mystery____lover____" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='text-orange-400 text-3xl' />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-gray-500">© 2024 All rights reserved by Santhosh Modi</p>
      </div>
    </footer>
  );
};

export default Footer;
