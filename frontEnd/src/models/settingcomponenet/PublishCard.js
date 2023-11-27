import React from "react";

export default function PublishCard() {
  return (
    <>
      <div className="tracking-tight mx-1 py-4 font-dm-sans">
        <div className="email flex justify-between text-[.9rem] my-5 py-1 cursor-pointer">
          <span className="font-medium text-stone-800">
            Manage publications
          </span>
        </div>
        <div className="email flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="">
            <p className="font-medium text-stone-800 cursor-pointer">
              Allow readers to leave private notes on your stories
            </p>
            <p className="text-stone-500 cursor-pointer text-[.82rem]">
              Private notes are visible to you and (if left in a publication)
              all Editors of the publication.
            </p>
          </div>
          <span className="text-green-700 text-[1.2rem]">
            <i className="bi bi-check-square-fill"></i>
          </span>
        </div>

        <div className="email flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="">
            <p className="font-medium text-stone-800 cursor-pointer">
              Manage tipping on your stories
            </p>
            <p className="text-stone-500 cursor-pointer text-[.82rem]">
              Readers can send you tips through the third-party platform of your
              choice.
            </p>
          </div>
          <span className="text-stone-500 hover:text-black">Disabled</span>
        </div>

        <div className="email text-[.9rem] py-1 border-t border-b my-8 py-[1rem]">
          <div className="email flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <div className="">
              <p className="font-medium text-stone-800 cursor-pointer">
                Allow email replies
              </p>
              <p className="text-stone-500 cursor-pointer text-[.82rem]">
                Let readers reply to your stories directly from their email.
              </p>
            </div>
            <span className="text-green-700 text-[1.2rem]">
              <i className="bi bi-check-square-fill"></i>
            </span>
          </div>

          <div className="email flex justify-between mditems-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <div className="">
              <p className="font-medium text-stone-800 cursor-pointer">
                ‘Reply To’ email address
              </p>
              <p className="text-stone-500 cursor-pointer text-[.82rem]">
                Shown to your subscribers when they reply.
              </p>
            </div>
            <span className="text-stone-500 hover:text-black truncate w-[9rem] md:w-full">
              ranjeetkumar9264@gmail.com
            </span>
          </div>

          <div className="email flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <div className="w-[25rem]">
              <p className="font-medium text-stone-800 cursor-pointer">
                Import email subscribers
              </p>
              <p className="text-stone-500 cursor-pointer text-[.82rem]">
                Upload a CSV or TXT file containing up to 5,000 email addresses.
              </p>
            </div>
            <div className="flex text-stone-500 text-[1rem] hover:text-black">
              <span>
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="font-bold">
            <p className="text-[1rem]">Promote email subscriptions</p>
          </div>

          <div className="email flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 space-x-4 cursor-pointer">
            <div className="2xl:w-[25rem]">
              <p className="font-medium text-stone-800 cursor-pointer leading-4">
              Share your subscribe page
              </p>
              <p className="text-stone-500 cursor-pointer text-[.82rem] mt-2.5">
              This page allows readers to subscribe to you via email.
              </p>
            </div>
            <div className="flex text-stone-500 text-[1rem] hover:text-black w-[7rem] md:w-[13rem] lg:w-[15.5rem]">
                <span className="text-[.9rem] truncate mx-2 2xl:mx-4">https://medium.com/subscribe..</span>
              <span>
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </div>
          </div>

          <div className="email flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <div className="w-[20rem]">
              <p className="font-medium text-stone-800 cursor-pointer">
              Customize your subscription promotion message
              </p>
              <p className="text-stone-500 cursor-pointer text-[.82rem] mt-3">
              This is the message on your subscribe, profile and story pages.
              </p>
            </div>
            <span className="text-stone-500 hover:text-black truncate w-[8rem] md:w-[12.5rem]">
            Get an email whenever Ranjeetkumar publishes
            </span>
          </div>

          <div className="email flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <div className="">
              <p className="font-medium text-stone-800 cursor-pointer">
              Display a subscription promotion message
              </p>
              <p className="text-stone-500 cursor-pointer text-[.82rem]">
              A message will display after the second story on your profile and at the bottom of every story page.
              </p>
            </div>
            <span className="text-green-700 text-[1.2rem]">
              <i className="bi bi-check-square-fill"></i>
            </span>
          </div>
        </div>

      </div>
    </>
  );
}
