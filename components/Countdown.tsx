"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string | Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value }: { value: number }) => (
    <span className="text-[120px] md:text-[200px] leading-none font-['Electroharmonix'] text-[#BC002D] tracking-[-0.1em] tabular-nums">
      {value.toString().padStart(2, "0")}
    </span>
  );

  const Separator = () => (
    <span className="text-[80px] md:text-[140px] leading-none font-['Electroharmonix'] text-[#BC002D] px-2 mb-4">
      :
    </span>
  );

  return (
    <div className="flex items-center justify-center">
      <TimeUnit value={timeLeft.days} />
      <Separator />
      <TimeUnit value={timeLeft.hours} />
      <Separator />
      <TimeUnit value={timeLeft.minutes} />
      <Separator />
      <TimeUnit value={timeLeft.seconds} />
    </div>
  );
};

export default Countdown;
