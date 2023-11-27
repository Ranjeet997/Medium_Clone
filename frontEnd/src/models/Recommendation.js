import { React, useState } from "react";
import FollowingCard from "./recommendationcard/FollowingCard";
import Muted from "./recommendationcard/Muted";
import ReadingHis from "./recommendationcard/ReadingHis";
import Suggestion from "./recommendationcard/Suggestion";

export default function Recommendation() {
  const [textColor_1, setTextColor_1] = useState("black");
  const [textColor_2, setTextColor_2] = useState("stone-500");
  const [textColor_3, setTextColor_3] = useState("stone-500");
  const [textColor_4, setTextColor_4] = useState("stone-500");

  const [displayDiv_1, setDisplayDiv_1] = useState("block");
  const [displayDiv_2, setDisplayDiv_2] = useState("hidden");
  const [displayDiv_3, setDisplayDiv_3] = useState("hidden");
  const [displayDiv_4, setDisplayDiv_4] = useState("hidden");

  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-[65%] 2xl:pl-[5.5rem] lg:border-r lg:h-[45rem] mx-6 mb-[5rem] lg:mb-0 md:mx-[4.5rem] lg:mx-0 lg:px-5 xl:px-[5rem] 2xl:ml-[6.7rem]">
          <div className="d:flex items-center justify-between user-name md:my-4 mt-7 md:my-[3rem]">
            <p className="text-[1.4rem] md:text-[2.6rem] font-bold font-dm-sans tracking-tight">
              Refine recommendations
            </p>
            <p className="text-[.86rem] text-gray-500 font-medium tracking-tight my-3 leading-5">Adjust recommendations by updating what you’re following, your reading history, and who you’ve muted.</p>
          </div>
          <div className="text-[.9rem] bg-white font-medium items-center border-b space-x-10 mt-5 py-4">
            <span
              className={`text-${textColor_1} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("block");
                setDisplayDiv_2("hidden");
                setDisplayDiv_3("hidden");
                setDisplayDiv_4("hidden");
                setTextColor_1("black");
                setTextColor_2("stone-500");
                setTextColor_3("stone-500");
                setTextColor_4("stone-500");
              }}
            >
              Following
            </span>
            <span
              className={`text-${textColor_2} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("hidden");
                setDisplayDiv_2("block");
                setDisplayDiv_3("hidden");
                setDisplayDiv_4("hidden");
                setTextColor_1("stone-500");
                setTextColor_2("black");
                setTextColor_3("stone-500");
                setTextColor_4("stone-500");
              }}
            >
              Reading history
            </span>
            <span
              className={`text-${textColor_3} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("hidden");
                setDisplayDiv_2("hidden");
                setDisplayDiv_3("block");
                setDisplayDiv_4("hidden");
                setTextColor_1("stone-500");
                setTextColor_2("stone-500");
                setTextColor_3("black");
                setTextColor_4("stone-500");
              }}
            >
              Muted
            </span>

            <span
              className={`text-${textColor_4} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("hidden");
                setDisplayDiv_2("hidden");
                setDisplayDiv_3("hidden");
                setDisplayDiv_4("block");
                setTextColor_1("stone-500");
                setTextColor_2("stone-500");
                setTextColor_3("stone-500");
                setTextColor_4("black");
              }}
            >
              Suggestions
            </span>
          </div>
          <div
            className={`${displayDiv_1} border-b border-black w-[3.7rem] relative bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_2} border-b border-black w-[6rem] relative left-[6.7rem] bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_3} border-b border-black w-[2.7rem] relative left-[12rem] bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_4} border-b border-black w-[6rem] relative left-[12rem] bottom-[.1rem]`}
          ></div>
          <div className={`${displayDiv_1} `}>
            <FollowingCard />
          </div>
          <div className={`${displayDiv_2}`}>
            <ReadingHis />
          </div>
          <div className={`${displayDiv_3} `}>
            <Muted />
          </div>
          <div className={`${displayDiv_4} `}>
            <Suggestion />
          </div>
        </div>

        <div className="hidden lg:block w-[35%] lg:px-5 xl:px-[2.5rem] 2xl:px-[2.5rem] py-[2.5rem] font-dm-sans h-full sticky top-0">
          <div className="to-follow font-dm-sans">
            <div className="">
              <p className="text-lg lg:text-[1rem] xl:text-md font-semibold my-4">
                Who to follow
              </p>
            </div>

            {/* multiple div */}
            <div className="flex my-3">
              <div className="img">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[2rem] h-[2rem] rounded-full mt-1.5"
                />
              </div>

              <div className="head ml-3">
                <p className="text-lg lg:text-[1rem] xl:text-md font-bold">
                  M.G Siegler
                </p>
                <p className="text-gray-500 lg:text-[.82rem] xl:text-md w-[12rem]">
                  Writer turned investor turned investor...
                </p>
              </div>

              <div className="btn lg:text-[.82rem] 2xl:text-md mt-7 ml-1">
                <a
                  href="#/"
                  className="border border-stone-400 rounded-full px-4 py-2 lg:px-3 lg:py-1.5"
                >
                  Follow
                </a>
              </div>
            </div>

            <div className="flex my-3">
              <div className="img">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[2rem] h-[2rem]  rounded-full mt-1.5"
                />
              </div>

              <div className="head ml-3">
                <p className="text-lg lg:text-[1rem] xl:text-md font-bold">
                  Robert Roy Britt
                </p>
                <p className="text-gray-500 lg:text-[.82rem] xl:text-md">
                  Independent jourlist covering...
                </p>
              </div>

              <div className="btn lg:text-[.82rem] 2xl:text-md mt-7 ml-3">
                <a
                  href="#/"
                  className="border border-stone-400 rounded-full px-4 py-2 lg:px-3 lg:py-1.5"
                >
                  Follow
                </a>
              </div>
            </div>

            <div className="flex my-1">
              <div className="img">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[2rem] h-[2rem] rounded-full mt-1.5"
                />
              </div>

              <div className="head ml-3">
                <p className="text-lg lg:text-[1rem] xl:text-md font-bold">
                  Will Leitch
                </p>
                <p className="text-gray-500 lg:text-[.82rem] xl:text-md">
                  I write about a week....
                </p>
              </div>

              <div className="btn lg:text-[.82rem] 2xl:text-md mt-7 ml-3">
                <a
                  href="#/"
                  className="border border-stone-400 rounded-full px-4 py-2 lg:px-3 lg:py-1.5"
                >
                  Follow
                </a>
              </div>
            </div>
            <div className="text-[.9rem] text-green-700 font-medium mt-7">
              <a href="#/">See more suggestions</a>
            </div>
          </div>

          <div className="text fixed bottom-0">
            <p className="text-sm text-stone-500 w-[19rem] text-[.77rem] leading-4 my-6">
              Help Status Writers Blog Careers Privacy Terms About Text to
              speech
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
