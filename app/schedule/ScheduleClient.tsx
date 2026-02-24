"use client";

import React from "react";
import { scheduleData } from "@/data/schedule";
import "./Schedule.css";

const ScheduleClient = () => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div className="schedule-container">
            <header className="schedule-header">
                <h1 className="schedule-title reveal">PROGRAM SCHEDULE</h1>
                <p className="schedule-subtitle reveal reveal-1">
                    SATHWA'26 • MAIN EVENTS TIMELINE
                </p>
            </header>

            <div className="schedule-timeline">
                {scheduleData.map((day, dayIndex) => (
                    <section key={dayIndex} className="day-section">
                        <div className={`day-header reveal reveal-${(dayIndex % 3) + 1}`}>
                            <span className="day-number">{day.day}</span>
                            <span className="day-date">{day.date}</span>
                        </div>

                        <div className="events-list">
                            {day.events.map((event, eventIndex) => (
                                <div
                                    key={eventIndex}
                                    className={`event-item reveal`}
                                    style={{ animationDelay: `${(eventIndex * 0.1) + 0.5}s` }}
                                >
                                    <div
                                        className="event-card"
                                        onMouseMove={handleMouseMove}
                                    >
                                        <div className="card-bg-number">{(eventIndex + 1).toString().padStart(2, '0')}</div>
                                        <div className="card-accent" />
                                        <div className="event-info">
                                            <h3 className="event-name">{event.name}</h3>
                                            <div className="event-meta">
                                                {event.dept && (
                                                    <div className="meta-item">
                                                        <span className="meta-label">DEPT</span>
                                                        <span className="meta-value">{event.dept}</span>
                                                    </div>
                                                )}
                                                {event.venue && (
                                                    <div className="meta-item">
                                                        <span className="meta-label">VENUE</span>
                                                        <span className="meta-value">{event.venue}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="event-time-wrap">
                                            <div className="event-time">{event.time}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ScheduleClient;
