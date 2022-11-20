import React from "react";

import Button from "../UI/Button";

import heroImage from "../../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="sm:mx-auto sm:mb-20 sm:max-w-4xl lg:mb-36">
      <div className="grid grid-cols-1 items-center justify-items-center gap-5 overflow-hidden sm:grid-cols-2 sm:p-5 md:mt-8 lg:mt-10 lg:overflow-visible lg:p-0">
        <div className="relative left-16 top-8 order-1 w-full scale-125 sm:top-0 sm:left-8 sm:order-2 sm:scale-110 md:scale-125 lg:left-16 lg:scale-110">
          <img src={heroImage} alt="" />
        </div>
        <div className="order-2 mt-14 mb-24 flex flex-col gap-y-2 px-5 text-center sm:order-1 sm:mt-0 sm:mb-0 sm:px-0 sm:text-left md:items-start">
          <h1 className="text-4xl font-bold text-neutral-very-dark-blue lg:text-5xl">
            More than just shorter links
          </h1>
          <p className="mb-4 font-medium text-neutral-grayish-violet">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button
            className="mx-auto mb-6 w-fit rounded-full px-8 py-3 hover:bg-primary-cyan/70 sm:mx-0"
            type="button"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
