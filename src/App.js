import React from "react";
import {
  Footer,
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="gradiant__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
