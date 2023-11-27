import React from "react";

export default function NotificationCard() {
  return (
    <>
      <div className="tracking-tight mx-1 py-4 font-dm-sans mb-[5rem]">
        <div className="email flex justify-between text-[1.9rem] my-5 py-1 cursor-pointer tracking-tighter">
          <span className="font-bold text-black">Email notifications</span>
        </div>

        <div className="flex justify-between items-center px-6 py-4 bg-[#F2F2F2]">
          <p className="text-black cursor-pointer text-[.82rem]">
            Email notifications have been turned off
          </p>
          <p className="text-green-700 cursor-pointer text-[.82rem]">
            Edit
          </p>
        </div>

        <div className="email flex justify-between text-[1rem] my-5 py-1 cursor-pointer tracking-tighter">
          <span className="font-semibold text-black">
            Story recommendations
          </span>
        </div>

        <div className="email flex justify-between items-center text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="w-[12rem] md:w-[35rem]">
            <p className="font-medium text-stone-500 cursor-pointer">
              Medium Digest
            </p>
            <p className="text-stone-500 cursor-pointer text-[.82rem]">
              The best stories on Medium personalized based on your interests,
              as well as outstanding stories selected by our editors.
            </p>
          </div>
          <div className="flex text-green-700 ">
            <span className="text-[.9rem] mr-2">Daily</span>
            <i className="bi bi-chevron-down text-[1rem]"></i>
          </div>
        </div>

        <div className="email flex justify-between items-center text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="w-[15rem] md:w-[35rem]">
            <p className="font-medium text-stone-500 cursor-pointer">
              Recommended reading
            </p>
            <p className="text-stone-500 cursor-pointer text-[.82rem]">
              Featured stories, columns, and collections that we think you’ll
              enjoy based on your reading history.
            </p>
          </div>
          <span className="text-green-700 text-[1.2rem]">
            <i className="bi bi-check-square-fill"></i>
          </span>
        </div>

        <div className="email text-[.9rem] py-1 border-t border-b mt-8 py-[1rem]">
          <div className="email flex justify-between text-[1rem] my-5 py-1 cursor-pointer tracking-tighter">
            <span className="font-semibold text-black">
              From writers and publications
            </span>
          </div>
          <div className="email flex justify-between items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <p className="font-medium text-stone-500 cursor-pointer">
              New stories from writers you’ve subscribed to
            </p>
            <span className="text-green-700 text-[1.2rem]">
              <i className="bi bi-check-square-fill"></i>
            </span>
          </div>

          <div className="email flex justify-between items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <p className="font-medium text-stone-500 cursor-pointer">
              New stories added to lists you’ve saved
            </p>
            <span className="text-green-700 text-[1.2rem]">
              <i className="bi bi-check-square-fill"></i>
            </span>
          </div>

          <div className="email flex justify-between items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <p className="font-medium text-stone-500 cursor-pointer">
              Digests from publications you follow
            </p>
            <span className="text-green-700 text-[1.2rem]">
              <i className="bi bi-check-square-fill"></i>
            </span>
          </div>

          <div className="email flex justify-between space-x-5 items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <p className="font-medium text-stone-500 cursor-pointer">
              Newsletters from publications
            </p>
            <span className="text-green-700 text-[1.2rem]">
              <i className="bi bi-check-square-fill"></i>
            </span>
          </div>
        </div>

        <div className="email text-[.9rem] py-1 border-b py-[1rem]">
          <div className="email flex justify-between  text-[1rem] my-5 py-1 cursor-pointer tracking-tighter">
            <span className="font-semibold text-black">Social activity</span>
          </div>
          <div className="email flex justify-between items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <p className="font-medium text-stone-500 cursor-pointer">
              When someone follows you or highlights the same passage in a story
            </p>
            <span className="text-green-700 text-[1.2rem]">
              <i className="bi bi-check-square-fill"></i>
            </span>
          </div>
          <div className="email flex justify-between items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <p className="font-medium text-stone-500 cursor-pointer">
              When someone mentions you in their story
            </p>
            <div className="flex text-green-700 ">
              <span className="text-[.9rem] truncate w-[3rem] md:w-full mr-2">In network</span>
              <i className="bi bi-chevron-down text-[1rem]"></i>
            </div>
          </div>
        </div>

        <div className="email text-[.9rem] py-1 border-b py-[1rem]">
          <div className="email flex justify-between text-[1rem] my-5 py-1 cursor-pointer tracking-tighter">
            <span className="font-semibold text-black">Others from Medium</span>
          </div>
          <div className="email flex justify-between items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <p className="font-medium text-stone-500 cursor-pointer">
              New product features from Medium
            </p>
            <span className="text-green-700 text-[1.2rem]">
              <i className="bi bi-check-square-fill"></i>
            </span>
          </div>

          <div className="email flex justify-between items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <p className="font-medium text-stone-500 cursor-pointer">
              Information about Medium membership
            </p>
            <span className="text-green-700 text-[1.2rem]">
              <i className="bi bi-check-square-fill"></i>
            </span>
          </div>

          <div className="email flex justify-between items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
            <p className="font-medium text-stone-500 cursor-pointer">
              Writing updates and announcements
            </p>
            <span className="text-green-700 text-[1.2rem]">
              <i className="bi bi-check-square-fill"></i>
            </span>
          </div>
        </div>

        <div className="email flex justify-between items-center space-x-6 md:space-x-0 text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="">
            <p className="font-medium text-black cursor-pointer">
              Allow email notifications
            </p>
            <p className="text-stone-500 cursor-pointer text-[.82rem]">
              You’ll still receive administrative emails even if this setting is
              off.
            </p>
          </div>
          <span className="text-green-700 text-[1.2rem]">
            <i className="bi bi-check-square-fill"></i>
          </span>
        </div>

        <div className="text-[.9rem] my-5 py-1 cursor-pointer">
          <div className="text-[1.9rem] my-5 py-1 cursor-pointer tracking-tighter">
            <span className="font-bold text-black">Push notifications</span>
          </div>
          <p className="font-medium text-stone-500 cursor-pointer">
            Open the Medium app from your mobile device to make changes to push
            notifications.
          </p>
        </div>
      </div>
    </>
  );
}
