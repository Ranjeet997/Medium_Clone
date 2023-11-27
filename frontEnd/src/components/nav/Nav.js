import { React, useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "../sign_up/Sign_up";

export default function Nav() {
  const [isVisisble, setIsVisisble] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const showModel = () => {
    setIsVisisble(true);
  };
  const closeModel = () => {
    setIsVisisble(false);
  };

  const scrollEvent = () => {
    if (window.scrollY >= 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", scrollEvent);

  return (
    <div>
      <nav
        className={`fixed top-0 w-full h-[6.5rem] md:h-[5.5rem] md:h-[5rem] font-satoshi text-black border-b border-black md:px-[2rem] lg:pl-[4.5rem] lg:pr-[6rem] transition-all duration-300 ${
          isScrolled ? "bg-white text-black" : "bg-yellow-500"
        } `}
      >
        <div className="md:flex items-center md:justify-between lg:justify-between py-[.8rem] md:py-[1.15rem]">
          <div className="px-[.7rem]">
            <Link to="/">
            <img
              src="./images/md-black-logo.png"
              alt="Logo"
              className="w-[11rem] md:w-[12em]"
            /></Link>
          </div>

          <div className="flex items-center justify-around md:justify-around border-t border-black md:border-t-0 mt-3.5 md:mt-0 lg:mt-0">
            <div className="space-x-8 md:space-x-6 lg:space-x-7 text-sm md:text-md lg:text-[1.1rem] 2xl:text-[1rem] font-normal 2xl:font- md:mr-[2.5rem] lg:mr-[1.6rem] mt-1.5 md:mt-0 lg:mt-0">
              <Link to="ourstory" className="nav-link">
                Our story
              </Link>
              <Link to="membership" className="nav-link">
                Membership
              </Link>
              <Link to="creators" className="nav-link">
                Write
              </Link>
              <button className="nav-link" onClick={showModel}>
                Sign In
              </button>
              <div className="">
                <SignUp isOpen={isVisisble} closeModel={closeModel} />
              </div>
            </div>

            <button
              className={`text-white text-sm md:text-md lg:text-[1rem] lg:font-medium rounded-full absolute top-[1rem] right-5 md:relative md:top-0 lg:relative lg:top-0 lg:left-0 px-4 py-2 md:py-1.5 lg:py-[.5rem] transition-all duration-200
          ${
            !isScrolled
              ? `bg-black hover:bg-stone-800`
              : "bg-[#1A8917] hover:bg-[#1B7919]"
          }`}
              type="submit"
              onClick={showModel}
            >
              Get started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
