import React from 'react';
import { mockData } from '../mock';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const { personal, social } = mockData;

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="header-logo">Ananda Ikhsan</div>
            <p className="text-body footer-text">
              Let's build something amazing together.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="label-small">CONTACT</h4>
              <a href={`mailto:${personal.email}`} className="footer-link text-body">
                {personal.email}
              </a>
              <p className="footer-link text-body">{personal.phone}</p>
              <p className="footer-link text-body">{personal.location}</p>
            </div>

            <div className="footer-section">
              <h4 className="label-small">SOCIAL</h4>
              <div className="footer-social">
                <a href={social.github} className="footer-icon-link" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                  <span className="text-body">GitHub</span>
                </a>
                <a href={social.linkedin} className="footer-icon-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                  <span className="text-body">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="label-small">© 2025 {personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
