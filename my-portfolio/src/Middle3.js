import React from 'react';
import image from './images/image.jpg'; 
import ratingimage from './images/rating.jpg'; 
import './Middle3.css';
function Middle3() {
  return (
    <section className="middle3">
      <img src={image} alt="Image for Middle3" className="client" />
      <div className="work">
      <img src={ratingimage} alt="Image for Middle3" className="rating" />
        <pre>Working with you has been an absolute pleasure. Your attention to detail and </pre>
        <pre>creativity are unparalleled.</pre>
      
        <h4 className="title2">Jessica Lee</h4>
        <p className="tittle3">Marketing Director at Innovate Inc.</p>
      </div>
    </section>
  );
}

export default Middle3;
