"use client"
import React from 'react'
import CountUp from 'react-countup';
const stats = [
    { label: "Satisfied Customers", value: 1200 },
    { label: "Merchant Customer", value: 350 },
    { label: "Completed Projects", value: 56 },
];

const Stat = () => {
    return (
        <section className="bg-[#1A1A1A] text-white py-16 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div key={index}>
                        <h2 className="text-4xl text-[#E6E6E6] font-bold mb-2">
                            <CountUp end={stat.value} duration={4} />
                        </h2>
                        <p className="text-lg">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stat