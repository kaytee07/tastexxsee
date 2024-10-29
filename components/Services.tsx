import React from 'react'

const Services = () => {
  return (
 <div className="max-sm:px-5 max-sm:py-3 px-16 py-10">
        <div className="headers py-5">
            <h1 className="text-3xl font-bold">Boutique</h1>
            <h1 className="text-3xl font-bold">Catering Services</h1>
        </div>
        <div  className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="relative">
                    <h3 className="absolute text-lg bottom-3 w-full px-2">Ceremonials</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                </div>
                <div className="relative">
                  <h3 className="absolute text-lg bottom-3 w-full px-2">Parties</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                </div>
                <div className="relative">
                  <h3 className="absolute text-lg bottom-3 w-full px-2">Graduations</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                </div>
                <div className="relative">
                  <h3 className="absolute text-lg bottom-3 w-full px-2">Weddings</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
                </div>
                <div className="relative">
                  <h3 className="absolute text-lg bottom-3 w-full px-2">Outdoorings</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                </div>
                <div className="relative">
                  <h3 className="absolute text-lg bottom-3 w-full px-2"> funerals</h3>
                    <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
                </div>
            </div>
    </div>
  )
}

export default Services