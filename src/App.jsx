import React from "react";
import Navbar from "./components/Navbar";
import Lending from "./components/Lending";
import Marque from "./components/Marque";
import About from "./components/About";
import Eyes from "./components/Eyes";
import LocomotiveScroll from "locomotive-scroll";
import Support from "./components/Support";
import Count from "./components/Count";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import News from "./components/News";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen ">
      <Navbar />
      <Lending />
      <News />
      <About />
      <Support />
      <Eyes />
      <Count />
      <Marque />
      <Gallery/>
      <Footer />
    </div>
  );
}

export default App;
