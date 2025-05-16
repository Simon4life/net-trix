import FaqItem from './FaqItem';

const faqData = [
    { number: '01', question: 'What services does SquareUp provide?', answer: 'SquareUp offers a range of services including user experience design, web development, mobile apps, branding, and more.' },
    { number: '02', question: 'How can SquareUp help my business?', answer: 'We help businesses by crafting tailored software solutions and user-centered design.' },
    { number: '03', question: 'What industries does SquareUp work with?', answer: 'We work with startups, enterprises, and everything in between across various industries.' },
    { number: '04', question: 'How long does it take to complete a project with SquareUp?', answer: 'Project timelines vary based on scope, but we aim for speed and efficiency.' },
    { number: '05', question: 'Do you offer ongoing support and maintenance after the project is completed?', answer: 'Yes, we provide ongoing support and maintenance packages.' },
    { number: '06', question: 'Can you work with existing design or development frameworks?', answer: 'Absolutely! We integrate seamlessly with your current tools and frameworks.' },
    { number: '07', question: 'How involved will I be in the project development process?', answer: 'You’ll be a key collaborator through regular feedback cycles and check-ins.' },
    { number: '08', question: 'Can you help with website or app maintenance and updates?', answer: 'Yes, we offer scalable maintenance plans for websites and applications.' }
];

export default function FaqSection() {
    return (
        <div className="bg-[#1A1A1A] border border-[#262626] text-white px-6 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqData.map((faq, idx) => (
                    <FaqItem key={idx} number={faq.number} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}
