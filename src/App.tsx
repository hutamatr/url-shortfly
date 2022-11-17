import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import LinkInput from "./components/LinkInput/LinkInput";
import AdvancedStatistic from "./components/AdvancedStatistic/AdvancedStatistic";
import CtaSection from "./components/CtaSection/CtaSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header className="fixed top-0 z-20 w-full bg-white">
        <Navigation />
      </header>
      <main className="mt-16 flex flex-col">
        <Hero />
        <section className="relative bg-[#ececec]">
          <LinkInput />
          <AdvancedStatistic />
        </section>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
