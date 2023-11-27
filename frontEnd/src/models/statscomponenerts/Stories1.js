import React from "react";

export default function Stories1() {
  return (
    <>
      <div className="">
        <div className="tracking-tighter font-semibold">
          <p className="text-[.85rem] uppercase  tracking-[.1rem] my-7">
            {" "}
            MARCH 2023
          </p>
          <p className="text-[1.4rem] lg:text-[1.3rem]">
            this is demo from him
          </p>
          <div className="flex space-x-1 text-[.82rem] text-stone-500 font-normal mt-3">
            <span className="hidden lg:block">1 min read</span>
            <span className="hidden lg:block">
              <i className="bi bi-dot"></i>
            </span>
            <span className="underline">View story</span>
            <span>
              <i className="bi bi-dot"></i>
            </span>
            <span>Details</span>
          </div>
        </div>

        <div className="font-semibold mt-3 py-3 border-t border-b">
            <div className="flex items-center justify-between space-x-8 w-[15rem] md:w-[32rem]">
          <div className="">
            <p>0</p>
            <p  className="">
              view
            </p>
          </div>
          <div className="">
            <p>0</p>
            <p  className="">
              reads
            </p>
          </div>
          <div className="">
            <p>0</p>
            <p  className="">
              ratio
            </p>
          </div>
          <div className="">
            <p>0</p>
            <p  className="">
              fans
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
