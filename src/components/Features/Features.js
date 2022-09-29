import React from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../SVG/ArrowLeft";
import BlackCard from "../SVG/BlackCard";
import BlueCard from "../SVG/BlueCard";
import Details from "../SVG/Details";
import GoldCard from "../SVG/GoldCard";
import Lock from "../SVG/Lock";
import Mark from "../SVG/Mark";
import Question from "../SVG/Question";
import Receive from "../SVG/Receive";
import Send from "../SVG/Send";
import Settings from "../SVG/Settings";
import "./Features.css";
import MobileButton from "./MobileButton/MobileButton";

const Features = () => {
  return (
    <div>
      <div className="features">
        <div className="feature-point">
          <p className="transaction-text">Transactions</p>
          <p className="transaction-title">Send & receive money instantly </p>
          <p className="transaction-details">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="all-points">
            <div className="point">
             <div><Mark/></div>
              <div>
                <p>Malesuada Ipsum</p>
              </div>
            </div>
            <div className="point">
            <div><Mark/></div>
              <div>
                <p>Vestibulum</p>
              </div>
            </div>
            <div className="point">
            <div><Mark/></div>
              <div>
                <p>Parturient Lorem</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <div>
            <div className="current-balance-status">
              <p className="current-balance">Current balance</p>
              <p className="balance">$4.658,50</p>
            </div>
            <div>
              <BlackCard />
            </div>
          </div>

          <div className="mobile-send-receive-money">
            <div className="point">
              <div>
                <Send/>
              </div>
              <div className="send-receive-money">
                <p>Send Money</p>
              </div>
            </div>
            <div className="point">
              <div>
                <Receive/>
              </div>
              <div>
                <p>Receive Money</p>
              </div>
            </div>
          </div>
          <div className="mobile-transactions">
            <div>
              <p className="transaction">Transactions</p>
            </div>
            <div className="view">
              <Link to="#">
                View all <span>→</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="mobile-item">
              <div>
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.653381"
                    y="0.5"
                    width="40"
                    height="40"
                    rx="6"
                    fill="#5BB5A2"
                  />
                  <path
                    d="M20.3087 16.1201C19.5057 16.1201 18.2627 15.2071 16.9537 15.2401C15.2267 15.2621 13.6427 16.2411 12.7517 17.7921C10.9587 20.9051 12.2897 25.5031 14.0387 28.0331C14.8967 29.2651 15.9087 30.6511 17.2507 30.6071C18.5377 30.5521 19.0217 29.7711 20.5837 29.7711C22.1347 29.7711 22.5747 30.6071 23.9387 30.5741C25.3247 30.5521 26.2047 29.3201 27.0517 28.0771C28.0307 26.6471 28.4377 25.2611 28.4597 25.1841C28.4267 25.1731 25.7647 24.1501 25.7317 21.0701C25.7097 18.4961 27.8327 17.2641 27.9317 17.2091C26.7217 15.4381 24.8627 15.2401 24.2137 15.1961C22.5197 15.0641 21.1007 16.1201 20.3087 16.1201V16.1201ZM23.1687 13.5241C23.8837 12.6661 24.3567 11.4671 24.2247 10.2791C23.2017 10.3231 21.9697 10.9611 21.2327 11.8191C20.5727 12.5781 20.0007 13.7991 20.1547 14.9651C21.2877 15.0531 22.4537 14.3821 23.1687 13.5241V13.5241Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="mobile-item-title">Apple</p>
                <p className="mobile-item-about">Electronic</p>
              </div>
              <div>
                <p className="mobile-item-price">-799$</p>
              </div>
            </div>
            <div className="mobile-item">
              <div>
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.653381"
                    y="0.5"
                    width="40"
                    height="40"
                    rx="6"
                    fill="#5BB5A2"
                  />
                  <path
                    d="M20.3087 16.1201C19.5057 16.1201 18.2627 15.2071 16.9537 15.2401C15.2267 15.2621 13.6427 16.2411 12.7517 17.7921C10.9587 20.9051 12.2897 25.5031 14.0387 28.0331C14.8967 29.2651 15.9087 30.6511 17.2507 30.6071C18.5377 30.5521 19.0217 29.7711 20.5837 29.7711C22.1347 29.7711 22.5747 30.6071 23.9387 30.5741C25.3247 30.5521 26.2047 29.3201 27.0517 28.0771C28.0307 26.6471 28.4377 25.2611 28.4597 25.1841C28.4267 25.1731 25.7647 24.1501 25.7317 21.0701C25.7097 18.4961 27.8327 17.2641 27.9317 17.2091C26.7217 15.4381 24.8627 15.2401 24.2137 15.1961C22.5197 15.0641 21.1007 16.1201 20.3087 16.1201V16.1201ZM23.1687 13.5241C23.8837 12.6661 24.3567 11.4671 24.2247 10.2791C23.2017 10.3231 21.9697 10.9611 21.2327 11.8191C20.5727 12.5781 20.0007 13.7991 20.1547 14.9651C21.2877 15.0531 22.4537 14.3821 23.1687 13.5241V13.5241Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="mobile-item-title">Google Play Store</p>
                <p className="mobile-item-about">Apps</p>
              </div>
              <div>
                <p className="mobile-item-price">-49$</p>
              </div>
            </div>
            <div className="mobile-item">
              <div>
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.653381"
                    y="0.5"
                    width="40"
                    height="40"
                    rx="6"
                    fill="#5BB5A2"
                  />
                  <path
                    d="M20.3087 16.1201C19.5057 16.1201 18.2627 15.2071 16.9537 15.2401C15.2267 15.2621 13.6427 16.2411 12.7517 17.7921C10.9587 20.9051 12.2897 25.5031 14.0387 28.0331C14.8967 29.2651 15.9087 30.6511 17.2507 30.6071C18.5377 30.5521 19.0217 29.7711 20.5837 29.7711C22.1347 29.7711 22.5747 30.6071 23.9387 30.5741C25.3247 30.5521 26.2047 29.3201 27.0517 28.0771C28.0307 26.6471 28.4377 25.2611 28.4597 25.1841C28.4267 25.1731 25.7647 24.1501 25.7317 21.0701C25.7097 18.4961 27.8327 17.2641 27.9317 17.2091C26.7217 15.4381 24.8627 15.2401 24.2137 15.1961C22.5197 15.0641 21.1007 16.1201 20.3087 16.1201V16.1201ZM23.1687 13.5241C23.8837 12.6661 24.3567 11.4671 24.2247 10.2791C23.2017 10.3231 21.9697 10.9611 21.2327 11.8191C20.5727 12.5781 20.0007 13.7991 20.1547 14.9651C21.2877 15.0531 22.4537 14.3821 23.1687 13.5241V13.5241Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="mobile-item-title">Amazon</p>
                <p className="mobile-item-about">Shopping</p>
              </div>
              <div>
                <p className="mobile-item-price">-59$</p>
              </div>
            </div>
            <div className="mobile-item">
              <div>
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.653381"
                    y="0.5"
                    width="40"
                    height="40"
                    rx="6"
                    fill="#5BB5A2"
                  />
                  <path
                    d="M20.3087 16.1201C19.5057 16.1201 18.2627 15.2071 16.9537 15.2401C15.2267 15.2621 13.6427 16.2411 12.7517 17.7921C10.9587 20.9051 12.2897 25.5031 14.0387 28.0331C14.8967 29.2651 15.9087 30.6511 17.2507 30.6071C18.5377 30.5521 19.0217 29.7711 20.5837 29.7711C22.1347 29.7711 22.5747 30.6071 23.9387 30.5741C25.3247 30.5521 26.2047 29.3201 27.0517 28.0771C28.0307 26.6471 28.4377 25.2611 28.4597 25.1841C28.4267 25.1731 25.7647 24.1501 25.7317 21.0701C25.7097 18.4961 27.8327 17.2641 27.9317 17.2091C26.7217 15.4381 24.8627 15.2401 24.2137 15.1961C22.5197 15.0641 21.1007 16.1201 20.3087 16.1201V16.1201ZM23.1687 13.5241C23.8837 12.6661 24.3567 11.4671 24.2247 10.2791C23.2017 10.3231 21.9697 10.9611 21.2327 11.8191C20.5727 12.5781 20.0007 13.7991 20.1547 14.9651C21.2877 15.0531 22.4537 14.3821 23.1687 13.5241V13.5241Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="mobile-item-title">Twitter</p>
                <p className="mobile-item-about">Ads</p>
              </div>
              <div>
                <p className="mobile-item-price">-9$</p>
              </div>
            </div>
          </div>
          <div>
            <MobileButton />
          </div>
        </div>
      </div>

      {/* feautures 2nd part */}

      <div className="features">
        <div className="feature-point">
          <p className="transaction-text">Cards</p>
          <p className="transaction-title">Manage your cards</p>
          <p className="transaction-details">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet
          </p>
          <div className="all-points">
            <div className="point">
            <div><Mark/></div>
              <div>
                <p>Malesuada Ipsum</p>
              </div>
            </div>
            <div className="point">
            <div><Mark/></div>
              <div>
                <p>Vestibulum</p>
              </div>
            </div>
            <div className="point">
            <div><Mark/></div>
              <div>
                <p>Parturient Lorem</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <div>
            <div className="mobile-top">
            <div><ArrowLeft/></div>
              <div>
                <p>Cards </p>
              </div>
              <div><Question/></div>
            </div>
            <div>
              <BlackCard />
            </div>
          </div>

          <div className="features-part-2-mobile-frame-196-full">
            <div className="features-part-2-mobile-frame-196">
              <div><Details/></div>
              <div>Details</div>
            </div>
            <div className="features-part-2-mobile-frame-196">
             <div><Lock/></div>
              <div>Lock Card</div>
            </div>
            <div className="features-part-2-mobile-frame-196">
              <div><Settings/></div>
              <div>Setings</div>
            </div>
          </div>
          <div>
            <p className="all-cards">All Cards</p>
          </div>

          {/* two card */}

          <div>
            <div className="mobile-card-part-2">
              <div>
                <GoldCard />
              </div>
              
              <div className="blue-card-part-2 ">
                <BlueCard/>


              </div>
            </div>
          </div>
          <div>
            <MobileButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
