import React from "react";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-indigo-50 py-8 px-4 sm:px-6 lg:px-8 border-t border-indigo-100">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-indigo-800 font-medium text-sm">
            Designed & Built by Aneal Laryea
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="mailto:aneallaryea100@gmail.com"
            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
            aria-label="Email"
          >
            <AiOutlineMail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/aneallaryea100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
            aria-label="GitHub"
          >
            <AiOutlineGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/niianeal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/AnealLaryea"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
            aria-label="Twitter"
          >
            <AiOutlineTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
