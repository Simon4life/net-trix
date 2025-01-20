import Link from 'next/link'
import React from 'react'

export interface ContactLinkProps {
    heading: string
  }

const ContactLink = ({heading}:ContactLinkProps) => {
  return (
    <div className="bg-cover bg-fixed bg-[url('/double2.png')]">
        <div className='py-32 px-4 bg-[#00050073] text-center'>
            <h1 className="text-[40px] text-white pb-10">{heading}</h1>
            <Link href={'/contact'} className='bg-white px-6 py-2 text-[#C9A50A] hover:text-white hover:bg-[#C9A50A]'>Contact Us</Link>
        </div>
    </div>
  )
}

export default ContactLink