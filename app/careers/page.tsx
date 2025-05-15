import React from 'react'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import { FaPen } from 'react-icons/fa';

const Page = () => {
    return (
        <section className='bg-[#1A1A1A] py-12 px-4 sm:px-8'>
            <SectionHeader header='Join us at Net-trix' text='Unlock your potential and join the team of innovators and problem solvers' />
            <div className=''>
                <article className='bg-[#1A1A1A] border-[0.5px] p-6 text-white border-[#262626]' >
                    <h2 className='text-3xl'>Welcome to SquareUp, </h2>
                    <h3 className='text-2xl mb-6'>where talent meets opportunity!</h3>
                    <p>At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us.</p>
                </article>
                <article className=''>
                    <div className='bg-[#1A1A1A] py-10 px-6 text-white border-[0.5px] border-[#262626]'>
                        <h2 className='text-4xl mb-6'>Current Openings</h2>
                        <p>We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions</p>
                    </div>


                    <div className='mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
                        <Card Icon={FaPen} header='UX Designer' text='Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.' link='#' />
                        <Card Icon={FaPen} header='UX Designer' text='Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.' link='#' />

                    </div>
                </article>
            </div>



        </section>
    )
}

export default Page