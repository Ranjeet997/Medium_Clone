import React from "react";
import Footer from "../footer/Footer";

export default function Member() {
  return (
    <>
      <div className="main">

        <div className="h-[22.5rem] md:h-[24.5rem] lg:h-[26.7rem] 2xl:h-[33rem] bg-blue-500 text-white border-b mt-[5rem]">
          <div className="grid content-center md:place-items-center md:text-center lg:leading-[7rem] 2xl:leading-[10rem] mx-5">
            <div className="head mt-[5.2rem] md:mt-[4rem] lg:mt-[5rem] 2xl:mt-[6.2rem]">
              <p className="text-[2.6rem] md:text-[4.2rem] lg:text-[5.3rem] xl:text-[6.5rem] 2xl:text-[8.65rem] font-crimson tracking-tight">Fuel great thinking.</p>
            </div>
            <div className="w-[85%] md:w-[66%] lg:w-[50%] xl:w-[43%] 2xl:w-[32.2%]">
              <p className="text-[1.27rem] lg:text-[1.15rem] xl:text-[1.18rem] 2xl:text-[1.27rem] font-gt-sans font-normal lg:font-normal xl:font-normal 2xl:font-medium leading-6">
                Become a Medium member to enjoy unlimited access and directly
                support the writers you read most.
              </p>
            </div>
            <div className="btn mt-[3rem] lg:mt-5 2xl:mt-0">
              <button
                className="rounded-full text-black text-sm md:text-xl lg:text-2xl xl:text-xl font-dm-sans border font-medium bg-white hover:text-white hover:bg-sky-600 py-2 px-8"
              >
                Get unlimited access
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 bg-blue-500 text-white h-[50rem] md:h-[26rem] lg:h-[27.5rem] xl:h-[33rem] px-5 md:px-9">
          
          <div className="md:h-[22rem] lg:h-[24rem] xl:h-[29rem] md:h-full border-r-0 border-b md:border-r md:border-b-0 pt-[3.5rem] md:pt-[1.6rem] md:pr-[3rem] lg:px-[2rem] xl:px-[3rem] md:my-[2.5rem] lg:my-[1.7rem] xl:my-[2rem] lg:py-[1.7rem] xl:py-[2rem]">
            <div className="head leading-[1.7rem] lg:leading-[3.5rem]">
              <p className="text-[1.95rem] lg:text-[2.2rem] xl:text-[2.8rem] 2xl:text-[3.7rem] font-crimson leading-[2.2rem] xl:leading-[2.65rem]">Get unlimited access to every story.</p>
            </div>
            <div className="h-[8rem] lg:h-[13rem]">
              
            </div>
            <div className="text lg:text-[1.08rem] xl:text-[1.26rem] font-semibold lg:font-medium leading-[1.4rem] md:leading-[1.6rem] lg:leading-[1.4rem] xl:leading-[1.6rem]">
                <p>Read any article in our entire library across all your devices — with no paywalls, story limits or ads.</p>
            </div>
          </div>

          <div className="h-[26rem] md:h-full pl-[1rem] pr-[1rem] lg:pr-[2rem] lg:pl-8 xl:pl-7.5 2xl:pl-3 mt-[2rem] md:mt-0 md:px-9 md:pt-[4rem] lg:py-[3.5rem] xl:py-[4rem]">
            <div className="head leading-[1.7rem] lg:leading-[3.5rem]">
              <p className="text-[1.95rem] lg:text-[2.2rem] xl:text-[2.8rem] 2xl:text-[3.7rem] font-crimson leading-[2.2rem] xl:leading-[2.65rem]">Support the voices you want to hear more from.</p>
            </div>
            <div className="h-[8rem] lg:h-[13rem]">
              
            </div>
            <div className="text lg:text-[1.08rem] xl:text-[1.26rem] font-semibold lg:font-medium leading-[1.4rem] md:leading-[1.6rem] lg:leading-[1.4rem] xl:leading-[1.6rem]">
                <p>A portion of your membership will directly support the writers and thinkers you read the most.</p>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center h-[29rem] md:h-[27.4rem] lg:h-[24rem] xl:h-[27.4rem] border-b border-black pt-4 px-5 md:px-0 md:px-[4.5rem]">
            <div className="lg:ml-[8rem] xl:ml-[11.5rem]">
            <div className="my-6 md:my-[3.5rem] md:ml-[5rem] lg:ml-[7rem] xl:ml-[4rem] 2xl:ml-[4rem] lg:ml-4">
                <p className="text-[2rem] md:text-[2.5rem] lg:text-[2.2rem] xl:text-[2.7rem] 2xl:text-[3.5rem] leading-8 font-source-serif-pro">Why I'm a Medium Member...</p>
            </div>
            <div className="block md:flex gap-11">
                <div className="">
                  <img src="./images/logo1.png" alt="" className="w-[14rem] md:w-[25rem] lg:w-[23rem] xl:w-[18rem]"/>
                </div>
                <div className="md:w-[28rem] lg:w-[35rem] mt-5 md:mt-0">
                    <p className="md:text-[1.4rem] lg:text-[1.5rem] font-medium lg:font-normal xl:font-medium font-dm-sans leading-6 ">"My favorite thing about a Medium membership is endlessly reading up-and-coming and well-known writers alike."</p>
                    <p className="md:text-[1.6rem] lg:text-[1.8rem] font-medium lg:font-normal mt-4">Joseph Coco</p>
                </div>
            </div>
            </div>
        </div>

        <div className="grid h-[13.5rem] md:h-[23.5rem] lg:h-[23.3rem] xl:h-[28rem] 2xl:h-[36rem] border-b border-black bg-sky-200 px-5 lg:px-0">
            <div className="md:justify-self-center w-[18rem] md:w-[27rem] lg:md:w-[35rem] xl:w-[44rem] 2xl:w-[58rem] md:text-center mt-3 lg:mt-6.5 xl:mt-9 2xl:mt-12">
                <p className="text-[2.55rem] md:text-[3.8rem] lg:text-[4.85rem] xl:text-[6.1rem] 2xl:text-[8.1rem] font-crimson font-medium leading-9 md:leading-[3.4rem] lg:leading-[4.5rem] xl:leading-[5.5rem] 2xl:leading-[7rem] my-6 md:my-12 lg:my-9">Take your mind in new directions.</p>
                <button
                href="#/"
                className="rounded-full text-white text:xl md:text-[1.4rem] lg:text-[1.3rem] 2xl:text-2xl font-dm-sans border font-medium bg-black hover:bg-stone-900 py-2 px-8"
              >
                Get unlimited access
              </button>
            </div>
        </div>

      </div>
      <Footer/>

    </>
  );
}
