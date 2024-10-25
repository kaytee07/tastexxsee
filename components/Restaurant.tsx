import React from 'react';
import { Lato } from 'next/font/google';
import { constinental } from '@/data';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const Restaurant = () => {
  return (
    <div className='px-10 mt-12'>
        <div className={`flex justify-between ${lato.className} font-bold`}>
        <h2 className='text-2xl'>Restaurant dishes</h2>
        </div>
        <div className="dishes">
            {/* {
                constinental.map((item, index) => (

                ))
            } */}
        </div>
    </div>
  )
}

export default Restaurant