"use"
import React from 'react'
import { motion } from "framer-motion"
interface SectionHeader {
    text: string
    header: string
}

const SectionHeader = ({ text, header, }: SectionHeader) => {

    return (
        <div className={`relative bg-[url('/futuristic-lines.jpg')] text-white bg-cover bg-center bg-no-repeat min-h-[50vh]`}>
            <div className="absolute z-10 inset-0 bg-black/80"></div>
            <motion.div initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }} className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                <h1 className="text-center z-20 text-white mb-4 text-4xl">{header}</h1>
                <p className="max-w-prose text-center leading-relaxed tracking-wide font-light">{text}</p>
            </motion.div>
        </div>
    )
}

export default SectionHeader