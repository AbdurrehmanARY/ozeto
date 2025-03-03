import React from 'react'

function Quotes() {
  return (
    <>
    
    
    <div className=" text-white py-16 px-6 w-full border-gray-800">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* <h2 className="text-8xl font-bold leading-tight font-[Unbounded] font-stretch-200%">
            Get Free <br />
            Quote In <br />
            <span className="text-orange-500">Minutes!</span>
          </h2> */}
           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
        <span className="text-white font-normal ">Get Free Quote In</span> <span className="text-orange-500">Minutes!</span>
      </h1>
        </div>

        {/* Right Form Section */}
        <div className="md:w-2/3 mt-10 md:mt-0   sm:w-full">
          <div className="bg-[#212529]/90 p-8 rounded-2xl shadow-lg">
            <form className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium font-unbounded">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  placeholder="Enter Message"
                  rows={4}
                  className="w-full mt-1 p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-black py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Quotes