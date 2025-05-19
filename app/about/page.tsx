"use client"
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import { FaBullseye, FaRegLightbulb } from 'react-icons/fa';
import Image from 'next/image';
import globeTech from "@/public/globe-tech.jpg"
const items = [
    {
        number: "01",
        title: "Design",
        description:
            "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency’s design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
    },
    {
        number: "02",
        title: "Engineering",
        description:
            "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. Within their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
    },
    {
        number: "03",
        title: "Project Management",
        description:
            "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp’s project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
    },
    {
        number: "04",
        title: "Collaboration",
        description:
            "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
    },
];

const AboutPage = () => {
    return (
        <section className="bg-[#1A1A1A]">
            <SectionHeader header='About Us' text='Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.' />
            <div className='px-6 py-8'>
                <div className="py-4 px-2 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <article className='text-white w-full md:w-1/2'>
                        <h1 className='mb-4 text-2xl'>About SquareUp</h1>
                        <p className='leading-loose text-justify text-sm mb-6'>At the heart of our mission is ensuring that your organization thrives. We focus on aligning the right processes, technology, and people, allowing you to reach your business goals effortlessly. We take pride in easing your workload by providing solutions that empower you to focus on growth. Our commitment revolves around clear communication and a client-centric approach to streamline infrastructure deployment.</p>
                    </article>
                    <Image src={globeTech} className='w-full md:w-1/2' alt='globe image' />
                </div>

            </div>
            {/* Mission and vission  */}
            <div className='flex flex-col md:flex-row items-center'>
                <Card Icon={FaBullseye} header='Our Misson' text={`At Net Trix, our mission is to offer a comprehensive end-to-end service that meets our clients' infrastructure needs. With a 'Can Do' attitude, our dedicated team is committed to addressing all client requirements. We actively seek to nurture strategic partnerships and relationships with both clients and suppliers, fostering long-term growth and stability for all.`} />
                <Card Icon={FaRegLightbulb} header='Our Misson' text={`At Net Trix, our mission is to offer a comprehensive end-to-end service that meets our clients' infrastructure needs. With a 'Can Do' attitude, our dedicated team is committed to addressing all client requirements. We actively seek to nurture strategic partnerships and relationships with both clients and suppliers, fostering long-term growth and stability for all.`} />
            </div>

            {/*  */}

            <section className="text-white ">
                <div className="">
                    <h2 className="px-4 py-6 text-3xl font-bold">Our Story</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {items.map((item) => (
                            <div
                                key={item.number}
                                className="border border-[#262626] p-6 bg-neutral-900"
                            >
                                <div className="flex items-center gap-4">
                                    <h3 className="text-6xl font-bold text-blue-400 mb-2">
                                        {item.number}
                                    </h3>
                                    <h4 className="text-xl w-full border-b pb-2 border-[#262626] font-semibold text-white mb-3">
                                        {item.title}
                                    </h4>
                                </div>

                                <p className="leading-loose text-justify text-[#98989A] text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </section>
    )
}

export default AboutPage