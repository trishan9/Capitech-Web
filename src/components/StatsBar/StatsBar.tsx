"use client";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import React, { useEffect, useState } from "react";

interface StatsData {
  id: number;
  brokers: number;
  years_of_experience: number;
  branches: number;
  regular_clients: number;
}

export default function StatsBar() {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  const [statsData, setData] = useState<StatsData | null>(null);
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await fetch(`/api/getstats`);
        const result = await res.json();

        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, []);

  const renderStatsItem = (label: string, value: number) => {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className={`text-2xl font-bold md:text-5xl`}>
          {counterOn && label !== "Broker Number" && (
            <CountUp start={0} end={value} duration={2} delay={0} />
          )}

          {counterOn && label === "Broker Number" && value}

          {counterOn && label !== "Broker Number" && (
            <span className={`text-2xl font-bold md:text-4xl`}>+</span>
          )}
        </h1>

        <p className={`text-xs font-medium md:text-xl`}>{label}</p>
      </div>
    );
  };

  return (
    // @ts-ignore
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="bg-gradient-bg mx-auto grid w-full grid-cols-2 items-center gap-10 px-10 py-10 text-white md:h-60 md:grid-cols-4 md:gap-0 md:py-0">
        {statsData && (
          <React.Fragment>
            {renderStatsItem("Broker Number", statsData.brokers)}
            {renderStatsItem(
              "Years of Experience",
              statsData.years_of_experience,
            )}
            {renderStatsItem("Branches", statsData.branches)}
            {renderStatsItem("Regular Clients", statsData.regular_clients)}
          </React.Fragment>
        )}
      </div>
    </ScrollTrigger>
  );
}
