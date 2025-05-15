import React from 'react'
import Link from "next/link"
import LifeCards from './sub/LifeCards'
import { FaBrush } from "react-icons/fa"
import SectionHeader from '../SectionHeader'
import Card from '../Card'
const Life = () => {
  return (
    <section className="relative text-gray-900 dark:text-white">

      <SectionHeader header="Explore Opportunities" text='Transform your brand with innovative digital solution that captivate and engage your audience' />

      <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        <Card header="Design" Icon={FaBrush} link='#' text={`At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.`} />

        <Card header="Design" Icon={FaBrush} link='#' text={`At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.`} />

        <Card header="Design" Icon={FaBrush} link='#' text={`At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.`} />

        <Card header="Design" Icon={FaBrush} link='#' text={`At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.`} />

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