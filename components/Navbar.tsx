import React from 'react';
import Link from 'next/link';
import { SheetDemo } from './Sidebar';
import { Lato } from 'next/font/google';
import { Libre_Baskerville } from 'next/font/google';

const latoBold = Lato({ weight: '400', subsets: ['latin'] });
const libreBaskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });

interface NavbarProps {
  firstColor: string;
}

const Navbar: React.FC<NavbarProps> = ({firstColor}) => {

  return (
    <header className={`flex flex-row h-fit w-full bg-transparent z-10 justify-between text-[${firstColor}] items-center py-4 px-10`}>
        <div className="logo">
            <Link href="/">
                <h1 className={`font-bold text-xl text-[${firstColor} ${libreBaskerville.className}`}>Taste xx See</h1>
            </Link>
        </div>
        <nav 
        className="flex  justify-between h-[2rem] text-sm font-md  max-md:gap-5">
            <ul className={`text-[${firstColor}] flex max-sm:hidden text-lg justify-evenly items-center w-96 ${latoBold.className}`}>
           <a href="/aboutus"><li>About us</li></a> 
           <a href="/services"><li>Services</li></a>
            <a href="#staff"><li>Staff</li></a>
            <a href="#footer"><li>Contact us</li></a>
            </ul>
            <div className="md:hidden flex items-center text-[#FFD700]">
                <SheetDemo firstColor={firstColor}/>
            </div>
        </nav>
      
        
         
    </header>

  )
}

export default Navbar

