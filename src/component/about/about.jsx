import React from 'react';
import './about.css';
import img1 from '../../images/niinii.jpg';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function About() {
  return (
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
          </p>
           <div className="btnaboutContainer">
            <button type="button" className="aboutCv talkbtn">Curriculum vitae📃</button>
            <button type="button" className="aboutIcon talkbtn"><AiOutlineTwitter /></button>
            <button type="button" className="aboutIcon talkbtn"><AiFillLinkedin /></button>
            <button type="button" className="aboutIcon talkbtn"><AiFillGithub /></button>
            <button type="button" className="aboutIcon talkbtn"><AiFillMail /></button>
          </div>
      </div>
    </div>
  )
}

export default About;
