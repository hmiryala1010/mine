import React, { useEffect, useState} from 'react';
import './Head.css'; 


const Head = () => {
  const [showNav, setShowNav] = useState(false);
 

  // Show nav when scrolling past a certain point
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) { 
        setShowNav(true);  // Show the nav when scrolled past 80% of the first page
      } else {
        setShowNav(false);  // Hide the nav if the user scrolls back to top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      {/* Conditionally render the nav bar with fade-in animation */}
      <div className={`nav-bar ${showNav ? 'visible' : 'hidden'}`}> 
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about" >ABOUT</a>
            </li>
           
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#work">PROJECTS</a>
            </li>
            <li>
              <a href="#blog">BLOG</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
     
    </section>
  );
};

export default Head;
