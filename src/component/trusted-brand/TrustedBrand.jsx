import { Card,CardContent } from "@/components/ui/card";


export default function TrustedBrands() {
    const brands = [
      { name: "ChatBot AI", img: "assets/brands/chatbot.png" },
      { name: "IPTV Smarter", img: "assets/brands/dhl.svg" },
      { name: "Google", img: "assets/brands/ceat.svg" },
      { name: "CEAT", img: "assets/brands/google.svg" },
      { name: "DHL", img: "assets/brands/iptv.png" },
      { name: "DHL", img: "assets/brands/moneda.svg" },
      

    ];
  
    return (
      <div className="bg-transparent text-white py-12 px-6 md:px-16 ">
        <div className=" mx-auto text-center">
         
          <div className="inline-flex font-sans items-center justify-center px-4 py-1 rounded-full text-orange-500 text-xs font-semibold bg-[#1A1A1A]">
          BRANDS COLLABORATIONS
          </div>
          <h2 className="text-5xl font-normal mt-4">Brands that trust us</h2>
  
          <div className="my-16 bg-transparent border border-white/10 rounded-2xl p-6 flex justify-center items-center space-x-4 overflow-hidden">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-2xl flex justify-center items-center w-47 h-24"
              >
                <img src={brand.img} alt={brand.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }