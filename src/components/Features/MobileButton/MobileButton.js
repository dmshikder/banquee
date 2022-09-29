import React from "react";
import AccountIcon from "../../SVG/AccountIcon";
import CardsIcon from "../../SVG/CardsIcon";
import HomeIcon from "../../SVG/HomeIcon";
import SavingsIcon from "../../SVG/SavingsIcon";
import "./MobileButton.css";

const MobileButton = () => {
  return (
    <div className="menu1">
      <div className="mobile-btn">
        <div>
          <HomeIcon />
        </div>
        <div>
          <p>Home</p>
        </div>
      </div>
      <div className="mobile-btn">
        <div>
          <SavingsIcon />
        </div>
        <div>
          <p>Savings</p>
        </div>
      </div>
      <div className="mobile-btn">
        <div>
          <CardsIcon />
        </div>
        <div>
          <p>Cards</p>
        </div>
      </div>
      <div className="mobile-btn">
        <div>
          <AccountIcon></AccountIcon>
        </div>
        <div>
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

export default MobileButton;
