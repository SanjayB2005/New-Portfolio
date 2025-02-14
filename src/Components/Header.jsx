import React, { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show')
        })
      }
    }

    showMenu('nav_toggle', 'nav_menu')

    const navLink = document.querySelectorAll('.nav_link')

    function linkAction() {
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))

    return () => {
      navLink.forEach(n => n.removeEventListener('click', linkAction))
    }
  }, [])

  return (
    <header className="header">
      <nav className="nav bd_grid">
        <div>
          <a href="#" className="nav_logo">Sanjay</a>
        </div>

        <div className="nav_menu" id="nav_menu">
          <ul className="nav_list">
            <li className="nav_items"><a href="#home" className="nav_link active">Home</a></li>
            <li className="nav_items"><a href="#about" className="nav_link">About</a></li>
            <li className="nav_items"><a href="#skills" className="nav_link">Skills</a></li>
            <li className="nav_items"><a href="#work" className="nav_link">Work</a></li>
            <li className="nav_items"><a href="#contact" className="nav_link">Contact</a></li>
          </ul>
        </div>

        <div className="nav_toggle" id="nav_toggle">
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header