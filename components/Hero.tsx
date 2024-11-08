
"use client"

import React from 'react';
import { Libre_Baskerville } from 'next/font/google';
import { Lato } from 'next/font/google';
import Navbar from './Navbar';


const libreBaskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });
const latoBold = Lato({ weight: '400', subsets: ['latin'] });


const Hero = () => {
  // const [ menu, setMenu ] = useState({});
  return (
<div className="flex md:h-[80vh] max-sm:h-[90vh] h-[90vh] lg:h-[90vh] max-sm:bg-[url('/img/rest1.avif')] bg-[url('/img/rest3.jpeg')] bg-cover relative text-white">
<Navbar firstColor="#FFD700"/>
<div className="absolute bg-black bg-opacity-40 w-full h-full"></div>
<div className={`catch absolute flex text-[#ffd900e1] max-sm:px-10 flex-col items-center w-full px-10 max-sm:top-24 max-sm:items-start top-52 max-sm:w-auto`}>
  <h1 className={`lg:text-8xl text-6xl max-sm:text-5xl font-bold ${libreBaskerville.className} `}>Savor the Flavor, <br/></h1>
  <h1 className={`lg:text-8xl text-6xl max-sm:text-5xl font-bold ${libreBaskerville.className} `}> Celebrate Every Bite!</h1>
  <p className={`text-xl mt-4 md:text-center max-sm:text-xl ${latoBold.className}`}>Join us for a delightful dining experience where each dish is crafted with passion and the finest ingredients,</p>
  <p className={`text-xl mt-2 md:text-center max-sm:text-xl ${latoBold.className}`}>inviting you to explore a world of taste in every bite.</p>
  <a href="#footer"><button className="mt-8 w-36 h-11 rounded-md text-black bg-[#ffd900e1] text-xl">Contact Us</button></a>
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
