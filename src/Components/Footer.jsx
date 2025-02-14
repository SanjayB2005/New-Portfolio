import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_title">Sanjay Baskaran</p>
      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=61567134045539" 
           className="footer_icon" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-facebook-circle"></i>
        </a>
        <a href="https://www.instagram.com/vickysanjay49/" 
           className="footer_icon" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://twitter.com/your-twitter" 
           className="footer_icon" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="https://github.com/SanjayB2005" 
           className="footer_icon" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github"></i>
        </a>
      </div>
      <p className="footer_copy">&#169; 2024. All rights reserved</p>
    </footer>
  )
}

export default Footer