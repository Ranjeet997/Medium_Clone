import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-stone-900 md:w-[60rem] lg:w-[93rem] 2xl:w-[100%] py-5 px-3.5 md:py-0 md:px-0 lg:px-0 lg:py-0 md:h-[9rem] lg:h-[7rem]">
            <div className="md:mx-12 md:pt-[1.7rem] lg:pt-3.5">
                <div className="md:mb-3.5 lg:mb-1">
                    <img src="./images/md-white-logo.png" alt="Logo" className='w-[10rem] md:w-[12rem]'/>
                </div>
                <div>
                <div className="font-normal text-[.7rem] md:text-[.9rem] text-white space-x-4 md:space-x-7 my-2 mx-3">
                    <a className="" href="#/">About</a>
                    <a className="" href="#/">Terms</a>
                    <a className="" href="#/">Privacy</a>
                    <a className="" href="#/">Help</a>
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
