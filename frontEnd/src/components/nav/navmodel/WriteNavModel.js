import { React, useContext } from "react";
import { Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RootContext } from "../../../App";

export default function WriteNavModel({ isOpen, closeModel }) {
  const rootContext = useContext(RootContext);

  const navigate = useNavigate();

  const handleLouOutBtn = async () => {
    console.log("this is call inside of logout function");
    const data = await localStorage.removeItem("userinfo");
    rootContext.setIsSignOut(true);
    closeModel();
    navigate("/");
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
        width={248}
        height={100}
        className="absolute md:absolute lg:absolute top-12 right-3.5 rounded border shadow-md px-0 mx-0"
      >
        <div className="overflow-y-scroll md:overflow-hidden text-[.9rem] lg:text-lg w-[12.5rem] h-[24rem] lg:h-[25rem] xl:h-[24rem]">
          <div className="card rounded">
            <div className="md:hidden lg:hidden flex">
              <Link
                to="new-story"
                className="items-center text-gray-500 hover:text-gray-900"
                onClick={closeModel}
              >
                <i className="fa-thin bi bi-pencil-square text-xl lg:text-[1.6rem] border-b pb-2.5"></i>
                <span className="pb-3">Write</span>
                <div className=""></div>
              </Link>
            </div>

            <div className="pb-5">
              <Link to="profile" onClick={closeModel}>
                <div className="text-gray-500 hover:text-gray-900">
                  <span>
                    <i className="user-icons bi bi-person-circle  mr-5 text-xl lg:text-[1.6rem] xl:text-[1.3rem]"></i>
                  </span>
                  <span className="xl:text-[1rem]" href="profile">
                    Profile
                  </span>
                </div>
              </Link>
              <Link to="library" onClick={closeModel}>
                <div className="my-2 text-gray-500 hover:text-gray-900">
                  <span>
                    <i className="user-icons bi bi-bookmarks text-secondary mr-5 text-xl lg:text-[1.6rem] xl:text-[1.3rem]"></i>
                  </span>
                  <span className="xl:text-[1rem]">Library</span>
                </div>
              </Link>
              <Link to="stories" onClick={closeModel}>
                <div className="text-gray-500 hover:text-gray-900 my-2">
                  <span>
                    <i className="user-icons bi bi-card-text text-secondary mr-5 text-xl lg:text-[1.6rem] xl:text-[1.3rem]"></i>
                  </span>
                  <span className="xl:text-[1rem]">Stories</span>
                </div>
              </Link>
              <Link to="stats" onClick={closeModel}>
                <div className="text-gray-500 hover:text-gray-900">
                  <span>
                    <i className="user-icons bi bi-bar-chart text-secondary mr-5 text-xl lg:text-[1.6rem] xl:text-[1.3rem]"></i>
                  </span>
                  <span className="xl:text-[1rem]">Stats</span>
                </div>
              </Link>
            </div>

            <div className="border-t py-5">
              <Link
                to="setting"
                className="text-gray-500 hover:text-gray-900"
                onClick={closeModel}
              >
                <p className="xl:text-[1rem]">Settings</p>
              </Link>
              <Link to="recommendation" onClick={closeModel}>
                <div className="text-gray-500 hover:text-gray-900 my-2">
                  <p className="xl:text-[1rem]">Refine recommendations</p>
                </div>
              </Link>
              <div
                className="text-gray-500 hover:text-gray-900"
                onClick={closeModel}
              >
                <span className="xl:text-[1rem]">Manage publications</span>
              </div>
            </div>

            <div className="border-t py-5 lg:pt-5 lg:pb-0">
              <div className="" onClick={handleLouOutBtn}>
                <span className="text-gray-500 hover:text-gray-900">
                  Sign Out
                </span>
              </div>
              <div className="mt-2">
                <span className="text-gray-500">User email</span>
              </div>
            </div>

            <div className="lg:hidden border-t text-[.7rem] pt-5">
              <div className="space-x-2">
                <span className="text-gray-500 hover:text-gray-900">Helpt</span>
                <span className="text-gray-500 hover:text-gray-900">
                  Status
                </span>
                <span className="text-gray-500 hover:text-gray-900">
                  Writes
                </span>
                <span className="text-gray-500 hover:text-gray-900">Blog</span>
                <span className="text-gray-500 hover:text-gray-900">
                  careers
                </span>
              </div>
              <div className="space-x-2">
                <span className="text-gray-500 hover:text-gray-900">
                  Privacy
                </span>
                <span className="text-gray-500 hover:text-gray-900">Term</span>
                <span className="text-gray-500 hover:text-gray-900">About</span>
                <span className="text-gray-500 hover:text-gray-900">
                  Text to speech
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
