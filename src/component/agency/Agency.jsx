import BoxTransition from '@/components/box'
import React from 'react'



function Agency() {


  return (
    <>
    
    
    <div className=" bg-black text-white pt-16 ">
      <div className="widh-full  mx-5 flex flex-col md:flex-row md:justify-between items-center">
        {/* Left Side - Title and Badge */}
        <div className="flex items-center gap-4 w-full md:w-1/2">
        <div className="font-sans inline-flex items-center justify-center px-4 py-1 rounded-full text-orange-500 text-xs font-semibold bg-[#1A1A1A]">
            GALLERY
          </div>
          <h2 className="text-3xl font-normal">OurAgencySnaps</h2>
        </div>

        {/* Right Side - Description */}
        <div className="  md:w-1/3 mt-4 md:mt-0">
          <p className="text-gray-400 text-lg font-sans ">
            From team outings and office shenanigans to special events and
            celebrations, these photos capture the essence of our vibrant
            culture and the bonds that unite us.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-black text-white py-8 px-6">
    <BoxTransition />
    <BoxTransition />
    <BoxTransition />

      
        
    </div>

    
    
     
    </>
  )
}

export default Agency