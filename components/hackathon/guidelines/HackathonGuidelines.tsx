"use client";

import React from "react";
import "./HackathonGuidelines.css";

interface GuidelineItem {
    title: string;
    description: string;
}

const guidelines: GuidelineItem[] = [
    {
        title: "Team Composition",
        description: "All teams must consist of exactly 4 members."
    },
    {
        title: "Eligibility",
        description: "This event is strictly for students. Valid college ID cards must be presented during check-in."
    },
    {
        title: "Originality",
        description: "Projects must be built during the hackathon. Pre-existing projects are not permitted, though using open-source libraries and frameworks is encouraged."
    },
    {
        title: "Technical Requirements",
        description: "Participants must bring their own laptops, chargers, and any specific hardware they require. No API credits or hardware will be provided by the organizers."
    },
    {
        title: "Professionalism",
        description: "We maintain a zero-tolerance policy for misconduct. Participants are expected to behave professionally and treat mentors, organizers, and fellow hackers with respect."
    },
    {
        title: "Attendance",
        description: "Reporting time is strictly 9:00 AM on February 21st. Teams failing to report on time may forfeit their spot."
    },
    {
        title: "Overnight Stay",
        description: "KAIZEN is a 24-hour event. While we expect participants to work passionately through the night, dedicated resting areas will be provided for both boys and girls."
    }
];

const HackathonGuidelines = () => {
    return (
        <section className="hackathon-guidelines-section">
            <div className="guidelines-container">
                <h2 className="guidelines-title">
                    Guidelines &<br />
                    <span>Code of Conduct</span>
                </h2>

                <div className="guidelines-list">
                    {guidelines.map((guideline, index) => (
                        <div key={index} className="guideline-item">
                            <span className="guideline-number">{(index + 1).toString().padStart(2, '0')}</span>
                            <h3 className="guideline-title">{guideline.title}</h3>
                            <p className="guideline-description">{guideline.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HackathonGuidelines;
