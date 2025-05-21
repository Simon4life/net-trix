"use client"
import { FaSearch, FaBriefcase, FaWrench } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { FaShield } from "react-icons/fa6";

const Services = () => {
    return (<>
        <SectionHeader text="Transform your brand with our innovative digital solutions that captivate and engage your audience." header="Our Services" />

        <section className="bg-[#1A1A1A] text-white px-8">

            <div className="border border-[#262626] px-8 py-6 max-w-7xl mx-auto">
                {/* Title and Description */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Engineering</h2>
                    <p className="text-[#E6E6E6] text-justify text-sm max-w-3xl leading-loose mb-6">
                        Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.
                    </p>
                    <button className="bg-[#262626] font-bold tracking-wider text-sm bold text-white border border-[#262626] px-4 py-2 rounded">
                        Our engineering services include:
                    </button>
                </div>

                <div className="border-[#262626]">

                    {/* Section Label */}
                    <h3 className="text-lg  border border-[#262626] font-semibold text-center md:text-justify text-gray-300 p-8">Cyber Security</h3>

                    {/* Service Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Card 1 */}
                        <div className="p-6 border border-[#262626]">
                            <div className="text-blue-400 text-3xl mb-4">
                                <FaShield />
                            </div>
                            <h6 className="font-semibold text-white mb-2">Security Audits & Assessments</h6>
                            <p className="text-gray-400 text-sm">
                                Vulnerability assessment
                            </p>
                            <p className="text-gray-400 text-sm">
                                Security posture evaluation
                            </p>
                            <p className="text-gray-400 text-sm">
                                Penetration testing
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 border border-[#262626]">
                            <div className="text-blue-400 text-3xl mb-4">
                                <FaSearch />
                            </div>
                            <h6 className="font-semibold text-white mb-2">Threat Detection & Monitoring</h6>
                            <p className="text-gray-400 text-sm">
                                Real-time security monitoring (SIEM integration)
                            </p>
                            <p className="text-gray-400 text-sm">
                                Anomaly and behavior-based detection
                            </p>
                            <p className="text-gray-400 text-sm">
                                Intrusion detection systems (IDS/IPS)
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 border border-[#262626]">
                            <div className="text-blue-400 text-3xl mb-4">
                                <FaWrench />
                            </div>
                            <h6 className="font-semibold text-white mb-2">Security Architecture & Implementation</h6>
                            <p className="text-gray-400 text-sm">
                                Network and cloud security design
                            </p>
                            <p className="text-gray-400 text-sm">
                                Secure software development lifecycle (SSDLC)
                            </p>
                            <p className="text-gray-400 text-sm">
                                Endpoint protection configuration
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="p-6 border border-[#262626]">
                            <div className="text-blue-400 text-3xl mb-4">
                                <FaBriefcase />
                            </div>
                            <h6 className="font-semibold text-white mb-2">Security Consulting & Compliance</h6>
                            <p className="text-gray-400 text-sm">
                                Policy and procedure development
                            </p>
                            <p className="text-gray-400 text-sm">
                                Security awareness training for staff


                            </p>
                            <p className="text-gray-400 text-sm">
                                Cyber insurance advisory
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>

    );
}


export default Services;