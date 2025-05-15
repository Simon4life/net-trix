import React from 'react'
import Link from 'next/link';

interface CardProps {
    header: string
    link?: string
    text: string
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const Card = ({ header, link, text, Icon }: CardProps) => {
    return (
        <div className="border-[0.5px] border-[#262626] text-white bg-[#1A1A1A] p-8">
            <div className="flex items-center my-4">
                <span className='inline-block p-6  bg-[#262626] rounded-md'>
                    <Icon />
                </span>

                <h2 className='ml-4 text-xl font-bold'>{header}</h2>
            </div>
            <p className='text-sm leading-relaxed my-6'>
                {text}
            </p>
            {link ? <Link className='block text-sm w-full p-4 text-center bg-[#262626] rounded' href="#">Learn more</Link> : null}
        </div>
    )
}

export default Card