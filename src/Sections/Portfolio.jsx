import React from 'react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "ShopNext",
      description: "E-commerce website with product browsing and checkout",
      image: "/src/assets/images/ShopNext.png",
    },
    {
      id: 2,
      title: "Nike Store",
      description: "Nike-themed e-commerce platform",
      image: "/src/assets/images/nike.png",
    },
    {
      id: 3,
      title: "Booksky",
      description: "E-Book Management System",
      image: "/src/assets/images/Booksky.jpeg",
    }
  ]

  return (
    <section className="work section" id="work">
      <h2 className="section-title">Portfolio</h2>

      <div className="work_container bd_grid">
        {projects.map((project) => (
          <div key={project.id} className="work_img">
            <img src={project.image} alt={project.title} />
            <div className="work_description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio