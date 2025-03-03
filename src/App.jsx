
import AboutCompany from './component/aboutCompany/AboutCompany';
import LandingImage from './component/landing-image/LandingImage';
import Navbar from './component/navbar/Navbar'
// import Navbar from './component/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import TrustedBrands from './component/trusted-brand/TrustedBrand';
import Founder from './component/founder/Founder';
import Team from './component/team/Team';
import Agency from './component/agency/Agency';
import Faq from './component/Faq/Faq';
import Quotes from './component/freeQuotes/Quotes';
import Footer1 from './component/footer/Footer1';
import Footer2 from './component/footer/Footer2';
import BoxTransition from './components/box';
function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className="min-h-screen bg-black  text-white mx-auto w-full ">
      <div className=' bg-[url(src/assets/layer1.png)]  bg-center bg-repeat w-full px-8   '>

      <Navbar />
      <LandingImage/>
      <AboutCompany/>
      <TrustedBrands/>
      <Founder/>
      <Team/>
      <Agency/>
      <Faq/>

      <Quotes/>
      <Footer1/>
      <Footer2/>

      </div>
      </div>
      
      {/* Other components */}
    </BrowserRouter>
    </>
  )
}

export default App
