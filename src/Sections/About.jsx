import React from 'react'
import aboutImg from '../assets/images/about.jpg'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about_container bd_grid">
        <div className="about_img">
          <img src={aboutImg} alt="About" />
        </div>

        <div>
          <h2 className="about_subtitle">I'm Sanjay Baskaran</h2>
          <p className="about_text">
            I'm a passionate web developer dedicated to creating innovative and user-friendly digital experiences. 
            With a strong foundation in both front-end and back-end development, I thrive on solving complex problems 
            and pushing creative boundaries. When I'm not coding, you can find me exploring new technologies and 
            contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About