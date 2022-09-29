import React from "react";
import ArrowRight from "../SVG/ArrowRight";
import BlackCard from "../SVG/BlackCard";
import BlueCard from "../SVG/BlueCard";
import GoldCard from "../SVG/GoldCard";


const Hero = () => {
  return (
    <div className="hero-bg bg-teal-50 overflow-hidden  ">
      <div className="h-80">
        <div>
          <div>
            <p className=" pt-32">Features</p>
            <p className="pt-2 text-7xl -tracking-wider">All in one card.</p>
            <p className="text-xl pb-8 font-medium leading-9">
              Senectus et netus et malesuada fames ac turpis. <br />
              Sagittis vitae et leo duis ut diam.
            </p>
          </div>

          <div className="flex gap-5 items-center place-content-center">
            <div>
              <a className="button">Open Account</a>
            </div>
            <div>
              <a className="text-lg text-emerald-500">
                Compare Cards
              </a>
            </div>
            <div>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-11 justify-between justify-items-end ">
        <div className="relative h-96 w-96">
          <div className="absolute top-52 -left-48 h-96 rotate-90">
            <GoldCard />
          </div>
        </div>
        <div className="relative h-96 w-96">
          <div className="absolute top-36 -left-48 h-96 rotate-90">
            <BlackCard />
          </div>
        </div>

        <div className="relative h-96 w-96">
          <div className="absolute top-24 -left-48 h-96 rotate-90">
            <BlueCard />
          </div>
        </div>
        <div className="relative h-96 w-96">
          <div className="absolute top-36 -left-48 h-96 rotate-90">
            <BlackCard />
          </div>
        </div>
        <div className="relative h-96 w-96">
          <div className="absolute top-52 -left-16 h-96 rotate-90">
            <GoldCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
