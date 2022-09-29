import React from "react";
import "./AllCard.css";
import Number from "./Number";
import Visa from "./Visa";
import Wifi from "./Wifi";
const BlueCard = () => {
  return (
    <div className="blue-card">
      <div className="card-title-up">
        <div>
          <p className="mobile-card-title">banquee.</p>
        </div>
        <div className="wifi">
          <Wifi />
        </div>
      </div>
      <div className="mobile-card-number">
        <Number />
      </div>
      <div className="card-bottom">
        <div className="card-bottom-part1">
          <div>
            <p className="card-bottom-gray">Card Holder</p>
            <p className="card-holder-name">John Doe</p>
          </div>
          <div>
            <p className="card-bottom-gray">Expiry Date</p>
            <p className="card-holder-name">09/28</p>
          </div>
        </div>
        <div>
          <Visa />
        </div>
      </div>
    </div>
  )
}

export default BlueCard