import React from 'react';
import { mockData } from '../mock';
import { Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const { experience } = mockData;

  return (
    <section className="section" id="experience">
      <div className="section-container">
        <div className="section-header">
          <div className="label">MY JOURNEY</div>
          <h2 className="title-big">Work Experience</h2>
        </div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
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
      </div>
    </section>
  );
};

export default Experience;
