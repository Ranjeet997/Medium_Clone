import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchIndividualPost } from "../store/fetchIndividualPost";

export default function Profile() {
  const [textColor_1, setTextColor_1] = useState("black");
  const [textColor_2, setTextColor_2] = useState("stone-400");
  const [textColor_3, setTextColor_3] = useState("stone-400");

  const [displayDiv_1, setDisplayDiv_1] = useState("block");
  const [displayDiv_2, setDisplayDiv_2] = useState("hidden");
  const [displayDiv_3, setDisplayDiv_3] = useState("hidden");

  const postStories = useSelector((state) => state.individualPost);

  const dispatch = useDispatch();

  // DISPATCHED fetchIndividualPost FUNCTION FROM REDUX FOR GET Individual User Data
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userinfo"));
    const user_uid = userData.user_uid;
    dispatch(fetchIndividualPost(user_uid));
  }, [dispatch]);

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
  // const getContentReadingTime = (post_content) => {
  //   const content = `${post_content}`;

  //   const contentLength = content.split(" ").length; // Counting the number of words in the content
  //   const averageReadingSpeed = 250; // Assuming an average reading speed of 250 words per minute

  //   const readingTimeInMinutes = Math.ceil(contentLength / averageReadingSpeed);
  //   const readingTimeInWords = contentLength;

  //   // console.log(`${readingTimeInMinutes} min (${readingTimeInWords} words)`);
  //   return `${readingTimeInMinutes} min read (${readingTimeInWords} words) so far`;
  // };

  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-[65%] 2xl:pl-[5.5rem] lg:border-r mx-6 mb-[5rem] lg:mb-0 md:mx-[4.5rem] lg:mx-0 lg:px-5 xl:px-[5rem] 2xl:ml-[6.7rem]">
          <div className="flex items-center justify-between user-name md:my-4 2xl:mt-[3rem]">
            <div className="head flex items-center my-6 2xl:my-2">
              <img
                src="../images/profile_img.png"
                alt=""
                className="w-[2.5rem] h-[2.5rem] 2xl:w-[1.2rem] 2xl:h-[1.2rem] rounded-full md:hidden mr-5"
              />
              <p className="text-[1.4rem] md:text-[2.5rem] font-bold font-dm-sans tracking-tight">
                Ranjeetkumar
              </p>
            </div>
            <span className="text-[1.4rem] text-gray-500">
              <i className="bi bi-three-dots"></i>
            </span>
          </div>
          <div className="text-[.9rem] font-medium bg-white items-center border-b space-x-10 2xl:mt-5 pb-3 2xl:py-4">
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
              Home
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
              Lists
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
              About
            </span>
          </div>
          <div
            className={`${displayDiv_1} border-b border-black w-[2.4rem] relative bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_2} border-b border-black w-[1.9rem] relative left-[5.05rem] bottom-[.1rem]`}
          ></div>
          <div
            className={`${displayDiv_3} border-b border-black w-[2.4rem] relative left-[9.6rem] bottom-[.1rem]`}
          ></div>
          <div className={`${displayDiv_1}`}>
            {postStories.individualData.map((item) => (
              <div key={item.post_slug}>
                <div className="border-b mt-10 tracking-tight font-dm-sans">
                  <Link to={`post/${item.post_slug}`}>
                    <div className="head flex items-center">
                      <span className="text-[.9rem] lg:text-[1rem] font-medium text-stone-500 mx-1">
                        {getPostCreatedData(item.created_at)} ago
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <div className="w-[65%] md:w-[76%] lg:w-[76%]">
                        <h1 className="text-[1rem] md:text-xl lg:text-2xl xl:text-[1.35rem] font-bold font-md-sans my-2.5 leading-5">
                          {item.post_title}
                        </h1>
                        {/* <p className="hidden md:block lg:block text-lg xl:text-[1rem] font-source-serif-pro leading-[1.6rem]">
                          {item.post_content}
                        </p> */}
                        <div
                          className="hidden md:block lg:block text-lg xl:text-[1rem] font-source-serif-pro leading-[1.6rem]"
                          dangerouslySetInnerHTML={{
                            __html: item.post_content
                              .split(" ")
                              .slice(0, 30)
                              .join(" "),
                          }}
                        ></div>
                      </div>

                      <div className="img mt-3 lg:mt-4">
                        {item.featured_image ? (
                          <img
                            src={item.featured_image}
                            alt=""
                            className="w-[5rem] h-[3.5rem] md:w-[7rem] md:h-[7rem] lg:w-[8rem] lg:h-[7.5rem]"
                          />
                        ) : null}
                      </div>
                    </div>
                  </Link>

                  <div className="bottom-contents flex justify-between items-center md:w-[76%] lg:w-[76%] my-4 md:my-10 lg:my-10">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="md:flex text-gray-500 space-x-2">
                        <span className="">1 min</span>
                      </div>
                    </div>

                    <div className="icons space-x-5">
                      <span>
                        <i className="bi bi-bookmark-plus text-xl text-gray-500 hover:text-gray-900"></i>
                      </span>
                      <span>
                        <i className="bi bi-three-dots text-xl text-gray-600 hover:text-gray-900"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${displayDiv_2}`}>
            <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-12 border bg-[#FAFAFA] rounded mt-[3rem] h-[15rem] lg:h-full">
              <div className="col-span-12 lg:col-span-6 px-[1.6rem] py-[1.2rem]">
                <div className="head flex items-center my-2">
                  <img
                    src="../images/profile_img.png"
                    alt=""
                    className="w-[1.2rem] h-[1.2rem] rounded-full"
                  />
                  <p className="text-[.9rem] 2xl:text-[.82rem] font-semibold mx-2 tracking-tight">
                    Ranjeetkumar
                  </p>
                </div>
                <div className="text-[1.1rem] lg:text-[1.4rem] font-dm-sans font-black my-2 2xl:my-3 tracking-tighter">
                  <p>Reading list</p>
                </div>
                <div className="flex justify-between text-stone-500">
                  <p className="text-[.8rem]">
                    No stories <i className="bi bi-lock-fill mx-1"></i>
                  </p>
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>
              {/* <div className="col-span-6 bg-[#F2F2F2] lg:hidden"></div> */}
              <div className="col-span-7 lg:col-span-3 bg-[#F2F2F2]"></div>
              <div className="col-span-3 lg:col-span-2 bg-[#F2F2F2] border-l-[.2rem] border-r-[.2rem] border-[#FAFAFA]"></div>
              <div className="col-span-2 lg:col-span-1 bg-[#F2F2F2]"></div>
            </div>
          </div>
          <div className={`${displayDiv_3}`}></div>
        </div>

        <div className="hidden lg:block w-[35%] lg:px-5 xl:px-[2.5rem] py-[5rem] 2xl:py-0 h-full sticky top-0">
          <div className="profileImg mt-[2.5rem]">
            <img
              src="../images/profile_img.png"
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
