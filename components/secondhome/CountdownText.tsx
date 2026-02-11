"use client";

import { useEffect, useState } from "react";

interface CountdownTextProps {
  targetDate?: string | Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownText({
  targetDate = "2026-02-26T00:00:00",
}: CountdownTextProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      {/* Days */}
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-bold text-[#E3DDC1] font-mono tracking-wider">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-xs md:text-sm text-[#E3DDC1]/60 uppercase tracking-widest mt-1 md:mt-2">
          Days
        </div>
      </div>

      <div className="text-3xl md:text-5xl text-[#E3DDC1]/40 font-bold">:</div>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-bold text-[#E3DDC1] font-mono tracking-wider">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-xs md:text-sm text-[#E3DDC1]/60 uppercase tracking-widest mt-1 md:mt-2">
          Hours
        </div>
      </div>

      <div className="text-3xl md:text-5xl text-[#E3DDC1]/40 font-bold">:</div>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-bold text-[#E3DDC1] font-mono tracking-wider">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-xs md:text-sm text-[#E3DDC1]/60 uppercase tracking-widest mt-1 md:mt-2">
          Minutes
        </div>
      </div>

      <div className="text-3xl md:text-5xl text-[#E3DDC1]/40 font-bold">:</div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-bold text-[#E3DDC1] font-mono tracking-wider">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-xs md:text-sm text-[#E3DDC1]/60 uppercase tracking-widest mt-1 md:mt-2">
          Seconds
        </div>
      </div>
    </div>
  );
}
