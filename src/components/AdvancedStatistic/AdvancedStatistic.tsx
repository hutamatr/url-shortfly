import React from "react";

import StatisticCard from "./StatisticCard";

const AdvancedStatistic = () => {
  return (
    <section className="relative bottom-6 mb-8 mt-10 flex flex-col gap-y-12 px-5 text-center md:mb-24">
      <div className="mb-12 flex flex-col gap-y-4 sm:mb-16">
        <h2 className="text-2xl font-bold text-primary-dark-violet">
          Advanced Statistic
        </h2>
        <p className="text-sm font-medium text-neutral-grayish-violet md:mx-auto md:max-w-md">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <StatisticCard />
    </section>
  );
};

export default AdvancedStatistic;
