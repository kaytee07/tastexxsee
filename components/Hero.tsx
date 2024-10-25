import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="bg-[url('/img/hero6.avif')] bg-cover bg-center h-screen">
      <Navbar/>
      <div className="home-text">
        <h1>TASTEXXSEE</h1>
        <h2>by bhn</h2>
      </div>

    </div>
  )
}

export default Hero
