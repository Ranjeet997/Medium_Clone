import { React, useState } from "react";

export default function Sign_in() {
  const [display, setDisplay] = useState({
    card_1: "hidden",
    card_2: "hidden",
    card_3: "hidden",
    card_4: "hidden",
    card_5: "hidden",
    card_6: "hidden",
    card_7: "hidden",
  });
  return (
    <>
      <div className="md:flex md:gap-10 bg-[#F24D2E] h-[41.5rem] md:h-full 2xl:h-[45.8rem] mt-[5rem]">
        <div className="md:col-span-2 2xl:h-[45rem] md:border-r border-black px-5 md:px-8  pt-[4.2rem] md:pt-[4.4rem] md:pb-10 ">
          <p className="text-[.62rem] md:text-[.7rem] xl:text-[.8rem] text-white font-dm-sans font-bold tracking-[.29rem] md:tracking-[.37rem] mb-3.5 2xl:mb-4">
            START A BLOG FOR FREE
          </p>
          <p className="text-[2.24rem] md:text-[3.6rem] lg:text-[4.55rem] 2xl:text-[7.6rem] font-source-serif-pro font-medium leading-10 md:leading-[4rem] lg:leading-[4.5rem] 2xl:leading-[7.8rem] tracking-tight lg:pr-[4rem]">
            Publish, grow, and earn, all in one place.
          </p>
          <div className="hidden md:block">
            <p className="md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans lg:w-[25rem] 2xl:w-[43rem] tracking-tighter md:leading-6 xl:leading-6 mt-10 md:my-8 lg:mb-[3.4rem] 2xl:mb-[4rem]">
              If you have a story to tell, knowledge to share, or a perspective
              to offer — welcome home. Sign up for free so your writing can
              thrive in a network supported by millions of readers — not ads.
            </p>
            <a
              href="#/"
              className="rounded-full bg-white text-black md:text-xl xl:text-[1.45rem] font-dm-dm-sans font-medium hover:text-white hover:bg-transparent hover:border px-8 py-1.5 2xl:py-2"
            >
              Start writing
            </a>
          </div>
        </div>
        <div className="md:w-[62rem] lg:w-[45rem] 2xl:w-[65rem]"></div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-5 bg-black text-white lg:py-[.35rem]">
        <div className="px-7 md:px-8 mt-8 2xl:my-8">
          <p className="text-[2.7rem] md:text-[3.3rem] lg:text-[3.85rem] 2xl:text-[6.4rem] font-source-serif-pro leading-[2.7rem] md:leading-[3.5rem] lg:leading-[4rem] tracking-tighter pr-5 lg:pr-10 2xl:pr-[10rem]">
            Join a network of curious minds.
          </p>
        </div>
        <div className="mx-7 my-7 md:ml-5 md:mr-7 2xl:ml-5 2xl:mr-8">
          <div className="flex items-center border-t border-white py-1.5 2xl:py-2">
            <img
              src="./images/profile_img.png"
              alt=""
              className="h-[3.2rem] w-[3.2rem] xl:w-[3.5rem] xl:h-[3.5rem] rounded-full"
            />
            <div className="">
              <p className="font-dm-sans text-[1.53rem] xl:text-[1.6rem] 2xl:text-[1.6rem] font-normal tracking-tight ml-5">
                Barack Obama
              </p>
              <p className="font-dm-sans text-[.96rem] 2xl:text-[1.1rem] leading-[1.2rem] xl:leading-6 font-normal ml-5">
                DAD, HUSBAND, PRESIDENT, CITIZEN
              </p>
            </div>
          </div>

          <div className="flex items-center border-t border-white py-1.5 2xl:py-2">
            <img
              src="./images/profile_img.png"
              alt=""
              className="h-[3.2rem] w-[3.2rem] xl:w-[3.5rem] xl:h-[3.5rem] rounded-full"
            />
            <div className="">
              <p className="font-dm-sans text-[1.53rem] 2xl:text-[1.6rem] font-normal tracking-tight ml-5">
              Carvell Wallace
              </p>
              <p className="font-dm-sans text-[.96rem] xl:text-[1.1rem] leading-[1.2rem] xl:leading-6 font-normal ml-5">
                  NEW YORK TIMES BESTSELLING AUTHOR AND PODCASTER
              </p>
            </div>
          </div>

          <div className="flex items-center border-t border-white py-1.5 2xl:py-2">
            <img
              src="./images/profile_img.png"
              alt=""
              className="h-[3.2rem] w-[3.2rem] xl:w-[3.5rem] xl:h-[3.5rem] rounded-full"
            />
            <div className="">
              <p className="font-dm-sans text-[1.53rem] 2xl:text-[1.6rem] font-normal tracking-tight ml-5">
                Barack Obama
              </p>
              <p className="font-dm-sans text-[.96rem] 2xl:text-[1.1rem] leading-[1.2rem] xl:leading-6 font-normal ml-5">
                DAD, HUSBAND, PRESIDENT, CITIZEN
              </p>
            </div>
          </div>

          <div className="flex items-center border-t border-white py-1.5 2xl:py-2">
            <img
              src="./images/profile_img.png"
              alt=""
              className="h-[3.2rem] w-[3.2rem] xl:w-[3.5rem] xl:h-[3.5rem] rounded-full"
            />
            <div className="">
              <p className="font-dm-sans text-[1.53rem] 2xl:text-[1.6rem] font-normal tracking-tight ml-5">
                Barack Obama
              </p>
              <p className="font-dm-sans text-[.96rem] 2xl:text-[1.1rem] leading-[1.2rem] xl:leading-6 font-normal leading-5 ml-5">
                DAD, HUSBAND, PRESIDENT, CITIZEN
              </p>
            </div>
          </div>

          <div className="flex items-center border-t border-white py-1.5 2xl:py-2">
            <img
              src="./images/profile_img.png"
              alt=""
              className="h-[3.2rem] w-[3.2rem] xl:w-[3.5rem] xl:h-[3.5rem] rounded-full"
            />
            <div className="">
              <p className="font-dm-sans text-[1.53rem] 2xl:text-[1.6rem] font-normal tracking-tight ml-5">
                Barack Obama
              </p>
              <p className="font-dm-sans text-[.96rem] 2xl:text-[1.1rem] leading-[1.2rem] xl:leading-6 font-normal leading-5 ml-5">
                DAD, HUSBAND, PRESIDENT, CITIZEN
              </p>
            </div>
          </div>

          <div className="flex items-center border-t border-b border-white py-1.5 2xl:py-2">
            <img
              src="./images/profile_img.png"
              alt=""
              className="h-[3.2rem] w-[3.2rem] xl:w-[3.5rem] xl:h-[3.5rem] rounded-full"
            />
            <div className="">
              <p className="font-dm-sans text-[1.53rem] 2xl:text-[1.6rem] font-normal tracking-tight ml-5">
                Barack Obama
              </p>
              <p className="font-dm-sans text-[.96rem] 2xl:text-[1.1rem] leading-[1.2rem] xl:leading-6 font-normal ml-5">
                DAD, HUSBAND, PRESIDENT, CITIZEN
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFD1B9]">
        <div className="md:grid md:grid-cols-2 px-7 md:px-0 h-[34rem] md:h-full 2xl:h-[45rem]">
          <div className="text py-8 md:px-8 md:pt-[4rem] lg:pt-8 md:pb-10 ">
            <p className="text-[2.7rem] md:text-[3rem] lg:text-[3.85rem] 2xl:text-[6.3rem] 2xl:font-semibold font-source-serif-pro leading-[2.7rem] lg:leading-[3.7rem] 2xl:leading-[7rem] tracking-tighter w-[12.2rem] md:w-[13.7rem] lg:w-[17.5rem] 2xl:w-[29rem]">
              Create your space.
            </p>
            <p className="text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans lg:w-[20rem] 2xl:w-[28rem] tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6 mt-3 mb-5 md:mt-[6rem] 2xl:mt-[18rem] lg:mb-10">
              Tell your story your way — with different ways to write, style,
              and brand your work.
            </p>
            <a
              href="#/"
              className="rounded-full bg-black text-white text-lg md:text-xl 2xl:text-[1.45rem] font-dm-dm-sans font-medium hover:bg-stone-800 px-5 md:px-8 py-1.5 md:py-2 2xl:py-2.5"
            >
              Start writing
            </a>
          </div>
          <div className=""></div>
        </div>

        <div className="grid md:grid-cols-2 border-t border-b border-black">
          <div className="border-b md:border-r md:border-b-0 border-black px-7 md:px-8 pt-5 pb-10 md:py-9 lg:pt-6 lg:pb-10 2xl:py-[2.95rem]">
            <p className="text-[1.8rem] md:text-[2.5rem] lg:text-[2.2rem] 2xl:text-[3.5rem] font-medium font-source-serif-pro tracking-tighter leading-[3rem] mb-2.5 lg:mb-7 2xl:mb-10">
              Start a blog.
            </p>
            <p className="text-[.97rem] md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans font-medium md:font-normal lg:w-[25rem] 2xl:w-[33rem] tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6">
              Create a blog for free to have a personalized home for your
              writing. Brand{" "}
              <a href="#/" className="underline cursor-pointer">your space</a> and share
              your writing with readers on any device.
            </p>
          </div>

          <div className="px-7 pt-5 pb-9 md:px-8 2xl:px-10 md:py-9 lg:pt-6 lg:pb-8 2xl:py-[2.95rem]">
            <p className="text-[1.8rem] md:text-[2.5rem] lg:text-[2.2rem] 2xl:text-[3.5rem] font-medium font-source-serif-pro tracking-tighter leading-[3rem] mb-2.5 lg:mb-7 2xl:mb-10">
              Start a publication.
            </p>
            <p className="text-[.97rem] md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans lg:w-[25rem] 2xl:w-[33rem] tracking-tighter font-medium md:font-normal leading-[1.2rem] md:leading-[1.4rem] xl:leading-6">
              Collaborate with others or publish under a brand name. Use our
              story submission system and expressive customization options.
            </p>
          </div>
        </div>
      </div>

      <div className="grid py-[4rem] mx-7 2xl:py-[5rem] 2xl:h-[27rem] md:mx-8 lg:mx-0">
        <p className="text-[2.24rem] md:text-[3rem] lg:text-[3.9rem] 2xl:text-[6.4rem] md:justify-self-center md:text-center font-source-serif-pro leading-10 md:leading-[3.4rem] lg:leading-none 2xl:leading-[6.4rem] tracking-tighter md:w-[30rem] lg:w-[40rem] 2xl:w-[60rem]">
          Find and grow your audience.
        </p>
        <p className="text-[1.2rem] 2xl:text-[1.35rem] md:justify-self-center md:text-center font-dm-sans tracking-tighter leading-[1.4rem]  xl:leading-6 mt-3.5 2xl:mt-1.5">
          With simple tools and features, you have the chance to connect with
          over 100 million curious readers.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 lg:grid-rows-2 border-t border-black h-full lg:h-[32rem] xl:h-[30rem] 2xl:my-10">
        <div className="lg:row-span-2 border-b lg:border-r border-black h-[25.5rem] lg:h-[32.8rem] xl:h-[33.5rem] px-7 md:px-8">
          <p className="text-[1.8rem] md:text-[2.15rem] lg:text-[2rem] 2xl:text-[3.05rem] font-medium font-source-serif-pro tracking-tighter leading-[3rem] mt-6 lg:mt-8 2xl:mt-10">
            Audience insights.
          </p>
          <p className="text-[.97rem] md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans font-medium md:font-normal tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6 mt-3.5 md:mt-7 2xl:mt-[3.8rem]">
            Use <a href="#/" className="underline cursor-pointer">data</a> to learn what
            resonates with your readers so you can keep growing your audience.
          </p>
        </div>

        <div className="border-b lg:border-b-0 lg:border-r border-black px-7 pt-6 pb-9 md:px-8 lg:py-8 xl:py-10">
          <p className="text-[1.8rem] md:text-[2.15rem] lg:text-[2rem] 2xl:text-[3.05rem] font-medium font-source-serif-pro tracking-tighter leading-[3rem]">
            Social connectivity.
          </p>
          <p className="text-[.97rem] md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans font-medium md:font-normal tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6 mt-3 md:mt-7 2xl:mt-[3.8rem]">
            Find people you’re already connected with on Twitter and easily{" "}
            <a href="#/" className="underline cursor-pointer">share</a> your stories
            across platforms.
          </p>
        </div>

        <div className="px-7 pt-6 pb-9 lg:py-8 2xl:px-8 xl:py-10">
          <p className="text-[1.8rem] md:text-[2.15rem] lg:text-[2rem] 2xl:text-[3.05rem] font-medium font-source-serif-pro tracking-tighter leading-[3rem]">
            Powerful network.
          </p>
          <p className="text-[.97rem] md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans font-medium md:font-normal tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6 mt-3 md:mt-7 2xl:mt-[3.8rem]">
            Readers can discover and follow you easily with{" "}
            <a href="#/" className="underline cursor-pointer">tailored feeds</a> and
            recommendations.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid lg:grid-cols-3 border-t border-b border-black lg:h-[16.8rem] xl:h-[18.5rem]">
            <div className="px-7 pt-6 pb-9 lg:py-8 xl:py-10 2xl:px-8">
              <p className="text-[1.8rem] md:text-[2.15rem] lg:text-[2rem] 2xl:text-[3.05rem] font-medium font-source-serif-pro tracking-tighter lg:leading-8 xl:leading-[3rem]">
                Email subscriptions.
              </p>
              <p className="text-[.97rem] md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans font-medium md:font-normal tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6 mt-3 md:mt-7 lg:mt-8 2xl:mt-[2.7rem]">
                Reach readers by having your stories{" "}
                <a href="#/" className="underline cursor-pointer">delivered</a> straight
                to their inboxes.
              </p>
            </div>

            <div className="border-t border-b lg:border-b-0 lg:border-t-0 lg:border-l lg:border-r border-black px-7 pt-6 pb-9 lg:py-8 xl:py-10 2xl:px-8">
              <p className="text-[1.8rem] md:text-[2.15rem] lg:text-[2rem] 2xl:text-[3.05rem] font-medium font-source-serif-pro tracking-tighter lg:leading-8 xl:leading-[3rem]">
                Interactive discussions.
              </p>
              <p className="text-[.97rem] md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans font-medium md:font-normal tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6 mt-3 md:mt-7 lg:mt-8 2xl:mt-[2.7rem]">
                Build relationships with your readers through a{" "}
                <a href="#/" className="underline cursor-pointer">threaded comments</a>{" "}
                section.
              </p>
            </div>
            <div className="px-7 pt-6 pb-9 lg:py-8 xl:py-10 2xl:pl-8 2xl:pr-12">
              <p className="text-[1.8rem] md:text-[2.15rem] lg:text-[2rem] 2xl:text-[3.05rem] font-medium font-source-serif-pro tracking-tighter lg:leading-8 xl:leading-[3rem]">
                Custom design.
              </p>
              <p className="text-[.97rem] md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans  font-medium md:font-normal tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6 mt-3 md:mt-7 lg:mt-8 2xl:mt-[2.7rem]">
                Easily <a href="#/" className="underline cursor-pointer">customize</a>{" "}
                your page to stand out and build your brand.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#34A245] 2xl:h-[32rem] px-7 py-[4rem] lg:mt-3 xl:mt-[3.5rem] md:px-8">
        <div className="text text-white lg:py-[.8rem] 2xl:pt-[1rem]">
          <p className="text-[2.4rem] md:text-[4.15rem] lg:text-[3.8rem] 2xl:text-[6.4rem] font-source-serif-pro leading-10 md:leading-[4.1rem] 2xl:leading-[6.4rem] tracking-tighter md:w-[30rem] 2xl:w-[50rem]">
            Earn money from your writing.
          </p>
          <p className="text-[1.16rem] md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans tracking-tight leading-[1.5rem] lg:leading-[1.2rem] lg:leading-6 mt-2 mb-6 md:mt-4 2xl:mb-[2.7rem] lg:w-[25rem] 2xl:w-[40rem] lg:mb-10">
            Writing has its rewards when you join the Partner Program. Learn how
            to get paid for the content you publish and the audiences you build.
          </p>
          <a
            href="#/"
            className="rounded-full bg-black text-white text-lg lg:text-[1.4rem] 2xl:text-[1.45rem] font-dm-dm-sans font-medium hover:bg-stone-800 py-1.5 px-8 2xl:py-2"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="bg-black text-white py-7">
        <div className="text pl-5 pr-[5rem] 2xl:py-[5rem] px-5 md:pl-[3.8rem] md:pt-[2.5rem] md:pb-[4rem] 2xl:px-[4rem]">
          <p className="text-[1.8rem] lg:text-[2rem] 2xl:text-[3.4rem] font-medium font-source-serif-pro tracking-tight leading-8 lg:leading-[3rem]">
            More about writing on Medium:
          </p>
        </div>

        <div className="border-b border-white px-5 md:pl-[3.8rem] md:pr-[2rem] 2xl:px-[4rem]">
          <div
            className="flex justify-between cursor-pointer pt-[1rem] pb-[2rem] lg:pt-[1.4rem] lg:pb-[2.3rem]"
            onClick={() => {
              if (display.card_1 === "hidden") {
                setDisplay({ ...display, card_1: "block" });
              } else {
                setDisplay({ ...display, card_1: "hidden" });
              }
            }}
          >
            <p className="text-[1.37rem] 2xl:text-[1.65rem] font-dm-sans tracking-tighter hover:underline leading-8">
              How do I start writing on Medium?
            </p>
            <span className="text-[1.5rem] md:text-[1rem] 2xl:text-[1.9rem]">
              <i className="bi bi-arrow-down"></i>
            </span>
          </div>
          <div className={`${display.card_1} md:pr-[7.3rem] lg:pr-[5rem] mb-[2.5rem]`}>
            <p className="md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6">
              First, make a{" "}
              <a href="#/" className="underline cursor-pointer">free account</a>. Then, to
              create a story, click on your profile picture in the top-right
              corner of the page, then “Write a Story.”
            </p>
          </div>
        </div>

        <div className="border-b border-white px-5 md:pl-[3.8rem] md:pr-[2rem] 2xl:px-[4rem]">
          <div
            className="flex justify-between cursor-pointer pt-[1rem] pb-[2rem] 2xl:pt-[1.4rem] 2xl:pb-[2.3rem] "
            onClick={() => {
              if (display.card_2 === "hidden") {
                setDisplay({ ...display, card_2: "block" });
              } else {
                setDisplay({ ...display, card_2: "hidden" });
              }
            }}
          >
            <p className="text-[1.37rem] 2xl:text-[1.65rem] font-dm-sans tracking-tighter hover:underline leading-8">
              How can I make money writing on Medium?
            </p>
            <span className="text-[1.5rem] md:text-[1rem] 2xl:text-[1.9rem]">
              <i className="bi bi-arrow-down"></i>
            </span>
          </div>
          <div className={`${display.card_2} md:pr-[7.3rem] lg:pr-[5rem] mb-[2.5rem]`}>
            <p className="md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6">
              if you join the{" "}
              <a href="#/" className="underline cursor-pointer">Medium Partner Program</a>
              , you can earn money based on how much time members spend reading
              your work and whenever you convert non-paying readers into
              members.
            </p>
          </div>
        </div>

        <div className="border-b border-white px-5 md:pl-[3.8rem] md:pr-[2rem] 2xl:px-[4rem]">
          <div
            className="flex justify-between cursor-pointer pt-[1rem] pb-[2rem] 2xl:pt-[1.4rem] 2xl:pb-[2.3rem]"
            onClick={() => {
              if (display.card_3 === "hidden") {
                setDisplay({ ...display, card_3: "block" });
              } else {
                setDisplay({ ...display, card_3: "hidden" });
              }
            }}
          >
            <p className="text-[1.37rem] 2xl:text-[1.65rem] font-dm-sans tracking-tighter hover:underline leading-8">
              Who writes on Medium?
            </p>
            <span className="text-[1.5rem] md:text-[1rem] 2xl:text-[1.9rem]">
              <i className="bi bi-arrow-down"></i>
            </span>
          </div>
          <div className={`${display.card_3} md:pr-[7.3rem] lg:pr-[5rem] mb-[2.5rem]`}>
            <p className="md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6">
              Anyone can write on Medium. Whether you’ve never written before or
              are ready to create a full publication, it’s easy to{" "}
              <a href="#/" className="underline cursor-pointer">get started</a> and we
              allow you to focus more on big ideas and less on driving clicks.
              With the option to earn for your work, you can also be directly
              rewarded for the value you provide readers.
            </p>
          </div>
        </div>

        <div className="border-b border-white px-5 md:pl-[3.8rem] md:pr-[2rem] 2xl:px-[4rem]">
          <div
            className="flex justify-between cursor-pointer pt-[1rem] pb-[2rem] 2xl:pt-[1.4rem] 2xl:pb-[2.3rem]"
            onClick={() => {
              if (display.card_4 === "hidden") {
                setDisplay({ ...display, card_4: "block" });
              } else {
                setDisplay({ ...display, card_4: "hidden" });
              }
            }}
          >
            <p className="text-[1.37rem] 2xl:text-[1.65rem] font-dm-sans tracking-tighter hover:underline leading-8">
              Do I need to be in the Partner Program to write on Medium?
            </p>
            <span className="text-[1.5rem] md:text-[1rem] 2xl:text-[1.9rem]">
              <i className="bi bi-arrow-down"></i>
            </span>
          </div>
          <div className={`${display.card_4} md:pr-[7.3rem] lg:pr-[5rem] mb-[2.5rem]`}>
            <p className="md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6">
              No. You can write on Medium even if you are not in the Partner
              Program. If you are in the Partner Program you can also choose
              which of the stories you publish are eligible for the Program. For
              more about the Partner Program,{" "}
              <a href="#/" className="underline cursor-pointer"> click here</a>.
            </p>
          </div>
        </div>

        <div className="border-b border-white px-5 md:pl-[3.8rem] md:pr-[2rem] 2xl:px-[4rem]">
          <div
            className="flex justify-between cursor-pointer pt-[1rem] pb-[2rem] 2xl:pt-[1.4rem] 2xl:pb-[2.3rem]"
            onClick={() => {
              if (display.card_5 === "hidden") {
                setDisplay({ ...display, card_5: "block" });
              } else {
                setDisplay({ ...display, card_5: "hidden" });
              }
            }}
          >
            <p className="text-[1.37rem] 2xl:text-[1.65rem] font-dm-sans tracking-tighter hover:underline leading-8">
              What can I write about on Medium?
            </p>
            <span className="text-[1.5rem] md:text-[1rem] 2xl:text-[1.9rem]">
              <i className="bi bi-arrow-down"></i>
            </span>
          </div>
          <div className={`${display.card_5} md:pr-[7.3rem] lg:pr-[5rem] mb-[2.5rem]`}>
            <p className="md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6">
              Medium’s designed for short stories that make someone’s day
              better, manifestos that change the world, and everything in
              between. It’s used by everyone from professional journalists to
              data scientists to amateur cooks. Whatever the topic, Medium helps
              you find the right audience for what you have to say.
            </p>
          </div>
        </div>

        <div className="border-b border-white px-5 md:pl-[3.8rem] md:pr-[2rem] 2xl:px-[4rem]">
          <div
            className="flex justify-between cursor-pointer pt-[1rem] pb-[2rem] 2xl:pt-[1.4rem] 2xl:pb-[2.3rem]"
            onClick={() => {
              if (display.card_6 === "hidden") {
                setDisplay({ ...display, card_6: "block" });
              } else {
                setDisplay({ ...display, card_6: "hidden" });
              }
            }}
          >
            <p className="text-[1.37rem] 2xl:text-[1.65rem] font-dm-sans tracking-tighter hover:underline leading-8">
              Who can read the work I publish on Medium?
            </p>
            <span className="text-[1.5rem] md:text-[1rem] 2xl:text-[1.9rem]">
              <i className="bi bi-arrow-down"></i>
            </span>
          </div>
          <div className={`${display.card_6} md:pr-[7.3rem] lg:pr-[5rem] mb-[2.5rem]`}>
            <p className="md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6">
              Anyone on the internet can read your stories. Even if your story
              is being distributed in the Partner Program as a part of our{" "}
              <a href="#/" className="underline cursor-pointer">metered paywall</a>,
              anyone can still read a limited number of articles for free each
              month. If you want to share an un-metered version of your story,
              you can use a{" "}
              <a href="#/" className="underline cursor-pointer">Friend Link</a>.
            </p>
          </div>
        </div>

        <div className="border-b border-white px-5 md:pl-[3.8rem] md:pr-[2rem] 2xl:px-[4rem]">
          <div
            className="flex justify-between cursor-pointer pt-[1rem] pb-[2rem] 2xl:pt-[1.4rem] 2xl:pb-[2.3rem]"
            onClick={() => {
              if (display.card_7 === "hidden") {
                setDisplay({ ...display, card_7: "block" });
              } else {
                setDisplay({ ...display, card_7: "hidden" });
              }
            }}
          >
            <p className="text-[1.37rem] 2xl:text-[1.65rem] font-dm-sans tracking-tighter hover:underline leading-8">
              How can I grow my audience with Medium?
            </p>
            <span className="text-[1.5rem] md:text-[1rem] 2xl:text-[1.9rem]">
              <i className="bi bi-arrow-down"></i>
            </span>
          </div>
          <div className={`${display.card_7} md:pr-[7.3rem] lg:pr-[5rem] mb-[2.5rem]`}>
            <p className="md:text-[1.2rem] 2xl:text-[1.35rem] font-dm-sans tracking-tighter leading-[1.2rem] md:leading-[1.4rem] xl:leading-6">
              Medium has a number of tools to connect you with over 100 million
              readers on the platform and beyond. Some ways you can build your
              audience are by{" "}
              <a href="#/" className="underline cursor-pointer">starting a newsletter</a>,{" "}
              <a href="#/" className="underline cursor-pointer">
                submitting to publications
              </a>
              ,{" "}
              <a href="#/" className="underline cursor-pointer">
                following the distribution standards
              </a>
              , and{" "}
              <a href="#/" className="underline cursor-pointer">sharing your stories</a>{" "}
              on social media. We also encourage you to check out our blog,{" "}
              <a href="#/" className="underline cursor-pointer">
                submitting to publications
              </a>
              3 Minute Read, for more helpful tips and tricks – like{" "}
              <a href="#/" className="underline cursor-pointer">
                how to write a great headline
              </a>{" "}
              and{" "}
              <a href="#/" className="underline cursor-pointer">
                SEO tips to make your stories more discoverable
              </a>
              .
            </p>
          </div>
        </div>

        <div className="md:flex justify-center items-center px-5 pt-5 2xl:py-9">
          <span className="text-[1.37rem] 2xl:text-[1.65rem] font-dm-sans tracking-tighter leading-8 md:mx-5">
            Looking for help getting started?
          </span>
          <span>
            <button
              href="#/"
              className="rounded-full bg-white text-black text-lg md:text-xl lg:text-[1.45rem] font-dm-sans font-medium hover:bg-black hover:border hover:text-white px-8 py-1.5 my-5"
            >
              Check out our guide
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
