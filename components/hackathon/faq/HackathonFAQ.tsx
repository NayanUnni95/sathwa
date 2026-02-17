"use client";

import React, { useState } from "react";
import { FiChevronDown, FiCopy } from "react-icons/fi";
import "./HackathonFAQ.css";

interface Coordinator {
    name: string;
    phone: string;
}

const coordinators: Coordinator[] = [
    { name: "Dany", phone: "+91  9526643146" },
    { name: "Rahul", phone: "+91  9446447169" },
    { name: "Aman Xavier", phone: "+91  9495401959" },
];

interface FAQItem {
    question: string;
    answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
    {
        question: "How does the registration process work?",
        answer: (
            <>
                <p>Registration is now a single-step process. Just click the link to provide your team name, select your track, and enter details for all four members.
Complete a total payment of ₹1200 (₹300 per person) via the provided VPA. Don't forget to apply your promo code if you have one! Once submitted, your team is ready to go.</p>
                {/* <p><strong>Phase 1:</strong> Free registration where you submit your team profile, previous projects, and the specific Agentic AI topic you plan to tackle.</p> */}
                {/* <p><strong>Phase 2:</strong> If your team is shortlisted based on innovation and feasibility, you will receive a personal email. You will then complete a final registration and pay a fee of ₹300 per person to receive your entry ticket.</p> */}
            </>
        )
    },
    {
        question: "What should we bring?",
        answer: "Your laptop, chargers, and any personal essentials for an overnight stay."
    },
    {
        question: "Will food be provided?",
        answer: "Yes! Full catering (meals and refreshments) will be provided to all registered participants throughout the event to keep your brain fueled."
    },
    {
        question: "Is there a sleeping area?",
        answer: "Yes, we provide separate resting zones for boys and girls if you need to take a quick power nap during the 24-hour sprint."
    }
];

const HackathonFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section className="hackathon-faq-section">
            <div className="faq-container">
                <h2 className="faq-title">
                    <span className="faq-title-label">Frequently Asked Questions</span>
                    <span className="faq-title-abbr">(FAQ)</span>
                </h2>

                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="faq-number">{String(index + 1).padStart(2, '0')}.</span>
                                <span className="faq-question-text">{faq.question}</span>
                                <div className={`faq-icon-wrapper ${openIndex === index ? 'active' : ''}`}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 6h3v3" />
                                        <path d="M9 18H6v-3" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`faq-answer ${openIndex === index ? 'expanded' : ''}`}>
                                <div className="faq-answer-content">
                                    {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="coordinators-section">
                    <h2 className="coordinators-title">Coordinators</h2>
                    <div className="coordinators-grid">
                        {coordinators.map((coord, index) => (
                            <a
                                key={index}
                                href={`tel:${coord.phone}`}
                                className="coordinator-card"
                            >
                                <div className="coord-info">
                                    <h3 className="coord-name">{coord.name}</h3>
                                    <span className="coord-phone">{coord.phone}</span>
                                </div>
                                <button
                                    className="copy-phone-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        copyToClipboard(coord.phone, index);
                                    }}
                                >
                                    <FiCopy />
                                    <span>{copiedIndex === index ? "Copied!" : "copy phone number"}</span>
                                </button>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HackathonFAQ;
