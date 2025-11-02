import React from 'react';
import { mockData } from '../mock';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const { personal } = mockData;

  return (
    <section className="hero-section" id="hero">
      <div className="grid-background"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="label-small">BACKEND DEVELOPER</div>
          <h1 className="hero-title">{personal.name}</h1>
          <p className="text-big">{personal.tagline}</p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn-accent">Get in Touch</a>
            <a href="#projects" className="btn-primary">View Projects</a>
          </div>

          <div className="hero-links">
            <a href={personal.social?.github || '#'} className="hero-link" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href={personal.social?.linkedin || '#'} className="hero-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personal.email}`} className="hero-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
