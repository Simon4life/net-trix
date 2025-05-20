'use client';
import React from 'react'
import Card from './Card';
import { FaBrain, FaGlobe, FaLeaf, FaMagic } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const Explore = () => {
  return (
    <section>
      {/* section header */}

      <SectionHeader header='Explore Life at Net-trix Solution' text='Transform your brand with innovative digital solution that captivate and engage your audience' />
      <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">

        <Card header="Global Digital Services" Icon={FaGlobe} text={` Infosys is a global leader in next-generation digital services and consulting. With a workforce of over 300,000 people worldwide, we strive to amplify human potential and create the next opportunity for individuals, businesses, and communities alike.`} />

        <Card header="Cloud & AI Transformation" Icon={FaMagic} text={`With over four decades of expertise in managing the complex systems and operations of global enterprises, Infosys expertly guides clients through their digital transformations powered by cutting-edge cloud technologies and artificial intelligence.`} />


        <Card header="Innovation & Learning" Icon={FaBrain} text={`At the heart of Infosys' success lies a commitment to continuous learning and innovation. We cultivate an always-on learning environment by transferring digital skills, expertise, and breakthrough ideas through a vibrant innovation ecosystem.`} />

        <Card header="Sustainability & Inclusion" Icon={FaLeaf} text={`Infosys is deeply committed to being a well-governed, environmentally sustainable organization that nurtures diversity and inclusion. We foster a workplace where diverse talents thrive, innovation flourishes, and responsible governance guides our decisions.`} />
      </div>
    </section>
  )
}

export default Explore