import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import mypic from './hey.JPG'; 

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Set isVisible to true when the section is in view
          observer.unobserve(entry.target); // Unobserve to prevent repeated triggers
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Store the current ref value in a variable
    const currentRef = skillsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function using the stored ref value
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Java', level: 80 },
    { name: 'SpringBoot', level: 80 },
    // Add more skills as needed
  ];

  return (
    <div className="skills-container" id="skills" ref={skillsRef}>
      <div className="left-section">
        <div className="image-container">
          <img src={mypic} alt="Your Name" className="profile-pic" />
          <div className='text-under-image'>
            <h2>Who's this girl?</h2>
            <p>
              I'm a Full Stack Developer.
              I have serious passion for UI effects, animations, and creating intuitive, dynamic user experiences.
              <a href='#contact'> Let's make something special</a> 
            </p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <h2>SKILLS</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <p>{skill.name}</p>
              <div className="skill-bar">
                <div
                  className={`skill-level ${isVisible ? 'visible' : ''}`} 
                  style={{ width: `${skill.level}%` }}
                >
                  <span>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
