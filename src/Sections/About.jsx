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
          I'm a skilled web developer specializing in modern web technologies like React, JavaScript, and CSS.
          With extensive experience in front-end development and UI/UX principles,
          I create responsive and accessible web applications that deliver exceptional user experiences.
          Currently, I'm expanding my expertise into backend development,
          focusing on Node.js and Express to build full-stack applications.
          My goal is to combine both front-end and backend skills to develop
          comprehensive web solutions that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;