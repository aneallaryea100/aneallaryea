import React from 'react'
import './projects.css'
import projectData from '../../data/projectData'

function Projects() {
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
                        <button className='btnDetails' type='button'>Details</button>
                    </div>
                </div>
                })
            }
        
        </div>
      
    </div>
  )
}

export default Projects
