import React from "react";
import Arrow from "../SVG/Arrow";
import Call from "../SVG/Call";
import Email from "../SVG/Email";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq">
      <div className="help">
        <div className="help-title">
          <p>Need help?</p>
        </div>
        <div className="help-text-all">
          <div>
            <Call />
          </div>
          <div>
            <p className="help-text">
              <a href="tel:+49176123456">+49 176 123 456</a>
            </p>
            <p className="help-text-details">Support Hotline</p>
          </div>
        </div>
        <div className="help-text-all">
          <div>
            <Email />
          </div>
          <div>
            <p className="help-text">
              <a href="mailto:help@banquee.com">help@banquee.com</a>
            </p>
            <p className="help-text-details">Support Email</p>
          </div>
        </div>
        <div className="support">
          <div>
            <button className="support-text">Support</button>
          </div>
          <div>
            <Arrow />
          </div>
        </div>
      </div>
      <div className="faq-colapse">
        <div
          tabIndex={0}
          className="collapse collapse-plus border-bottom bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium faq-text">
            How do I open an Bank account?
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border-bottom bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium faq-text">
            How do I order a new card?
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border-bottom bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium faq-text">
            How to change my account limits?
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border-bottom bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium faq-text">
            How does change Banko premium works?
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border-bottom bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium faq-text">
            Can I have two Banko accounts?
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
