import React, { useState } from "react";
import Amazon from "../SVG/Amazon";
import AmazonLogo from "../SVG/AmazonLogo";
import Apple from "../SVG/Apple";
import AppleLogo from "../SVG/AppleLogo";
import ArrowLeft from "../SVG/ArrowLeft";
import Bike from "../SVG/Bike";
import Bitcoin from "../SVG/Bitcoin";
import BlackCard from "../SVG/BlackCard";
import BlueCard from "../SVG/BlueCard";
import GoldCard from "../SVG/GoldCard";
import Google from "../SVG/Google";
import GoogleLogo from "../SVG/GoogleLogo";
import Laptop from "../SVG/Laptop";
import MasterCard2 from "../SVG/MasterCard2";
import Paypal from "../SVG/Paypal";
import Question from "../SVG/Question";
import Shopify from "../SVG/Shopify";
import Visa2 from "../SVG/Visa2";
import Webflow from "../SVG/Webflow";
import Zapier from "../SVG/Zapier";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AllFeatures = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="pt-40  flex flex-col items-center">
      <div>
        <h2 className="text-6xl">All in one bank. Really.</h2>
        <p className="text-xl mt-4 mb-24">
          Senectus et netus malesuada fames ac turips. Sagittis vitae er leo
          duis ut diam
        </p>
      </div>
      <div className="flex flex-row  gap-8">
        <div className="rounded-3xl h-96  bg-desertStrom overflow-hidden">
          <div>
            <h2 className="text-4xl mt-8">statistics</h2>
            <p className="text-lg text-gray-400">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. 
            </p>
          </div>
          <div className="statistics-mobile w-96 h-full border-8 rounded-3xl border-black mx-24 mt-11 bg-white">
            <div className="flex flex-row justify-evenly pt-10">
              <div>
                <ArrowLeft />
              </div>
              <div>
                <p>Statistics</p>
              </div>
              <div>
                <Question />
              </div>
            </div>
            <div className="flex flex-row justify-evenly mt-4 mb-4">
              <div className="w-36 h-14 bg-desertStrom rounded-xl">
                <div>
                  <p>Earnings</p>
                </div>
                <div>
                  <p className="text-lg">$85.222,00</p>
                </div>
              </div>
              <div className="w-36 h-14 bg-desertStrom rounded-xl">
                <div>
                  <p>Expenses</p>
                </div>
                <div>
                  <p className="text-lg">-$52.150,00</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-evenly">
              <div className="flex flex-row gap-4">
                <div className="gap-2 flex flex-row items-center">
                  <div className="w-3 h-3 rounded-full bg-silverTree"></div>
                  <div>
                    <p>Earnings</p>
                  </div>
                </div>
                <div className="gap-2 flex flex-row items-center">
                  <div className="w-3 h-3 rounded-full bg-palePink"></div>
                  <div>
                    <p>Expenses</p>
                  </div>
                </div>
              </div>
              <div className="date-picker border rounded border-greenWhite">
                <DatePicker
                  className="select  select-sm w-20 max-w-xs date placeholder-mirage"
                  placeholderText="Year"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-3xl h-96 bg-desertStrom overflow-hidden">
            <div>
              <div>
                <p className="text-4xl mt-8">Card</p>
                <p className="text-lg text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. sed
                  do.
                </p>
              </div>
            </div>

            {/* card   */}
            <div className="flex gap-11 justify-between justify-items-end ">
              <div className="relative h-96">
                <div className="absolute top-16 -left-56 h-96 rotate-90">
                  <BlackCard />
                </div>
              </div>

              <div className="relative h-96">
                <div className="absolute top-2 -left-64 h-96 rotate-90">
                  <BlueCard />
                </div>
              </div>

              <div className="relative h-96 ">
                <div className="absolute top-16 -right-20 h-96 rotate-90">
                  <GoldCard />
                </div>
              </div>
            </div>

            {/* CARD  */}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 mt-8">
        <div className="bg-desertStrom rounded-3xl">
          <div>
            <div className=" mt-14 mb-2 text-4xl">
              <h3>Easy integration</h3>
            </div>
            <div className="card-detail mb-14 text-lg text-gray-400">
              <p>lorem ipsum dolor sit amet, consectet</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <div className="card-svg-part1 flex flex-row gap-4">
              <div>
                <Webflow />
              </div>
              <div>
                <Shopify />
              </div>
              <div>
                <Zapier />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <Paypal />
              </div>
              <div>
                <MasterCard2 />
              </div>
              <div>
                <Visa2 />
              </div>
              <div>
                <Google />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <Apple />
              </div>
              <div>
                <Amazon />
              </div>
              <div>
                <Bitcoin />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-desertStrom rounded-3xl">
          <div>
            <div className="mt-14 mb-2 text-4xl">
              <h3>Saving accounts</h3>
            </div>
            <div className="mb-14 text-lg text-gray-400">
              <p>lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-12">
              <div>
                <Laptop />
              </div>
              <div className="mt-4">
                <h2 className="text-lg">New Laptop</h2>
                <p className=" text-sm text-gray-400">400$</p>
              </div>
            </div>
            <div>
              <div>
                <Bike />
              </div>
              <div className="mt-4">
                <h2 className="text-lg">Dream bike</h2>
                <p className=" text-sm text-gray-400">200$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-desertStrom rounded-3xl">
          <div>
            <div className="mt-14 mb-2 text-4xl">
              <h2>Instant transactions</h2>
            </div>
            <div className="mb-14 text-lg text-gray-400 mx-12">
              <p>lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>
          <div className="flex flex-col gap-4  items-center -mt-5">
            <div className="flex flex-row justify-around bg-white items-center h-20 w-80 rounded-xl">
              <div>
                <AppleLogo />
              </div>
              <div>
                <p className="mobile-item-title">Apple</p>
                <p className="mobile-item-about">Electronic</p>
              </div>
              <div>
                <p className="mobile-item-price">-799$</p>
              </div>
            </div>
            <div className="flex flex-row justify-around bg-white items-center h-20 w-80 rounded-xl">
              <div>
                <AmazonLogo />
              </div>
              <div>
                <p className="mobile-item-title">Amazon</p>
                <p className="mobile-item-about">Shopping</p>
              </div>
              <div>
                <p className="mobile-item-price">-799$</p>
              </div>
            </div>
            <div className="flex flex-row justify-around bg-white items-center h-20 w-80 rounded-xl">
              <div>
                <GoogleLogo />
              </div>
              <div>
                <p className="mobile-item-title">Google</p>
                <p className="mobile-item-about">Ads</p>
              </div>
              <div>
                <p className="mobile-item-price">-799$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFeatures;
