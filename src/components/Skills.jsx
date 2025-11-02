import React from 'react';
import { mockData } from '../mock';

const Skills = () => {
  const { skills } = mockData;

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
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <div className="label">WHAT I DO</div>
          <h2 className="title-big">Technical Skills</h2>
        </div>

        <div className="skills-container">
          <SkillCategory title="PROGRAMMING LANGUAGES" skillList={skills.languages} />
          <SkillCategory title="FRAMEWORKS & LIBRARIES" skillList={skills.frameworks} />
          <SkillCategory title="DATABASES" skillList={skills.databases} />
          <SkillCategory title="TOOLS & PLATFORMS" skillList={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
