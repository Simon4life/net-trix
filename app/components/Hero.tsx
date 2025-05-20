'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MotionLink = motion(Link)



const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] bg-[url('/digital.jpg')] bg-cover  bg-center bg-no-repeat w-full flex items-center justify-center">

      {/* <!-- Overlay --> */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* <!-- Content --> */}
      <div className="relative  z-10 text-center text-white px-6 max-w-3xl">
        {/* <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-snug">
          Achieve Your Business Goals with Tailored Digital Solutions That Work.
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Build beautiful and responsive UIs faster with Tailwind CSS in Next.js.
        </p>
        <Link href='/services' className={`${inria_sans.className} antialiased px-10 py-2 outline-none border-white border-2 hover:text-[#C9A50A] text-white text-[20px]`}>Check our Services</Link> */}

        <h1 className="text-4xl sm:text-5xl font-bold m-0 mb-4 leading-snug animate-slideUp">
          A Digital Production Studio that will work
        </h1>
        <div className='bg-[#262626] p-4 rounded place-items-center text-center mb-4'>
          <p className="text-md text-[#98989A] mb-0 animate-slideUp">
            For startup, Enterprise leaders, Media & Publishers and Social good.
          </p>
        </div>


        <MotionLink href="/services"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg"
        >
          Get Started
        </MotionLink>

        <MotionLink href="/contact"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl inline-block ml-4 shadow-md"
        >
          Learn More
        </MotionLink>
        {/* Our Works</Link>
        <Link href='/services' className='px-5 py-3 bg-[#3B82F6] rounded inline-block ml-5'>Our Works</Link> */}
        {/* <Link href='/services' className={`${inria_sans.className} antialiased px-10 py-2 outline-none border-white border-2 hover:text-[#C9A50A] text-white text-[20px]`}>Check our Services</Link> */}

      </div>
    </section>

  )
}

export default Hero