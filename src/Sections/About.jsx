import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-white leading-relaxed mb-8">
            I'm a passionate web developer with expertise in modern web technologies.
            With a strong foundation in both front-end and back-end development,
            I create engaging and user-friendly digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;