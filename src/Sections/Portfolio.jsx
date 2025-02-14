import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "ShopNext",
      description: "E-commerce website with product browsing and checkout",
      image: "/assets/shopnext.png",
      link: "https://shopnext.demo"
    },
    {
      id: 2,
      title: "Nike Store",
      description: "Nike-themed e-commerce platform",
      image: "/assets/nike.png",
      link: "https://nikestore.demo"
    },
    {
      id: 3,
      title: "Booksky",
      description: "E-Book Management System",
      image: "/assets/booksky.png",
      link: "https://booksky.demo"
    },
    {
      id: 4,
      title: "Mbbsglobe",
      description: "MBBS Admissions Platform",
      image: "/assets/mbbsglobe.png",
      link: "https://mbbsglobe.demo"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-primary px-4 py-2 rounded text-white hover:opacity-90"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;