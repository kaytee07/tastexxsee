import Navbar from '@/components/Navbar'
import React from 'react'

const AboutUs = () => {
  return (
    <div className=" bg-[#ffd900e1] text-black w-[100vw]">
        <Navbar firstColor="black"/>
        <div className="w-full h-full flex flex-col px-16">
            <h1 className="text-8xl max-sm:text-6xl mt-7  border-b-2 border-b-black">AboutUs</h1>
            <h3 className={`mt-5 text-2xl font-bold`}>Mission</h3>
            <p>Our mission is to use the best quality ingredients to create unique custom dishes that complement our clients’ visions and create memorable experiences. Our elaborate food presentation, elegant settings
                 and proper etiquette are a direct representation of our exceptionally high standards and quality customer service.</p>
            <h3 className={`mt-5 text-2xl font-bold`}>Vision</h3>
            <p className={`border-b-black pb-10 border-b-2`}>Our vision is to inspire through food  while creating a world class gastronomic experience, encompassing the finest quality of food and an unmatched personalized service for private and corporate clients. From board meetings and staff parties to bridal showers ,
                 funerals and birthday parties, we firmly believe that there should be no boundaries for when, where or for what occasion one must indulge in fine dining.</p>
        </div>
        <div className="core pt-10  px-16">
            <h2 className="font-bold text-4xl">Our Core Values</h2>
            <div className="ic flex max-sm:flex-col md:justify-between md:mt-[3rem] mt-6 max-sm:gap-7">
                <div className="excellence flex gap-3 flex-col  items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="font-bold lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                    <h1>EXCELLENCE SERVICES</h1>
                </div>
                <div className="excellence flex gap-3 flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
                    <h1>TRUSTWORTHINESS</h1>
                </div>
                <div className="excellence flex gap-3 flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 14"/></svg>
                    <h1>EFFICIENCY</h1>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AboutUs