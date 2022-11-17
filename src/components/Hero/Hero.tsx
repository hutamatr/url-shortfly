import React from "react";

import Button from "../UI/Button";

import heroImage from "../../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-4 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="relative left-16 top-7 w-full scale-125"
        />
        <div className="mt-14 mb-24 flex flex-col gap-y-4 px-5 text-center">
          <h1 className="text-4xl font-bold text-neutral-very-dark-blue">
            More than just shorter links
          </h1>
          <p className="font-medium text-neutral-grayish-violet">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button className="mx-auto mb-6 w-fit rounded-full px-8 py-3">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
