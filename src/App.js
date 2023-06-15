import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HalamanHome from "../src/Pages/Home";
import HalamanAboutMe from "./Pages/AboutMe";
import HalamanProject from "../src/Pages/Project";
import HalamanContact from "../src/Pages/Contact";
import './index.css';
import Particle from './Components/Particle';

function App() {
  return (
    <HashRouter>
      <div className="App text-white font-[consolas]">
        <div className="relative h-screen w-full flex items-center justify-center">
        <Particle />
          <div className="large-2">
            <Navbar />
            <Routes>
              <Route path="/" element={<HalamanHome />} />
              <Route path="/about" element={<HalamanAboutMe />} />
              <Route path="/project" element={<HalamanProject />} />
              <Route path="/contact" element={<HalamanContact />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
