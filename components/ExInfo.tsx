import React from 'react'
import { Libre_Baskerville } from 'next/font/google';
import { Lato } from 'next/font/google';


const libreBaskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });
const latoBold = Lato({ weight: '400', subsets: ['latin'] });

const ExInfo = () => {
  return (
    <div id="about" className="flex bg-[#ffd900e1] text-black w-[100vw] max-sm:h-[50rem] h-[36rem] items-center justify-center  max-sm:px-5 max-sm:justify-start  max-sm:flex-col">
        <div className="info md:px-10 lg:px-20  max-sm:px-0 max-sm:py-10 md:py-1 flex flex-col gap-5 md:w-[30rem] lg:w-[40rem]">
            <h1 className={`md:text-5xl max-sm:text-5xl font-bold ${libreBaskerville.className}`}>Why<br/> Taste xx See ?</h1>
            <p className={`max-sm:hidden ${latoBold.className} text-xl`}>
                This is a type of restaurant which typically serves food and drink, in
                addition to light refreshment such as baked goods or snacks. The taste come from 
                carefully cooked food from the chef 
            </p>

            <button className={` max-sm:hidden w-36 h-11 rounded-md text-[#ffd900e1] bg-black text-xl ${latoBold.className} text-xl`}>
                About Us
            </button>
        </div>
       <div className="lg:w-[40rem]">
        <ul className={`grid grid-cols-2 gap-y-7 gap-x-5  place-content-start max-sm:w-auto rounded-lg ${latoBold.className}`}>
                <li className="flex-col flex justify-center gap-2 shadow-xl max:md:w-[5rem] max-sm:w-auto w-44 h-fit  items-center px-2 py-3 rounded-md">
                    <div className={`icon`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>  
                    <h1 className='font-semibold'>Quality Of Food</h1>
                    <p className="text-center ">Consistently fresh, tasty, and well-prepared dishes that meet customer expectations.</p>
                </li>
                <li className="flex-col flex justify-center gap-2 shadow-xl max:md:w-[5rem] max-sm:w-auto w-44 h-fit  items-center px-2 py-3 rounded-md">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>  
                    <h1 className='font-semibold'>Ambiance</h1>
                    <p className="text-center">A comfortable and inviting atmosphere that enhances the dining experience.</p>
                </li>
                <li className="flex-col flex justify-center gap-2 shadow-xl max:md:w-[5rem] max-sm:w-auto w-44 h-fit  items-center px-2 py-3 rounded-md">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>  
                    <h1 className='font-semibold'>Customer Service</h1>
                    <p className="text-center"> Friendly, attentive, and responsive staff that ensures a positive dining experience.</p>
                </li>
                <li className="flex-col flex justify-center gap-2 shadow-xl max:md:w-[5rem] max-sm:w-40 w-44 h-fit  items-center px-2 py-3 rounded-md">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>  
                    <h1 className='font-semibold'>Cleanliness</h1>
                    <p className="text-center">Well-maintained and hygienic environment, including the dining area, kitchen, and restrooms.</p>
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