import React from 'react';
import image from './images/female2.jpg';
import './HeroSection.css';
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={image} alt="Hero Image" className="hero-image" /> 
        <div className="text-overlay">
        <h2>Crafting Digital Experiences</h2>
        <p>Passionate UI/UX designer with a knack for creating intuitive and engaging interfaces.</p>
        <button>Explore My Work</button>
        </div>
       
      </div>
    </section>
  );
}

export default HeroSection;