"use client";

import React from "react";
import { FiX, FiArrowRight } from "react-icons/fi";
import "./FashionShowModal.css";

interface FashionShowModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const guidelines = [
    "THERE SHOULD BE A MINIMUM OF 10 MEMBERS IN A TEAM AND MAXIMUM OF 20+1 SHOW STOPPER",
    "TIME LIMIT PER TEAM: 14 MINS (EMPTY TO EMPTY). ADDITIONAL 1 MIN, IF REQUIRED, WILL BE GIVEN FOR NARRATION ONLY.",
    "EXCEEDING TIME LIMIT WILL LEAD TO DISQUALIFICATION.",
    "TEAMS SHOULD CARRY THEIR TRACK ON PENDRIVE/AUX.",
    "TEAMS WILL BE JUDGED BASED ON COSTUMES, CHOREO, WALKING STANCE AND ATTITUDE.",
    "DECISION OF JUDGES WILL BE FINAL.",
    "OPEN THEME",
    {
        type: "note",
        text: "IF EXPECTED REGISTRATIONS ARE NOT MET, THE PROGRAM WILL BE CANCELED OR PRICEPOOL WILL BE ADJUSTED."
    }
];

const FashionShowModal: React.FC<FashionShowModalProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fs-modal-overlay ${isOpen ? "active" : ""}`} onClick={onClose}>
            <div className="fs-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="fs-modal-close" onClick={onClose}>
                    <FiX size={20} />
                </button>

                <div className="fs-modal-header">
                    <h2 className="fs-modal-title font-playfair">Guidelines & Rules</h2>
                    <div className="fs-modal-subtitle">Veloura '26</div>
                </div>

                <div className="fs-guidelines-list">
                    {guidelines.map((item, index) => (
                        <div key={index} className="fs-guideline-item">
                            <div className="fs-guideline-bullet" />
                            <p className="fs-guideline-text">
                                {typeof item === "string" ? (
                                    item
                                ) : (
                                    <>
                                        <span className="fs-guideline-note">NOTE : </span>
                                        {item.text}
                                    </>
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                <a
                    href="https://forms.gle/xsbjeh2ijw3ffYaM7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-register-btn"
                >
                    Register Now
                    <FiArrowRight size={18} />
                </a>
            </div>
        </div>
    );
};

export default FashionShowModal;
