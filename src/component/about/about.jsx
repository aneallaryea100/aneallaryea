import React from 'react';
import './about.css';
import img1 from '../../images/niinii.jpg';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function About() {
  return (
    <div>
    <div className='aboutContainer' id='aboutme'>
    <h1 className='amoutmesmallscreen'><code>About me</code></h1>
      <div className='aboutPersonality'>
        <img className='imgpersonality' src={img1} alt='aneal laryea' />
      </div>
      <div className='linethrough'></div>
      <div className='aboutDescription'>
        <h1 className='amoutme'><code>About me</code></h1>
        <p>
          Hello, my name is Aneal Laryea.
          I'm a full-stack web developer  based in Accra, Ghana.
           I specialize in building exceptional websites, applications, and bringing ideas to life 💡.
           I'm also passionate about afro-beats music 🎶 and I'm always curious to learn more when it comes to new 
           technologies  and creative coding 👾.
           <br />
           <span className='ppp'>Here are a few technologies I've been working with recently:</span>
          </p>
          <div className='listtechContainer'>
          <ul className='litstech'>
            <li className='aboutList'>JavaScript (ES6+)</li>
            <li className='aboutList'>React</li>
            <li className='aboutList'>Redux</li>
          </ul>
          <ul className='litstech'>
            <li className='aboutList'>Ruby</li>
            <li className='aboutList'>PostgresSQL</li>
            <li className='aboutList'>MySQL</li>
          </ul>
          </div>

          <a href="https://docs.google.com/document/d/13TzaREufesZA7KSEc-5XRk5xl2ltWEwOckuljC9Z6Kg/edit?usp=sharing" target="_blank" download="Aneallaryea.pdf" className='cvlink'  rel='noreferrer'>
              Resume📃
          </a>
      </div>
    </div>
    <div className="btnaboutContainer">
            <button type="button" className="aboutIcon"><a href="https://twitter.com/AnealLaryea" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a></button>
            <button type="button" className="aboutIcon"><a href="https://www.linkedin.com/in/niianeal/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></button>
            <button type="button" className="aboutIcon"><a href="https://github.com/aneallaryea100" target="_blank" rel="noreferrer"><AiFillGithub /></a></button>
            <button type="button" className="aboutIcon"><a href="mailto:aneallaryea100@gmail.com" target="_blank" rel="noreferrer"><AiFillMail /></a></button>
      </div>
    </div>
  )
}

export default About;
