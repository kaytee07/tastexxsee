"use client"
import { menu } from '@/data'
import React, { useEffect, useState } from 'react'
import { Lato } from 'next/font/google';
import { Libre_Baskerville } from 'next/font/google';

type Dish = {
  name: string;
  prices: number[]
}

type MenuItem = {
  name: string,
  dishes: Dish[]
}

const latoBold = Lato({ weight: '400', subsets: ['latin'] });
const libreBaskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });



const Dish = () => {
const [currentMenu, setMenu] = useState< MenuItem[]>([]);
const [menuTypes] = useState(Object.keys(menu));
const [activeItem, setActiveItem] = useState('');




const getMenu = (type: string) => {
  if (menu[type]) {
    setMenu(menu[type]);
    setActiveItem('')
    setActiveItem(type);
  } else {
    setMenu([])
    console.warn(`Menu type "${type}" does not exist.`);
  }
};

useEffect(()=> {
  setMenu(menu['African Friendly'])
  setActiveItem('African Friendly')
}, [])

  return (
    <div className="flex px-16 gap-16 h-[46rem] py-20 bg-black text-[#ffd900e1] max-sm:px-5 max-sm:py-12">
        <div className="headers max-sm:hidden max-sm:px-5 max-sm:py-3  w-[50%] flex justify-end">
            <img src="/img/hero8.avif" className="w-full h-20rem[" alt="food" />
        </div>
        <div className={`flex flex-col max-sm:w-[100%] w-[50%] ${libreBaskerville.className}`}>
          <div className="sub-info flex justify-between px-5 pb-5">
            <h1 className='text-6xl'>Menu</h1>
           
          </div>

          <div className={`menu-info  ${latoBold.className}`}>
              <nav aria-label="breadcrumb"  className="w-full flex flex-wrap">
                <ol  className="flex w-full flex-wrap items-center rounded-md bg-black px-4 py-2">
                  {
                    menuTypes.map((items, index) => (
                      <li key={index} onClick={() => getMenu(items)} className={`flex cursor-pointer items-center text-sm transition-colors duration-300 ${
              activeItem === items ? 'text-white' : 'text-[#ffd900e1] hover:text-[#f0efee]'
            }`}>
                        <p className="text-lg">{items.toUpperCase()}</p>
                        <span  className="pointer-events-none mx-2 text-[#ffd900e1]">
                          /
                        </span>
                      </li>
                        ))
                  }

                  
                </ol>
              </nav>
          </div>
          <div className={`list py-5 px-5 overflow-y-scroll h-96 mt-5 w-full  ${latoBold.className}`}>
            {
              currentMenu.map((item, index) => (
                <div key={index}>
                  <h1 className="text-2xl">{item.name}</h1>
                  <ul>
                    {item.dishes.map((menu, index) => (
                    <li key={index} className="flex justify-between border-b-[#FFD700] border-b-2 pt-2">
                      <h3 className="text-lg">{menu.name}</h3>
                      <ul className="flex gap-3">
                        <li>{menu.prices.map(price => `₵${price} `).join(', ')}</li>
                      </ul>
                    </li>
                    ))}

                  </ul>
                </div>
              ))

            }
          </div>
            
      </div>
    </div>
  )
}

export default Dish
