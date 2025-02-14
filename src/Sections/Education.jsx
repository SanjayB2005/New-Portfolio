import React from 'react'

const Education = () => {
  return (
    <main className="main">
      <section className="work section" id="work">
        <h2 className="section-title" data-aos="fade-down">EDUCATION</h2>

        <div
          className="work_container bd_grid"
          data-aos="fade-down"
          data-aos-delay="250"
        >
          <div className="work_img">
            <img src="./assets/img/sboa.jpg" alt="" />
            <br />
            <p>S.B.O.A. Matriculation And Higher Secondary School Chennai.</p>
            <p>Higher Secondary Certificate (HSC) +2</p>
            <p>Grade: 83%</p>
          </div>

          <div className="work_img">
            <img src="./assets/img/srm-university-ramapuram-campus-chennai.jpg" alt="" />
            <br />
            <p>SRM Institute Of Science And Technology, Ramapuram.</p>
            <p>Bachelor of Technology - BTech in Computer Science and Engineering</p>
            <p>Grade: GPA: 9.13</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Education