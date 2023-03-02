import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Testimonials from './Components/Testimonials';
import Services from './Components/Services';
import Team from './Components/Team';
import Newsletter from './Components/Newsletter';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import TopJump from './Components/TopJump';


function App() {

  return (
     <div className="App h-[2000px]">
      <Header />
      <Hero />
      <Testimonials />
      <Services />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
      <TopJump />
    </div>
  )
}

export default App
