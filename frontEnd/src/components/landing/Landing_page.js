import React from "react";
import Footer from "./Footer";
import Landing_page_card from "./Landing_page_card";

export default function Landing_page() {
  return (
    <>

      <div className="grid grid-row-3 font-dm-sans mt-[6rem] md:mt-[5rem]">
        <div className="bg-red-400 grid place-content-around border-b border-black xl:px-[6rem]">
          <div className="h-[32.5rem] w-[19.5rem] md:grid md:place-content-around lg:place-content-start lg:grid-0 md:h-[36rem] md:w-[60rem] lg:h-[32rem] lg:w-[83rem] xl:h-[32rem] xl:w-[83rem]">
          <div className="md:w-[53rem]">
            <div className="mt-[7rem] md:mt-0 lg:mt-[7rem] lg:mt-[3.5rem]">
              <div className="mb-11 md:mb-14 lg:mb-11">
                <h className="text-[3.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] leading-none font-semibold">
                  Stay curious.
                </h>
              </div>
              <p className="text-[1.45rem] md:text-[1.7rem] lg:text-[1.9rem] xl:text-[1.45rem] leading-7 lg:font-normal w-[19.7rem] md:w-[34rem] lg:w-[36rem] xl:w-[30rem]">
                Discover stories, thinking, and expertise from writers on any
                topic.
              </p>
              <div className="mt-[3.5rem] md:mt-[4rem] lg:mt-[3.5rem]">
                <a className="bg-black hover:bg-stone-900 text-white text-xl md:text-2xl lg:text-2xl xl:text-2xl lg:font-semibold rounded-full px-[3rem] py-[.5rem]">
                  Start reading
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="grid place-content-around lg:place-content-between xl:place-content-around border-b py-10 lg:px-20 xl:px-0">
          <div className="w-[19.5rem] md:w-[53rem] lg:w-[83rem] font-raleway tracking-tighter">
            <div className="head text-lg lg:text-[1.4rem] 2xl:text-[1.2rem] 2xl:text-[1rem] font-medium">
              <p>Trending on Medium</p>
            </div>
            <div className="grid place-content-around md:grid-cols-2 md:gap-7 md:place-content-around lg:grid-cols-2 lg:place-content-between lg:gap-x-[10rem] lg:gap-y-5 xl:grid-cols-3 xl:place-content-between  xl:gap-3">
              <div className="flex ">
                <div className="text-[2rem] lg:text-[3rem] xl:text-[2.5rem] 2xl:text-[2rem] font-extrabold text-gray-300 mr-5 mt-2">
                  <p>01</p>
                </div>

                <div className="mt-5">
                  <div className="head flex items-center ">
                    <img
                      src="./images/profile_img.png"
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] rounded-full"
                    />
                    <span className="font-Roboto text-sm lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium font-semibold ml-2">
                      Chris Dixon
                    </span>
                  </div>

                  <div className="w-[17rem] md:w-[23rem] lg:w-[26rem] xl:w-[23.5rem] 2xl:w-[23.5rem] leading-5 lg:leading-5">
                    <p className="md:text-[1.1rem] lg:text-[1.45rem] xl:text-[1.2rem] 2xl:text-[1rem] font-extrabold  my-2.5 lg:my-4">
                      How I Use RSS To “Rewild” My Attention
                    </p>
                  </div>
                  <div className="flex items-center items-center text-sm mt-2">
                    <div className="md:flex text-gray-500 text-[.95rem] lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium space-x-1">
                      <span className="">Feb 7</span>
                      <span className=""><i className="bi bi-dot"></i></span>
                      <span className="">6 min read</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="text-[2rem] lg:text-[3rem] xl:text-[2.5rem] font-extrabold text-gray-300 mr-5 mt-2">
                  <p>01</p>
                </div>

                <div className="mt-5">
                  <div className="head flex items-center ">
                    <img
                      src="./images/profile_img.png"
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] rounded-full"
                    />
                    <span className="font-semibold text-sm lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium ml-2">
                      Chris Dixon
                    </span>
                  </div>

                  <div className="w-[17rem] md:w-[23rem] lg:w-[26rem] xl:w-[23.5rem] 2xl:w-[23.5rem] leading-5">
                    <p className="md:text-[1.1rem] lg:text-[1.45rem] xl:text-[1.2rem] 2xl:text-[1rem] xl:text-[1.2rem] 2xl:text-[1rem] font-extrabold  my-2.5 lg:my-4">
                      How I Use RSS To “Rewild” My Attention
                    </p>
                  </div> 
                  <div className="flex items-center items-center mt-2">
                    <div className="flex text-gray-500 text-[.95rem] lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium space-x-1">
                      <span className="">Feb 7</span>
                      <span className=""><i className="bi bi-dot"></i></span>
                      <span className="">6 min read</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="text-[2rem] lg:text-[3rem] xl:text-[2.5rem] font-extrabold text-gray-300 mr-5 mt-2">
                  <p>01</p>
                </div>

                <div className="mt-5">
                  <div className="head flex items-center ">
                    <img
                      src="./images/profile_img.png"
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] rounded-full"
                    />
                    <span className="font-semibold font-Roboto text-sm lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium ml-2">
                      Chris Dixon
                    </span>
                  </div>

                  <div className="w-[15rem] md:w-[23rem] lg:w-[26rem] xl:w-[23.5rem] 2xl:w-[23.5rem] leading-5">
                    <p className="md:text-[1.1rem] lg:text-[1.45rem] xl:text-[1.2rem] 2xl:text-[1rem] font-extrabold  my-2.5 lg:my-4">
                      METS ANNOUNCE 15 PLAYERS INVITED TO MAJOR LEAGUE CAMP
                    </p>
                  </div>
                  <div className="flex items-center items-center text-sm mt-2">
                    <div className="flex text-gray-500 text-[.95rem] lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium space-x-1">
                      <span className="">Feb 7</span>
                      <span className=""><i className="bi bi-dot"></i></span>
                      <span className="">6 min read</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="text-[2rem] lg:text-[3rem] xl:text-[2.5rem] font-extrabold text-gray-300 mt-2 mr-5">
                  <p>01</p>
                </div>

                <div className="mt-5">
                  <div className="head flex items-center">
                    <img
                      src="./images/profile_img.png"
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] rounded-full"
                    />
                    <span className="font-semibold font-Roboto text-sm lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium ml-2">
                      Chris Dixon
                    </span>
                  </div>

                  <div className="w-[17rem] md:w-[23rem] lg:w-[26rem] xl:w-[23.5rem] 2xl:w-[23.5rem] leading-5">
                    <p className="md:text-[1.1rem] lg:text-[1.45rem] xl:text-[1.2rem] 2xl:text-[1rem] font-extrabold  my-2.5 lg:my-4">
                      Algorithms Unlocked: How They’re Shaping Our Everyday
                      Lives
                    </p>
                  </div>
                  <div className="flex items-center items-center text-sm mt-2">
                    <div className="flex text-gray-500 text-[.95rem] lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium space-x-1">
                      <span className="">Feb 7</span>
                      <span className=""><i className="bi bi-dot"></i></span>
                      <span className="">6 min read</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="text-[2rem] lg:text-[3rem] xl:text-[2.5rem] font-extrabold text-gray-300 mr-5 mt-2">
                  <p>01</p>
                </div>

                <div className="mt-5">
                  <div className="head flex items-center ">
                    <img
                      src="./images/profile_img.png"
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] rounded-full"
                    />
                    <span className="font-semibold font-Roboto text-sm lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium ml-2">
                      Chris Dixon
                    </span>
                  </div>

                  <div className="w-[15rem] md:w-[23rem] lg:w-[26rem] xl:w-[23.5rem] 2xl:w-[23.5rem] leading-5">
                    <p className="md:text-[1.1rem] lg:text-[1.45rem] xl:text-[1.2rem] 2xl:text-[1rem] font-extrabold  my-2.5 lg:my-5">
                      METS ANNOUNCE 15 PLAYERS INVITED TO MAJOR LEAGUE CAMP
                    </p>
                  </div>
                  <div className="flex items-center items-center text-sm mt-2">
                    <div className="flex text-gray-500 text-[.95rem] lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium space-x-1">
                      <span className="">Feb 7</span>
                      <span className=""><i className="bi bi-dot"></i></span>
                      <span className="">6 min read</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="text-[2rem] lg:text-[3rem] xl:text-[2.5rem] font-extrabold text-gray-300 mr-5 mt-2">
                  <p>01</p>
                </div>

                <div className="mt-5">
                  <div className="head flex items-center ">
                    <img
                      src="./images/profile_img.png"
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] rounded-full"
                    />
                    <span className="font-semibold font-Roboto text-sm lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium ml-2">
                      Chris Dixon
                    </span>
                  </div>

                  <div className="w-[15rem] md:w-[23rem] lg:w-[26rem] xl:w-[23.5rem] 2xl:w-[23.5rem] leading-5">
                    <p className="md:text-[1.1rem] lg:text-[1.45rem] xl:text-[1.2rem] 2xl:text-[1rem] font-extrabold  my-2.5 lg:my-4">
                      METS ANNOUNCE 15 PLAYERS INVITED TO MAJOR LEAGUE CAMP
                    </p>
                  </div>
                  <div className="flex items-center items-center text-sm mt-2">
                    <div className="md:flex text-gray-500 text-[.95rem] lg:text-[1.2rem] xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium space-x-1">
                      <span className="">Feb 7</span>
                      <span className=""><i className="bi bi-dot"></i></span>
                      <span className="">6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid place-content-around">
          <div className="w-[20rem] md:w-[53rem] lg:w-[83rem] xl:w-[83.5rem] lg:flex lg:flex-row-reverse ml-2 lg:mt-[2rem]">
            <div className="w-[20rem] md:w-[55rem] lg:w-[50rem] xl:w-[50rem] lg:h-screen lg:sticky lg:top-20 lg:w-full font-satoshi xl:h-screen xl:sticky xl:top-20 xl:w-full lg:ml-0 xl:ml-[10rem]">
              <div className="pt-3 pb-11 lg:pb-6 xl:pb-4">
                <p className="heading text-md md:text-lg lg:text-[1.3rem] xl:text-lg 2xl:text-[1.1rem] font-semibold my-2 md:my-3 lg:my-5">
                  Discover more of what matters to you
                </p>

                <div className="topics flex flex-wrap gap-x-3 gap-y-3 text-[.8rem] md:text-[.96rem] lg:text-[1.2rem] xl:text-base 2xl:text-[.9rem] font-normal text-gray-500">
                  <div className="mt-3">
                    <a className="border rounded px-4 py-2">Programming</a>
                  </div>
                  <div className="mt-3">
                    <a className="border rounded px-4 py-2">Data Science</a>
                  </div>
                  <div className="mt-3">
                    <a className="border rounded px-4 py-2">Technology</a>
                  </div>
                  <div className="mt-3">
                    <a className="border rounded px-4 py-2">Self Improvement</a>
                  </div>
                  <div className="mt-3">
                    <a className="border rounded px-4 py-2">Writing</a>
                  </div>
                  <div className="mt-3">
                    <a className="border rounded px-4 py-2">Relatiomship</a>
                  </div>
                  <div className="mt-3">
                    <a className="border rounded px-4 py-2">Machine Learning</a>
                  </div>
                  <div className="mt-3">
                    <a className="border rounded px-4 py-2">Productvity</a>
                  </div>
                  <div className="mt-3">
                    <a className="border rounded px-4 py-2">Politics</a>
                  </div>
                </div>
              </div>

              <div className="my-6 hidden lg:block border-t lg:py-8 xl:py-7">
                <div className="flex flex-wrap lg:w-[23rem] xl:w-[26rem]  text-md lg:text-xl 2xl:text-[1rem] 2xl:text-[.9rem] 2xl:font-medium gap-x-7 gap-y-2 font-medium text-stone-500">
                  <span>Help</span>
                  <span>Status</span>
                  <span>Writers</span>
                  <span>Blog</span>
                  <span>Careers</span>
                  <span>Privacy</span>
                  <span>Terms</span>
                  <span>About</span>
                  <span>Text to speech</span>
                </div>
              </div>
            </div>

            <div className="md:w-[55rem] lg:w-[108rem] xl:w-[146rem] 2xl:w-[147rem] lg:mr-[-4rem] xl-mr-[0rem]">
              <Landing_page_card />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
