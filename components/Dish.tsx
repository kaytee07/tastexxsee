"use client"
import { menu } from '@/data'
import React, { useEffect, useState } from 'react'

type Dish = {
  name: string;
  prices: number[]
}

type MenuItem = {
  name: string,
  dishes: Dish[]
}



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
    <div className="flex px-16 gap-16 py-10 max-sm:px-5 max-sm:py-3">
        <div className="headers max-sm:hidden max-sm:px-5 max-sm:py-3 w-[50%] flex justify-end">
            <img src="/img/hero8.avif" className="w-full h-20rem[" alt="food" />
        </div>
        <div className="flex flex-col max-sm:w-[100%] w-[50%]">
          <div className="sub-info flex justify-between px-5 pb-5">
            <h1>Menu</h1>
            <button>SEE ALL</button>
          </div>
          <div className="menu-info">
              <nav aria-label="breadcrumb"  className="w-full flex flex-wrap">
                <ol  className="flex w-full flex-wrap items-center rounded-md bg-slate-50 px-4 py-2">
                  {
                    menuTypes.map((items, index) => (
                      <li key={index} onClick={() => getMenu(items)} className={`flex cursor-pointer items-center text-sm transition-colors duration-300 ${
              activeItem === items ? 'text-red-500' : 'text-slate-500 hover:text-slate-800'
            }`}>
                        <p className="text-lg">{items.toUpperCase()}</p>
                        <span  className="pointer-events-none mx-2 text-slate-800">
                          /
                        </span>
                      </li>
                        ))
                  }

                  
                </ol>
              </nav>
          </div>
          <div className="list py-5 px-5 overflow-y-scroll h-96 mt-5 w-full">
            {
              currentMenu.map((item, index) => (
                <div key={index}>
                  <h1 className="text-2xl">{item.name}</h1>
                  <ul>
                    {item.dishes.map((menu, index) => (
                    <li key={index} className="flex justify-between border-b-2 pt-2">
                      <h3 className="text-lg">{menu.name}</h3>
                      <ul className="flex gap-3">
                        <li>{menu.prices.join(', ₵')}</li>
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
