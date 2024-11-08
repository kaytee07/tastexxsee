import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { staff } from '@/data'
import { Libre_Baskerville, Lato } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });
const latoBold = Lato({ weight: '400', subsets: ['latin'] });


const Staff = () => {
  return (
   // 50% on small screens and 33% on larger screens.
   <div id="staff" className="max-sm:px-14 h-[30rem] bg-black text-[#ffd900e1] max-sm:py-5 px-16 py-10">
    <div className={`headers py-5 ${libreBaskerville.className}`}>
            <h1 className="text-6xl font-bold">Staff</h1>
        </div>
        <Carousel>
             <CarouselPrevious />
         <CarouselNext />
        <CarouselContent>
                    {
            staff.map((item, index) => (
                <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3 ${latoBold.className}`}>
                <div className="flex w-full p-4 max-w-lg flex-col rounded-lg bg-[#ffd900e1] text-black  shadow-sm border border-[#FFD700] my-6">
                    <div className="flex items-center gap-4 text-slate-800">
                        <img src={item.src || `/img/blankprofile.webp`} className='w-14 h-14 rounded-full'/>
                        <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                            <h5 className="text-xl font-semibold text-[#FFD700]ext-black">
                            {item.name}
                            </h5>

                        </div>
                        <p className="text-xs uppercase font-bold ext-black  mt-0.5">
                            {item.position}
                        </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-base text-lg ext-black  font-light leading-normal">
                        {item.auto}
                        </p>
                    </div>
                    </div>
            </CarouselItem>
            ))
        }
            
           
        </CarouselContent>
        </Carousel>
    </div>

  )
}

export default Staff