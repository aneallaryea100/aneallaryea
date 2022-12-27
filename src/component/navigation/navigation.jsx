import React, {useState} from 'react';
import './navigation.css';
import { AiOutlineBars, AiOutlineClose, AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Navigation = () => {
  const [menuNav, setMenuNav] = useState(false);

  const showMenu = () => setMenuNav(!menuNav);

  return (
    <div className='navContainer'>
      <div className='logo'>
        <span><code><a href='#welcome'>Aneal Laryea</a></code></span>
      </div>

        <div className='navLinks'>
            <ul className='navlists'>
                <li><a href='#welcome'>Home</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#aboutme'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <button type='button' className='toggleMenuIcon' onClick={showMenu}><AiOutlineBars className='navIcon' /></button>
              {menuNav && (
                
                <ul className='navlistsToggle'>
                  <button type='button' className='toggleMenuIconClose' onClick={showMenu}><AiOutlineClose className='navIconClose' /></button>
                    <li><a href='#welcome' onClick={showMenu}>Home</a></li>
                    <li><a href='#projects' onClick={showMenu}>Projects</a></li>
                    <li><a href='#aboutme' onClick={showMenu}>About</a></li>
                    <li><a href='#contact' onClick={showMenu}>Contact</a></li>
                    <div className='btntoggleContainer'>
                      <button type="button" className="toggleIcon"><a href="https://twitter.com/AnealLaryea" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a></button>
                      <button type="button" className="toggleIcon"><a href="https://www.linkedin.com/in/niianeal/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></button>
                      <button type="button" className="toggleIcon"><a href="https://github.com/aneallaryea100" target="_blank" rel="noreferrer"><AiFillGithub /></a></button>
                      <button type="button" className="toggleIcon"><a href="mailto:aneallaryea100@gmail.com" target="_blank" rel="noreferrer"><AiFillMail /></a></button>
                    </div>
                </ul>
              
                
              )}
        </div>
    </div>
  )
}

export default Navigation;
