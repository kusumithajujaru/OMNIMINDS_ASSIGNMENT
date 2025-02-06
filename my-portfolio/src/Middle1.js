import React from 'react';
import image from './images/production image.jpg'; 
import './Middle1.css';

function Middle1() {
  return (
    <section className="middle1">
      <div>
      <h3 className="project">Project Management</h3>
      <pre className="pretag">Extensive experience in leading cross-functional teams</pre>
         <pre className="pretag">to deliver on time and within budget.</pre>
         <div className="buttons">
         <button>Try Now</button>
        <h5>Learn More</h5>
        </div>
      </div>
      
        
      
      <div>
      <img src={image} alt="Middle1 Image" className="middle1-image" />
      </div>
     
    </section>
  );
}

export default Middle1;
