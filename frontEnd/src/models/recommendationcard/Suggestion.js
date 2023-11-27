import React from "react";

export default function Suggestion() {
  return (
    <>
      <div className="to-follow font-dm-sans tracking-tight">
        <div className="bg-[#FAFAFA] block md:flex justify-between text-center items-center font-medium px-6 py-6 my-[2.5rem]">
          <div className="">
          <p className="text-[.9rem] lg:text-[.82rem] xl:text-[.9rem] leading-5">
            Discover Medium writers you already follow on Twitter.
          </p>
          </div>
          <a
            href="#/"
            className="rounded-full border border-gray-400 py-2.5 md:py-1.5 px-8 text-[.88rem] w-[14rem]"
          >
            <span>
              <i className="bi bi-twitter text-sky-500 text-[1.2rem] mr-2"></i>
            </span>{" "}
            <span>Connect to twitter</span>
          </a>
        </div>
        <div className="border-b md:py-7">
          <p className="text-[1rem]  font-semibold my-3.5">
            Who to follow
          </p>

          {/* multiple div */}
          <div className="flex justify-between space-x-6 space-x-0 my-4">
            <div className="flex">
              <div className="img w-[4rem] lg:w-[3rem] 2xl:w-[4.6rem]">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[3rem] h-[3rem] rounded-full mt-1.5 cursor-pointer"
                />
              </div>

              <div className="head md:mx-5 w-[10rem] md:w-full">
                <p className="text-[1rem]  font-bold ">
                  Cory Doctorow
                </p>
                <p className="text-gray-500 text-[.9rem]">
                  Writer, blogger, activist. Blog: https://pluralistic.net;
                  Mailing list: https://pluralistic.net/plura-list; Mastodon:
                  @pluralistic@mamot.fr
                </p>
              </div>
            </div>

            <div className="btn text-white text-[.9rem] font-medium ml-3 mt-1.5">
              <a
                href="#/"
                className="bg-[#1A8917] rounded-full px-4 py-2 lg:px-4 lg:py-1.5"
              >
                Follow
              </a>
            </div>
          </div>

          <div className="flex justify-between my-4">
            <div className="flex">
              <div className="img w-[4rem] lg:w-10 2xl:w-[4.6rem]">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[3rem] h-[3rem] rounded-full mt-1.5 cursor-pointer"
                />
              </div>

              <div className="head md:mx-5 w-[10rem] md:w-full">
                <p className="text-[1rem]  font-bold ">
                  Paul Greenberg
                </p>
                <p className="text-gray-500 text-[.9rem] ">
                  New York Times bestselling author of Four Fish as well as The
                  Climate Diet and Goodbye Phone, Hello World paulgreenberg.org
                </p>
              </div>
            </div>

            <div className="btn text-white text-[.9rem] 2 font-medium ml-3 mt-1.5">
              <a
                href="#/"
                className="bg-[#1A8917] rounded-full px-4 py-2 lg:px-4 lg:py-1.5"
              >
                Follow
              </a>
            </div>
          </div>
          <div className="text-[.9rem] text-green-700 font-medium mt-7">
            <a href="#/">See more suggestions</a>
          </div>
        </div>

        <div className="border-b py-7">
          <p className="text-[1rem]  font-semibold my-3.5">
            Topic to follow
          </p>

          {/* multiple div */}
          <div className="flex justify-between my-3">
            <div className="flex">
              <div className="img ">
                <button className="bg-gray-200 w-[3rem] h-[3rem] rounded-full rounded-full mt-1.5 cursor-pointer"></button>
              </div>

              <div className="head mx-5">
                <p className="text-[1rem] font-bold ">
                  Programming
                </p>
                <p className="text-gray-500 text-[.9rem] ">
                  288K Stories · 97K Writers
                </p>
              </div>
            </div>

            <div className="btn text-white text-[.9rem] 2 font-medium ml-3 mt-1.5">
              <a
                href="#/"
                className="bg-[#1A8917] rounded-full px-4 py-2 lg:px-4 lg:py-1.5"
              >
                Follow
              </a>
            </div>
          </div>
          <div className="flex justify-between my-3 ">
            <div className="flex">
              <div className="img">
                <button className="bg-gray-200 w-[3rem] h-[3rem] rounded-full rounded-full mt-1.5 cursor-pointer"></button>
              </div>

              <div className="head mx-5">
                <p className="text-[1rem]  font-bold ">
                  Data Science
                </p>
                <p className="text-gray-500 text-[.9rem] ">
                238K Stories · 70K Writers
                </p>
              </div>
            </div>

            <div className="btn text-white text-[.9rem] 2 font-medium ml-3 mt-1.5">
              <a
                href="#/"
                className="bg-[#1A8917] rounded-full px-4 py-2 lg:px-4 lg:py-1.5"
              >
                Follow
              </a>
            </div>
          </div>

          <div className="flex justify-between my-3 ">
            <div className="flex">
              <div className="img">
                <button className="bg-gray-200 w-[3rem] h-[3rem] rounded-full rounded-full mt-1.5 cursor-pointer"></button>
              </div>

              <div className="head mx-5">
                <p className="text-[1rem]  font-bold ">
                  Technology
                </p>
                <p className="text-gray-500 text-[.9rem] ">
                288K Stories · 97K Writers
                </p>
              </div>
            </div>

            <div className="btn text-white text-[.9rem] 2 font-medium ml-3 mt-1.5">
              <a
                href="#/"
                className="bg-[#1A8917] rounded-full px-4 py-2 lg:px-4 lg:py-1.5"
              >
                Follow
              </a>
            </div>
          </div>

          <div className="flex justify-between my-3 ">
            <div className="flex">
              <div className="img">
                <button className="bg-gray-200 w-[3rem] h-[3rem] rounded-full rounded-full mt-1.5 cursor-pointer"></button>
              </div>

              <div className="head mx-5">
                <p className="text-[1rem]  font-bold ">
                  Self Improvement
                </p>
                <p className="text-gray-500 text-[.9rem] ">
                288K Stories · 97K Writers
                </p>
              </div>
            </div>

            <div className="btn text-white text-[.9rem] 2 font-medium ml-3 mt-1.5">
              <a
                href="#/"
                className="bg-[#1A8917] rounded-full px-4 py-2 lg:px-4 lg:py-1.5"
              >
                Follow
              </a>
            </div>
          </div>

          <div className="flex justify-between my-3 ">
            <div className="flex">
              <div className="img">
                <button className="bg-gray-200 w-[3rem] h-[3rem] rounded-full rounded-full mt-1.5 cursor-pointer"></button>
              </div>

              <div className="head mx-5">
                <p className="text-[1rem]  font-bold ">
                  Writing
                </p>
                <p className="text-gray-500 text-[.9rem] ">
                288K Stories · 97K Writers
                </p>
              </div>
            </div>

            <div className="btn text-white text-[.9rem] 2 font-medium ml-3 mt-1.5">
              <a
                href="#/"
                className="bg-[#1A8917] rounded-full px-4 py-2 lg:px-4 lg:py-1.5"
              >
                Follow
              </a>
            </div>
          </div>
          <div className="text-[.9rem] text-green-700 font-medium mt-7">
            <a href="#/">See more suggestions</a>
          </div>
        </div>
      </div>
    </>
  );
}
