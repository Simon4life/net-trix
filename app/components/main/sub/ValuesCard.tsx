import React from 'react'

export interface ValuesCardsProps {
    head: string,
    text: string,
  }

const ValuesCards = ({text, head}:ValuesCardsProps) => {
  return (
    <div>
        <div className='h-[250px] p-5 border-r-8 shadow-xl shadow-[#ddd]'>
            <h1 className="text-xl font-bold text-black mb-2">{head}</h1>
            <p className="font-light text-md text-black">{text}</p>
        </div>
    </div>
  )
}

export default ValuesCards