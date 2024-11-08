import Navbar from '@/components/Navbar'
import React from 'react'
import { Lato } from 'next/font/google';
import { Libre_Baskerville } from 'next/font/google';

const latoBold = Lato({ weight: '400', subsets: ['latin'] });
const libreBaskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });

const Services = () => {
  return (
    <div className="bg-[#ffd900e1]">
        <Navbar firstColor="black"/>
        <div>
            <div className="info max-sm:py-12 max-sm:px-5 py-20 px-40 max-sm:h-[30rem] text-justify h-[20rem]  text-xl">
             <p>TastexxSee creates world class gastronomic experiences for all occasions, from board meetings and staff parties to bridal showers and birthday parties. We use only the best quality ingredients to create unique custom dishes that complement our clients’ visions, and our elaborate food presentation, elegant settings and proper etiquette are a direct representation of our exceptionally high standards and quality customer service.</p>
            </div>
        </div>
        
        <div id="ceremonials" className="div flex max-sm:flex-col">
            <div className="img h-fit max-sm:w-full">
                <img src="/img/cer2.avif" alt="" />
            </div>
            <div className="deta max-sm:py-5 max-sm:h-80 max-sm:px-5 gap-5 py-210 px-10 flex flex-col">
                <h1 className={`md:mb-5 text-4xl font-bold ${libreBaskerville.className}`}>Ceremonials</h1>
                <p className={`max-sm:text-lg ${latoBold.className} text-lg`}>At TastexxSee, we believe that every meal is a celebration. Our ceremonial dining experiences are thoughtfully designed to elevate your special occasions, creating unforgettable moments with personalized service, exquisite cuisine, and an atmosphere of elegance.</p>
            </div>
        </div>
         <div id="parties" className="div flex  max-sm:flex-col flex-row-reverse">
            <div className="img h-fit ">
                <img src="/img/p2.avif" alt="" />
            </div>
            <div className="deta max-sm:py-5 max-sm:h-80 max-sm:px-5 gap-5  px-10 py-10 flex flex-col">
                <h1 className={`md:mb-5 text-4xl font-bold ${libreBaskerville.className}`}>Parties</h1>
                <p className={`max-sm:text-lg ${latoBold.className} text-lg`}>Make your celebration extraordinary with us. Whether it&apos;s a birthday, anniversary, or any special occasion, our team curates personalized party experiences with exceptional service, delicious food, and a vibrant atmosphere to keep the party going.</p>
            </div>
        </div>
         <div id="events" className="div flex max-sm:flex-col">
            <div className="img h-fit ">
                <img src="/img/parties.avif" alt="" />
            </div>
            <div className="deta max-sm:py-5 max-sm:h-80 max-sm:px-5 gap-5 py-10 px-10 flex flex-col">
                 <h1 className={`md:mb-5 text-4xl font-bold  ${libreBaskerville.className}`}>Events</h1>
                <p className={`max-sm:text-lg ${latoBold.className} text-lg`}>We specialize in creating seamless and memorable events. From corporate gatherings to intimate celebrations, our tailored service and exquisite menu ensure that every detail is handled with care, leaving you free to enjoy the occasion.</p>
            </div>
        </div>
         <div id="weddings" className="div flex max-sm:flex-col flex-row-reverse">
            <div className="img h-fit">
                <img src="/img/wed.avif" alt="" />
            </div>
            <div className="deta max-sm:py-5 max-sm:h-80 max-sm:px-5 gap-5 py-10 px-10 flex flex-col">
                <h1 className={`md:mb-5 text-4xl font-bold ${libreBaskerville.className}`}>Weddings</h1>
                <p className={`max-sm:text-lg ${latoBold.className} text-lg`}>Your wedding day deserves perfection. We offer bespoke wedding services, from intimate ceremonies to grand receptions. With personalized menus, impeccable service, and a stunning setting, we help create the wedding of your dreams.</p>
            </div>
        </div>
         <div id="funerals" className="div flex max-sm:flex-col">
            <div className="img h-fit">
                <img src="/img/fun2.avif" alt="" />
            </div>
            <div className="deta max-sm:py-5 max-sm:h-80 max-sm:px-5 gap-5 py-10 px-10 flex flex-col">
                <h1 className={`md:mb-5 text-4xl font-bold ${libreBaskerville.className}`}>Funerals</h1>
                <p className={`max-sm:text-lg ${latoBold.className} text-lg`}>In times of loss, We here to offer compassion and comfort. Our funeral services provide a respectful and peaceful environment for family gatherings, with thoughtfully prepared meals and attentive service, allowing you to focus on what matters most.</p>
            </div>
        </div>

    </div>
  )
}

export default Services