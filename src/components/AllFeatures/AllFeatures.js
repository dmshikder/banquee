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
import Shopify from '../SVG/Shopify';
import Visa2 from "../SVG/Visa2";
import Webflow from "../SVG/Webflow";
import Zapier from "../SVG/Zapier";

 

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import "./AllFeatures.css";
const AllFeatures = () => {
  const[selectedDate, setSelectedDate]= useState(null)
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
        <div className="w-4/5 rounded-3xl h-96  bg-gray-100 overflow-hidden">
          <div>
            <h2 className="text-4xl mt-8">statistics</h2>
            <p className="text-lg text-gray-400">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div className="statistics-mobile w-96 h-full border-8 rounded-3xl border-black mx-24 mt-11 bg-white">
            <div className="flex flex-row justify-evenly pt-10">
              <div><ArrowLeft/></div>
              <div>
                <p>Statistics</p>
              </div>
              <div><Question/></div>
            </div>
            <div className="flex flex-row justify-evenly mt-4 mb-4">
              <div className="w-36 h-14 bg-gray-100 rounded-xl">
                <div>
                  <p>Earnings</p>
                </div>
                <div>
                  <p className="text-lg">$85.222,00</p>
                </div>
              </div>
              <div className="w-36 h-14 bg-gray-100 rounded-xl">
                <div>
                  <p>Expenses</p>
                </div>
                <div>
                  <p className="text-lg">-$52.150,00</p>
                </div>
              </div>
            </div>
            <div className="statistics-card-bottom">
              <div className="label">
                <div className="label">
                  <div className="label-earnings"></div>
                  <div>
                    <p>Earnings</p>
                  </div>
                </div>
                <div className="label">
                  <div className="label-expenses"></div>
                  <div>
                    <p>Expenses</p>
                  </div>
                </div>
              </div>
              <div className="date-picker">
            
              <DatePicker className="select  select-sm w-20 max-w-xs date" placeholderText="Year"  selected={selectedDate} onChange={date => setSelectedDate(date)} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-3xl h-96 bg-gray-100 overflow-hidden">
        <div>
      <div>
      <div>
        <div>
          <p className="text-4xl mt-8">Card</p>
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do.
          </p>
        </div>
      </div>

    
    </div>
      <div className="flex gap-11 justify-between justify-items-end ">
        
        <div className="relative h-96 w-96">
          <div className="absolute top-16 -left-56 h-96 rotate-90"><BlackCard/></div>
          
        </div>

        <div className="relative h-96 w-96">
          <div className="absolute top-2 -left-48 h-96 rotate-90"><BlueCard/></div>
          
        </div>
       
        <div className="relative h-96 w-96">
          <div className="absolute top-16 -left-32 h-96 rotate-90"><GoldCard/></div>
          
        </div>
      </div>
    </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 mt-8">
        <div className="all-features-last-part">
          <div className="all-features-last-part-card1">
            <div className="card-title"><h3 >Easy integration</h3></div>
            <div className="card-detail"><p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
          </div>
          <div className="card-svg">
            <div className="card-svg-part1">
            <div><Webflow/></div>
            <div><Shopify/></div>
            <div><Zapier/></div>
            </div>
            <div className="card-svg-part2">
            <div><Paypal/></div>
            <div><MasterCard2/></div>
            <div><Visa2/></div>
            <div><Google/></div>
            </div>
            <div className="card-svg-part3">
            <div><Apple/></div>
            <div><Amazon/></div>
            <div><Bitcoin/></div>
            </div>
          </div>
        </div>
        <div className="all-features-last-part">
          <div className="all-features-last-part-card2">
            <div className="card-title"><h3>Saving accounts</h3></div>
            <div className="card-detail"><p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
          </div>
          <div className="card2-svg">
            <div className="card2-svg-part1">
              <div>
                <Laptop/>
              </div>
              <div>
                <h2 className="item-name">New Laptop</h2>
                <p className="item-price">400$</p>
              </div>
            </div>
            <div className="card2-svg-part2">
              <div>
                <Bike/>
              </div>
              <div>
                <h2 className="item-name">Dream bike</h2>
                <p className="item-price">200$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="all-features-last-part">
          <div>
            <div className="card-title"><h2>Instant transactions</h2></div>
            <div className="card-detail"><p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
            
          </div>
          <div>
          <div className="mobile-item1">
             <div>
                <AppleLogo/>
              </div>
              <div>
                <p className="mobile-item-title">Apple</p>
                <p className="mobile-item-about">Electronic</p>
              </div>
              <div>
                <p className="mobile-item-price">-799$</p>
              </div>
            </div>
            <div className="mobile-item1">
             <div><AmazonLogo/></div>
              <div>
                <p className="mobile-item-title">Amazon</p>
                <p className="mobile-item-about">Shopping</p>
              </div>
              <div>
                <p className="mobile-item-price">-799$</p>
              </div>
            </div>
            <div className="mobile-item1">
             <div><GoogleLogo/></div>
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
