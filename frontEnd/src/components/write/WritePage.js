import { React, useState } from "react";
import ContentCard from "./ContentCard";

export default function WritePage() {
    const [textColor_1, setTextColor_1] = useState("black");
  const [textColor_2, setTextColor_2] = useState("stone-400");

  const [displayDiv_1, setDisplayDiv_1] = useState("block");
  const [displayDiv_2, setDisplayDiv_2] = useState("hidden");

  const handleOnChange = () => {
    if (
      displayDiv_1 === "block" &&
      displayDiv_2 === "hidden" &&
      textColor_1 === "black" &&
      textColor_2 === "stone-400"
    ) {
      setDisplayDiv_1("hidden");
      setDisplayDiv_2("block");
      setTextColor_1("stone-400");
      setTextColor_2("black");
    } else {
      setDisplayDiv_1("block");
      setDisplayDiv_2("hidden");
      setTextColor_1("black");
      setTextColor_2("stone-400");
    }
  };
  return (
    <div>
        <div className="main-Box flex font-roboto">
        <div className="pluse-icon lg:w-[64%] flex justify-evenly lg:justify-between 2xl:justify-evenly lg:px-[1.5rem] 2xl:pl-[6rem] md:mx-2">
          <div className="w-[84%] lg:w-[85rem] 2xl:w-[79%]">
            <div className="header sticky top-0 bg-white items-center border-b space-x-10 mt-5 py-4 pl-1">
              <span>
                <i className="bi bi-plus-lg text-[1.2rem] text-gray-400 pt-2"></i>
              </span>
              <span
                className={`text-${textColor_1} font-dm-sans`}
                onClick={handleOnChange}
              >
                For you
              </span>
              <span
                className={`text-${textColor_2} font-dm-sans`}
                onClick={handleOnChange}
              >
                Following
              </span>
            </div>
            <div
              className={`${displayDiv_1} border-b border-black w-[3.3rem] relative left-[3.9rem] bottom-[.1rem]`}
            ></div>
            <div
              className={`${displayDiv_2} border-b border-black w-[4.2rem] relative left-[9.8rem] bottom-[.1rem]`}
            ></div>
            <div className={`${displayDiv_1}`}>
              <ContentCard />
            </div>
            <div className={`${displayDiv_2}`}>
              <ContentCard />
            </div>
          </div>
        </div>

        <div className="h-full sticky top-[-60rem] hidden lg:block border-l w-[36%] 2xl:w-[40rem] pt-11 px-10 lg:px-6">
          <div className="w-[68%] lg:w-[19rem]">
            <div className="btm mb-8 lg:hidden">
              <button
                className="bg-stone-800 text-white font-normal font-satoshi rounded-full py-2 w-[20.5rem]"
                type="submit"
              >
                Get unlimited access
              </button>
            </div>
            <div className="text">
              <div className="">
                <p className="text-lg lg:text-[1rem] xl:text-lg">
                  What We're Reading: Black History Month
                </p>
              </div>

              {/* reapeted div start */}
              <div className="my-5">
                <div className="head flex items-center my-2">
                  <img
                    src="./images/profile_img.png"
                    alt=""
                    className="w-[1.5rem] h-[1.5rem] rounded-full"
                  />
                  <p className="text-sm font-semibold mx-2">
                    Chris Dixon in OneZero
                  </p>
                </div>
                <p className="text-lg lg:text-[1rem] xl:text-lg font-bold my-2.5">
                  My Grandpops, Richard Wright, and the Chicago Post Office
                </p>
              </div>

              <div className="my-5">
                <div className="head flex items-center my-2">
                  <img
                    src="./images/profile_img.png"
                    alt=""
                    className="w-[1.5rem] h-[1.5rem] rounded-full"
                  />
                  <p className="text-sm font-semibold mx-2">
                    Chris Dixon in OneZero
                  </p>
                </div>
                <p className="text-lg lg:text-[1rem] xl:text-lg font-bold my-2.5">
                  My Grandpops, Richard Wright, and the Chicago Post Office
                </p>
              </div>

              <div className="my-5">
                <div className="head flex items-center my-2">
                  <img
                    src="./images/profile_img.png"
                    alt=""
                    className="w-[1.5rem] h-[1.5rem] rounded-full"
                  />
                  <p className="text-sm font-semibold mx-2">
                    Chris Dixon in OneZero
                  </p>
                </div>
                <p className="text-lg lg:text-[1rem] xl:text-lg font-bold my-2.5">
                  My Grandpops, Richard Wright, and the Chicago Post Office
                </p>
              </div>
              {/* reapeted div end */}
              <div className="">
                <p className="text-sm text-green-700">See the full list</p>
              </div>

              <div className="twitter-card text-center flex justify-center">
                <div className="w-50 border-b px-8 py-8">
                  <div className="flex justify-center items-center my-3">
                    <span>
                      <img src="./images/logo.png" alt="" className="w-12" />
                    </span>
                    <span>
                      <i className="bi bi-plus-lg text-2xl"></i>
                    </span>
                    <span>
                      <i className="bi bi-twitter text-2xl text-sky-400"></i>
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <h1 className="text-lg lg:text-[1rem] xl:text-lg">
                      Discover Medium writers you already follow on Twitter.
                    </h1>
                  </div>
                  <div className="btn my-6 font-semibold">
                    <a
                      href="#/"
                      className="border border-stone-400 rounded-full px-7 py-2.5"
                    >
                      <i className="bi bi-twitter text-2xl lg:text-xl xl:text-2xl text-sky-400 mr-3"></i>
                      Connect to Twitter
                    </a>
                  </div>
                  <div className="lg:text-sm xl:text-md">
                    <a href="#/" className="underline text-gray-500">Maybe Later</a>
                  </div>
                </div>
              </div>

              <div className="my-10">
                <p className="heading text-lg lg:text-[1rem] xl:text-lg font-semibold my-4">
                  Recommended topics
                </p>

                <div className="topics flex flex-wrap gap-3 lg:text-sm 2xl:text-md lg:font-normal font-semibold">
                  <div className="">
                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                      Programming
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                      Data Science
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                      Technology
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                      Self Improvement
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                      Writing
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                      Relatiomship
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                      Machine Learning
                    </button>
                  </div>
                </div>
              </div>

              <div className="to-folow">
                <div className="">
                  <p className="text-lg lg:text-[1rem] xl:text-lg font-semibold my-4">
                    Who to follow
                  </p>
                </div>

                {/* multiple div */}
                <div className="flex my-3">
                  <div className="img w-20 lg:w-10 2xl:w-14">
                    <img
                      src="./images/profile_img.png"
                      alt=""
                      className="w-[2rem] h-[2rem] rounded-full mt-1.5"
                    />
                  </div>

                  <div className="head">
                    <p className="text-lg lg:text-[1rem] xl:text-lg font-bold mb-1">
                      M.G Siegler
                    </p>
                    <p className="text-gray-500 lg:text-sm xl:text-md">
                      Writer turned investor turned investor...
                    </p>
                  </div>

                  <div className="btn lg:text-sm 2xl:text-md mt-7 ml-3">
                    <a
                      href="#/"
                      className="border border-stone-400 rounded-full px-4 py-2 lg:px-3 lg:py-1.5"
                    >
                      Follow
                    </a>
                  </div>
                </div>

                <div className="flex my-3">
                  <div className="img w-20 lg:w-10 2xl:w-14">
                    <img
                      src="./images/profile_img.png"
                      alt=""
                      className="w-[2rem] h-[2rem]  rounded-full mt-1.5"
                    />
                  </div>

                  <div className="head">
                    <p className="text-lg lg:text-[1rem] xl:text-lg font-bold mb-1">
                      Robert Roy Britt
                    </p>
                    <p className="text-gray-500 lg:text-sm xl:text-md">
                      Independent jourlist covering...
                    </p>
                  </div>

                  <div className="btn lg:text-sm 2xl:text-md mt-7 ml-3">
                    <a
                      href="#/"
                      className="border border-stone-400 rounded-full px-4 py-2 lg:px-3 lg:py-1.5"
                    >
                      Follow
                    </a>
                  </div>
                </div>

                <div className="flex my-1">
                  <div className="img w-20 lg:w-10 2xl:w-14">
                    <img
                      src="./images/profile_img.png"
                      alt=""
                      className="w-[2rem] h-[2rem] rounded-full mt-1.5"
                    />
                  </div>

                  <div className="head">
                    <p className="text-lg lg:text-[1rem] xl:text-lg font-bold mb-1">
                      Will Leitch
                    </p>
                    <p className="text-gray-500 lg:text-sm xl:text-md">
                      I write about a week....
                    </p>
                  </div>

                  <div className="btn lg:text-sm 2xl:text-md mt-7 ml-3">
                    <a
                      href="#/"
                      className="border border-stone-400 rounded-full px-4 py-2 lg:px-3 lg:py-1.5"
                    >
                      Follow
                    </a>
                  </div>
                </div>
                {/* multiple div */}

                <div className="my-10 font-semibold">
                  <p className="text-green-600">See more suggestions</p>
                </div>

                <div className="my-7">
                  <div className="head-section">
                    <p className="text-lg lg:text-[1rem] xl:text-lg text-stone-600 font-bold">
                      Reading list
                    </p>
                  </div>
                  <div className="text-div text-stone-400 my-5">
                    <p>
                      Click the <i className="bi bi-bookmark-plus"></i> on any story
                      to easily add it to your reading list or a custom list
                      that you can share.
                    </p>
                  </div>
                  <div className="mr-3">
                    <p className="text-sm text-stone-400">
                      Help Status Writers Blog Careers Privacy Terms About Text
                      to speech
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
