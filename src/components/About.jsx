import React from 'react';
import { mockData } from '../mock';
import { MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  const { personal, education } = mockData;

  return (
    <section className="section" id="about">
      <div className="section-container">
        <div className="section-header">
          <div className="label">WHO I AM</div>
          <h2 className="title-big">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <p className="text-body">{personal.bio}</p>
            
            <div className="about-info">
              <div className="info-item">
                <MapPin size={18} className="info-icon" />
                <span className="text-body">{personal.location}</span>
              </div>
              <div className="info-item">
                <Mail size={18} className="info-icon" />
                <span className="text-body">{personal.email}</span>
              </div>
              <div className="info-item">
                <Phone size={18} className="info-icon" />
                <span className="text-body">{personal.phone}</span>
              </div>
            </div>
          </div>

          <div className="education-section">
            <div className="label-small">EDUCATION</div>
            <div className="education-list">
              {education.map((edu) => (
                <div key={edu.id} className="education-card">
                  <div className="education-header">
                    <div>
                      <h3 className="text-regular">{edu.degree}</h3>
                      <p className="label-small">{edu.institution}</p>
                    </div>
                    <span className="label-small">{edu.period}</span>
                  </div>
                  <p className="text-body education-desc">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
