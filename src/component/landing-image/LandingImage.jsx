import React from 'react';
import LanImage from "../../assets/agency/age_1.jpg"
function LandingImage() {

  return (
    <section className="relative">
      <div className="relative h-[400px] overflow-hidden rounded-3xl mx-4">
        <img
          src="assets/agency/age_1.jpg"
          alt="Developers working"
          width={1600}
          height={800}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-7xl px-8">
            <h1 className=" font-unbounded font-normal text-6xl md:text-8xl  tracking-tight text-white">
              Welcome to <span className="font-unbounded font-normal text-orange-500">Ozeito</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingImage;
