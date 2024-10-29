import React from 'react';
import './Home.css';  // Ensure this file is correctly imported
 

const Home = () => {
   

  return (
    <section className="home" id='home'>
      <div className="home-content">
        <h1>Hello, I'm <span className='myname'>HASINI MIRYALA.</span></h1>
        <p>I'm a Full-Stack Web Developer.</p>
      </div>
       
      <div class="snow_wrap">
	      <div class="snow"></div>
      </div>
     
       
    </section>
  ); 
};

export default Home;
