import React from 'react';
import './about.css';
import img1 from '../../images/niinii.jpg';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function About() {
  return (
    <div>
    <div className='aboutContainer' id='aboutme'>
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

          <a href="/path/to/my-cv.pdf" target="_blank" download="My CV.pdf" className='cvlink'>
              Curriculum vitae📃
          </a>
      </div>
    </div>
    <div className="btnaboutContainer">
            <button type="button" className="aboutIcon"><AiOutlineTwitter /></button>
            <button type="button" className="aboutIcon"><AiFillLinkedin /></button>
            <button type="button" className="aboutIcon"><AiFillGithub /></button>
            <button type="button" className="aboutIcon"><AiFillMail /></button>
      </div>
    </div>
  )
}

export default About;
