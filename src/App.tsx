import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Main/Hero";
import LinkInput from "./components/LinkInput/LinkInput";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="flex flex-col gap-y-4">
        <Hero />
        <LinkInput />
      </main>
    </>
  );
}

export default App;
