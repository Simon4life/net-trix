import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import { FaBullseye, FaRegLightbulb } from 'react-icons/fa'

const AboutPage = () => {
    return (
        <section className="bg-[#1A1A1A]">
            <SectionHeader header='About Us' text='Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.' />
            <div className='px-6 py-8'>
                <article className='text-white'>
                    <h1 className='mb-4 text-2xl'>About SquareUp</h1>
                    <p className='leading-loose mb-6 text-justify'>SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
                </article>
            </div>
            {/* Mission and vission  */}
            <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))'>
                <Card Icon={FaBullseye} header='Our Misson' text={`At Net Trix, our mission is to offer a comprehensive end-to-end service that meets our clients' infrastructure needs. With a 'Can Do' attitude, our dedicated team is committed to addressing all client requirements. We actively seek to nurture strategic partnerships and relationships with both clients and suppliers, fostering long-term growth and stability for all.`} />
                <Card Icon={FaRegLightbulb} header='Our Misson' text={`At Net Trix, our mission is to offer a comprehensive end-to-end service that meets our clients' infrastructure needs. With a 'Can Do' attitude, our dedicated team is committed to addressing all client requirements. We actively seek to nurture strategic partnerships and relationships with both clients and suppliers, fostering long-term growth and stability for all.`} />
            </div>

        </section>
    )
}

export default AboutPage