'use client';
import React from 'react'
import Card from '../Card';
import { FaBrush } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';

const Explore = () => {
  return (
    <section>
      {/* section header */}

      <SectionHeader header='Explore Life at Net-trix Solution' text='Transform your brand with innovative digital solution that captivate and engage your audience' />
      <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">

        <Card header="Global Digital Services" Icon={FaBrush} text={` Infosys is a global leader in next-generation digital services and consulting. With a workforce of over 300,000 people worldwide, we strive to amplify human potential and create the next opportunity for individuals, businesses, and communities alike. Our reach spans more than 56 countries, enabling clients across the globe to successfully navigate their digital transformation journeys with confidence and innovation.`} />

        <Card header="Cloud & AI Transformation" Icon={FaBrush} text={`With over four decades of expertise in managing the complex systems and operations of global enterprises, Infosys expertly guides clients through their digital transformations powered by cutting-edge cloud technologies and artificial intelligence. We enable organizations to build an AI-first core, empower businesses to operate with agile digital solutions at scale, and foster continuous improvement by leveraging data-driven insights and innovative tools.`} />


        <Card header="Innovation & Learning" Icon={FaBrush} text={`At the heart of Infosys’ success lies a commitment to continuous learning and innovation. We cultivate an always-on learning environment by transferring digital skills, expertise, and breakthrough ideas through a vibrant innovation ecosystem. This dedication ensures our clients remain competitive and ready to embrace emerging technologies, maintaining agility and growth in a rapidly evolving digital landscape.`} />

        <Card header="Sustainability & Inclusion" Icon={FaBrush} text={`Infosys is deeply committed to being a well-governed, environmentally sustainable organization that nurtures diversity and inclusion. We foster a workplace where diverse talents thrive, innovation flourishes, and responsible governance guides our decisions. Our approach drives positive impact not only within the company but also in the broader communities we serve, aligning business goals with sustainable development.`} />
      </div>
    </section>
  )
}

export default Explore