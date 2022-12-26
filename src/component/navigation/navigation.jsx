import React from 'react';
import './navigation.css';
import { AiOutlineBars } from "react-icons/ai";

const Navigation = () => {
  return (
    <div className='navContainer'>
      <div className='logo'>
        <span><code>Aneal Laryea</code></span>
      </div>

        <div className='navLinks'>
            <ul className='navlists'>
                <li><a href='#'>Home</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#aboutme'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <AiOutlineBars className='navIcon' />
        </div>
    </div>
  )
}

export default Navigation;
