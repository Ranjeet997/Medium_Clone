import { React, useState, useCallback } from "react";
import uniqid from "uniqid";
import { Web3Storage } from "web3.storage";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "../../../../store/fetchBlogSlice";

function getAccessToken() {
  return process.env.REACT_APP_WEBTHREETOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export default function Publish_card({ visible, onClose, state1 }) {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState("");

  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("this is images file of dropzon", acceptedFiles);
    setImageFile(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const [display, setDisplay] = useState("hidden");
  const [publushBtnText, setPublushBtnText] = useState("Publish Now");
  const [scheduleBtnText, setScheduleBtnText] = useState("Schedule for later");
  const [postTopics, setPostTopics] = useState("");

  const handleOnChange = () => {
    if (
      scheduleBtnText === "Schedule for later" ||
      publushBtnText === "Publish Now" ||
      display === "display"
    ) {
      setScheduleBtnText("Cancel scheduling");
      setPublushBtnText("Schedule to publish");
      setDisplay("block");
    } else {
      setScheduleBtnText("Schedule for later");
      setPublushBtnText("publish Now");
      setDisplay("hidden");
    }
  };

  const handleBlogPost = async (e) => {
    e.preventDefault();
    try {
      // console.log("this handle on clicked func");
      const post_title = state1;
      const postContent = await localStorage.getItem("page-content");
      const post_content = postContent;
      let featured_image = "";

      // start uploading images file to web3server
      if (imageFile) {
        const files = imageFile;
        const onRootCidReady = (cid) => {
          console.log("uploading files with cid:", cid);
        };
        const totalSize = files[0].size;
        let fileName = files[0].name.replace(/\s/g, "%20");
        fileName = fileName.replace(/#/g, "%23");
        let uploaded = 0;
        const onStoredChunk = (size) => {
          uploaded += size;
          const pct = 100 * (uploaded / totalSize);
          // setImageProgress(pct.toFixed(1));
          console.log(`Uploading... ${pct.toFixed(1)}% complete`);
        };
        const client = makeStorageClient();
        const IpfsCid = await client.put(files, {
          onRootCidReady,
          onStoredChunk,
        });
        let ImageUrl = await `https://${IpfsCid}.ipfs.w3s.link/${fileName}`;
        console.log("this is images urls of web3server", ImageUrl);
        featured_image = `${ImageUrl}`;
      }
      // End uploading images file to web3server

      // Get User Details from localStorage
      const user = await JSON.parse(localStorage.getItem("userinfo"));
      console.log(user);

      let userName = user.userName;
      const post_uid = uniqid();
      const user_uid = user.user_uid;
      const post_tags = `${postTopics}`;
      const meta_title = `${post_title} | ${userName}`;
      const meta_description = `${post_title} | is published by ${userName}`;

      const res = await fetch("http://localhost:8080/api/blog/createblog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          post_uid,
          user_uid,
          post_tags,
          post_title,
          post_content,
          featured_image,
          meta_title,
          meta_description,
        }),
      });
      console.log("this call after post data");
      const data = await res.json();
      if (data.status === 409) {
        window.alert("Invalid Registation");
        console.log("Invalid Registation");
      } else {
        window.alert("seccessfuly post data");
        console.log("this is posted data res", data);
        onClose();
        localStorage.setItem("page-content", "");
        dispatch(fetchAllPost());
        navigate(`post/${data.post_slug}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!visible) return null;
  return (
    <>
      <div className="model w-full lg:w-full 2xl:w-[75rem] bg-white absolute left-[.5rem] xl:left-[4rem] 2xl:left-[10rem] top-[-.1rem] md:px-[3rem] lg:px-[4rem] xl:px-0 py-[2rem]">
        <div className="icon absolute right-8 top-5" onClick={onClose}>
          <span className="text-stone-500 hover:text-black text-[1.2rem]">
            <i className="bi bi-x-lg"></i>
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-9 px-8 xl:pl-[4.3rem] pt-[2rem] md:pt-[4rem] xl:pt-[8rem] tracking-tight">
          <div className="w-[18rem] md:w-full lg:w-[25rem] xl:w-[30.6rem]">
            <p className="text-[1.14rem] font-semibold font-dm-sans">
              Story Preview
            </p>
            <div
              className=" h-[13.8rem] bg-gray-50 flex justify-center items-center my-3 border-dashed border-2"
              {...getRootProps()}
            >
              <input
                type="file"
                name="thumbnail"
                id="input_thumbnail"
                className="drop-zone__input"
                required
                accept="image/*"
                {...getInputProps()}
              />
              <p className="w-[15rem] lg:w-[20rem] text-[1.06rem] text-stone-400 text-center font-dm-sans font-thin leading-5">
                Include a high-quality image in your story to make it more
                inviting to readers.
              </p>
            </div>
            <div className="lg:w-[25rem] xl:w-[30.6rem] my-5">
              <input
                type="text"
                value={state1}
                placeholder="write a preview title"
                className="text-[1.35rem] placeholder-stone-400 font-bold font-dm-sans outline-none border-b w-full"
              ></input>
              <input
                type="text"
                placeholder="write a preview subtitle"
                className="text-[1rem] text-stone-500 placeholder-stone-400 font-dm-sans outline-none border-b w-full mt-5"
              />
              <p className="text-[1rem] text-stone-500 font-dm-sans font-thin leading-6 mt-4 lg:w-[25rem] xl:w-[30rem]">
                <strong className="font-semibold">Note:</strong> Changes here
                will affect how your story appears in public places like
                Medium’s homepage and in subscribers’ inboxes — not the contents
                of the story itself.
              </p>
            </div>
          </div>
          <div className="">
            <div className="text">
              <p className="text-[1.14rem] font-dm-sans text-stone-600 mb-3.5">
                Publishing to: <strong>Ranjeetkumar</strong>
              </p>
              <p className="lg:w-[25rem] xl:w-[29rem] text-[1rem] font-dm-sans text-stone-600 leading-5 mb-2.5">
                Add or change topics (up to 5) so readers know what your story
                is about
              </p>
              <div className="flex items-center lg:w-[25rem] xl:w-[30rem] h-[3.8rem] bg-gray-50 border">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Add a topic.."
                  className="bg-transparent outline-none font-dm-sans pl-3 font-thin lg:w-[25rem] xl:w-[29rem]"
                  onChange={(e) => {
                    setPostTopics(e.target.value);
                  }}
                />
              </div>

              <div className={`${display} mt-7`}>
                <p className="text-[1rem] font-dm-sans text-stone-500 mb-1.5">
                  Schedule a time to publish:
                </p>
                <input
                  type="datetime-local"
                  className="text-[1rem] text-stone-500 placeholder-stone-400 font-dm-sans border-b lg:w-[25rem] xl:w-[30rem] outline-none tracking-tighter"
                />
                <p className="text-[1rem] font-dm-sans text-stone-500 mt-1.5">
                  Calculate time (GMT+5.5)
                </p>
                <p className="text-[1rem] font-dm-sans text-stone-500 mt-4 leading-5 lg:w-[25rem] xl:w-[30rem]">
                  This story will be published automatically within five minutes
                  of the specified time.
                </p>
              </div>

              <p className="lg:w-[25rem] xl:w-[29rem] text-[1rem] font-dm-sans text-stone-500 leading-5 mt-7">
                <a href="#/" className="underline decoration-2 cursor-pointer">
                  Learn more
                </a>{" "}
                about what happens to your post when you publish.
              </p>
              <div className="flex space-x-1 mt-10">
                <button
                  className="bg-green-700 hover:bg-green-800 text-white text-[1rem] font-dm-sans rounded-full h-6 px-3 lg:h-7 lg:px-3.5 2xl:px-5 2xl:h-10 cursor-pointer"
                  type="submit"
                  onClick={handleBlogPost}
                >
                  {publushBtnText}
                </button>
                <div className="" onClick={handleOnChange}>
                  <button
                    className="cursor-pointer text-stone-500 text-[.95rem] font-dm-sans rounded-full h-6 px-3 lg:h-7 lg:px-3.5 2xl:px-5 2xl:py-2.5 2xl:h-[2.5rem] border"
                    type="button"
                  >
                    <p className="cursor-pointer">{scheduleBtnText}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
