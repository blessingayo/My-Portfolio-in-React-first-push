import React from "react";
import "./AboutMe.css";
import mypics from "./image/MyNewPortrait.png";

const AboutMe = () => {
  return (
    <div>
      <h1>
        About<span>Me</span>
      </h1>
      <div className="aboutme-skill-section">
        <section className="skill-section-image">
          <img src={mypics} />
          <div>
            <div className="overlay-text">
              <h2>My Values</h2>
              <h5>
                Transparency
              </h5>
              <h6 >
                Openess with my clients is what i always strife for.
              </h6>

              <h5>
                Commitment
              </h5>
              <h6>My Vision is my guiding beacons.</h6>

              <h5 >
                Over Deliver
              </h5>
              <h6>Deliver more value than my clients expectation.</h6>

              <h5>
                Self Improvement
              </h5>
              <h6>I never stop learning, never stop evolving </h6>
              <h6>into who i want to be and where i want to be.</h6>
            </div>
          </div>
        </section>
        <div>
          <div className="stories">
            <section>
              I craft the best code and amazing user experience designs.
            </section>
            <section>
              I also focus on creating functional websites and telling visually
            </section>
            <section>
              compelling stories of all my clients and their businesses
            </section>
          </div>

          <div className="skill">
            <h3>MY SKILLS </h3>

            <span>Languages </span>
            <section>HTML, CSS, JavaScript, Java.</section>

            <span>Framework </span>
            <section>SASS, Tailwind, Bootstrap, React, JQuery.</section>

            <span>Design </span>
            <section>UI/UX Design.</section>

            <h3>EDUCATION</h3>
            <span>Semicolon </span>
            <section>Software Engineering</section>

            <span>Lagos State Polytechnic </span>
            <section>Business Administration</section>

            <span>Udacity </span>
            <section>Java Scholarship</section>

            <span>Henley Business School Lagos State </span>
            <section>Business</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
