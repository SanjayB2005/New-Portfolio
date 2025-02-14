import React, { Fragment } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Sections/Home'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Education from './Sections/Education'
import Portfolio from './Sections/Portfolio'
import Contact from './Sections/Contact'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App