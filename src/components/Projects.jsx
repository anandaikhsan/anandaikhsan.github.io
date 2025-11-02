import React from 'react';
import { mockData } from '../mock';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const { projects } = mockData;

  return (
    <section className="section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <div className="label">SELECTED WORK</div>
          <h2 className="title-big">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="project-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className="project-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="text-regular">{project.title}</h3>
                <p className="text-body project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="label-small tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
