import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import './detailProject.css';

function DetailProject({ project, onClose }) {
  return (
    <div className="detailwrapper">
    <div className='detailContainer'>
        <div className="detailedProjectName">
          <div className="returnIcon">
            <button onClick={onClose} className="closeIconDetail"><AiFillCloseCircle className="closeIconDetail"/></button>
          </div>
            <h1 className="detailedProjectNameHead">{project.name}</h1>
        </div>
    <div className="imageWithInfo">
      <div className="detailedImage">
        <img src={project.image} alt={project.name} className='imagedetailsView'/>
      </div>
      <div className="detailedInfo">
        <div className="detailedDescription">
            <p className="detailedParagraph">{project.description}</p>
        </div>
        <div className="detailedTech">
          {
              project.technologies.map((tech) => {
              return <span className="techListDetailed">{tech}</span>
          })}
        </div>
        <div className="detailedButtoncontainer">
            <button className="detailedButton"><a href={project.livedemo} target="_blank" rel="noreferrer" className="linkbtnlive">Live Demo</a></button>
            <button className="detailedButton"><a href={project.github} target="_blank" rel="noreferrer" className="linkbtnlive">View Project</a></button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default DetailProject;
