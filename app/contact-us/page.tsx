// /app/contact/page.tsx
'use client'

import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import FAQAccordion from '../components/FaqAccordion'
import { FaPhone, FaMailBulk, FaLocationArrow } from 'react-icons/fa'

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', form)
        // Integrate with API or service like EmailJS / Formspree
    }

    return (
        <main className="min-h-screen text-white bg-[#1A1A1A] px-4 sm:px-8">
            <div className='border-[0.5px] border-[#262626]'>

                {/* section header */}
                <SectionHeader header='Contact Us' text='Get in touch with us today and let us help you with any questions or inquiries you may have' />

                {/* contact form */}
                <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center border border-[#262626] bg-[#1A1A1A] py-6">
                    {/* Email */}
                    <div className="flex items-center gap-2 bg-[#262626] text-white px-4 py-2 rounded-md">
                        <FaMailBulk className="text-blue-400 w-5 h-5" />
                        <span className="text-sm sm:text-base font-medium">hello@squareup.com</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2 bg-[#262626] text-white px-4 py-2 rounded-md">
                        <FaPhone className="text-blue-400 w-5 h-5" />
                        <span className="text-sm sm:text-base font-medium">+91 91813 23 2309</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 bg-[#262626] text-white px-4 py-2 rounded-md">
                        <FaLocationArrow className="text-blue-400 w-5 h-5" />
                        <span className="text-sm sm:text-base font-medium">Get Location</span>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto border-[0.5px] border-[#262626] p-8">

                    <h1 className="text-3xl font-bold my-8 text-white">Contact Us</h1>
                    <form onSubmit={handleSubmit} className=" space-y-6">
                        <div className='p-6 border border-[#333333] rounded-md  bg-[#262626] '>
                            <label className="block text-white font-medium mb-2">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder='Type Here'
                                className="w-full tracking-wide px-0 py-2 bg-[#262626] border-b border-[#333333] focus:outline-none"
                            />
                        </div>

                        {/* Email input  */}
                        <div className='p-6 border border-[#333333] rounded-md  bg-[#262626] '>
                            <label className="block text-white font-medium mb-2">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder='Type Here'
                                className="w-full tracking-wide px-0 py-2 bg-[#262626] border-b border-[#333333] focus:outline-none"
                            />
                        </div>

                        {/* Message input */}
                        <div className='p-6 border border-[#333333] rounded-md  bg-[#262626] '>
                            <label className="block text-white font-medium mb-2">Your Message</label>
                            <textarea
                                placeholder="Type your message here..."
                                className="w-full tracking-wide px-0 py-2 bg-[#262626] border-b border-[#333333]"
                            />
                        </div>



                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <SectionHeader header='Frequently Asked Questions' text="Still you have any questions? Contact our Team via hello@squareup.com" />
            <FAQAccordion />
        </main>
    )
}
