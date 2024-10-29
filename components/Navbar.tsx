import React from 'react';
import { Rakkas } from 'next/font/google';

const rakkas = Rakkas({
  weight: '400', // You can choose different weights
  subsets: ['latin'], // Add other subsets if needed
});

const Navbar = () => {
  return (
      <div className="logo  flex items-center bg-white h-16 text-black justify-between px-20">
        <div className="icon">
          <h1 className={`${rakkas.className} font-semibold text-xl text-black`}>Tastexxsee</h1>
        </div>
        <nav>
          <ul className="flex justify-evenly w-96">
            <li>about us</li>
            <li>staff</li>
            <li>dishes</li>
            <li>contact us</li>
          </ul>
        </nav>
        
      </div>
  )
}

export default Navbar
