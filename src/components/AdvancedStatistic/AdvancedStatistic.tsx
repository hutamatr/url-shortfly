import React from "react";

import StatisticCard from "./StatisticCard";

const AdvancedStatistic = () => {
  return (
    <section className="relative bottom-6 mb-8 flex flex-col gap-y-12 px-5 text-center">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold text-primary-dark-violet">
          Advanced Statistic
        </h2>
        <p className="text-sm font-medium text-neutral-grayish-violet">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <StatisticCard />
    </section>
  );
};

export default AdvancedStatistic;
