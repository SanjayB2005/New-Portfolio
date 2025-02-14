import React from 'react'
import profileImg from '../assets/images/profile.jpg'

const Home = () => {
  return (
    <section className="home bd_grid" id="home">
      <div className="home_data">
        <h1 className="home_title">
          Hi,<br />I'm <span className="home_title-color">Sanjay</span><br />
          Web Developer
        </h1>
        <a href="#contact" className="button">Contact</a>
      </div>

      <div className="home_social">
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="home_social-icon">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href="https://github.com/SanjayB2005" target="_blank" rel="noopener noreferrer" className="home_social-icon">
          <i className='bx bxl-github'></i>
        </a>
      </div>

      <div className="home_img">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  )
}

export default Home