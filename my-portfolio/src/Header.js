import React from 'react';
 import navimage from './images/logo.jpg'; 
function Header() {
  return (
    <header className="header">
      <div className="header-content"> 
         <img src={navimage} alt="logo" className="logo" />  
        <h1 class="skill">Skill Showcase</h1>
        <nav>
          <ul> 
          <div className='list-item'>
            <li>Home</li>
            <li>Skills</li>
            <li>Contact Us</li>
          </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
