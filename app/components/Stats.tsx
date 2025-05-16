"use client"
import React from 'react'
import CountUp from 'react-countup';
import { motion } from "framer-motion"
const stats = [
    { label: "Satisfied Customers", value: 1200 },
    { label: "Merchant Customer", value: 350 },
    { label: "Completed Projects", value: 56 },
];

const Stat = () => {
    return (
        <section className="bg-[#1A1A1A] text-white py-16 px-6">
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div key={index}>
                        <h2 className="text-4xl text-[#E6E6E6] font-bold mb-2">
                            <CountUp end={stat.value} duration={4} />
                        </h2>
                        <p className="text-lg">{stat.label}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}

export default Stat