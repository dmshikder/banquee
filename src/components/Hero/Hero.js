import React from "react";
import BlackCard from "../SVG/BlackCard";
import BlueCard from "../SVG/BlueCard";
import GoldCard from "../SVG/GoldCard";
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-bg  overflow-hidden  ">
      <div className="hero">
      <div className="hero-text">
        <div>
          <p className="hero-features">Features</p>
          <p className="hero-title">All in one card.</p>
          <p className="hero-description">
            Senectus et netus et malesuada fames ac turpis. <br />
            Sagittis vitae et leo duis ut diam.
          </p>
        </div>

        <div className="login-register hero-btn">
          <a className="register-btn button">Open Account</a>
          <a href="#" className="compare-cards">
            Compare Cards <span>→</span>
          </a>
        </div>
      </div>

    
    </div>
      <div className="flex gap-11 justify-between justify-items-end ">
        <div className="relative h-96 w-96">
          <div className="absolute top-52 -left-48 h-96 rotate-90"><GoldCard/></div>
          
        </div>
        <div className="relative h-96 w-96">
          <div className="absolute top-36 -left-48 h-96 rotate-90"><BlackCard/></div>
          
        </div>

        <div className="relative h-96 w-96">
          <div className="absolute top-24 -left-48 h-96 rotate-90"><BlueCard/></div>
          
        </div>
        <div className="relative h-96 w-96">
          <div className="absolute top-36 -left-48 h-96 rotate-90"><BlackCard/></div>
          
        </div>
        <div className="relative h-96 w-96">
          <div className="absolute top-52 -left-16 h-96 rotate-90"><GoldCard/></div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
