import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-white border-t border-black py-4 md:py-5.8 text-sm">
            <div className="block md:flex lg:flex w-full h-auto md:justify-around items-center lg:justify-between text-[.7rem] lg:px-8">
                <div className="flex justify-center text-center">
                    <img src="./images/md-black-logo.png" alt="Logo" className='justify-center text-center w-[14rem] md:w-[13rem] lg:w-[12rem]'/>
                </div>
                <div className="text-[.75rem] lg:text-[1.3rem] text-center my-1 lg:my-0">
                    <p className=''>Every idea needs a Medium</p>
                </div>
                <div>
                <div className="text-center font-normal text-gray-600 space-x-4 my-2 lg:my-5">
                    <a className="underline" href="#/">About</a>
                    <a className="underline" href="#/">Terms</a>
                    <a className="underline" href="#/">Privacy</a>
                    <a className="underline" href="#/">Help</a>
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
