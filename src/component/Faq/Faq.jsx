import React from 'react'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can you help with scaling an existing app or website?",
    answer:
      "Yes! We specialize in optimizing and scaling applications to handle higher traffic and improved performance.",
  },
  {
    question: "What’s your process for starting a new project?",
    answer:
      "Our process starts with a discovery call, followed by research, planning, design, development, and testing.",
  },
  {
    question: "Do you assist with integrating third-party tools or APIs?",
    answer:
      "Absolutely! We have experience integrating various APIs and third-party tools to enhance your platform.",
  },

  {
    question: "What is your experience with AI/ML projects?",
    answer:
      "We’ve developed AI-driven solutions like recommendation systems, chatbots, and predictive analytics for diverse industries.",
  },{
    question: "Do you offer only desogn-only services?",
    answer:
      "Yes, our UI/UX team can provide standalone design services to elevate your product's user experience..",
  },{
    question: "What technologies do you specialize in",
    answer:
      "Our expertise includes Python, Swift, Kotlin, React, Laravel, TensorFlow, and other modern frameworks and tools.",
  },{
    question: "Can you develop Saas paltform from scratch",
    answer:
      "Yes, we specialize in building scalable, custom SaaS platforms tailored to your business model.",
  },{
    question: "Do you ensure transparency during project?",
    answer:
      "We provide regular updates, milestones, and open communication to keep you informed every step of the way.",
  },{
    question: "Do you offer protyping or MVP development?",
    answer:
      "Yes, we can create prototypes or MVPs to validate your ideas before full-scale development.",
  },{
    question: "what is your pricing model?",
    answer:
      "We offer flexible pricing, including fixed rates, hourly models, and custom packages based on your project’s needs.",
  },

];

function Faq() {
  return (
    <>
      <div className="bg-black text-white py-16 px-6 my-38">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-sans inline-flex items-center justify-center px-4 py-1 rounded-full text-orange-500 text-xs font-semibold bg-[#1A1A1A]">
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl font-normal mt-4">
            Got Questions? <br /> We've Got Answers!
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-10 space-y-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion type="single" collapsible className="w-full border-b border-gray-800" key={index}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="no-underline hover:no-underline flex items-center justify-between py-6 px-6 bg-[#111]/40 hover:bg-[#1A1A1A] rounded-2xl hover:ml-3 duration-300">
                    {/* <div className="flex items-center gap-4"> */}
                      <span className="text-base font-light ">{faq.question}</span>
                    {/* </div> */}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans px-6 py-8 text-gray-400 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq