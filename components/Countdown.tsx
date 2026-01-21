"use client";

import Image from "next/image";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

interface CountdownProps {
  targetDate?: number | string | Date;
}

const Countdown = ({ targetDate = "2026-02-26T00:00:00" }: CountdownProps) => {
  const target = new Date(targetDate).getTime();

  return (
    <div className="scale-[0.35] min-[375px]:scale-[0.40] sm:scale-[0.55] md:scale-[0.65] lg:scale-[0.7] transition-transform duration-300 origin-center flex items-center justify-center">
      <div className="relative inline-block shrink-0">
        <Image
          src="/assets/countdown.png"
          alt="countdown background"
          width={900}
          height={450}
          className="w-[900px] h-auto"
        />

        <div className="absolute top-[141px] left-[51px]">
          <FlipClockCountdown
            to={target}
            renderMap={[true, false, false, false]}
            showLabels={false}
            digitBlockStyle={{
              width: 85,
              height: 210,
              fontSize: 130,
              color: "#E3DDC1",
              backgroundColor: "transparent",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
            }}
            dividerStyle={{ color: "#1b0f06", height: 5 }}
          />
        </div>
        <p className="font-semibold absolute text-[#DED299] text-2xl top-[365px] left-[110px]">
          {" "}
          Days{" "}
        </p>

        <div className="absolute top-[141px] left-[255px]">
          <FlipClockCountdown
            to={target}
            renderMap={[false, true, false, false]}
            showLabels={false}
            digitBlockStyle={{
              width: 85,
              height: 210,
              fontSize: 130,
              color: "#E3DDC1",
              backgroundColor: "transparent",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
            }}
            dividerStyle={{ color: "#1b0f06", height: 5 }}
          />
        </div>
        <p className="font-semibold absolute text-[#DED299] text-2xl top-[365px] left-[310px]">
          {" "}
          Hours{" "}
        </p>

        <div className="absolute top-[141px] left-[465px]">
          <FlipClockCountdown
            to={target}
            renderMap={[false, false, true, false]}
            showLabels={false}
            digitBlockStyle={{
              width: 85,
              height: 210,
              fontSize: 130,
              color: "#E3DDC1",
              backgroundColor: "transparent",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
            }}
            dividerStyle={{ color: "#1b0f06", height: 5 }}
          />
        </div>
        <p className="font-semibold absolute text-[#DED299] text-2xl top-[365px] left-[520px]">
          {" "}
          Minutes{" "}
        </p>

        <div className="absolute top-[141px] left-[671px]">
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
        <p className="font-semibold absolute text-[#DED299] text-2xl top-[365px] left-[710px]">
          {" "}
          Seconds{" "}
        </p>
      </div>
    </div>
  );
};

export default Countdown;
