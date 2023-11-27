import React from "react";

export default function SecurityCard() {
  return (
    <>
      <div className="tracking-tight mx-1 py-4 font-dm-sans mb-[3.5rem]">
        <div className="text-[.9rem] my-5 py-1 cursor-pointer w-[16rem] md:w-[35rem]">
          <p className="font-medium text-red-600 cursor-pointer">
            Sign out of all other sessions
          </p>
          <p className="text-stone-500 cursor-pointer text-[.82rem]">
            Sign out of sessions in other browsers or on other computers.
          </p>
        </div>

        <div className="text-[.9rem] my-5 py-1 cursor-pointer w-[16rem] md:w-[35rem]">
          <p className="font-medium text-stone-800 cursor-pointer">
            Download your information
          </p>
          <p className="text-stone-500 cursor-pointer text-[.82rem]">
            Download a copy of the information you’ve shared on Medium to a .zip
            file.
          </p>
        </div>

        <div className="email text-[.9rem] py-1 border-t border-b my-8 py-[1rem]">
          <div className="email flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <div className="flex">
              <span className="text-[1.2rem] text-blue-500">
                <i className="bi bi-facebook"></i>
              </span>
              <div className="ml-5">
                <p className="font-medium text-stone-800 cursor-pointer">
                  Connect Facebook
                </p>
                <p className="text-stone-500 cursor-pointer text-[.82rem]">
                  We will never post to Facebook or message your friends without
                  your permission.
                </p>
              </div>
            </div>
            <div className="flex text-stone-500 text-[1rem] hover:text-black">
              <span>
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </div>
          </div>

          <div className="email flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <div className="flex">
              <span className="text-[1.2rem] text-sky-500">
                <i className="bi bi-twitter"></i>
              </span>
              <div className="ml-5">
                <p className="font-medium text-stone-800 cursor-pointer">
                  Connect Twitter
                </p>
                <p className="text-stone-500 cursor-pointer text-[.82rem]">
                  We will never post to Twitter or message your followers
                  without your permission.
                </p>
              </div>
            </div>
            <div className="flex text-stone-500 text-[1rem] hover:text-black">
              <span>
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </div>
          </div>

          <div className="flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <div className="flex">
              <img
                src="../images/G-logo.webp"
                alt=""
                className="w-[1.2rem] h-[1.2rem]"
              />
              <div className="ml-5">
                <p className="font-medium text-red-600 cursor-pointer">
                  Disconnect Google
                </p>
                <p className="text-stone-500 cursor-pointer text-[.82rem]">
                  You can now sign in to Medium using your Google account.
                </p>
              </div>
            </div>
            <span className="text-stone-500 hover:text-black truncate w-[12rem] md:w-full tracking-tighter">
              ranjeetkumar9264@gmail.com
            </span>
          </div>
        </div>

        <div className="text-[.9rem] py-1 border-b py-[1rem]">
          <div className="flex justify-between md:items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <div className="flex">
              <span className="text-[1.5rem] text-blue-800">
                <i className="bi bi-mastodon"></i>
              </span>
              <div className="ml-5">
                <p className="font-medium text-stone-900 cursor-pointer">
                  Create Mastodon @me.dm account
                </p>
                <p className="text-stone-500 cursor-pointer text-[.82rem]">
                  We will never post to Mastodon or message your followers
                  without your permission.
                </p>
              </div>
            </div>
            <div className="flex text-stone-500 text-[1rem] hover:text-black">
              <span>
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="font-medium text-stone-900 cursor-pointer">
            Integration tokens
          </p>
        </div>
      </div>
    </>
  );
}
