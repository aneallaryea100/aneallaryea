import React, { useState } from 'react'
import './projects.css'
import projectData from '../../data/projectData'
import DetailProject from '../detailedProject/detailProject';

function Projects() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = project => {
        setModalOpen(true);
        setSelectedProject(project);
      };
    
      const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
      };

  return (
    <div className='projectsContainer' id='projects'>
        <h2 className='headProject'><code>Below are my recent works </code></h2>

        <div className='listprojectContainer'>
            {
                projectData.map((project) => {
                   
                    return<div className='projectCard' key={project.id}>
                    <div className='projectImage'>
                        <img src={project.image} alt={project.name} className='realImage'/>
                    </div>
                    <div className='projectDescription'>
                        <h5 className='projectName'>{project.name}</h5>
                        <ul className='projectTech'>
                            {
                                project.technologies.map((tech) => {
                                    return <li className='techProject'>{tech}</li>
                                })
                            }
                        </ul>
                        <button className='btnDetails bg-black text-white' type='button' key={project.id} onClick={() => openModal(project)}>Details</button>
                    </div>
                </div>
                })
            }
            {modalOpen && (
                    <DetailProject project={selectedProject} onClose={closeModal} />
                  )}
        
        </div>
      
    </div>
  )
}

export default Projects
