import FaqItem from './FaqItem';

const faqData = [
    { number: '01', question: 'Will my data be lost during migration to the Netverse?', answer: 'At Netrix, we ensure the seamless migration of platforms. No data is lost during migration as we first ensure all essentials are backed up to the cloud' },
    { number: '02', question: "What is Net-Trix Solutions' approach to cybersecurity?", answer: "Net-Trix Solutions takes a client-centric approach to cybersecurity by leveraging partnerships with leading global experts, including Fortinet. We deliver advanced solutions such as SOC services, proactive penetration testing, and firewall setups, ensuring businesses have the protection they need to secure their digital assets." },
    { number: '03', question: 'What is the Net-Verse platform by Net-Trix Solutions?', answer: "The Net-Verse is a comprehensive ecosystem developed by Net-Trix Solutions to facilitate seamless project monitoring and management. Key features include: Real-time Site Monitoring: Utilizing GPS-enabled photo and video uploads. Progress Tracking: Stage-by-stage updates with delivery timelines. Comprehensive Reporting: Collection and management of reports throughout a project’s lifecycle." },
    { number: '04', question: 'Is Net-Trix Solutions licensed for data protection compliance services?', answer: 'Yes, Net-Trix Solutions is licensed by the Nigerian Data Protection Bureau to provide compliance audits, privacy assessments, and other data protection services, ensuring organizations meet regulatory standards like GDPR and CCPA.' },
    { number: '05', question: 'How does Net-Trix Solutions help clients focus on growth?', answer: 'Net-Trix Solutions takes the operational burden off its clients by delivering tailored IT and cybersecurity solutions. This allows businesses to concentrate on scaling and innovation while trusting us to handle their security, compliance, and infrastructure needs effectively.' },
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
