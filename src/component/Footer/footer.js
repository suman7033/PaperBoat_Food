import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are a company dedicated to providing the best products and services.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: sumobarnwal.info@company.com</p>
          <p>Phone: +91 7033020947</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FacebookIcon fontSize="large" />
              <span>Facebook</span>
            </a>
            <a href="#" className="social-icon">
              <TwitterIcon fontSize="large" />
              <span>Twitter</span>
            </a>
            <a href="#" className="social-icon">
              <InstagramIcon fontSize="large" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
