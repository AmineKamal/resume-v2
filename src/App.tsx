import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PhotoSwipe from "./components/PhotoSwipe";
import Portfolio from "./components/Portfolio";
import Preloader from "./components/Preloader";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Preloader/>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Footer/>
      <PhotoSwipe/>
    </>
  );
}

export default App;
