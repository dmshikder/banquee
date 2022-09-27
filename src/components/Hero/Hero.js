import React from "react";
import "./Hero.css";
import HeroCard from "./HeroCard/HeroCard";

const Hero = () => {
  return (
    <div className="hero">
      
     <div className="hero-text">
     <div>
          <p className="hero-features">Features</p>
          <p className="hero-title">All in one card.</p>
          <p className="hero-description">Senectus et netus et malesuada fames ac turpis.  <br />
Sagittis vitae et leo duis ut diam.</p>
        </div>

        <div className="login-register hero-btn">
    <a  className="register-btn button">Open Account</a>
    <a  className="compare-cards">Compare Cards <span>→</span></a>
    
  </div>
     </div>

  <div>
  <HeroCard></HeroCard>
  </div>
  
  
      
    </div>
  );
};

export default Hero;
