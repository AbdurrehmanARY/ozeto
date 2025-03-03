import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Navbar() {
  const navlinks = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICES', path: '/' },
    { label: 'HIRE DEVELOPER', path: '/' },
    { label: 'OUR WORK', path: '/' },
    { label: 'OUR TEAM', path: '/' },
    { label: 'BLOG', path: '/' },
    { label: 'ABOUT', path: '/' },
  ];

  return (
    <header className="max-w-7xl mx-auto px-4 ">
      <div className="flex justify-between items-center w-auto">
        
        {/* Logo */}
        {/* <Link to="/" className=""> */}
          <img src="src/assets/logo.png" alt="Ozeito" width="100" height="44" />
        {/* </Link> */}

        {/* Navigation */}
        <nav className="hidden md:flex items-center bg-transparent rounded-full px-6 py-3 space-x-4 border border-gray-700 font-sans  font-medium text-sm leading-7">
          {navlinks.map((link, index) => (
            <NavLink key={index} to={link.path} className="font-unbounded text-xs font-normal hover:scale-90 duration-600">
              {link.label}
            </NavLink>
          ))}












        </nav>

        {/* Contact Button */}
        <div className=" w-auto ">
          <Link
            to="/contact"
            className="hidden text-xs h-11 mt-4 w-auto px-6 font-unbounded font-normal  md:flex items-center bg-orange-500 text-black  rounded-full  hover:bg-orange-600 "
          >
            CONTACT
            <ArrowUpRight className="ml-2" size={10} />
          </Link>

          {/* Mobile Menu Button */}
          

<Sheet >
  <SheetTrigger>
    <button className="md:hidden ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
          </SheetTrigger>
  <SheetContent className="bg-black w-full h-full " side="top">
    <SheetHeader>
      <SheetTitle>          <img src="src/assets/logo.png" alt="Ozeito" width="100" height="44" />
      </SheetTitle>
  
    </SheetHeader>

  
  
    <div className="w-full h-full px-3  text-white flex flex-col items-center">

    {navlinks.map((link, index) => (
            <NavLink key={index} to={link.path} className=" h-full font-unbounded text-lg font-normal  ">
              {link.label}
            </NavLink>
          ))}
<Link
            to="/contact"
            className=" text-xs py-4 w-full px-6 font-unbounded font-normal flex justify-center   bg-orange-500 text-black  rounded-full  "
          >
            CONTACT
            <ArrowUpRight className="ml-2" size={10} />
          </Link>
    </div>

  
  
  
  
  
  </SheetContent>
</Sheet>





        </div>

      </div>
    </header>
  );
}

export default Navbar;
