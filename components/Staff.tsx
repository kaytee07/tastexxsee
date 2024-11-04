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
   <div className="max-sm:px-11 bg-[#000000] text-[#FFD700] max-sm:py-5 px-16 py-10">
    <div className={`headers py-5 ${libreBaskerville.className}`}>
            <h1 className="text-3xl font-bold">Staff</h1>
        </div>
        <Carousel>
             <CarouselPrevious />
         <CarouselNext />
        <CarouselContent>
                    {
            staff.map((item, index) => (
                <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3 ${latoBold.className}`}>
                <div className="flex w-full p-4 max-w-lg flex-col rounded-lg bg-[#1F1F1F1] text-[#FFD700]  shadow-sm border border-[#FFD700] my-6">
                    <div className="flex items-center gap-4 text-slate-800">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" alt="Tania Andrew" className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
                        <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                            <h5 className="text-xl font-semibold text-[#FFD700]">
                            {item.name}
                            </h5>

                        </div>
                        <p className="text-xs uppercase font-bold text-[#FFD700]  mt-0.5">
                            {item.position}
                        </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-base text-lg text-[#FFD700]  font-light leading-normal">
                        I found solution to all my design needs from Creative Tim. I use
                        them as a freelancer in my hobby !
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