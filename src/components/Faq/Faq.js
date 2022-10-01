import React from "react";
import Arrow from "../SVG/Arrow";
import Call from "../SVG/Call";
import Email from "../SVG/Email";


const Faq = () => {
  return (
    <div className="flex flex-row mt-80 mb-40 items-center justify-around">
      <div>
        <div className="text-7xl">
          <p>Need help?</p>
        </div>
        <div className="flex flex-row items-center gap-6">
          <div>
            <Call />
          </div>
          <div>
            <p className="text-lg">
              <a href="tel:+49176123456">+49 176 123 456</a>
            </p>
            <p className="text-sm text-osloGrey">Support Hotline</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <div>
            <Email />
          </div>
          <div>
            <p className="text-lg">
              <a href="mailto:help@banquee.com">help@banquee.com</a>
            </p>
            <p className="text-sm text-osloGrey">Support Email</p>
          </div>
        </div>
        <div className="support flex flex-row items-center gap-3">
          <div>
            <button className="text-silverTree text-lg">Support</button>
          </div>
          <div>
            <Arrow />
          </div>
        </div>
      </div>
      <div className="faq-colapse">
        <div
          tabIndex={0}
          className="collapse collapse-plus border-b-2 border-greenWhite"
        >
          <div className="collapse-title text-xl font-medium flex flex-row">
            How do I open an Bank account?
          </div>
          <div className="collapse-content text-sm text-osloGrey">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border-b-2 border-greenWhite"
        >
          <div className="collapse-title text-xl font-medium flex flex-row">
            How do I order a new card?
          </div>
          <div className="collapse-content text-sm text-osloGrey">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border-b-2 border-greenWhite"
        >
          <div className="collapse-title text-xl font-medium flex flex-row">
            How to change my account limits?
          </div>
          <div className="collapse-content text-sm text-osloGrey">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border-b-2 border-greenWhite"
        >
          <div className="collapse-title text-xl font-medium flex flex-row">
            How does change Banko premium works?
          </div>
          <div className="collapse-content text-sm text-osloGrey">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border-b-2 border-greenWhite"
        >
          <div className="collapse-title text-xl font-medium flex flex-row">
            Can I have two Banko accounts?
          </div>
          <div className="collapse-content text-sm text-osloGrey">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
