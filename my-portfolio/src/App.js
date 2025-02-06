import React from 'react';
import Header from './Header'; 
import HeroSection from './HeroSection'; 
import SkillsExperience from './SkillsExperience'; 
import Middle1 from './Middle1'; 
import Middle2 from './Middle2';
import Middle3 from './Middle3'; 
import Footer from './Footer'; 
import './App.css'; 
function App() {
  return (
    <div className="app-container">
      <Header />         
      <HeroSection />    
      <SkillsExperience /> 
      <Middle1 />       
      <Middle2 />       
      <Middle3 />       
      <Footer />         
    </div>
  );
}

export default App;
