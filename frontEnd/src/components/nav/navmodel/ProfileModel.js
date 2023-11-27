import React from "react";
import { Modal } from "antd";
import { Link } from "react-router-dom";

export default function ProfileModel({ isOpen, closeModel }) {
  const handleLouOutBtn = async () => {
    console.log("this is call inside of logout function");
    const data = await localStorage.removeItem("userinfo");
    console.log(
      `calls inside logout functoin and local storage value is ${data}`
    );
  };
  return (
    <>
      <Modal
        visible={isOpen}
        onCancel={closeModel}
        closable={false}
        footer={null}
        mask={false}
        width={250}
        height={200}
        className="absolute md:absolute lg:absolute top-[3.5rem] right-[1.2rem] 2xl:right-[6.5rem] rounded border shadow-md px-0 mx-0"
      >
        <div className="overflow-y-scroll xl:overflow-hidden h-[24rem] xl:h-full w-[12.5rem] bg-white text-[.85rem] text-stone-600 font-dm-sans">
          <div className="img flex items-center mt-2 mb-4">
            <img
              src="../images/profile_img.png"
              className="rounded-full w-[3rem]"
              alt=""
            />
            <div className="email ml-3">
              <p className="text-[.92] font-bold text-black">User name</p>
              <a
                href="#/"
                className="overflow-hidden hover:text-black hover:underline decoration-2"
              >
                User id
              </a>
            </div>
          </div>
          <div className="grid gap-y-4 border-t border-b py-4">
            <Link
                to="new-story"
                onClick={closeModel} href="#/" className="hover:text-black">
              Write a story
            </Link>
            <Link to="stories" onClick={closeModel} className="hover:text-black">
              Stories
            </Link>
            <Link to="stats" className="hover:text-black" onClick={closeModel}>
              Stats
            </Link>
            <Link to="setting" className="hover:text-black" onClick={closeModel}>
              Settings
            </Link>
          </div>
          <div className="grid gap-y-4 py-4">
          <Link to="library" onClick={closeModel}>
            <a href="#/" className="hover:text-black">
              Libraray
            </a>
            </Link>
            <a href="#/" className="hover:text-black">
              Publicatins
            </a>
            <a href="#/" className="hover:text-black">
              Control your recommendations
            </a>
            <a href="#/" className="hover:text-black">
              Medium partner program
            </a>
          </div>
          <div className="grid gap-y-4 border-t pt-4">
            <a href="#/" className="text-green-800 hover:text-black">
              Became a member
            </a>
            <a href="#/" className="hover:text-black">
              Help
            </a>
            <span className="hover:text-black" onClick={handleLouOutBtn}>
              Sign out
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}
