import { React, useState } from "react";
import Popup from "reactjs-popup";
import ProfileModel from "./navmodel/ProfileModel";

const StatsHeader = () => {
  const [isVisisble, setIsVisisble] = useState(false);

  const showModel = () => {
    setIsVisisble(true);
  };
  const closeModel = () => {
    setIsVisisble(false);
  };
  return (
    <div>
      <nav className="md:pl-8 md:pr-12 lg:pl-0 lg:pr-0 py-1.5 shadow">
        <div className="flex justify-between items-center pl-5 pr-2.5 xl:px-[8rem] 2xl:px-[13rem]">
          <div className="Logo flex items-center w-12">
            <img
              src="../images/logo.png"
              alt="Logo"
              className="navbar-brand flex-start"
            />
          </div>

          <div className="flex items-center md:space-x-5 lg:space-x-5">
            <div className="flex">
              <Popup
                trigger={
                  <button>
                    <i className="bi bi-search text-gray-500 hover:text-black"></i>
                  </button>
                }
                position=""
              >
                <div className="flex items-center absolute top-14 right-[-8rem] md:relative md:right-[5.5rem] bg-white md:top-0 mx-3 h-[2rem] w-[13rem] rounded-full">
                  <i className="bi bi-search mt-2 mx-4"></i>
                  <input
                    type="text"
                    className="focus:outline-0 bg-transparent"
                    placeholder="Search medium"
                  />
                </div>
              </Popup>
            </div>

            <div className="text-gray-500 hover:text-black cursor-pointer hidden md:block">
              <span>
                <i className="bi bi-bookmarks text-[1.3rem]"></i>
              </span>
            </div>

            <div className="flex justify-end bell_icon mx-2 text-gray-400 hover:text-black">
              <i className="user-icons bi bi-bell text-[1.3rem]"></i>
            </div>

            <div className="hidden md:block">
              <a
                href=""
                className="text-[.82rem] font-dm-sans border border-stone-500 hover:border-stone-800 rounded-full px-3 py-1.5"
              >
                Upgrade
              </a>
            </div>

            <div className="bg-light flex items-center w-[2rem] mx-3">
              {/* <img
                src="../images/profile_img.png"
                className="rounded-full"
                alt=""
              /> */}
              <img
                src="../images/profile_img.png"
                className="rounded-full w-[1.8rem] md:w-[2.2rem] cursor-pointer"
                alt=""
                onClick={showModel}
              />
              <ProfileModel isOpen={isVisisble} closeModel={closeModel} />
            </div>
          </div>
        </div>
      </nav>

      <div className="poup_box"></div>
    </div>
  );
};

export default StatsHeader;
