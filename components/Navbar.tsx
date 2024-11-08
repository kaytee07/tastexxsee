import React from 'react';
import Link from 'next/link';
import { SheetDemo } from './Sidebar';

interface NavbarProps {
  firstColor: string;
}

const Navbar: React.FC<NavbarProps> = ({firstColor}) => {
  return (
    <header className={`flex flex-row h-fit w-full bg-transparent z-10 justify-between text-[${firstColor}] items-center py-4 px-10`}>
        <div className="logo">
            <Link href="/">
                <h1 className={`font-semibold text-xl text-[${firstColor}`}>TastexxSee</h1>
            </Link>
        </div>
        <nav 
        className="flex  justify-between h-[2rem] text-sm font-md  max-md:gap-5">
            <ul className={`text-[${firstColor}] flex max-sm:hidden text-lg justify-evenly items-center w-96`}>
           <a href="/aboutus"><li>about us</li></a> 
            <a href="#staff"><li>staff</li></a>
            <a href="#footer"><li>contact us</li></a>
            </ul>
            <div className="md:hidden flex items-center text-[#FFD700]">
                <SheetDemo firstColor={firstColor}/>
            </div>
        </nav>
      
        
         
    </header>

  )
}

export default Navbar

