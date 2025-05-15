'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: 'What services does your company offer?',
        answer: 'We offer a range of digital and IT solutions including software development, cloud consulting, and infrastructure management.',
    },
    {
        question: 'How can I contact support?',
        answer: 'You can reach out via our Contact Us page or email us directly at support@example.com.',
    },
    {
        question: 'Do you provide custom software solutions?',
        answer: 'Yes, we specialize in tailoring digital solutions to meet unique business requirements.',
    },
]

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            {/* <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2> */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-300 rounded-md">
                        <button
                            onClick={() => toggle(index)}
                            className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 focus:outline-none"
                        >
                            {faq.question}
                            <FaChevronDown
                                className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
