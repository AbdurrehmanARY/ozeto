import React from 'react'

function Batch({text}) {
  return (
    <div className="flex items-center gap-4 mb-6">
          <div className="font-sans inline-flex items-center justify-center px-4 py-1 rounded-full text-orange-500 text-xs font-semibold bg-[#1A1A1A]">
            {text}
          </div>
        </div>
  )
}

export default Batch