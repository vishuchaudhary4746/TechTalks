import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p className='footer-p'>Email: info@techtalks.com</p>
          <p className='footer-p'>Phone: +1 234 567 890</p>
        </div>
        <div className="address-info">
          <h2>Address</h2>
          <p className='footer-p'>123 Tech Street</p>
          <p className='footer-p'>Innovation City, CA 90210</p>
          <p className='footer-p'>USA</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='footer-p'>&copy; 2024 TechTalks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
