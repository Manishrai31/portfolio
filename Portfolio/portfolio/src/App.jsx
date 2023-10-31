import "./app.scss"
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Test from "./Test";
const App =()=>{
  return(
    <>
    <section id="Homepage">
      <Navbar />
      <Hero/>
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    
    </>
  )
}
export default App;