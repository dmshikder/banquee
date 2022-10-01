import React from "react";
import ArrowRight from "../SVG/ArrowRight";
import BlackCard from "../SVG/BlackCard";
import BlueCard from "../SVG/BlueCard";
import GoldCard from "../SVG/GoldCard";

const Hero = () => {
  return (
    <div className="bg-harp overflow-hidden flex flex-col gap-32">
      <div>
        <div>
          <div>
            <p className=" pt-32">Features</p>
            <p className="pt-2 text-7xl -tracking-wider">All in one card.</p>
            <p className="text-xl pb-8 font-medium leading-9">
              Senectus et netus et malesuada fames ac turpis. <br />
              Sagittis vitae et leo duis ut diam.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-8">
            <div>
              <a className="text-white text-sm button bg-silverTree py-4  px-6 rounded-md hover:bg-harp hover:border hover:text-mirage">
                Open Account
              </a>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div>
                <a className="text-sm">Compare Cards</a>
              </div>
              <div>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around">
        <div className="rotate-90 -mb-64">
          <GoldCard />
        </div>
        <div className="rotate-90 -mb-48">
          <BlackCard />
        </div>

        <div className="rotate-90 -mb-20">
          <BlueCard />
        </div>
        <div className="rotate-90 -mb-48">
          <BlackCard />
        </div>
        <div className="rotate-90 -mb-64">
          <GoldCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
