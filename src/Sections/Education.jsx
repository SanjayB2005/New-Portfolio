import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition duration-300">
            <img 
              src="/assets/sboa.jpg" 
              alt="SBOA School" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">
              S.B.O.A. School
            </h3>
            <p className="text-gray-300">Higher Secondary Certificate (HSC)</p>
            <p className="text-primary">Grade: 83%</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition duration-300">
            <img 
              src="/assets/srm.jpg" 
              alt="SRM Institute" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">
              SRM Institute of Science and Technology
            </h3>
            <p className="text-gray-300">B.Tech in Computer Science</p>
            <p className="text-primary">GPA: 9.13</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;