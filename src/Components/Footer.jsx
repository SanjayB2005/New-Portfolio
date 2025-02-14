import React from 'react';
import 'boxicons/css/boxicons.min.css'; // Add this import

const Footer = () => {
  return (
    <footer className="bg-gradient-primary py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-3xl font-bold text-white mb-8" data-aos="fade-down">
          Sanjay Baskaran
        </p>

        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://www.facebook.com/profile.php?id=61567134045539"
            target="_blank"
          >
            <i className='bx bxl-facebook-circle text-3xl'></i>
          </a>
          <a
            href="https://www.instagram.com/vickysanjay49/"
            target="_blank"
          >
            <i className='bx bxl-instagram text-3xl'></i>
          </a>
          <a
            href="https://github.com/SanjayB2005"
            target="_blank"
          >
            <i className='bx bxl-github text-3xl'></i>
          </a>

          <a
            href="https://linkedin.com/in/sanjaybaskaran5"
            target="_blank"
          >
            <i class='bx bxl-linkedin text-3xl'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;