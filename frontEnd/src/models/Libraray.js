import { React, useState } from "react";

export default function Library() {
  const [textColor_1, setTextColor_1] = useState("black");
  const [textColor_2, setTextColor_2] = useState("stone-400");
  const [textColor_3, setTextColor_3] = useState("stone-400");

  const [displayDiv_1, setDisplayDiv_1] = useState("block");
  const [displayDiv_2, setDisplayDiv_2] = useState("hidden");
  const [displayDiv_3, setDisplayDiv_3] = useState("hidden");

  return (
    <>

      <div className="lg:flex">
        <div className="lg:w-[65%] 2xl:pl-[5.5rem] lg:border-r lg:h-[45rem] mx-6 mb-[5rem] lg:mb-0 md:mx-[4.5rem] lg:mx-0 lg:px-5 xl:px-[5rem] 2xl:ml-[6.7rem]">
          <div className="flex items-center justify-between user-name md:my-4 mt-7 md:mt-[3rem]">
            <p className="text-[1.4rem] md:text-[2.5rem] font-bold font-dm-sans tracking-tight">
              Your library
            </p>
            <a href="#/" className="text-[.9rem] md:text-[1rem] bg-[#1A8917] font-dm-sans text-white rounded-full cursor-pointer px-4 md:px-5 py-2">
              New list
            </a>
          </div>
          <div className="text-[.9rem] bg-white items-center border-b space-x-10 mt-5 py-4">
            <span
              className={`text-${textColor_1} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("block");
                setDisplayDiv_2("hidden");
                setDisplayDiv_3("hidden");
                setTextColor_1("black");
                setTextColor_2("stone-400");
                setTextColor_3("stone-400");
              }}
            >
              Your lists
            </span>
            <span
              className={`text-${textColor_2} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("hidden");
                setDisplayDiv_2("block");
                setDisplayDiv_3("hidden");
                setTextColor_1("stone-400");
                setTextColor_2("black");
                setTextColor_3("stone-400");
              }}
            >
              Save lists
            </span>
            <span
              className={`text-${textColor_3} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("hidden");
                setDisplayDiv_2("hidden");
                setDisplayDiv_3("block");
                setTextColor_1("stone-400");
                setTextColor_2("stone-400");
                setTextColor_3("black");
              }}
            >
              Highlights
            </span>
          </div>
          <div
            className={`${displayDiv_1} border-b border-black w-[3.6rem] relative bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_2} border-b border-black w-[3.8rem] relative left-[6.2rem] bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_3} border-b border-black w-[3.9rem] relative left-[12.6rem] bottom-[.1rem]`}
          ></div>
          <div className={`${displayDiv_1} mx-[6.7rem]`}></div>
          <div className={`${displayDiv_2} mx-[6.7rem]`}></div>
          <div className={`${displayDiv_3} mx-[6.7rem]`}></div>

          <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-12 border bg-[#FAFAFA] rounded mt-[3rem] h-[15rem] lg:h-[10rem]">
              <div className="col-span-12 lg:col-span-6 px-[1.6rem] py-[1.2rem]">
                <div className="head flex items-center my-2">
                  <img
                    src="../images/profile_img.png"
                    alt=""
                    className="w-[1.2rem] h-[1.2rem] rounded-full"
                  />
                  <p className="text-[.9rem] 2xl:text-[.82rem] font-semibold mx-2 tracking-tight">
                    Ranjeetkumar
                  </p>
                </div>
                <div className="text-[1.1rem] lg:text-[1.4rem] font-dm-sans font-black my-2 2xl:my-3 tracking-tighter">
                  <p>Reading list</p>
                </div>
                <div className="flex justify-between text-stone-500">
                  <p className="text-[.8rem]">
                    No stories <i className="bi bi-lock-fill mx-1"></i>
                  </p>
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>
              {/* <div className="col-span-6 bg-[#F2F2F2] lg:hidden"></div> */}
              <div className="col-span-7 lg:col-span-3 bg-[#F2F2F2]"></div>
              <div className="col-span-3 lg:col-span-2 bg-[#F2F2F2] border-l-[.2rem] border-r-[.2rem] border-[#FAFAFA]"></div>
              <div className="col-span-2 lg:col-span-1 bg-[#F2F2F2]"></div>
            </div>
        </div>

        <div className="hidden lg:block w-[35%] lg:px-5 xl:px-[2.5rem] 2xl:px-[2.5rem] py-[2.5rem] font-dm-sans h-full sticky top-0">
          <div className="text">
            <div className="font-dm-sans">
              <p className="text-lg lg:text-[1rem] xl:text-[1rem] font-semibold">
                Staff Picks
              </p>
            </div>

            {/* reapeted div start */}
            <div className="my-5">
              <div className="head flex items-center my-2">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[1.2rem] h-[1.2rem] rounded-full"
                />
                <p className="text-[.82rem] font-semibold mx-2">
                  Chris Dixon in OneZero
                </p>
              </div>
              <p className="text-lg lg:text-[1rem] xl:text-md font-bold my-2.5 leading-5">
                My Grandpops, Richard Wright, and the Chicago Post Office
              </p>
            </div>

            <div className="my-5">
              <div className="head flex items-center my-2">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[1.2rem] h-[1.2rem] rounded-full"
                />
                <p className="text-[.82rem] font-semibold mx-2">
                  Chris Dixon in OneZero
                </p>
              </div>
              <p className="text-lg lg:text-[1rem] xl:text-md font-bold my-2.5 leading-5">
                My Grandpops, Richard Wright, and the Chicago Post Office
              </p>
            </div>

            <div className="my-5">
              <div className="head flex items-center my-2">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[1.2rem] h-[1.2rem] rounded-full"
                />
                <p className="text-[.82rem] font-semibold mx-2">
                  Chris Dixon in OneZero
                </p>
              </div>
              <p className="text-lg lg:text-[1rem] xl:text-md font-extrabold my-2.5 leading-5">
                My Grandpops, Richard Wright, and the Chicago Post Office
              </p>
            </div>
            {/* reapeted div end */}
            <div className="">
              <p className="text-[.82rem] text-green-700">See the full list</p>
            </div>

            <div className="twitter-card text-center flex justify-center">
              <div className="w-50 border-b px-8 py-8">
                <div className="flex justify-center items-center my-3">
                  <span>
                    <img src="../images/logo.png" alt="" className="w-12" />
                  </span>
                  <span>
                    <i className="bi bi-plus-lg text-2xl"></i>
                  </span>
                  <span>
                    <i className="bi bi-twitter text-2xl text-sky-400"></i>
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="text-lg lg:text-[1rem] xl:text-md">
                    Discover Medium writers you already follow on Twitter.
                  </h1>
                </div>
                <div className="btn my-6 font-semibold">
                  <a
                    href="#/"
                    className="border border-stone-400 xl:text-sm rounded-full px-7 py-2.5"
                  >
                    <i className="bi bi-twitter text-xl xl:text-xl text-sky-400 mr-3"></i>
                    Connect to Twitter
                  </a>
                </div>
                <div className="lg:text-[.82rem] xl:text-[.95rem]">
                  <a href="#/" className="underline text-gray-500">Maybe Later</a>
                </div>
              </div>
            </div>

            <div className="my-10">
              <p className="heading text-lg lg:text-[1rem] xl:text-md font-semibold my-4">
                Recommended topics
              </p>

              <div className="topics flex flex-wrap gap-3 lg:text-[.82rem] 2xl:text-md lg:font-normal font-semibold">
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
                <p className="text-lg lg:text-[1rem] xl:text-md font-semibold my-4">
                  Who to follow
                </p>
              </div>

              {/* multiple div */}
              <div className="flex my-3">
                <div className="img w-20 lg:w-10 2xl:w-14">
                  <img
                    src="../images/profile_img.png"
                    alt=""
                    className="w-[2rem] h-[2rem] rounded-full mt-1.5"
                  />
                </div>

                <div className="head">
                  <p className="text-lg lg:text-[1rem] xl:text-md font-bold mb-1">
                    M.G Siegler
                  </p>
                  <p className="text-gray-500 lg:text-[.82rem] xl:text-md">
                    Writer turned investor turned investor...
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

              <div className="flex my-3">
                <div className="img w-20 lg:w-10 2xl:w-14">
                  <img
                    src="../images/profile_img.png"
                    alt=""
                    className="w-[2rem] h-[2rem]  rounded-full mt-1.5"
                  />
                </div>

                <div className="head">
                  <p className="text-lg lg:text-[1rem] xl:text-md font-bold mb-1">
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
                <div className="img w-20 lg:w-10 2xl:w-14">
                  <img
                    src="../images/profile_img.png"
                    alt=""
                    className="w-[2rem] h-[2rem] rounded-full mt-1.5"
                  />
                </div>

                <div className="head">
                  <p className="text-lg lg:text-[1rem] xl:text-md font-bold mb-1">
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
              {/* multiple div */}

              <div className="my-10 font-semibold">
                <p className="text-green-600 text-[.9rem]">
                  See more suggestions
                </p>
              </div>

              <div className="my-7">
                <div className="head-section">
                  <p className="text-lg lg:text-[1rem] xl:text-md text-stone-600 font-bold">
                    Reading list
                  </p>
                </div>
                <div className="text-div text-[.87rem] font-semibold text-stone-500 my-5 tracking-tight">
                  <p>
                    Click the <i className="bi bi-bookmark-plus"></i> on any story
                    to easily add it to your reading list or a custom list that
                    you can share.
                  </p>
                </div>
                <div className="">
                  <p className="text-[.7rem] text-stone-500">
                    Help Status Writers Blog Careers Privacy Terms About Text to
                    speech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
