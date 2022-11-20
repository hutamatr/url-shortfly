import React from "react";

import brandRecognition from "../../assets/icons/icon-brand-recognition.svg";
import detailedRecord from "../../assets/icons/icon-detailed-records.svg";
import fullyCustomized from "../../assets/icons/icon-fully-customizable.svg";

interface Card {
  id: number;
  image: string;
  title: string;
  desc: string;
}

const cardContent: Card[] = [
  {
    id: 1,
    image: brandRecognition,
    title: "Brand Recognition",
    desc: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 2,
    image: detailedRecord,
    title: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: 3,
    image: fullyCustomized,
    title: "Fully Customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const StatisticCard = () => {
  return (
    <section className="relative mx-auto flex max-w-4xl flex-col items-center gap-y-16 md:flex-row md:gap-x-4 lg:gap-x-6">
      <div className="absolute left-1/2 top-12 h-2 w-[600px] origin-[center_left] rotate-90 bg-primary-cyan md:left-20 md:top-24 md:rotate-0 lg:left-1/4 lg:top-20"></div>
      {cardContent.map((card, index) => (
        <div
          key={card.id}
          className={`relative min-w-min max-w-xs rounded-md bg-white p-6 pt-10 text-center md:p-4 md:pt-10 lg:p-6 lg:pt-10 lg:text-left ${
            index === 0 ? "md:bottom-10" : index === 2 ? "md:top-10" : ""
          }`}
        >
          <div className="absolute left-1/2 -top-8 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-primary-dark-violet md:left-1/4">
            <img src={card.image} alt={card.title} className="h-8 w-8" />
          </div>
          <h3 className="mt-4 mb-3 text-lg font-semibold text-neutral-very-dark-blue">
            {card.title}
          </h3>
          <p className="text-xs font-medium leading-5 text-neutral-grayish-violet">
            {card.desc}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StatisticCard;
