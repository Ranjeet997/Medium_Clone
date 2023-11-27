import { React, useState } from "react";
import AccountCard from "./settingcomponenet/AccountCard";
import NotificationCard from "./settingcomponenet/NotificationCard";
import PublishCard from "./settingcomponenet/PublishCard";
import SecurityCard from "./settingcomponenet/SecurityCard";

export default function Setting() {
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
          <div className="md:flex items-center justify-between user-name md:my-4 mt-7 md:mt-[3rem]">
            <p className="text-[1.4rem] md:text-[2.6rem] font-bold font-dm-sans tracking-tight">
              Settings
            </p>
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
              Account
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
              Publishing
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
              Notifications
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
              Security & app
            </span>
          </div>
          <div
            className={`${displayDiv_1} md:border-b border-black w-[3.5rem] relative bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_2} md:border-b border-black w-[4.1rem] relative left-[6.15rem] bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_3} md:border-b border-black w-[5.2rem] relative left-[13rem] bottom-[.1rem]`}
          ></div>
           <div
            className={`${displayDiv_4} md:border-b border-black w-[6rem] relative left-[21rem] bottom-[.1rem]`}
          ></div>
          <div className={`${displayDiv_1}`}>
            <AccountCard />
          </div>
          <div className={`${displayDiv_2}`}>
            <PublishCard />
          </div>
          <div className={`${displayDiv_3}`}>
              <NotificationCard/>
          </div>
          <div className={`${displayDiv_4}`}>
              <SecurityCard/>
          </div>
        </div>

        <div className="hidden lg:block w-[35%] lg:px-5 xl:px-[2.5rem] py-[2.5rem] font-dm-sans h-full sticky top-0">
          <div className="profileImg">
            <p className="font-extrabold font-raleway tracking-tight my-6">
              Suggested help articles
            </p>
            <div className="text-[.95rem] space-y-3.5 font-medum">
            <p className="font-dm-sans tracking-tight cursor-pointer">
            Sign in or sign up to Medium

            </p>
            <p className="font-dm-sans tracking-tight cursor-pointer">
            Your profile page

            </p>
            <p className="font-dm-sans tracking-tight cursor-pointer">
            Writing and publishing your first story

            </p>
            <p className="font-dm-sans tracking-tight cursor-pointer">
            About Medium's distribution system

            </p>
            <p className="font-dm-sans tracking-tight cursor-pointer">
            Get started with the Partner Program

            </p>
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
