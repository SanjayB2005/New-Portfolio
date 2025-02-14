import React from 'react';
import Header from './Components/Header';
import Home from './Sections/Home';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Education from './Sections/Education';
import Portfolio from './Sections/Portfolio';
import Contact from './Sections/Contact';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="bg-secondary min-h-screen">
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;