"use client";

import Image from "next/image";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./Countdown.css";

interface CountdownProps {
  targetDate?: number | string | Date;
}

const Countdown = ({ targetDate = "2026-02-26T00:00:00" }: CountdownProps) => {
  const target = new Date(targetDate).getTime();

  return (
    <div className="cd-scope">
      <div className="cd-wrapper">
        <div className="cd-inner">
          <Image
            src="/assets/countdown.png"
            alt="countdown background"
            width={900}
            height={450}
            className="cd-bg"
          />

          <div className="cd-digit-group cd-days">
            <FlipClockCountdown
              to={target}
              renderMap={[true, false, false, false]}
              showLabels={false}
              digitBlockStyle={{
                width: 85,
                height: 210,
                fontSize: 130,
                color: "#E3DDC1",
                backgroundColor: "#2d1812",
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 600,
              }}
              dividerStyle={{ color: "#1b0f06", height: 5 }}
            />
          </div>
          <p className="cd-label cd-label-days"> Days </p>

          <div className="cd-digit-group cd-hours">
            <FlipClockCountdown
              to={target}
              renderMap={[false, true, false, false]}
              showLabels={false}
              digitBlockStyle={{
                width: 85,
                height: 210,
                fontSize: 130,
                color: "#E3DDC1",
                backgroundColor: "#2d1812",
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 600,
              }}
              dividerStyle={{ color: "#1b0f06", height: 5 }}
            />
          </div>
          <p className="cd-label cd-label-hours"> Hours </p>

          <div className="cd-digit-group cd-minutes">
            <FlipClockCountdown
              to={target}
              renderMap={[false, false, true, false]}
              showLabels={false}
              digitBlockStyle={{
                width: 85,
                height: 210,
                fontSize: 130,
                color: "#E3DDC1",
                backgroundColor: "#2d1812",
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 600,
              }}
              dividerStyle={{ color: "#1b0f06", height: 5 }}
            />
          </div>
          <p className="cd-label cd-label-minutes"> Minutes </p>

          <div className="cd-digit-group cd-seconds">
            <FlipClockCountdown
              to={target}
              renderMap={[false, false, false, true]}
              showLabels={false}
              digitBlockStyle={{
                width: 85,
                height: 210,
                fontSize: 130,
                color: "#E3DDC1",
                backgroundColor: "#2d1812",
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 600,
              }}
              dividerStyle={{ color: "#1b0f06", height: 5 }}
            />
          </div>
          <p className="cd-label cd-label-seconds"> Seconds </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
