// import React, {useState} from 'react';
// import './navigation.css';
// import { AiOutlineBars, AiOutlineClose, AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillMail } from "react-icons/ai";

// const Navigation = () => {
//   const [menuNav, setMenuNav] = useState(false);

//   const showMenu = () => setMenuNav(!menuNav);

//   return (
//     <div className='navContainer'>
//       <div className='logo'>
//         <span><code><a href='#welcome'>Aneal Laryea</a></code></span>
//       </div>

//         <div className='navLinks'>
//             <ul className='navlists'>
//                 <li><a href='#welcome'>Home</a></li>
//                 <li><a href='#projects'>Projects</a></li>
//                 <li><a href='#aboutme'>About</a></li>
//                 <li><a href='#contact'>Contact</a></li>
//             </ul>
//             <button type='button' className='toggleMenuIcon' onClick={showMenu}><AiOutlineBars className='navIcon' /></button>
//               {menuNav && (

//                 <ul className='navlistsToggle'>
//                   <button type='button' className='toggleMenuIconClose' onClick={showMenu}><AiOutlineClose className='navIconClose' /></button>
//                     <li><a href='#welcome' onClick={showMenu}>Home</a></li>
//                     <li><a href='#projects' onClick={showMenu}>Projects</a></li>
//                     <li><a href='#aboutme' onClick={showMenu}>About</a></li>
//                     <li><a href='#contact' onClick={showMenu}>Contact</a></li>
//                     <div className='btntoggleContainer'>
//                       <button type="button" className="toggleIcon"><a href="https://twitter.com/AnealLaryea" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a></button>
//                       <button type="button" className="toggleIcon"><a href="https://www.linkedin.com/in/niianeal/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></button>
//                       <button type="button" className="toggleIcon"><a href="https://github.com/aneallaryea100" target="_blank" rel="noreferrer"><AiFillGithub /></a></button>
//                       <button type="button" className="toggleIcon"><a href="mailto:aneallaryea100@gmail.com" target="_blank" rel="noreferrer"><AiFillMail /></a></button>
//                     </div>
//                 </ul>

//               )}
//         </div>
//     </div>
//   )
// }

// export default Navigation;

import React, { useState } from "react";
import {
  AiOutlineBars,
  AiOutlineClose,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

const Navigation = () => {
  const [menuNav, setMenuNav] = useState(false);

  const toggleMenu = () => setMenuNav(!menuNav);

  const navLinks = [
    { href: "#welcome", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#aboutme", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: <AiOutlineTwitter />, href: "https://twitter.com/AnealLaryea" },
    { icon: <AiFillLinkedin />, href: "https://www.linkedin.com/in/niianeal/" },
    { icon: <AiFillGithub />, href: "https://github.com/aneallaryea100" },
    { icon: <AiFillMail />, href: "mailto:aneallaryea100@gmail.com" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#welcome"
              className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Derick Akaho
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {menuNav ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuNav && (
          <div className="md:hidden fixed inset-0 bg-white z-40">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                >
                  <AiOutlineClose className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col space-y-6 px-6 py-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-auto p-6">
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-700 hover:text-indigo-600 transition-colors text-2xl"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
