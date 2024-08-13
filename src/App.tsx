import About from "./components/About";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Package from "./components/Package";
import Sponsor from "./components/Sponsor";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Package />
      <Sponsor />
      <Facilities />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
