import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="top-footer"> 
          <div className="newsletter">
            <h3>Subscribe to our newsletter</h3>
            <div className="newsletter-form"> 
              <input type="email" placeholder="✉ Input your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="bottom-footer"> 
          <div className="footer-links">
            <a className="skillshow"href="/skill-showcase">Skill Showcase</a>
            <div className="navlinks">
            <a className="navbar"href="/pricing">Pricing</a>
            <a className="navbar"href="/about-us">About us</a>
            <a className="navbar"href="/features">Features</a>
            <a className="navbar"href="/help-center">Help Center</a>
            <a className="navbar"href="/contact-us">Contact us</a>
            <a className="navbar"href="/faqs">FAQS</a>
            <a className="navbar"href="/careers">Careers</a>
            </div>
          </div>
          
         <div className="mainfooter">
         <div className="footer-info">
            <div className="language-dropdown">
              <select>
                <option className="opt" value="english">English</option>
                
              </select>
            </div>
            <div className="center">
            <p >&copy; {new Date().getFullYear()} Brand, Inc.
            <a href="/privacy">♥Privacy</a> 
            <a href="/terms">♥Terms</a>
            <a href="/sitemap">♥Sitemap</a></p>
            </div>
            
            <div className="social-icons">
              
              <a href="https://th.bing.com/th/id/OIP.oXKWfypMEAC8DMHWoHgo_wHaEK?rs=1&pid=ImgDetMain"><a > Twitter </a></a>
              <a>Facebook </a>
              <a>LinkedIn</a>
              <a>YouTube</a>
            </div>
          </div>
         </div>
          </div>
        </div>
      
    </footer>
  );
}

export default Footer;