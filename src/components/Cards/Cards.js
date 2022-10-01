import React from "react";
import BlackCard from "../SVG/BlackCard";
import BlueCard from "../SVG/BlueCard";
import GoldCard from "../SVG/GoldCard";

const Cards = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className="mt-40">Account</p>
        <p id="compare-card" className="text-6xl pb-4">Choose your card.</p>
        <p className="text-lg pb-24">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam
        </p>
      </div>
      <div className="flex flex-row gap-16">
        <div className="mt-4 flex flex-col justify-center items-center">
          <div className="flex flex-row items-center gap-2 justify-center">
            <div className=" text-lg">
              <p>Basic</p>
            </div>
            <div className="px-2 text-silverTree bg-harp rounded text-xs">
              <p>Popular</p>
            </div>
          </div>
          <div className="mx-16">
            <div className="pt-6 pb-2 ">
              <p>Free</p>
            </div>
            <div className=" text-base text-osloGrey w-56 pb-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <BlueCard />
          </div>
          <div>
            <button className="w-80  h-10 bg-silverTree rounded-md mt-6 text-base text-white">Get started</button>
          </div>
        </div>

        <div className="mt-3 flex flex-col justify-center items-center">
          <div>
            <div className=" text-lg">
              <p>Premium</p>
            </div>
          </div>
          <div className="card-price-details">
            <div className="flex flex-row pt-6 items-center gap-2 justify-center pb-2">
              <div>
                <p className="text-3xl">$5</p>
              </div>
              <div>
                
                <p className="text-osloGrey  ">per month</p>
              </div>
            </div>
            <div className=" text-base text-osloGrey w-56 mx-16 pb-6">
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <BlackCard />
          </div>
          <div>
            <button className="w-80  h-10 bg-silverTree rounded-md mt-6 text-base text-white">Get started</button>
          </div>
        </div>
        <div className="mt-3 flex flex-col justify-center items-center">
          <div>
            <div className=" text-lg">
              <p>Gold</p>
            </div>
          </div>
          <div className="card-price-details">
            <div className="flex flex-row pt-6 items-center gap-2 justify-center pb-2">
              <div>
                <p className="text-3xl">$10</p>
              </div>
              <div>
                <p className="text-osloGrey  ">per month</p>
              </div>
            </div>
            <div className=" text-base text-osloGrey w-56 mx-14 pb-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <GoldCard />
          </div>
          <div>
            <button className="w-80  h-10 bg-silverTree rounded-md mt-6 text-base text-white">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
