import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Hi, I'm <span className="">Sanjay Baskaran</span>
        </h1>
        <p className="text-xl text-white mb-12">Web Developer & Designer</p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
             className="text-white hover:text-primary transition">
            <i className='bx bxl-linkedin text-3xl'></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="text-white hover:text-primary transition">
            <i className='bx bxl-github text-3xl'></i>
          </a>
        </div>

        <a href="#contact" 
           className="bg-gradient-primary text-white px-8 py-3 rounded-full 
                    hover:shadow-lg transition duration-300">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;