import React from 'react'
import Link from "next/link"
import LifeCards from './sub/LifeCards'
import { FaBrush } from "react-icons/fa"
const Life = () => {
  return (
    <section className="relative text-gray-900 dark:text-white">

      {/* <div className="absolute inset-0 bg-black/80"></div> */}
      <div className="z-10 text-white bg-[url('/digital.jpg')] bg-cover bg-center bg-no-repeat min-h-[30vh]">

        <h1 className="text-center pb-5 text-[40px]">Explore Opportunities</h1>
        <p className="text-center text-[18px]">Transform your brand with innovative digital solution that captivate and engage your audience</p>
      </div>

      <div className="border text-white bg-[#1A1A1A] p-6">
        <div className="flex items-center my-4">
          <FaBrush className='inline-block p-6 bg-[#1A1A1A] rounded' />
          <h1 className='ml-4'>Design</h1>
        </div>
        <p className='text-sm mb-4'>
          At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.
        </p>
        <Link className='block text-sm w-full p-4 text-center bg-[#262626]' href="#">Learn more</Link>
      </div>


      {/* <div className=' py-20 px-40 '>

        <div className="flex justify-center gap-10 items-center pt-10">
          <LifeCards color='bg-yellow-500' text='Graduates' link='' img="/congratulation.png" />
          <LifeCards color='bg-yellow-500' text='Students' link='' img='/student.png' />
          <LifeCards color='bg-yellow-500' text='Professionals' link='' img='/certificate.png' />
          <LifeCards color='bg-yellow-500' text='Location' link='' img='/guidance.png' />
        </div> */}
      {/* </div> */}

      {/* max-w-7xl mx-auto  py-16 px-6*/}
    </section>

  )
}

export default Life