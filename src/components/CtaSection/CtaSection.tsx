import React from "react";

import Button from "../UI/Button";

const CtaSection = () => {
  return (
    <section className="flex h-56 flex-col items-center justify-center gap-y-4 bg-primary-dark-violet bg-bg-boost-mobile bg-cover bg-no-repeat px-4">
      <h2 className="text-xl font-bold text-white">Boost your links today</h2>
      <Button className="rounded-full px-6 py-2">Get Started</Button>
    </section>
  );
};

export default CtaSection;
