import { React, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import WriteNavModel from "./navmodel/WriteNavModel";

const WriterNavbar = () => {
  const [isVisisble, setIsVisisble] = useState(false);

  const showModel = () => {
    setIsVisisble(true);
  };
  const closeModel = () => {
    setIsVisisble(false);
  };

  return (
    <div>
      <nav className="border-b border-grey-200 pl-6 pr-9 md:pl-8 md:pr-12 lg:pl-8  lg:pr-12 py-1">
        <div className="flex justify-between items-center">
          <div className="Logo flex items-center w-12">
            <img
              src="./images/logo.png"
              alt="Logo"
              className="navbar-brand flex-start"
            />
            <div className="mx-5">
              <div className="hidden md:flex lg:flex bg-light items-center bg-gray-50 h-[3rem] w-[17rem] rounded-full">
                <img src="./images/search.png" alt="" className="w-12" />
                <input
                  type="text"
                  className="focus:outline-0 bg-transparent"
                  placeholder="Search Medium"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center md:space-x-11 lg:space-x-11">
            <div className="flex md:hidden lg:hidden">
              <Popup
                trigger={
                  <button>
                    <i className="bi bi-search"></i>
                  </button>
                }
                position=""
              >
                <div className="flex absolute top-14 right-[-8rem] mx-3 bg-gray-50 h-[2rem] w-[19rem] rounded-full border">
                  <i className="bi bi-search mt-2 mx-4"></i>
                  <input
                    type="text"
                    className="focus:outline-0 bg-transparent"
                    placeholder="Search"
                  />
                </div>
              </Popup>
            </div>

            <Link to="/new-story" className="">
              <div className="hidden md:flex lg:flex items-center text-gray-500 hover:text-black">
                <i className="user-icons bi bi-pencil-square mx-2 text-[1.3rem]"></i>
                <span className="text-sm">Write</span>
              </div>
            </Link>

            <div className="flex justify-end bell_icon mx-2 text-gray-400 hover:text-black">
              <i className="user-icons bi bi-bell text-[1.3rem]"></i>
            </div>

            <div className="bg-light flex items-center w-[2rem] mx-3">
              <img
                src="./images/profile_img.png"
                className="rounded-full"
                alt=""
              />
              <button onClick={showModel}>
                <i className="bi bi-chevron-down text-gray-400 hover:text-gray-900 mx-2"></i>
              </button>
              <div>
                <WriteNavModel isOpen={isVisisble} closeModel={closeModel}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default WriterNavbar;
