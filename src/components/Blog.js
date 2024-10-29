import React from 'react';
import './Blog.css';

import blog1 from './blog1.jpg';

import blog2 from './blog2.jpeg'; 
import blog3 from './blog3.jpeg'; 


const Blog = () => {
  const blogs = [
    {
      title: "In the blink of an eye: The intersection of time, travel, and technology.",
      description: "Do you know time, travel, and technology are no longer separate concepts?",
      date: "September 25, 2024",
      image: blog1,
      link: "https://medium.com/@hasini.miryala7585/in-the-blink-of-an-eye-the-intersection-of-time-travel-and-technology-6080e63b6769"
    },
    {
      title: "CSS Backgrounds",
      description: "let us know a clear picture of CSS backgrounds",
      date: "September 26, 2024",
      image: blog2,
      link: "https://medium.com/@hasini.miryala7585/css-backgrounds-aa8395875c8b"
    },
    {
      title: "Why Learning New Skills is a Game-Changer in the IT Industry?",
      description: "If you’re thinking about a career in IT, here’s something you need to know",
      date: "October 12, 2024",
      image: blog3,
      link: "https://medium.com/@hasini.miryala7585/why-learning-new-skills-is-a-game-changer-in-the-it-industry-e6a5e65968a4"
    },
    // Add more blogs as needed
  ];

  return (
    <section className="blog" id="blog">
      <h2>MY BLOGS</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-item" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-info">
              <span className="blog-date">{blog.date}</span>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href={blog.link} className="read-more">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
