import React from "react";
import BlackCard from "../SVG/BlackCard";
import BlueCard from "../SVG/BlueCard";
import GoldCard from "../SVG/GoldCard";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <div>
        <p className="accounts">Account</p>
        <p className="title">Choose your card.</p>
        <p className="card-section-details">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam
        </p>
      </div>
      <div className="card-plan">
        <div className="single-card">
          <div className="card-plan1">
            <div className="plan-basic">
              <p>Basic</p>
            </div>
            <div className="popular-plan">
              <p>Popular</p>
            </div>
          </div>
          <div>
            <div className="card-price">
              <p>Free</p>
            </div>
            <div className="card-details">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <BlueCard />
          </div>
          <div>
            <button className="card-btn">Get started</button>
          </div>
        </div>

        <div className="single-card">
          <div className="card-plan1">
            <div className="plan-basic">
              <p>Premium</p>
            </div>
          </div>
          <div className="card-price-details">
            <div className="card-price-text">
              <div>
                <p className="card-price">$5</p>
              </div>
              <div>
                {" "}
                <p className="card-month">per month</p>
              </div>
            </div>
            <div className="card-details">
              {" "}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <BlackCard />
          </div>
          <div>
            <button className="card-btn">Get started</button>
          </div>
        </div>
        <div className="single-card">
          <div className="card-plan1">
            <div className="plan-basic">
              <p>Gold</p>
            </div>
          </div>
          <div className="card-price-details">
            <div className="card-price-text">
              <div>
                <p className="card-price">$10</p>
              </div>
              <div>
                <p className="card-month">per month</p>
              </div>
            </div>
            <div className="card-details">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <GoldCard />
          </div>
          <div>
            <button className="card-btn">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
