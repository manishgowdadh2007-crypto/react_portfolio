import React from "react";
import profileImg from "./public/image.jpg"; // Optional: standard import for bundlers like Vite/Webpack

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <figure className="profile-figure">
          <img
            src={profileImg} /* or src="images/image.jpg" if in the public folder */
            alt="Manish gowda D H profile photo"
            width="500"
          />
          <figcaption>Manish gowda D H — Web Developer</figcaption>
        </figure>
        <div className="about-text">
          <p>I'm a passionate web developer...</p>
        </div>
      </div>
    </section>
  );
}