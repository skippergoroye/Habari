import React from "react";
import MarketingStats from "./_components/marketing-stats";
import TrafficSource from "./_components/traffic-source";
import { BudgetByPlatform } from "./_components/budget-by-platform";
import AcquisitionChart from "./_components/acquisition-chart";

const Marketing = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Marketing</h1>
        <h1>Marketing</h1>
      </div>
      <div className="flex justify-between gap-2 mt-8">
        <MarketingStats />
        <AcquisitionChart />
      </div>

      <div className="flex justify-between gap-5 mt-10">
        <TrafficSource />
        <BudgetByPlatform />
      </div>
    </div>
  );
};

export default Marketing;
