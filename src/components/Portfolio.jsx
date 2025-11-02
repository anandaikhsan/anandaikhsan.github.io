import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { mockData } from '../mock';
import { Briefcase, Award, Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const { experience, skills, projects } = mockData;

  // Experience Tab Content
  const ExperienceContent = () => (
    <div className="experience-timeline">
      {experience.map((exp) => (
        <div key={exp.id} className="experience-item">
          <div className="experience-marker">
            <Briefcase size={20} />
          </div>
          
          <div className="experience-content">
            <div className="experience-header">
              <div>
                <h3 className="text-regular">{exp.position}</h3>
                <p className="label-small">{exp.company} • {exp.location}</p>
              </div>
              <span className="label-small exp-period">{exp.period}</span>
            </div>
            
            <p className="text-body exp-description">{exp.description}</p>
            
            <div className="achievements">
              <div className="label-small">KEY ACHIEVEMENTS</div>
              <ul className="achievement-list">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-body">
                    <Award size={16} className="achievement-icon" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Skills Tab Content
  const SkillsContent = () => {
    const SkillCategory = ({ title, skillList }) => (
      <div className="skill-category">
        <h3 className="label">{title}</h3>
        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="text-body">{skill.name}</span>
                <span className="label-small">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div className="skills-container">
        <SkillCategory title="PROGRAMMING LANGUAGES" skillList={skills.languages} />
        <SkillCategory title="FRAMEWORKS & LIBRARIES" skillList={skills.frameworks} />
        <SkillCategory title="DATABASES" skillList={skills.databases} />
        <SkillCategory title="TOOLS & PLATFORMS" skillList={skills.tools} />
      </div>
    );
  };

  // Projects Tab Content
  const ProjectsContent = () => (
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
  );

  return (
    <section className="section" id="portfolio">
      <div className="section-container">
        <div className="section-header">
          <div className="label">MY WORK</div>
          <h2 className="title-big">Portfolio</h2>
        </div>

        <Tabs defaultValue="experience" className="portfolio-tabs">
          <TabsList className="tabs-list">
            <TabsTrigger value="experience" className="tab-trigger">
              EXPERIENCE
            </TabsTrigger>
            <TabsTrigger value="skills" className="tab-trigger">
              SKILLS
            </TabsTrigger>
            <TabsTrigger value="projects" className="tab-trigger">
              PROJECTS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="tab-content">
            <ExperienceContent />
          </TabsContent>

          <TabsContent value="skills" className="tab-content">
            <SkillsContent />
          </TabsContent>

          <TabsContent value="projects" className="tab-content">
            <ProjectsContent />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
