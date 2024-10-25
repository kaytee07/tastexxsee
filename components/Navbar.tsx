import React from 'react';
import { Rakkas } from 'next/font/google';

const rakkas = Rakkas({
  weight: '400', // You can choose different weights
  subsets: ['latin'], // Add other subsets if needed
});

const Navbar = () => {
  return (
      <div className="logo bg-transparent flex items-center bg-black bg-opacity-50 h-screen text-white justify-center">
        <h1 className={`${rakkas.className} font-semibold text-xl`}>Tastexxsee</h1>
      </div>
  )
}

export default Navbar
