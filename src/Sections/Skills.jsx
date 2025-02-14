import React from 'react'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills_container bd_grid">
        <div>
          <h2 className="skills_subtitle">Professional Skills</h2>
          <p className="skills_text">My technical level</p>
          
          <div className="skills_data">
            <div className="skills_names">
              <i className='bx bxl-html5 skills_icon'></i>
              <span className="skills_name">HTML5</span>
            </div>
            <div className="skills_bar skills_html"></div>
          </div>

          <div className="skills_data">
            <div className="skills_names">
              <i className='bx bxl-css3 skills_icon'></i>
              <span className="skills_name">CSS3</span>
            </div>
            <div className="skills_bar skills_css"></div>
          </div>

          <div className="skills_data">
            <div className="skills_names">
              <i className='bx bxl-javascript skills_icon'></i>
              <span className="skills_name">JavaScript</span>
            </div>
            <div className="skills_bar skills_js"></div>
          </div>

          <div className="skills_data">
            <div className="skills_names">
              <i className='bx bxl-react skills_icon'></i>
              <span className="skills_name">React</span>
            </div>
            <div className="skills_bar skills_react"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills