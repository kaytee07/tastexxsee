
"use client"

import React from 'react';
import { Libre_Baskerville } from 'next/font/google';
import { Lato } from 'next/font/google';


const libreBaskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });
const latoBold = Lato({ weight: '400', subsets: ['latin'] });


const Hero = () => {
  // const [ menu, setMenu ] = useState({});
  return (
<div className="flex h-[80vh] max-sm:bg-[url('/img/herosm.avif')] bg-[url('/img/realhero.avif')] bg-cover max-sm:px-10 max-sm:py-10 md:px-16 md:py-10 relative text-white">
<div className={`catch absolute w-[38rem] max-sm:top-40 max-sm:left-10 top-52 max-sm:w-auto`}>
  <h1 className={`text-5xl max-sm:text-5xl font-bold ${libreBaskerville.className} `}>Savor the Flavor, Celebrate Every Bite!</h1>
  <p className={`text-lg mt-4 max-sm:text-xl ${latoBold.className}`}>Join us for a delightful dining experience where each dish is crafted with passion and the finest ingredients, inviting you to explore a world of taste in every bite.</p>
</div>
    {/* <div className="h-full w-full bg-black bg-opacity-50"></div> */}
  {/* Text section (uncomment if needed)
  <div className="home-text h-[26rem] flex flex-col px-16 justify-center">
    <h1 className="text-6xl">Where Every Meal Is a Feast!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem, eveniet quasi voluptatum delectus modi voluptatibus distinctio ipsum ipsa non itaque vero libero aut maiores. Incidunt beatae nisi exercitationem dolor.</p>
  </div>
  */}

  {/* <div className="flex justify-between absolute w-[90%]">
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
  </div> */}
</div>

  )
}

export default Hero
