import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export interface LifeCardsProps {
    color: string,
    link: string,
    text: string,
    img: string,
  }

const LifeCards = ({color, link, text, img}:LifeCardsProps) => {
  return (
    <div>
        <Link href={link} className='hover:bg-[#dddddd80] group'>
          <div className={`${color} w-[250px] h-[200px] p-5 relative`}>
              <p className="font-bold text-lg text-right text-black">{text}</p>
              <Image src={img} alt='explore img' width={150} height={100} className='bottom-0 left-0 absolute group-hover:bottom-4 group-hover:left-4 transition-all duration-300 ease-in-out' />
          </div>
        </Link>
    </div>
  )
}

export default LifeCards