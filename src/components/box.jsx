import { useState } from "react"

export default function BoxTransition() {
  const [expandedStep, setExpandedStep] = useState(null)

  const expandStep = (step) => {
    setExpandedStep(step)
  }

  const collapseStep = () => {
    setExpandedStep(null)
  }

  return (
    <>
      <div className="main_agency_content">
        <div className="visible flex flex-wrap h-auto">
          <div
            className={`grayscale-100 transition-all duration-700 ease-in-out ${
              expandedStep === 1 ? "hover:grayscale-0 w-[77%]" : "w-[33%]"
            } p-2`}
            onMouseEnter={() => expandStep(1)}
            onMouseLeave={collapseStep}
          >
            <div className="w-full h-95">
              <img
               
                className="w-full h-full object-cover rounded-4xl"
                alt=""
                src="https://ozeito.com/asset/img/agency/age_2.jpg"
              />
            </div>
          </div>
          <div
            className={`transition-all duration-700 grayscale-0 ease-in-out ${
              expandedStep === 1 ? "w-[23%]" : "w-[67%]"
            } p-2`}
          >
            <div className="w-full h-95">
              <img
                className="rounded-4xl w-full h-full object-cover"
                alt=""
                src="https://ozeito.com/asset/img/agency/age_2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}