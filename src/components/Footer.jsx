import React from "react";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-900 text-white flex flex-col items-center gap-4">
      <p className="text-sm opacity-75">
        © {new Date().getFullYear()} Mohammed Bilal. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a 
          href="https://www.linkedin.com/in/mohammed-bilal-23678328a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a 
          href="https://github.com/Mohammedbilal12345" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400 transition duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://www.hackerrank.com/profile/PES2UG23CS344" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-green-400 transition duration-300"
        >
          <FaHackerrank size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
