import { React, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import AddFeature from "../write_edit_comp/models/Add_Feature";
import Notification from "../write_edit_comp/models/Notification";
import ProfileCard from "../../nav/navmodel/ProfileModel";
import PublushUpdatedPost from "./PublishUpdatedPost";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import MyEditor from "../../../pages/mediumEditoe/MyEditor";

export default function UpdatePost() {
  const [title, setTitle] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [isSave, setIsSave] = useState(1);

  const postContent = useSelector((state) => state.postContent);
  const { post_uid } = useParams();
  console.log("this is post_uid", post_uid);
  console.log(postContent);
  useEffect(() => {
      setTitle(postContent.postData.title);
  },[setTitle, postContent]);

  const onHandleSave = () => {
    if (isSave === 1) {
      setIsSave(2);
    } else {
      setIsSave(1);
    }
  };

  const handleModelVisibility = () => {
    onHandleSave();
    setShowModel(true);
  };

  const closeModel = () => {
    setShowModel(false);
  };

  return (
    <div>
      <header>
        <div className="flex justify-between  items-center my-1 mx-3 lg:mx-5 xl:mx-[8rem] 2xl:mx-[17rem] xl:my-3">
          <div className="flex items-center space-x-2">
            <div className="logo">
              <img
                src="../images/logo.png"
                alt=""
                className="w-[3.1rem] xl:w-[4rem]"
              />
            </div>

            <div className="flex text w-[7.5rem] md:w-full md:space-x-4">
              <p className="text-[.8rem] lg:text-[.95rem] text-stone-700 leading-5">
                Draft in Ranjeetkumar
              </p>
              <button
                className="text-[.8rem] lg:text-[.95rem] text-stone-400 hover:text-stone-800 mt-5 md:mt-0"
                onClick={onHandleSave}
              >
                Saved
              </button>
            </div>
          </div>
          <div className="flex items-center ml-5">
            <button
              className="bg-green-600 hover:bg-green-700 text-white text-[.73rem] md:text-[.9rem] lg:text-[1rem] font-dm-sans rounded-full h-[1.3rem] px-2.5 lg:h-7 lg:px-3.5"
              type="submit"
              onClick={handleModelVisibility}
            >
              Publish
            </button>
            <div>
              <PublushUpdatedPost
                onClose={closeModel}
                visible={showModel}
                state1={postTitle}
                postUid={post_uid}
              />
            </div>

            <span className="text-[1rem] md:text-[1.3rem] text-neutral-500 hover:text-black cursor-pointer mx-2 md:mx-6">
              <Popup
                trigger={
                  <button>
                    <i className="bi bi-three-dots"></i>
                  </button>
                }
              >
                <AddFeature />
              </Popup>
            </span>
            <span className="text-[1rem] md:text-[1.3rem] text-neutral-500 hover:text-black cursor-pointer">
              <Popup trigger={<i className="bi bi-bell"></i>}>
                <Notification />
              </Popup>
            </span>
            <span className="ml-2 md:mx-6">
              <Popup
                trigger={
                  <img
                    src="../images/profile_img.png"
                    className="rounded-full w-[1.8rem] md:w-[2.2rem] cursor-pointer"
                    alt=""
                  />
                }
              >
                <ProfileCard />
              </Popup>
            </span>
          </div>
        </div>
      </header>

      <div className="main grid mt-[2rem] lg:mt-[2.4rem] xl:mt-[2.8rem]">
        <div className="justify-self-center text-neutral-500 md:w-[50vw] lg:w-[52rem] 2xl:w-[50vw]">
          <div className="title space-x-3 flex mt-[1rem] mb-5">
            <div className="Title">
              <input
                type="text"
                id="title"
                defaultValue={title}
                className="text-[2.8rem] outline-none text-stone-600 placeholder-stone-400 font-crimson w-[50vw]"
                placeholder="Title"
                onChange={(e) => {
                  setPostTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <MyEditor postContent={postContent.postData.content}/>
        </div>
      </div>
    </div>
  );
}
