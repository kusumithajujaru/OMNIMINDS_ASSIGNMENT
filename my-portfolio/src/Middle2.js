import React from 'react';
import image from './images/data imag.jpg'; 
import './Middle2.css';
function Middle2() {
  return (
    <section className="middle2">
      <img src={image} alt="Hero Image" className="data-image" />
      <div className="analysis">
      <h3 className="data">Data Analysis</h3>
        <pre>Proficient in analyzing complex datasets to derive </pre>
        <pre>actionable insights and inform strategic decisions.</pre>
        <div className="buttonsheading">
        <div class="buttons">
        <button>Try Now</button>
        <h5>Learn More</h5>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Middle2;
