import { Facebook } from 'lucide-react'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6";

import { AiFillInstagram } from "react-icons/ai";
const icons=[{icon:FaFacebook},
  {icon:FaTwitter},{icon:FaLinkedin},{icon:AiFillInstagram}




]

function Footer2() {
  return (
    <>
    
    <footer className="my-5 bg-[#212529]/90 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4 ">
      
        <p className="text-orange-500 font-semibold text-lg">Follow us:</p>

       
        <div className="flex space-x-4">

{icons.map((item,index)=>(
  <button className="p-2 bg-transparent border border-gray-600 rounded-xl text-white hover:bg-orange-600 hover:scale-120 duration-500 ">
            
           
{<item.icon size={24} className='text-gray-300 hover:text-black' />}
          </button>))}

         
        </div>

      
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="name@email.com"
            className="px-4 py-2 bg-gray-800 text-gray-400 rounded-xl  border-gray-400 "
          />
          <button className="px-6 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-600 transition">
            Subscribe for newsletter
          </button>
        </div>
      </div>
    </footer>
    
    
    
    
    
    
    
    </>
  )
}

export default Footer2