import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react"


function Footer1() {
  return (
    <>
     <footer className="bg-[#212529]/90 rounded-4xl text-white py-16">
      <div className="  container mx-auto px-4 md:px-6 lg:px-8">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-200">info@ozeito.com</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-200">+44 20 3287 5500</span>
                  <span className="text-gray-200">+92 322 5482101</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <div className="mb-4">
                    <p className="text-gray-200">
                      Office Ozeito 14a, 5 Brayford Square, London, United Kingdom, E1 0SG
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-200">
                      B-871, Hassan Arcade Plaza, Chen One Road, Faisalabad, Pakistan, 38000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Column */}
          <div>
            <h3 className="text-orange-500 font-medium text-xl mb-6">Menu</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  Hire Developer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-orange-500 font-medium text-xl mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  AI/ML Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  SaaS Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

                  <div>
            <h3 className="text-orange-500 font-medium text-xl mb-6">Other Pages</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  License
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-orange-500 transition-colors">
                  404
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    
    
    
    
    
    
    </>
  )
}

export default Footer1