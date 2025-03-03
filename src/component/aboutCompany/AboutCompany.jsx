
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Batch from "../batch/Batch"

export default function AboutSection() {

  const sections = [
    {
      id: "01",
      title: "Our History",
      content:
        "Founded in the heart of innovation, Ozeito began with a vision to bridge the gap between ideas and technology. Our journey started with a small team of passionate developers and has grown into a global force in digital transformation.",
    },
    {
      id: "02",
      title: "Our Mission",
      content:
        "To empower businesses through innovative technology solutions, delivering excellence in every line of code. We strive to transform complex challenges into elegant, efficient solutions that drive real-world impact.",
    },
    ,
    {
      id: "03",
      title: "Our vision",
      content:
        "To be a global leader in digital innovation, recognized for creating reliable and transformative solutions that elevate businesses and enrich user experiences. We strive to inspire progress and make technology accessible, seamless, and meaningful for everyone.",
    },
  ]

  return (
    <div className="min-h-screen bg-transparent text-white py-16 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">


        <Batch text="BENEFITS" />

        <h1 className="text-4xl md:text-4xl  mb-12 font-normal font-unbounded">About our Company</h1>

        <div className="lg:flex lg:gap-16">

          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="space-y-8 max-w-2xl font-sans">
              <p className="text-gray-400 text-xl leading-relaxed font-sans">
                Let's get acquainted! We're not just another tech company — we're a passionate team of innovators,
                creators, and problem-solvers who live and breathe technology. At Ozeito, we're on a mission to
                transform your ideas into reality, one line of code at a time!
              </p>

              <p className="text-gray-400 text-xl leading-relaxed">
                We're the dreamers who build apps that inspire, the designers who craft unforgettable experiences, and
                the engineers who push the boundaries of what's possible. Whether it's app development, AI/ML solutions,
                SaaS platforms, or UI/UX design, we believe that technology should be exciting, seamless, and above all,
                impactful.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                Let us help you turn your vision into something truly remarkable. Together, we'll create digital magic!
              </p>
            </div>
          </div>


          <div className="lg:w-1/2">
            <div className="space-y-4">

              {sections.map((section) => (

                <Accordion type="single" collapsible className="w-full border-b  border-gray-800 font-normal  " >
                  <AccordionItem value="item-1"  >
                    <AccordionTrigger className=" no-underline border border-white/10 hover:no-underline focus:no-underline flex items-center justify-between py-6 px-6 bg-white/10 hover:bg-white/20 rounded-3xl  hover:pl-9 hover:text-orange-500 duration-500 ">
                      <div className="flex items-center gap-4  font-light">
                        <span className=" text-sm text-white  ">{section.id} </span>
                        <span className="text-sm ">{section.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-8 font-sans text-gray-400 leading-relaxed text-base bg-white/10 border-x border-b border-t-0 border-white/10 rounded-b-3xl        ">
                      {section.content}
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}