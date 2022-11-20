import React from "react";

import Button from "../UI/Button";

const CtaSection = () => {
  return (
    <section className="flex h-56 flex-col items-center justify-center gap-y-4 bg-primary-dark-violet bg-bg-boost-mobile bg-cover bg-no-repeat px-4 md:h-52 md:gap-y-5 md:bg-bg-boost-desktop">
      <h2 className="text-xl font-bold text-white md:text-3xl">
        Boost your links today
      </h2>
      <Button className="rounded-full px-6 py-2" type="button">
        Get Started
      </Button>
    </section>
  );
};

export default CtaSection;
