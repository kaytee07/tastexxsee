import React from 'react'
import { Libre_Baskerville } from 'next/font/google';
import { Lato } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });
const latoBold = Lato({ weight: '400', subsets: ['latin'] });

const Services = () => {
  return (
 <div className="max-sm:px-5 bg-[#000000] text-[#FFD700] max-sm:py-3 px-16 py-10">
        <div className={`headers py-5 ${libreBaskerville.className}`}>
            <h1 className="text-3xl font-bold">Boutique</h1>
            <h1 className="text-3xl font-bold">Catering Services</h1>
        </div>
        <div  className={`grid grid-cols-2 lg:grid-cols-3 gap-2 ${latoBold.className}`}>
                <div className="relative text-white">
                  <div className='w-full h-[30%] bottom-0 absolute bg-opacity-50 bg-black'></div>
                    <h3 className="absolute text-lg bottom-3 w-full px-2">Ceremonials</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="/img/cer1.avif" alt=""/>
                </div>
                <div className="relative text-white">
                  <div className='w-full h-[30%] bottom-0 absolute bg-opacity-50 bg-black'></div>
                  <h3 className="absolute text-lg bottom-3 w-full px-2">Parties</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="/img/events1.avif" alt=""/>
                </div>
                <div className="relative text-white">
                  <div className='w-full h-[30%] bottom-0 absolute bg-opacity-50 bg-black'></div>
                  <h3 className="absolute text-lg bottom-3 w-full px-2">Events</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="/img/bar1.avif" alt=""/>
                </div>
                <div className="relative text-white">
                  <div className='w-full h-[30%] bottom-0 absolute bg-opacity-50 bg-black'></div>
                  <h3 className="absolute text-lg bottom-3 w-full px-2">Weddings</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="/img/wed1.avif" alt=""/>
                </div>
                <div className="relative text-white">
                  <div className='w-full h-[30%] bottom-0 absolute bg-opacity-50 bg-black'></div>
                  <h3 className="absolute text-lg bottom-3 w-full px-2"> funerals</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="/img/fun1.avif" alt=""/>
                </div>
            </div>
    </div>
  )
}

export default Services