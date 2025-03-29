import React, { useState } from "react";
import projectData from "../../data/projectData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const openLink = (link, event) => {
    event.stopPropagation();
    window.open(link, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-110"
                />
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-indigo-600 bg-opacity-70 flex items-center justify-center space-x-4 transition-all duration-300">
                    {project.livedemo && (
                      <button
                        onClick={(e) => openLink(project.livedemo, e)}
                        className="bg-white text-indigo-600 p-3 rounded-full hover:bg-indigo-100 transition-colors"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </button>
                    )}
                    {project.github && (
                      <button
                        onClick={(e) => openLink(project.github, e)}
                        className="bg-white text-indigo-600 p-3 rounded-full hover:bg-indigo-100 transition-colors"
                        title="GitHub Repository"
                      >
                        <FaGithub />
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
