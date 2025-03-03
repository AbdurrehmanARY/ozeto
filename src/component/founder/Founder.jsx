import { ArrowBigDown, Star } from 'lucide-react';
import React from 'react';

import { FaReact } from "react-icons/fa";
import Batch from '../batch/Batch';


// import { SiPreact } from "react-icons/si";
const features = [
  {
    icon: <FaReact className='text-orange-600 text-xl' />,
    label: " Innovation Apprach",
  },

  {
    icon: <FaReact className='text-orange-600 text-xl' />,
    label: "Dedicated Support",
  },
  ,

  {
    icon: <FaReact className='text-orange-600 text-xl' />,
    label: " Positive Client Experiences",
  }, ,

  {
    icon: <FaReact className='text-orange-600 text-xl' />,
    label: "Commitment to Quality",
  },
]
const featuireIn = [
  {
    loc: "src/assets/feature_logo/feat_1.png ",
    label: ""
  },
  {
    loc: "src/assets/feature_logo/feat_2.png ",
    label: ""
  }, {
    loc: "src/assets/feature_logo/feat_3.png ",
    label: ""
  }, {
    loc: "src/assets/feature_logo/feat_4.png ",
    label: ""
  }, {
    loc: "src/assets/feature_logo/feat_5.png ",
    label: ""
  },


]
function Founder() {
  return (
    <>
      <div className="bg-transparent text-white py-16 px-6 md:px-16">
        <div className='flex  items-center justify-center'>
          <div className='flex flex-col '>
            <div className="inline-flex font-sans items-center justify-center px-4 py-1 rounded-full text-orange-500 text-xs font-semibold bg-[#1A1A1A]">
              About Founder
            </div>
            {/* <div className="inline-flex font-sans items-center justify-center px-4 py-1 rounded-full text-orange-500 text-xs font-semibold bg-[#1A1A1A]">
          BRANDS COLLABORATIONS
          </div> */}
          {/* <Batch text="ABOUT FOUNDER"/> */}
            <h2 className="text-4xl font-normal mt-4">Meet The Founder</h2>


          </div>

        </div>
        <div className="relative max-w-6xl h-auto  bg-transparent  flex flex-col md:flex-row items-center sm:mt-5 ">


          <div className="relative flex justify-center bg-transparent">

            <div className="absolute top-42  left-62 transform -translate-x-1/2 bg-orange-500 w-100 h-80 rounded-t-full z-0 " />

            <img
              src="src/assets/team/founder.png"
              alt="Muhammad Farooq"
              className="w-100 h-auto ml-12 rounded-lg relative z-10"
            />
            <div className="absolute -bottom-7 left-0 w-full h-50 bg-gradient-to-t from-black to-transparent" />

            <div className="absolute  ml-12 -bottom-22 z-20 w-fit rounded-lg">

              <h3 className="text-5xl transparent  font-bold">
                <span className="text-orange-500">Muhammad</span> <br /> Farooq
              </h3>

            </div>
          </div>



          <div className="w-full md:w-1/2 text-left md:pl-9 sm:my-22">

            <p className="text-gray-300 mt-4 font-sans">
              Muhammad Farooq, the visionary behind Ozeito, combines over seven years of experience in UI/UX design and development. His passion for merging creativity with technology fuels Ozeito’s mission to deliver scalable, user-friendly solutions. Driven by a client-first approach, Jason’s leadership and innovative mindset continue to shape the company’s success, helping businesses turn their ideas into impactful, real-world products.
            </p>

            \
            <div className="flex flex-wrap gap-4 mt-6">

              {features.map((feature, index) => (
                (<span key={index} className="bg-white/10  px-4 py-2 rounded-lg text-sm flex items-center gap-2 font-sans">
                  {feature.icon} {feature.label}
                </span>)

              ))}
            </div>

            {/* Featured In Section */}
            <h3 className="mt-8 text-lg font-semibold">Featured In:</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {featuireIn.map((feature, index) => (
                <div key={index} className="bg-white/10 w-40 h-15 flex justify-center items-center  rounded-lg">
                  <img src={feature.loc} alt={feature.label} width={130} height={61} />
                </div>))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Founder;
