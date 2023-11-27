import { React, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/blogSlice";
import { fetchIndividualPost } from "../store/fetchIndividualPost";
import DeletePost from "../pages/deletepage/DeletePost";

export default function Stories() {
  const [textColor_1, setTextColor_1] = useState("black");
  const [textColor_2, setTextColor_2] = useState("stone-400");
  const [textColor_3, setTextColor_3] = useState("stone-400");

  const [displayDiv_1, setDisplayDiv_1] = useState("block");
  const [displayDiv_2, setDisplayDiv_2] = useState("hidden");
  const [displayDiv_3, setDisplayDiv_3] = useState("hidden");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  // DISPATCHED fetchIndividualPost FUNCTION FROM REDUX FOR GET Individual User Data
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userinfo"));
    const user_uid = userData.user_uid;
    dispatch(fetchIndividualPost(user_uid));
  },[dispatch])

  const postStories = useSelector((state) => state.individualPost);
  
// This function is used to find how long ago the post was created
  const getPostCreatedData = (create_date) => {
    const currentDate = new Date();
    const creationDate = new Date(`${create_date}`); // Replace with the creation date you want to count from

    const diffInMilliseconds = currentDate.getTime() - creationDate.getTime();

    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const diffInMonths =
      currentDate.getMonth() +
      1 -
      (creationDate.getMonth() + 1) +
      12 * (currentDate.getFullYear() - creationDate.getFullYear());
    const diffInYears = Math.floor(
      diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    );

    if (diffInYears) {
      return `${diffInYears} years`;
    } else if (diffInMonths) {
      return `${diffInMonths} months`;
    } else if (diffInDays) {
      return `${diffInDays} days`;
    } else if (diffInHours) {
      return `${diffInHours} hours`;
    } else {
      return `${diffInMinutes} min`;
    }
  };

  // This Function Is Used To Find Post Reading time
  const getContentReadingTime = (post_content) => {
    const content = `${post_content}`;

    const contentLength = content.split(" ").length; // Counting the number of words in the content
    const averageReadingSpeed = 250; // Assuming an average reading speed of 250 words per minute

    const readingTimeInMinutes = Math.ceil(contentLength / averageReadingSpeed);
    const readingTimeInWords = contentLength;

    // console.log(`${readingTimeInMinutes} min (${readingTimeInWords} words)`);
    return `${readingTimeInMinutes} min read (${readingTimeInWords} words) so far`;
  };

  const onHandleEditPost = (title, content) => {
    dispatch(add({title, content }));
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  const showModel = () => {
    setIsOpen(true);
  };

  const handleStory =()=>{
    navigate("/new-Story")
  }

  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-[58%] 2xl:pl-[5.5rem] lg:border-r lg:h-[45rem] mx-6 mb-[5rem] lg:mb-0 md:mx-[4.5rem] lg:mx-0 lg:px-5 xl:px-[5rem] 2xl:ml-[6.7rem]">
          <div className="md:flex items-center justify-between user-name md:my-4 mt-7 md:mt-[3rem]">
            <p className="text-[1.4rem] md:text-[2.6rem] font-bold font-dm-sans tracking-tight">
              Your stories
            </p>
            <div className="flex space-x-2 tracking-tight">
              <buitton className="text-[.9rem] bg-[#1A8917] font-dm-sans text-white rounded-full cursor-pointer px-4 py-2" onClick={handleStory}>
                Write a story
              </buitton>
              <button className="text-[.9rem] font-dm-sans rounded-full cursor-pointer px-4 py-2 border border-black">
                Import a story
              </button>
            </div>
          </div>
          <div className="text-[.9rem] bg-white items-center border-b space-x-10 mt-5 py-4">
            <span
              className={`text-${textColor_1} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("block");
                setDisplayDiv_2("hidden");
                setDisplayDiv_3("hidden");
                setTextColor_1("black");
                setTextColor_2("stone-400");
                setTextColor_3("stone-400");
              }}
            >
              Drafts {postStories.individualData.length}
            </span>
            <span
              className={`text-${textColor_2} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("hidden");
                setDisplayDiv_2("block");
                setDisplayDiv_3("hidden");
                setTextColor_1("stone-400");
                setTextColor_2("black");
                setTextColor_3("stone-400");
              }}
            >
              Published {postStories.individualData.length}
            </span>
            <span
              className={`text-${textColor_3} font-dm-sans hover:text-black`}
              onClick={() => {
                setDisplayDiv_1("hidden");
                setDisplayDiv_2("hidden");
                setDisplayDiv_3("block");
                setTextColor_1("stone-400");
                setTextColor_2("stone-400");
                setTextColor_3("black");
              }}
            >
              Responses
            </span>
          </div>
          <div
            className={`${displayDiv_1} border-b border-black w-[3.2rem] relative bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_2} border-b border-black w-[4.6rem] relative left-[5.9rem] bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_3} border-b border-black w-[4.3rem] relative left-[13.2rem] bottom-[.1rem]`}
          ></div>
          <div className={`${displayDiv_1}`}>
            {postStories.individualData.map((item) => (
              <div className="border-b py-5 mt-4" key={item.id}>
                <div className="storyName font-dm-sans font-medium pr-5">
                  <p className="text-[1.2rem] font-bold">{item.post_title}</p>
                  <div
                    className="text-[.9rem] text-stone-500 my-2"
                    dangerouslySetInnerHTML={{
                      __html: item.post_content
                        .split(" ")
                        .slice(0, 30)
                        .join(" "),
                    }}
                  ></div>

                  <div className="text-[.9rem] text-stone-500 flex items-center">
                    <span>
                      Last edited {getPostCreatedData(item.created_at)} ago
                    </span>
                    <span>
                      <i className="bi bi-dot"></i>
                    </span>
                    <span>{getContentReadingTime(item.post_content)}</span>
                    <span className="text-[1.1rem] mx-2 cursor-pointer ">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${displayDiv_2}`}>
            {postStories.individualData.map((item) => (
              <div className="border-b py-5 mt-4" key={item.id}>
                <div className="storyName font-dm-sans font-medium">
                  <Link to={`post/${item.post_slug}`}>
                    <p className="text-[1.2rem] font-bold">{item.post_title}</p>
                    <div
                      className="text-[.9rem] text-stone-500 my-2"
                      dangerouslySetInnerHTML={{
                        __html: item.post_content
                          .split(" ")
                          .slice(0, 30)
                          .join(" "),
                      }}
                    ></div>
                  </Link>
                  <div className="text-[.9rem] text-stone-500 flex items-center">
                    <span>
                      Publish on{" "}
                      {new Date(item.created_at).toLocaleString("en-us", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                    <span>
                      <i className="bi bi-dot"></i>
                    </span>
                    <span>
                      {Math.ceil(item.post_content.split(" ").length / 250)} min
                      read
                    </span>
                    <Popup
                      trigger={
                        <span className="text-[1.1rem] mx-2 cursor-pointer">
                          <i className="bi bi-share-fill"></i>
                        </span>
                      }
                    >
                      <div className="bg-white border font-dm-sans font-medium text-stone-400 rounded shadow py-2">
                        <div className="text-[.9rem] hover:text-black border-b pl-5 pr-2 py-2">
                          <span>
                            <i className="bi bi-link-45deg text-[1.1rem]"></i>
                          </span>
                          <span className="mx-2.5 tracking-tight">
                            Copy link
                          </span>
                        </div>
                        <div className="text-[.9rem] hover:text-black pl-5 pr-2 py-2">
                          <span>
                            <i className="bi bi-twitter text-[1.1rem]"></i>
                          </span>
                          <span className="mx-2.5 tracking-tight">
                            Share on twiter
                          </span>
                        </div>
                        <div className="text-[.9rem] hover:text-black pl-5 pr-2 py-2">
                          <span>
                            <i className="bi bi-facebook text-[1.1rem]"></i>
                          </span>
                          <span className="mx-2.5 tracking-tight">
                            Share on facebook
                          </span>
                        </div>
                        <div className="text-[.9rem] hover:text-black pl-5 pr-2 py-2">
                          <span>
                            <i className="bi bi-linkedin text-[1.1rem]"></i>
                          </span>
                          <span className="mx-2.5 tracking-tight">
                            Share on linkedin
                          </span>
                        </div>
                      </div>
                    </Popup>

                    <Popup
                      trigger={
                        <span className="text-[1.1rem] mx-2 cursor-pointer">
                          <i className="bi bi-three-dots"></i>
                        </span>
                      }
                    >
                      <div className="bg-white border font-dm-sans font-medium text-stone-400 rounded shadow px-3 space-y-3 py-4">
                        <div className="text-[.9rem]  hover:text-black">
                          <Link to={`update-story/${item.post_uid}`} className="outline-none">
                            <span
                              className="mx-2.5 tracking-tighter"
                              onClick={() =>
                                onHandleEditPost(
                                  item.post_title,
                                  item.post_content
                                )
                              }
                            >
                              Edit story
                            </span>
                          </Link>
                        </div>
                        <div className="text-[.9rem] hover:text-black">
                          <span className="mx-2.5 tracking-tighter">
                            View stats
                          </span>
                        </div>
                        <div className="text-[.9rem] hover:text-black">
                          <span
                            className="mx-2.5 tracking-tighter text-red-700 hover:text-black"
                            onClick={showModel}
                          >
                            Delete story
                          </span>
                        </div>
                      </div>
                    </Popup>
                  </div>
                </div>
                <DeletePost isOpen={isOpen} handleCancel={handleCancel} postSlug={item.post_slug} />
              </div>
            ))}
          </div>
          <div className={`${displayDiv_3} mx-[6.7rem]`}></div>
        </div>

        <div className="hidden lg:block w-[35%] lg:px-5 xl:px-[2.5rem] 2xl:px-[2.5rem] py-[2.5rem] font-dm-sans h-full sticky top-0">
          <div className="text">
            <div className="font-dm-sans">
              <p className="text-lg lg:text-[1rem] xl:text-[1rem] font-semibold">
                Staff Picks
              </p>
            </div>

            <div className="my-5">
              <div className="head flex items-center my-2">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[1.2rem] h-[1.2rem] rounded-full"
                />
                <p className="text-[.82rem] font-semibold mx-2">
                  Chris Dixon in OneZero
                </p>
              </div>
              <p className="text-lg lg:text-[1rem] xl:text-md font-bold my-2.5 leading-5">
                My Grandpops, Richard Wright, and the Chicago Post Office
              </p>
            </div>

            <div className="my-5">
              <div className="head flex items-center my-2">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[1.2rem] h-[1.2rem] rounded-full"
                />
                <p className="text-[.82rem] font-semibold mx-2">
                  Chris Dixon in OneZero
                </p>
              </div>
              <p className="text-lg lg:text-[1rem] xl:text-md font-bold my-2.5 leading-5">
                My Grandpops, Richard Wright, and the Chicago Post Office
              </p>
            </div>

            <div className="my-5">
              <div className="head flex items-center my-2">
                <img
                  src="../images/profile_img.png"
                  alt=""
                  className="w-[1.2rem] h-[1.2rem] rounded-full"
                />
                <p className="text-[.82rem] font-semibold mx-2">
                  Chris Dixon in OneZero
                </p>
              </div>
              <p className="text-lg lg:text-[1rem] xl:text-md font-extrabold my-2.5 leading-5">
                My Grandpops, Richard Wright, and the Chicago Post Office
              </p>
            </div>
            {/* reapeted div end */}
            <div className="">
              <p className="text-[.82rem] text-green-700">See the full list</p>
            </div>

            <div className="twitter-card text-center flex justify-center">
              <div className="w-50 border-b px-8 py-8">
                <div className="flex justify-center items-center my-3">
                  <span>
                    <img src="../images/logo.png" alt="" className="w-12" />
                  </span>
                  <span>
                    <i className="bi bi-plus-lg text-2xl"></i>
                  </span>
                  <span>
                    <i className="bi bi-twitter text-2xl text-sky-400"></i>
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="text-lg lg:text-[1rem] xl:text-md">
                    Discover Medium writers you already follow on Twitter.
                  </h1>
                </div>
                <div className="btn my-6 font-semibold">
                  <button
                    className="border border-stone-400 xl:text-sm rounded-full px-7 py-2.5"
                  >
                    <i className="bi bi-twitter text-xl xl:text-xl text-sky-400 mr-3"></i>
                    Connect to Twitter
                  </button>
                </div>
                <div className="lg:text-[.82rem] xl:text-[.95rem]">
                  <button className="underline text-gray-500">Maybe Later</button>
                </div>
              </div>
            </div>

            <div className="my-10">
              <p className="heading text-lg lg:text-[1rem] xl:text-md font-semibold my-4">
                Recommended topics
              </p>

              <div className="topics flex flex-wrap gap-3 lg:text-[.82rem] 2xl:text-md lg:font-normal font-semibold">
                <div className="">
                  <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                    Programming
                  </button>
                </div>
                <div className="">
                  <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                    Data Science
                  </button>
                </div>
                <div className="">
                  <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                    Technology
                  </button>
                </div>
                <div className="">
                  <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                    Self Improvement
                  </button>
                </div>
                <div className="">
                  <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                    Writing
                  </button>
                </div>
                <div className="">
                  <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                    Relatiomship
                  </button>
                </div>
                <div className="">
                  <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2">
                    Machine Learning
                  </button>
                </div>
              </div>
            </div>

            <div className="to-folow">
              <div className="">
                <p className="text-lg lg:text-[1rem] xl:text-md font-semibold my-4">
                  Who to follow
                </p>
              </div>

              {/* multiple div */}
              <div className="flex my-3">
                <div className="img lg:w-[10rem] 2xl:w-14">
                  <img
                    src="../images/profile_img.png"
                    alt=""
                    className="w-[2rem] h-[2rem] rounded-full mt-1.5"
                  />
                </div>

                <div className="head">
                  <p className="text-lg lg:text-[1rem] xl:text-md font-bold mb-1">
                    M.G Siegler
                  </p>
                  <p className="text-gray-500 lg:text-[.82rem] xl:text-md">
                    Writer turned investor turned investor...
                  </p>
                </div>

                <div className="btn lg:text-[.82rem] 2xl:text-md mt-7 ml-3">
                  <button
                    className="border border-stone-400 rounded-full px-4 py-2 lg:px-3 lg:py-1.5"
                  >
                    Follow
                  </button>
                </div>
              </div>

              <div className="flex my-3">
                <div className="img w-20 lg:w-10 2xl:w-14">
                  <img
                    src="../images/profile_img.png"
                    alt=""
                    className="w-[2rem] h-[2rem]  rounded-full mt-1.5"
                  />
                </div>

                <div className="head">
                  <p className="text-lg lg:text-[1rem] xl:text-md font-bold mb-1">
                    Robert Roy Britt
                  </p>
                  <p className="text-gray-500 lg:text-[.82rem] xl:text-md">
                    Independent jourlist covering...
                  </p>
                </div>

                <div className="btn lg:text-[.82rem] 2xl:text-md mt-7 ml-3">
                  <a
                    href="#/"
                    className="border border-stone-400 rounded-full px-4 py-2 lg:px-3 lg:py-1.5"
                  >
                    Follow
                  </a>
                </div>
              </div>

              <div className="flex my-1">
                <div className="img w-20 lg:w-10 2xl:w-14">
                  <img
                    src="../images/profile_img.png"
                    alt=""
                    className="w-[2rem] h-[2rem] rounded-full mt-1.5"
                  />
                </div>

                <div className="head">
                  <p className="text-lg lg:text-[1rem] xl:text-md font-bold mb-1">
                    Will Leitch
                  </p>
                  <p className="text-gray-500 lg:text-[.82rem] xl:text-md">
                    I write about a week....
                  </p>
                </div>

                <div className="btn lg:text-[.82rem] 2xl:text-md mt-7 ml-3">
                  <a
                    href="#/"
                    className="border border-stone-400 rounded-full px-4 py-2 lg:px-3 lg:py-1.5"
                  >
                    Follow
                  </a>
                </div>
              </div>
              {/* multiple div */}

              <div className="my-10 font-semibold">
                <p className="text-green-600 text-[.9rem]">
                  See more suggestions
                </p>
              </div>

              <div className="my-7">
                <div className="head-section">
                  <p className="text-lg lg:text-[1rem] xl:text-md text-stone-600 font-bold">
                    Reading list
                  </p>
                </div>
                <div className="text-div text-[.87rem] font-semibold text-stone-500 my-5 tracking-tight">
                  <p>
                    Click the <i className="bi bi-bookmark-plus"></i> on any
                    story to easily add it to your reading list or a custom list
                    that you can share.
                  </p>
                </div>
                <div className="">
                  <p className="text-[.7rem] text-stone-500">
                    Help Status Writers Blog Careers Privacy Terms About Text to
                    speech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
