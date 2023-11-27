import { React, useState } from "react";
import Responses from "./statscomponenerts/Responses";
import Series from "./statscomponenerts/Series";
import Stories from "./statscomponenerts/Stories";
import Stories1 from "./statscomponenerts/Stories1";

export default function Stats() {
    const [textColor_1, setTextColor_1] = useState("black");
    const [textColor_2, setTextColor_2] = useState("stone-500");
    const [textColor_3, setTextColor_3] = useState("stone-500");
  
    const [displayDiv_1, setDisplayDiv_1] = useState("block");
    const [displayDiv_2, setDisplayDiv_2] = useState("hidden");
    const [displayDiv_3, setDisplayDiv_3] = useState("hidden");
  return (
    <>
      <div className="mx-5 xl:mx-[8rem] 2xl:mx-[16rem]">
        <div className="mt-2.5 pb-[4rem] 2xl:mt-[4rem] pb-4 border-b">
          <div className="flex items-center justify-between user-name">
            <p className="text-[1.4rem] md:text-[2.3rem] font-bold font-dm-sans tracking-tight">
              Your stats
            </p>
            <div className="tracking-tight">
              <a href="#/" className="text-[.9rem] text-stone-500 font-dm-sans rounded-full cursor-pointer px-3 2xl:px-4 py-2 border border-stone-300 hover:border-stone-500">
                Audience stats
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between font-dm-sans text-gray-500 font-medium mt-7 tracking-tight">
            <p className="text-[1.rem] md:text-[1.1rem]">
              Click story below to view detailed stats
            </p>
            <div className="tracking-tight">
              <p className="text-[1.rem] md:text-[1rem]">
                Learn more about using stats
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-8">
          <div className="tracking-tighter px-4 pb-4 text-stone-300 hover:text-stone-600 border-b">
            <p className="text-[1.rem] md:text-[2.3rem] font-bold font-raleway">
              0
            </p>
            <div className="font-bold font-dm-sans">
              <p className="text-[1rem] md:text-[1.1rem]">Views</p>
              <p className="text-[.9rem] hidden md:block">(30 days)</p>
            </div>
          </div>

          <div className="tracking-tighter border-l border-b border-r px-4 text-stone-300 hover:text-stone-600">
            <p className="text-[1.rem] md:text-[2.3rem] font-bold font-raleway">
              0
            </p>
            <div className="font-bold font-dm-sans">
              <p className="text-[1.rem] md:text-[1.1rem]">Views</p>
              <p className="text-[.9rem] hidden md:block">(30 days)</p>
            </div>
          </div>

          <div className="tracking-tighter border-b px-4 text-stone-300 hover:text-stone-600">
            <p className="text-[1.rem] md:text-[2.3rem] font-bold font-raleway">
              0
            </p>
            <div className="font-bold font-dm-sans">
              <p className="text-[1.rem] md:text-[1.1rem]">Views</p>
              <p className="text-[.9rem] hidden md:block">(30 days)</p>
            </div>
          </div>
        </div>

        <div className="text-[.9rem] bg-white font-medium items-center border-b space-x-4 lg:space-x-10 mt-5 py-4">
            <span
              className={`text-${textColor_1} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("block");
                setDisplayDiv_2("hidden");
                setDisplayDiv_3("hidden");
                setTextColor_1("black");
                setTextColor_2("stone-500");
                setTextColor_3("stone-500");
              }}
            >
              Stories
            </span>
            <span
              className={`text-${textColor_2} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("hidden");
                setDisplayDiv_2("block");
                setDisplayDiv_3("hidden");
                setTextColor_1("stone-500");
                setTextColor_2("black");
                setTextColor_3("stone-500");
              }}
            >
              Responses
            </span>
            <span
              className={`text-${textColor_3} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("hidden");
                setDisplayDiv_2("hidden");
                setDisplayDiv_3("block");
                setTextColor_1("stone-500");
                setTextColor_2("stone-500");
                setTextColor_3("black");
              }}
            >
              Series
            </span>

          </div>

          <div
            className={`${displayDiv_1} md:border-b border-black w-[2.8rem] relative bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_2} md:border-b border-black w-[4.3rem] relative left-[5.6rem] bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_3} md:border-b border-black w-[2.5rem] relative left-[12.6rem] bottom-[.1rem]`}
          ></div>
          <div className={`${displayDiv_1}`}>
              <div className="hidden lg:block">
            <Stories />
            </div>
            <div className="lg:hidden">
                <Stories1/>
            </div>
          </div>
          <div className={`${displayDiv_2}`}>
            <Responses />
          </div>
          <div className={`${displayDiv_3}`}>
              <Series/>
          </div>
      </div>
    </>
  );
}
