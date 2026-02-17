"use client";

import React from "react";
import "./HackathonTracks.css";

interface Track {
    category: string;
    number: string;
    title: string;
    problemStatement: string;
    challengeQuestion: string;
    expectedOutcomes: string[];
}

const tracks: Track[] = [
    {
        category: "FINOPS & COST OPTIMIZATION",
        number: "01",
        title: "Idle Resource Auto-Scheduler",
        problemStatement:
            "Cloud teams waste money running idle dev/test VMs during off-hours. Build a system that detects underutilized resources and proposes/executes shutdown schedules to cut costs.",
        challengeQuestion:
            "How can you identify idle resources, create automatic shutdown schedules, and prove monthly cost savings?",
        expectedOutcomes: [
            "Resource dashboard showing idle detection + cost metrics",
            "Scheduling UI with preset shutdown/startup times",
            "Simulated action log proving savings estimate",
        ],
    },
    {
        category: "REVOPS & LEAD MANAGEMENT",
        number: "02",
        title: "Instant Lead Triage & Sales Handoff",
        problemStatement:
            "Sales teams lose deals when inbound leads sit in a queue too long. Build an AI agent that scores, routes, and drafts personalized outreach for every new lead in real time.",
        challengeQuestion:
            "How can you instantly qualify inbound leads, route them to the right rep, and draft a personalized first-touch message?",
        expectedOutcomes: [
            "Lead scoring engine with configurable criteria",
            "Auto-routing logic matching leads to sales reps",
            "AI-generated personalized outreach drafts",
        ],
    },
    {
        category: "ENTERPRISE PRODUCTIVITY & AUTOMATION",
        number: "03",
        title: "Support Ticket Classifier & Escalation",
        problemStatement:
            "Support desks drown in unstructured tickets. Build an AI agent that classifies incoming tickets by urgency and topic, then auto-escalates critical issues to the right team.",
        challengeQuestion:
            "How can you classify support tickets, detect urgency, and auto-escalate critical issues without human intervention?",
        expectedOutcomes: [
            "Multi-label ticket classifier with confidence scores",
            "Escalation rules engine with team routing",
            "Dashboard showing classification accuracy and response times",
        ],
    },
    {
        category: "SOCIAL IMPACT & ACCESSIBILTY",
        number: "04",
        title: "Idle Resource Auto-Scheduler",
        problemStatement:
            "Cloud teams waste money running idle dev/test VMs during off-hours. Build a system that detects underutilized resources and proposes/executes shutdown schedules to cut costs.",
        challengeQuestion:
            "How can you identify idle resources, create automatic shutdown schedules, and prove monthly cost savings?",
        expectedOutcomes: [
            "Resource dashboard showing idle detection + cost metrics",
            "Scheduling UI with preset shutdown/startup times",
            "Simulated action log proving savings estimate",
        ],
    },
];

const HackathonTracks = () => {
    return (
        <section className="hackathon-tracks-section">
            <div className="tracks-container">
                {/* Section Title */}
                <div className="tracks-header">
                    <h2 className="tracks-title">
                        <span className="title-kaizen">Kaizen</span>
                        <span className="title-year ml-3">&rsquo;26</span>
                        <span className="title-tracks"> Tracks</span>
                    </h2>
                    {/* <div className="tracks-subtitle-pill">
                        <span>
                            Open Innovations Based On{" "}
                            <span className="pill-highlight">Agentic AI</span>{" "}
                            Are Welcome
                        </span>
                    </div> */}
                </div>

                {/* Track Cards Grid */}
                <div className="tracks-grid">
                    {tracks.map((track, index) => (
                        <div
                            className="track-card-wrapper"
                            key={index}
                        >
                            {/* Folder tab (the small notch at top-left) */}
                            <div className="folder-tab"></div>
                            {/* Main card body */}
                            <div className="track-card">
                                <div className="track-card-top">
                                    <span className="track-category">
                                        {' '}
                                    </span>
                                    <span className="track-number">
                                        {track.number}
                                    </span>
                                </div>
                                <div className="track-card-bottom">
                                    <h3 className="track-title">
                                        {track.category}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HackathonTracks;
