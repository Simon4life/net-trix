'use client'

import React from 'react'
import { Inria_Sans } from 'next/font/google'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const inria_sans = Inria_Sans({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    style: ['normal', 'italic']
   })
 


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <div  className=''>
        
        <Slider {...settings} className='h-screen overflow-x-hidden'>
          <div className='bg-[url("/digital.jpg")] h-screen bg-cover text-white'>
            <div className="bg-[#00000080] h-full px-40 pt-40">
              <h1 className="text-[60px] pb-10 flex items-end w-2/3 ">Achieve Your Business Goals with Tailored Digital Solutions That Work.</h1>
              <Link href='/services' className={`${inria_sans.className} antialiased px-10 py-2 outline-none border-white border-2 hover:text-[#C9A50A] text-white text-[20px]`}>Check our Services</Link>

            </div>
          </div>
          <div className='bg-[url("/slide2.jpg")] bg-top h-screen bg-cover text-white'>
            <div className="bg-[#00000080] h-full px-40 pt-40">
              <h1 className="text-[60px] pb-10 flex items-end w-2/3 ">Drive Your Business Forward with Custom Digital Solutions That Deliver Results.</h1>
              <Link href='/services' className={`${inria_sans.className} antialiased px-10 py-2 outline-none border-white border-2 hover:text-[#C9A50A] text-white text-[20px]`}>Check our Services</Link>

            </div>
          </div>
        </Slider>
    </div>
  )
}

export default Hero