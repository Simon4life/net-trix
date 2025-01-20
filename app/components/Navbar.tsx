'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenuAltRight, BiXCircle } from "react-icons/bi";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div>
      <div className='w-screen bg-[#C9A50A] fixed z-50'>
        <div className="flex justify-center items-center text-white py-5">
            <div className="flex justify-between items-center w-[70%]">
                <Link href={'/'}><Image src={'/logo.png'} alt='logo' width={87} height={57}/></Link>
                <div className="flex justify-between items-center">
                  <ul className="md:flex font-[700] text-[15px] gap-10 hidden pr-10">
                  <Link href={'/jobs'}><li className="hover:text-[#F8C301]">Jobs</li></Link>
                      <Link href={'/about'}><li className="hover:text-[#F8C301]">About Us</li></Link>
                      <Link href={'/contact'}><li className="hover:text-[#F8C301]">Apply now</li></Link>
                  </ul>
                  <Link href={''} className='hidden md:block'><Image src={'/globe.png'} alt='globe' width={54} height={46}/></Link>
                </div>
                <BiMenuAltRight className='text-[30px] md:hidden' onClick={handleClick} />
            </div>
        </div>
      </div>
      <div className={isActive ? ' fixed w-full z-50' : 'hidden'}>
            <div className="flex justify-center items-center text-white py-5 bg-[#27592D]">
              <div className="flex justify-between items-center w-[70%]">
                <Link href={'/'}><Image src={'/logo.png'} alt='logo' width={87} height={57}/></Link>
                <BiXCircle className='text-[30px] md:hidden text-right' onClick={handleClick}/>
              </div>
            </div>
            <div className="flex justify-center items-center h-screen ">
              
              <div className="w-[20%] h-full " onClick={handleClick}></div>
              <div className="w-[80%] py-5 px-10 bg-[#27592D] text-white h-full">
                <ul className="text-[30px] text-right pt-10">
                      <Link href={'/about'}><li className="hover:text-[#F8C301] py-5 border-b-4 border-[#8cf798d0] pr-5">About Us</li></Link>
                      <Link href={'/services'}><li className="hover:text-[#F8C301] py-5 border-b-4 border-[#8cf798d0] pr-5">Services</li></Link>
                      <Link href={'/contact'}><li className="hover:text-[#F8C301] py-5 border-b-4 border-[#8cf798d0] pr-5">Contact Us</li></Link>
                  </ul>
                  <Link href={''} className='flex justify-end'><Image src={'/globe.png'} className='mt-20' alt='globe' width={54} height={46}/></Link>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Navbar