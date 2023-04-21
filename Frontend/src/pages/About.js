import React, { useState } from "react";
import "./About.css"; // Import your CSS file
import teamPic from "../assets/team.jpeg"; // Import your image file

const About = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="about" style={{ backgroundColor: "#E3F2FD" }}>
      <div className="header">
        <h1>About Us</h1>
        <p>
          We are a team of passionate developers who love creating awesome web
          applications.
        </p>
      </div>
      <img
        src={teamPic}
        alt="Our team"
        style={{ width: "1000px", height: "700px" }}
      />
      <div className="content">
        <h2>Our Team</h2>
        <p>
          We have over 10 years of combined experience in building web and
          mobile applications. Our team consists of highly skilled developers,
          designers, and project managers who work together to deliver
          high-quality products that meet our clients' needs.
        </p>
        <h2>Our Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
          <li>Bootstrap</li>
          <li>Git</li>
        </ul>
      </div>
      <button onClick={handleContactClick}>Contact Us</button>
      {showContact && (
        <div className="contact-overlay">
          <div className="contact-card">
            <h2>Contact Us</h2>
            <form
              action="mailto:pragatidosad@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
              <button type="submit">Send Message</button>
            </form>
            <button className="close-btn" onClick={handleContactClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;