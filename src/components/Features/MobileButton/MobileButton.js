import React from "react";
import AccountIcon from "../../SVG/AccountIcon";
import CardsIcon from "../../SVG/CardsIcon";
import HomeIcon from "../../SVG/HomeIcon";
import SavingsIcon from "../../SVG/SavingsIcon";


const MobileButton = () => {
  return (
    <div className="flex flex-row items-center justify-evenly">
      <div className="flex flex-col justify-center items-center">
        <div>
          <HomeIcon />
        </div>
        <div>
          <p>Home</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <SavingsIcon />
        </div>
        <div>
          <p>Savings</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <CardsIcon />
        </div>
        <div>
          <p>Cards</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
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
