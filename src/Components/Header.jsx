import React, { useState } from 'react';
import resume from '../assets/Sanjay_Baskaran_Resume.pdf';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-secondary shadow-lg z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl  font-bold flex items-end justify-center gap-10 ">
            <a href='#' className='hover:text-primary transition'>Portfolio</a>
            
            
          </div>
          
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-primary transition">Home</a>
            <a href="#about" className="text-white hover:text-primary transition">About</a>
            <a href="#skills" className="text-white hover:text-primary transition">Skills</a>
            <a href="#education" className="text-white hover:text-primary transition">Education</a>
            <a href="#portfolio" className="text-white hover:text-primary transition">Portfolio</a>
            <a href="#contact" className="text-white hover:text-primary transition">Contact</a>
            <a 
              href={resume} 
              className="text-white transition px-4 py-2 rounded-md relative 
                before:absolute before:inset-0 before:p-[2px] before:rounded-md
                before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500
                before:-z-10 before:hover:opacity-90
                inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <a href="#home" className="block text-white py-2">Home</a>
            <a href="#about" className="block text-white py-2">About</a>
            <a href="#skills" className="block text-white py-2">Skills</a>
            <a href="#education" className="block text-white py-2">Education</a>
            <a href="#portfolio" className="block text-white py-2">Portfolio</a>
            <a href="#contact" className="block text-white py-2">Contact</a>
            <a 
              href={resume} 
              className="text-white hover:text-primary transition px-4 py-2 rounded-md relative 
                before:absolute before:inset-0 before:p-[2px] before:rounded-md
                before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500
                before:-z-10 before:hover:opacity-90
                inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;