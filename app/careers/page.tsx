"use client"
import React from 'react'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import { FaPaintBrush, FaClipboardList, FaBullhorn } from "react-icons/fa";

const jobs = [
    {
        title: "UI Designer",
        description:
            "Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.",
        icon: FaPaintBrush
    },
    {
        title: "UX Designer",
        description:
            "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.",
        icon: FaClipboardList,
    },
    {
        title: "Design Head",
        description:
            "Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.",
        icon: FaBullhorn
    },
];
const Page = () => {
    return (
        <section className="bg-[#1A1A1A] text-[#E6E6E6]">
            <SectionHeader text={`We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you' re a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.`} header='Join Us' />
            <div className="border-[0.5px] border-[#262626] p-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl text-white font-semibold mb-2">Current Openings</h2>
                    <p className=" text-sm">
                        We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you’re a designer, engineer, project manager, or have skills that align with our agency’s mission, we encourage you to explore our open positions.
                    </p>
                </div>

                {/* Job Cards */}
                <div>
                    <h3 className="text-xl mb-4">Design Job Openings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {jobs.map((job, idx) => (
                            <Card header={job.title} key={idx} text={job.description} Icon={job.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page