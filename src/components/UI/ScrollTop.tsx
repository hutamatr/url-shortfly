import React, { useState, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";

const ScrollTop = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-[5%] right-6 z-30 rounded-full bg-primary-cyan p-2 opacity-70 duration-500 hover:-translate-y-2 hover:opacity-100 ${
        scrollPosition > 500 ? "block" : "hidden"
      }`}
      onClick={scrollTopHandler}
    >
      <MdArrowUpward className="text-white-bone text-xl" />
    </button>
  );
};

export default ScrollTop;
