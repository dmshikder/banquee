import React from "react";
import AmazonLogo from "../SVG/AmazonLogo";
import AppleLogo from "../SVG/AppleLogo";
import ArrowLeft from "../SVG/ArrowLeft";
import ArrowRight from "../SVG/ArrowRight";
import BlackCard from "../SVG/BlackCard";
import BlueCard from "../SVG/BlueCard";
import Details from "../SVG/Details";
import GoldCard from "../SVG/GoldCard";
import GoogleLogo from "../SVG/GoogleLogo";
import Lock from "../SVG/Lock";
import Mark from "../SVG/Mark";
import Question from "../SVG/Question";
import Receive from "../SVG/Receive";
import Send from "../SVG/Send";
import Settings from "../SVG/Settings";
import TwitterLogo from "../SVG/TwitterLogo";
import MobileButton from "./MobileButton/MobileButton";

const Features = () => {
  return (
    <div>
      <div className="pt-40  flex items-center gap-44 mx-60">
        <div className="flex flex-col items-start">
          <p className="text-lg">Transactions</p>
          <p className="text-5xl text-left">Send & receive money instantly </p>
          <p className="text-lg text-left pb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="flex flex-col items-start gap-3">
            <div className="flex flex-row items-center justify-center gap-4">
              <div>
                <Mark />
              </div>
              <div>
                <p>Malesuada Ipsum</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div>
                <Mark />
              </div>
              <div>
                <p>Vestibulum</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div>
                <Mark />
              </div>
              <div>
                <p>Parturient Lorem</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full border-8 rounded-3xl border-black">
          <div>
            <div className="flex flex-row items-center justify-around pt-8 pb-5">
              <p className="text-base leading-6">Current balance</p>
              <p className="balance text-lg leading-8 tracking-wider">
                $4.658,50
              </p>
            </div>
            <div className="mx-3">
              <BlackCard />
            </div>
          </div>

          <div className="flex flex-row justify-evenly pt-4 pb-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <div>
                <Send />
              </div>
              <div className="text-xs">
                <p>Send Money</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div>
                <Receive />
              </div>
              <div className="text-xs">
                <p>Receive Money</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around pb-4">
            <div>
              <p className="text-base">Transactions</p>
            </div>
            <div className="text-silverTree flex flex-row items-center gap-2">
              <div>
                <p>View all</p>
              </div>
              <div>
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row items-center mx-4 gap-40">
              <div className="flex flex-row gap-4">
                <div>
                  <AppleLogo />
                </div>
                <div className="flex flex-col items-start">
                  <p>Apple</p>
                  <p>Electronic</p>
                </div>
              </div>
              <div className="-mx-7">
                <p>-799$</p>
              </div>
            </div>
            <div className="flex mx-4 flex-row items-center gap-36">
              <div className="flex flex-row gap-4">
                <div>
                  <GoogleLogo />
                </div>
                <div className="flex flex-col items-start">
                  <p>Google Play Store</p>
                  <p>Apps</p>
                </div>
              </div>
              <div className="-mx-16">
                <p>-49$</p>
              </div>
            </div>
            <div className="flex mx-4 flex-row items-center  gap-40">
              <div className="flex flex-row gap-4">
                <div>
                  <AmazonLogo />
                </div>
                <div className="flex flex-col items-start">
                  <p>Amazon</p>
                  <p>Shopping</p>
                </div>
              </div>
              <div className="-mx-4">
                <p>-59$</p>
              </div>
            </div>
            <div className="flex mx-4 flex-row items-center gap-52">
              <div className="flex flex-row gap-4">
                <div>
                  <TwitterLogo />
                </div>
                <div className="flex flex-col items-start">
                  <p>Twitter</p>
                  <p className="mobile-item-about">Ads</p>
                </div>
              </div>
              <div className="-mx-9">
                <p>-9$</p>
              </div>
            </div>
          </div>
          <div className="mb-6 mt-6">
            <MobileButton />
          </div>
        </div>
      </div>

      {/* feautures 2nd part */}

      <div className="pt-40  flex items-center gap-44 mx-60">
        <div className="feature-point flex flex-col items-start gap-3">
          <p className="text-lg">Cards</p>
          <p className="text-6xl">Manage your cards</p>
          <p className="text-lg text-left pb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet
          </p>
          <div className="flex flex-col items-start gap-3">
            <div className="flex flex-row items-center justify-center gap-4">
              <div>
                <Mark />
              </div>
              <div>
                <p>Malesuada Ipsum</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div>
                <Mark />
              </div>
              <div>
                <p>Vestibulum</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div>
                <Mark />
              </div>
              <div>
                <p>Parturient Lorem</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-full border-8 rounded-3xl border-black">
          <div>
            <div className="flex flex-row justify-evenly pt-10 pb-7">
              <div>
                <ArrowLeft />
              </div>
              <div>
                <p>Cards </p>
              </div>
              <div>
                <Question />
              </div>
            </div>
            <div className="mx-3">
              <BlackCard />
            </div>
          </div>

          <div className="flex flex-row justify-evenly mt-6 gap-4">
            <div className="flex flex-col items-center">
              <div>
                <Details />
              </div>
              <div>Details</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Lock />
              </div>
              <div>Lock Card</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Settings />
              </div>
              <div>Setings</div>
            </div>
          </div>
          <div>
            <p className="text-lg mt-10 mb-4">All Cards</p>
          </div>

          {/* two card */}

          <div>
            <div>
              <div className="mx-3">
                <GoldCard />
              </div>

              <div className="-mt-28 relative mb-5 mx-3">
                <BlueCard />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <MobileButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
