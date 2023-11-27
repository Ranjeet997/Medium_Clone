import React from "react";

export default function AccountCard() {
  return (
    <>
      <div className="tracking-tight mx-1 py-4 font-dm-sans">
        <div className="email flex justify-between text-[.9rem] my-5 py-1 cursor-pointer">
          <span className="font-medium text-stone-700">Email address</span>
          <span className="text-stone-500 hover:text-black">
            ranjeetkumar9264@gmail.com
          </span>
        </div>
        <div className="email flex justify-between text-[.9rem] my-5 py-1 cursor-pointer">
          <span className="font-medium text-stone-700">
            Username and subdomain
          </span>
          <span className="text-stone-500 hover:text-black">
            @ranjeetkumar9264
          </span>
        </div>
        <div className="email flex justify-between items-center text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="">
            <p className="font-medium text-stone-700 cursor-pointer">
              Profile information
            </p>
            <p className="text-stone-500 cursor-pointer text-[.82rem]">
              Edit your photo, name, bio etc.
            </p>
          </div>
          <div className="flex">
            <span className="text-stone-500 text-[1rem] hover:text-black">
              Ranjeetkumar
            </span>
            <span>
              <img
                src="../images/profile_img.png"
                alt=""
                className="w-[1.5rem] rounded-full ml-3"
              />
            </span>
          </div>
        </div>
        <div className="email flex justify-between items-center text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="">
            <p className="font-medium text-stone-700 cursor-pointer">
              Profile design
            </p>
            <p className="text-stone-500 cursor-pointer text-[.82rem]">
              Pick colors and fonts, style the header, and make your profile
              unique.
            </p>
          </div>
          <span className="text-stone-500 hover:text-black">
            <i className="bi bi-arrow-up-right"></i>
          </span>
        </div>
        <div className="email flex justify-between items-center text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="">
            <p className="font-medium text-stone-700 cursor-pointer">
              Custom domain
            </p>
            <p className="text-stone-500 cursor-pointer text-[.82rem] 2xl:w-[25rem]">
              Upgrade to a Medium Membership to redirect your profile URL to a
              domain like yourdomain.com.
            </p>
          </div>
          <div className="flex text-stone-500 text-[1rem] hover:text-black">
            <span className="mr-4 text-[.9rem]">None</span>
            <span>
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </div>
        </div>
        <div className="email text-[.9rem] my-5 py-1 border-t border-b my-8 py-[2rem]">
          <div className="flex justify-between items-center py-1 mb-7">
            <p className="font-medium text-stone-700 cursor-pointer">
              Muted writers and publications
            </p>
            <span className="text-stone-500 hover:text-black ">
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </div>
          <div className="">
            <span className="font-medium text-stone-700 cursor-pointer">
              Blocked users
            </span>
          </div>
        </div>
        <div className="email text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="">
            <p className="font-medium text-red-700 cursor-pointer">
              Deactivated account
            </p>
            <p className="text-stone-500 cursor-pointer text-[.82rem] mt-1">
              Deactivating will suspend your account until you sign back in.
            </p>
          </div>
        </div>
        <div className="email text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="">
            <p className="font-medium text-red-700 cursor-pointer">
              Delete account
            </p>
            <p className="text-stone-500 cursor-pointer text-[.82rem] mt-1">
            Permanently delete your account and all of your content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
