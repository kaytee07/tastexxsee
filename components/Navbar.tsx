import React from 'react';
import Link from 'next/link';
import { SheetDemo } from './Sidebar';


const Navbar = () => {
  return (
    <header className='flex flex-row justify-between bg-[#000000] text-[#FFD700] items-center py-4 px-10'>
        <div className="logo">
            <Link href="/">
                <h1 className={`font-semibold text-xl text-[#FFD700]`}>Tastexxsee</h1>
            </Link>
        </div>
        <nav 
        className="flex  justify-between h-[2rem] text-sm font-md md:w-[40rem] max-md:gap-5">
            <ul className="flex max-sm:hidden justify-evenly w-96">
            <li>about us</li>
            <li>staff</li>
            <li>dishes</li>
            <li>contact us</li>
          </ul>
            <div className="md:hidden flex items-center text-[#FFD700]">
                <SheetDemo/>
            </div>
        </nav>
      
        
         
    </header>

  )
}

export default Navbar

