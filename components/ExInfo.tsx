import React from 'react'
import { Libre_Baskerville } from 'next/font/google';
import { Lato } from 'next/font/google';


const libreBaskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });
const latoBold = Lato({ weight: '400', subsets: ['latin'] });

const ExInfo = () => {
  return (
    <div className="flex bg-[#ffd900e1] text-black w-[100vw] h-[36rem] items-center justify-center  max-sm:px-5 max-sm:py-3  max-sm:flex-col">
        <div className="info max-sm:pt-10 px-20 max-sm:px-0  md:w-[55rem] md:py-10 flex flex-col gap-5">
            <h1 className={`md:text-6xl max-sm:text-3xl font-extrabold ${libreBaskerville.className}`}>Why TasteXXsee ?</h1>
            <p className={`max-sm:hidden ${latoBold.className} text-xl`}>
                This is a type of restaurant which typically serves food and drink, in
                addition to light refreshment such as baked goods or snacks. The taste come from 
                carefully cooked food from the chef 
            </p>

            <button className={` max-sm:hidden w-36 h-11 rounded-md text-[#ffd900e1] bg-black text-xl ${latoBold.className} text-xl`}>
                About Us
            </button>
        </div>
       <div className="w-auto">
        <ul className={`w-96 grid grid-cols-2 gap-x-28 gap-y-7 pr-20  py-7 rounded-lg ${latoBold.className}`}>
                <li className="flex-col flex justify-center gap-2 shadow-xl w-44 h-40  items-center px-3 py-3 rounded-md">
                    <div className={`icon`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>  
                    <h1 className='font-semibold'>Online Order</h1>
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </li>
                <li className="flex-col flex shadow-xl justify-center w-44 h-40 gap-2 items-center px-3 py-3 rounded-md">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>  
                    <h1 className='font-semibold'>Easy To Order</h1>
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </li>
                <li className="flex-col flex justify-center gap-2 shadow-xl w-44 h-40  items-center px-3 py-3 rounded-md">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>  
                    <h1 className='font-semibold'>20hrs support</h1>
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </li>
                <li className="flex-col flex justify-center shadow-xl gap-2 w-44 h-40  items-center px-3 py-3 rounded-md2">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>  
                    <h1 className='font-semibold'>Good Quality</h1>
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </li>
            </ul>
       </div>


    </div>
  )
}

 {/* <div className="did flex w-24">
            <p>About Us</p>
        </div>
        <div className="more w-full flex-col">
            <div className="header">
                <h1 className="text-2xl font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;Join us in our cozy dining room and experience the essence of farm-to-table dining in every bite.
                    Welcome to TastexxSee - where every meal is a celebration of harvest. <a><span className='text-sm h-20 bg-red-500'>READ MORE</span></a>
                </h1>
            </div>
            <div className="extra flex pt-10">
                <div className="info1">
                    <p>
                        We believe in celebrating the seasonal
                       bounty of localy sourced ingredient 
                       to create fresh and flavorful dishes  
                    </p>
                </div>
                <div className="info2">
                    <p>
                        Our Chefs skilfully combine traditional and
                        modern culinary techniques to highlight the 
                        natural flavors of each ingredient
                    </p>
                </div>
            </div> 
        </div> */}

export default ExInfo