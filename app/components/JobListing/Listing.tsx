import React from 'react'

export interface ListingProps {
  title: string,
  description: string,
  link: string,
  
}

function Listing({ title, description, link }:ListingProps) {
  return (
    <div className='border border-white text-white p-3 rounded-lg'>
      <h2 className="text-2xl">{title}</h2>
      <div className="text-base py-2">
        {description}
      </div>
      <a className='bg-[#C9A50A] px-3 py-2 text-black' href={link}>Visit Job Site</a>
    </div>
  )
}

export default Listing