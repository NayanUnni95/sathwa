import React from "react";
import ScheduleClient from "./ScheduleClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Program Schedule | Sathwa '26",
    description: "Official timeline and schedule for Sathwa '26 main events.",
};

const SchedulePage = () => {
    return <ScheduleClient />;
};

export default SchedulePage;
