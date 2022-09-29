import React from "react";
import BlackCard from "../../SVG/BlackCard";
import BlueCard from "../../SVG/BlueCard";
import GoldCard from "../../SVG/GoldCard";
import "./HeroCard.css";

const HeroCard = () => {
  return (
   
     <div className="hero-cards">
      <div className="hero-card-1">
        <GoldCard />
      </div>
      <div className="hero-card-2">
        <BlackCard />
      </div>
      <div className="hero-card-3">
        <BlueCard />
      </div>
      <div className="hero-card-2">
        <BlackCard />
      </div>
      <div className="hero-card-1">
        <GoldCard />
      </div>
    </div>
   
  );
};

export default HeroCard;
