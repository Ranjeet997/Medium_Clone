import { Modal } from "antd";
import uniqid from "uniqid";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostCard() {
  const [stories, setStories] = useState([]);
  const [isVisisble, setIsVisisble] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { post_slug } = useParams();

  const showModel = () => {
    setIsVisisble(true);
  };
  const closeModel = () => {
    setIsVisisble(false);
  };

  useEffect(() => {
    const fetchSinglePost = async () => {
      // console.log("this is called inside post data inside email");
      // console.log(`Received post_slug: ${post_slug}`);
      const res = await fetch(
        `http://localhost:8080/api/blog/readOneBlog/${post_slug}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("this is res of create coment",res);
      const data = await res.json();
      if (data.status === 409 || !data) {
        window.alert("Invalid Registation");
        console.log("Invalid Registation");
      } else if (data) {
        setStories(data);
        console.log("seccessfuly fetched data");
      }
    };
    fetchSinglePost();
  }, [post_slug]);

  const onHandleComment = async () => {
    if (commentText) {
      const user = await JSON.parse(localStorage.getItem("userinfo"));
      const comment_uid = uniqid();
      const post_uid = stories.post_uid;
      const user_uid = user.user_uid;
      const comment = commentText;

      const res = await fetch(
        "http://localhost:8080/api/users/postComment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            comment_uid,
            post_uid,
            user_uid,
            comment,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.status === 409 || !data) {
        console.log("Invalid credentials");
      } else if(data){
        window.alert(data);
        console.log("response send Seccussfully");
      }
    }
  };

  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-[57%] 2xl:pl-[5.5rem] lg:border-r mx-6 mb-[5rem] lg:mb-0 md:mx-[4.5rem] lg:mx-0 lg:px-5 xl:px-[5rem] 2xl:ml-[6.7rem] pb-[5rem]">
          <div className="2xl:w-[42rem]">
            <div className="flex justify-between items-center my-[2rem]">
              <div className="head flex items-center my-2">
                <img
                  src="/images/profile_img.png"
                  alt=""
                  className="w-[3rem] h-[3rem] rounded-full"
                />
                <div className="mx-4 font-dm-sans">
                  <p className="text-[1.1rem] text-stone-700">Eve Arnold</p>
                  <p className="text-stone-400 text-md">
                    {new Date(stories.created_at).toLocaleString("en-us", {
                      day: "numeric",
                      month: "short",
                    })}{" "}
                    . 5 min read . Member-only
                  </p>
                </div>
              </div>
              <div className="space-x-4">
                <span>
                  <i className="bi bi-twitter text-neutral-400 hover:text-black"></i>
                </span>
                <span>
                  <i className="bi bi-facebook text-neutral-400 hover:text-black"></i>
                </span>
                <span>
                  <i className="bi bi-linkedin text-neutral-400 hover:text-black"></i>
                </span>
                <span>
                  <i className="bi bi-facebook text-neutral-400 hover:text-black"></i>
                </span>
                <span>
                  <i className="bi bi-bookmark-plus text-neutral-400 hover:text-black"></i>
                </span>
                <span className="">
                  <i className="text-[1.5rem] bi bi-three-dots text-neutral-400 hover:text-black"></i>
                </span>
              </div>
            </div>
            <div className="title font-crimson">
              <p className="text-[2.2rem] text-stone-700 font-bold leading-10">
                {stories.post_title}
              </p>
            </div>
            <div className="img my-[3rem]">
              {stories.featured_image ? (
                <img
                  src={stories.featured_image}
                  alt=""
                  className="w-full h-[30rem]"
                />
              ) : null}
            </div>

            <div className="content font-crimson">
              <div
                className="text-[1.4rem] text-stone-600"
                dangerouslySetInnerHTML={{ __html: stories.post_content }}
              ></div>
            </div>
            <div className="space-x-6 mt-6 text-lg">
              <span className="text-neutral-400 hover:text-black">
                <i className="bi bi-suit-heart"></i> <span>0</span>
              </span>
              <span onClick={showModel}>
                <i className="bi bi-chat text-neutral-400 hover:text-black"></i>
              </span>
              <span>
                <i className="bi bi-bookmark text-neutral-400 hover:text-black"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-[35%] lg:px-5 xl:px-[2.5rem] py-[5rem] 2xl:py-0">
          <div className="profileImg mt-[2.5rem]">
            <img
              src="/images/profile_img.png"
              alt=""
              className="w-[5rem] rounded-full"
            />
            <p className="text-md font-bold font-dm-sans tracking-tight my-4">
              Ranjeetkumar
            </p>
            <p className="text-sm text-green-700 font-dm-sans tracking-tight cursor-pointer">
              Edit pofile
            </p>
          </div>
          <div className="text fixed bottom-0">
            <p className="text-sm text-stone-400 w-[19rem] text-[.77rem] leading-4 my-6">
              Help Status Writers Blog Careers Privacy Terms About Text to
              speech
            </p>
          </div>
        </div>
      </div>
      <Modal
        visible={isVisisble}
        onCancel={closeModel}
        footer={null}
        mask={null}
        transitionName="my-modal-transition" // Use your custom CSS animation class
        maskTransitionName="my-modal-mask-transition" // Use your custom CSS animation class for the mask
        className="fixed bottom-0 md:top-0 right-0"
      >
        <div class="h-[80vh] md:h-[100vh] font-dm-sans">
          <div class="">
            <p className="text-lg text-gray-700 font-bold ">Comments (0)</p>
          </div>
          <div class="shadow-lg w-full h-[15rem] border mt-5 rounded-md">
            <div className="mx-5 my-3">
              <textarea
                type="text"
                onChange={(e) => {
                  setCommentText(e.target.value);
                }}
                placeholder="What are your thoughts? "
                className="text-md w-full h-[10rem] px-1 py-2 outline-none resize-none rounded-md"
              />

              <div className="flex justify-between">
                <button
                  className="md:text-md font-bold rounded-full text-white bg-[#1A8917] px-4 py-1.5 my-2.5 ml-auto"
                  onClick={onHandleComment}
                >
                  Respond
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <style>
        {`
          .my-modal-transition-enter {
            opacity: 0;
            transform: translateX(100%);
          }
          
          .my-modal-transition-enter-active {
            opacity: 1;
            transform: translateX(0);
            transition: all 0.3s ease-in;
          }
          
          .my-modal-transition-leave {
            opacity: 1;
            transform: translateX(0);
          }
          
          .my-modal-transition-leave-active {
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease-in;
          }
          
          .my-modal-mask-transition-enter {
            opacity: 0;
          }
          
          .my-modal-mask-transition-enter-active {
            opacity: 0.5;
            transition: all 0.3s ease-in;
          }
          
          .my-modal-mask-transition-leave {
            opacity: 0.5;
          }
          
          .my-modal-mask-transition-leave-active {
            opacity: 0;
            transition: all 0.3s ease-in;
          }  
          
        `}
      </style>
    </div>
  );
}
