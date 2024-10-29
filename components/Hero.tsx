
"use client"
import { Meow_Script } from 'next/font/google';


import React from 'react';

const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: '400', // specify the weight here
})

const Hero = () => {
  // const [ menu, setMenu ] = useState({});
  return (
<div className="flex h-[80vh] bg-[#ab3434] max-sm:px-10 max-sm:py-10 md:px-16 md:py-10 relative text-white">
  {/* Text section (uncomment if needed)
  <div className="home-text h-[26rem] flex flex-col px-16 justify-center">
    <h1 className="text-6xl">Where Every Meal Is a Feast!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem, eveniet quasi voluptatum delectus modi voluptatibus distinctio ipsum ipsa non itaque vero libero aut maiores. Incidunt beatae nisi exercitationem dolor.</p>
  </div>
  */}

  <div className="flex justify-between absolute w-[90%]">
    <div className="name">
      <h3>CHEF</h3>
      <p className={`${meowScript.className} text-lg`}>Richard Ofori</p>
    </div>
    <div className="auth absolute right-7">
      <h3>AUTHENTIC</h3>
      <h3>IN EVERY BITE</h3>
    </div>
  </div>

  <div className="flex items-center justify-center h-full w-full">
    <div className="imgs flex gap-6 w-full justify-center">
      <div className="header font-bold text-8xl absolute flex top-64">
        <h1>TasteXXsee</h1>
      </div>
      <div className="img h-36 flex max-sm:hidden items-end">
        <img className="w-20 h-16 " src="/img/food1.avif" alt="img" />
      </div>
      <div className="img max-sm:hidden">
        <img className="w-40 h-36 max-sm:hidden" src="/img/food1.avif" alt="img" />
      </div>
      <div className="img">
      <img className="w-[22rem] max-sm:w-full h-[27rem]" src="/img/food1.avif" alt="img" />
      </div>
    </div>
  </div>

  <div className="flex justify-between absolute bottom-12 w-[90%]">
    <div className="name">
      <h3>2024 /</h3>
      <p>TASTEXXSEE</p>
    </div>
  </div>
</div>

  )
}

export default Hero
