import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: '90%', icon: 'bx bxl-html5' },
    { name: 'CSS3', level: '90%', icon: 'bx bxl-css3' },
    { name: 'JavaScript', level: '60%', icon: 'bx bxl-javascript' },
    { name: 'React', level: '70%', icon: 'bx bxl-react' },
    { name: 'Tailwind CSS', level: '65%', icon: 'bx bxl-tailwind-css' },
    { name: 'Python', level: '50%', icon: 'bx bxl-python' },
    { name: 'C', level: '50%', icon: 'bx bx-code-alt' },
    { name: 'C++', level: '50%', icon: 'bx bx-code-curly' },
    
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <i className={`${skill.icon} text-2xl text-primary mr-4`}></i>
                <span className="text-white text-lg">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-gradient-primary h-2.5 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;