// src/components/About.js
import React, { useEffect, useRef, useState } from 'react';

import './About.css';
 
const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {

        console.log('About section is visible');
        setIsVisible(true); // Set isVisible to true when the section is in view
        observer.unobserve(entry.target); // Unobserve to prevent repeated triggers
        }
      },
      { threshold: 0.5 } // Trigger when 30% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <section className={`about ${isVisible ? 'visible' : ''}`}  id='about' ref={aboutRef}>
      <h2>ABOUT</h2>
       
      <div className="about-points" >
        <div   className="point">
          <h3>Fast</h3>
          <p>Fast load times is my highest priority.</p>
        </div>
        <div className="point">
          <h3>Responsive</h3>
          <p>My layouts work on any device, big or small.</p>
        </div>
        <div className="point">
          <h3>Intuitive</h3>
          <p>Strong preference for easy-to-use, intuitive UX/UI.</p>
        </div>
        <div className="point">
          <h3>Dynamic</h3>
          <p> I love making pages come to life.</p>
        </div>
      </div>
    </section>
  );
};

export default About;

