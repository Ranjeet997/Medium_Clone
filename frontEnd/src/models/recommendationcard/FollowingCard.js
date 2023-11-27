import React from "react";

export default function FollowingCard() {
  return (
    <>
      <div className="font-dm-sans mb-[5rem]">
        <div className="py-[1.5rem] border-b mt-3">
          <div className="head">
            <p className="text-[1.05rem] font-medium tracking-tighter">1 Writer</p>
          </div>
          <div className="flex justify-between items-center my-3 ">
            <div className="flex items-center">
              <div className="img w-[7rem] lg:w-10 2xl:w-14">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[3rem] h-[3rem] rounded-full mt-1.5"
                />
              </div>

              <div className="head mx-3.5">
                <p className="text-[1rem] xl:text-md font-bold ">
                  Medium Staff
                </p>
                <p className="text-gray-500 text-[.9rem] xl:text-md">
                  News and updates from the staff at Medium.
                </p>
              </div>
            </div>

            <div className="btn text-green-700 lg:text-[.9rem] 2xl:text-md font-medium ml-3">
              <a
                href="#/"
                className="text-[.9rem] border border-green-700 rounded-full px-4 py-2 py-1.5 lg:px-4 lg:py-2 tracking-tighter"
              >
                Following
              </a>
            </div>
          </div>
        </div>

        <div className="py-[2rem] border-b font-medium">
          <div className="head">
            <p className="text-[1.05rem] tracking-tight">Publications</p>
          </div>
          <div className="flex justify-center items-center my-5">
              <div className="head text-center mx-3.5">
                <p className="text-gray-500 text-[.9rem] mb-5">
                You haven’t followed any publications yet.
                </p>
                <a href="#/" className="text-green-70 text-[.9rem]">
                See suggestions
                </a>
            </div>
          </div>
        </div>

        <div className="py-[2rem] border-b font-medium">
          <div className="head">
            <p className="text-[1.05rem] tracking-tight">Topics</p>
          </div>
          <div className="flex justify-center items-center my-5">
              <div className="head text-center mx-3.5">
                <p className="text-gray-500 text-[.9rem] mb-5">
                You haven’t followed any topics yet.
                </p>
                <a href="#/" className="text-green-700 text-[.9rem]">
                See suggestions
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
