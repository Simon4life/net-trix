'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FaqItemProps = {
    number: string;
    question: string;
    answer: string;
};

export default function FaqItem({ number, question, answer }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`p-4 border-b border-gray-700 cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
            <div className="flex justify-between items-center">
                <div className={`text-sm font-medium ${isOpen ? 'text-blue-600' : 'text-white'}`}>
                    <span className="mr-2 text-gray-500">{number}</span>
                    {question}
                </div>
                <div className="text-white text-lg">
                    {isOpen ? '×' : '+'}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mt-3 text-gray-400 text-sm pl-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
