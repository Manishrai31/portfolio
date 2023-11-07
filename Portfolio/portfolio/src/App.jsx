import "./app.scss";
import Contact from "./Components/contact/Contact";
import Cursor from "./Components/cursor/Cursor";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";
import Test from "./Test";
const App = () => {
  return (
    <>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Services"><Parallax type="services"/></section>
      <section><Services /></section>
      <section id="Portfolio"><Parallax type="portfolio" /></section>
      <Portfolio />
      {/* <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section> */}
      <section id="Contact">
      <Contact />
    </section>
    </>
  );
};
export default App;
