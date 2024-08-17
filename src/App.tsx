import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Package from "./components/Package";
import Sponsor from "./components/Sponsor";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <Navbar navbar={navbar} setNavbar={setNavbar} />
      <main
        className={`flex flex-col gap-16 relative ${
          navbar ? "bg-black/20 blur-sm" : ""
        }`}
      >
        <Hero />
        {/* <About /> */}
        <Package />
        <Sponsor />
        <Facilities />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}

export default App;
