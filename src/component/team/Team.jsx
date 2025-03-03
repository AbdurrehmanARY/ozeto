import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const team=[

  {
    jobName:"UI UX Design",
    jobTitle:'DESIGN GENIUS',
    image:"src/assets/team/team_1.png",
    name:"M. Shoaib Ibn Saeed",
    designation:"Sr. UI UX Designer"
  },
  {
    jobName:"AndriodExpert",
    jobTitle:'DEV MASTERMING',
    image:"src/assets/team/team_2.png",
    name:"Talha Ibrahim",
    designation:"Sr.Andriod Developer"
  },
  {
    jobName:"Web Expert",
    jobTitle:'DEV MASTERMIND',
    image:"src/assets/team/team_3.png",
    name:"Naveed Iqbal",
    designation:"Sr.Web Developer"
  },
  {
    jobName:"Flutter Expert",
    jobTitle:'DEV MASTERMIND',
    image:"src/assets/team/team_4.png",
    name:"Bilal javed",
    designation:"Sr.Flutter Developer"
  },
  {
    jobName:"IOS Expert",
    jobTitle:'DEV MASTERMIND',
    image:"src/assets/team/team_5.png",
    name:"Sayed Abdul Wahab",
    designation:"Sr.IOS Developer"
  },

  ,
  {
    jobName:"App Expert",
    jobTitle:'DEV MATERMIND',
    image:"src/assets/team/team_6.png",
    name:"Ali Faizan Mehmood",
    designation:"Fullstack Mobileapp Developer"
  },,
  {
    jobName:"UI UX Design",
    jobTitle:'DESIGN GENIUS',
    image:"src/assets/team/team_7.png",
    name:"Maryam Rasheed",
    designation:"Jr. UI UX Designer"
  },






  
]





function Team() {
  return (
    <>
    


    <div className=" w-2xl mx-auto my-24 text-center font-unbounded space-y-2 ">
         
         <div className="inline-flex font-sans items-center justify-center px-4 py-1 rounded-full text-orange-500 text-xs font-normal bg-[#1A1A1A]">
        TEAM MEMBER
         </div>
         <h2 className="text-4xl font-normal  font-unbounded">OurSquad</h2>

<span className='font-sans  text-lg font-normal text-white/60'>
Get ready to meet the faces behind the magic, the dreamers, the doers, and the unstoppable force driving our success.
</span>

</div>


    <div className="bg-black   flex flex-wrap gap-3 min-h-screen w-full">
{team.map((item,index)=>(
  <Card className="bg-[#212529]/50 rounded-2xl shadow-lg p-4 h-auto w-105 text-center border-none">
      <CardHeader className="relative   rounded-xl">
        
        
        
        {/* Text Overlay */}
        <div className="absolute top-2 -left-4 text-left w-full overflow-x-hidden">
          <h2 className="block text-[42px] font-bold text-orange-500  ">{item.jobName}</h2>
          <span className="block text-white text-right font-normal text-lg relative bottom-2   ">{item.jobTitle}</span>
        </div>

        <div className="absolute top-21  left-50 transform -translate-x-1/2 bg-orange-500 w-90 h-90 rounded-t-full z-0 " />     
        {/* Overlay Gradient at Bottom */}
        <div className="absolute -bottom-10 left-1 w-full h-30 bg-gradient-to-t from-black to-transparent" />   
        <img 
  src={item.image} 
  alt="M. Shoaib Ibn Saeed" 
  className="relative top-4  w-full rounded-xl grayscale hover:grayscale-0 hover:translate-y-15 duration-[1000ms]"
 />






      </CardHeader>
      
      <CardFooter className=" relative bg-[#1a1a1a] py-4 rounded-lg flex flex-col items-center">
        <h5 className="text-white text-lg font-bold">{item.name}</h5>
        <p className=" text-gray-400 text-sm">{item.designation}</p>
      </CardFooter>
    </Card>


))}

    



      {/* <div className="bg-[#141414] rounded-2xl shadow-lg p-4 w-80 text-center">
      
        image section

        <div className="relative overflow-hidden rounded-xl">

          <img 
            src="src/assets/team/team_4.png" 
            alt="M. Shoaib Ibn Saeed" 
            className="w-full rounded-xl grayscale"
          />
          Overlay Gradient at Bottom 
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent">

          </div>

           Text Overlay 
          <div className="absolute top-4 left-4 text-left">
            <h2 className="text-2xl font-bold text-orange-500">UI UX Design orignal</h2>
            <span className="text-white text-sm font-semibold">DESIGN GENIUS</span>
          </div>
        </div>

        Name Section 
        <div className="mt-4 bg-[#1a1a1a] py-4 rounded-lg">
          <h3 className="text-white text-lg font-bold">M. Shoaib Ibn Saeed</h3>
          <p className="text-gray-400 text-sm">Sr. UI UX Designer</p>
        </div>
      </div> */}

      
    </div>




    
    
    
    
    </>
  )
}

export default Team