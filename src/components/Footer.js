import React from 'react';
import { FaGithub, FaLinkedin,FaCodepen } from 'react-icons/fa';
import './Footer.css'; // Use your CSS or Styled-Components

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/hmiryala1010" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/hasinimiryala/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://codepen.io/MIRYALA-HASINI" target="_blank" rel="noopener noreferrer">
          <FaCodepen />
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 My Portfolio</p>
        <p>Contact: hasini.miryala7585@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
