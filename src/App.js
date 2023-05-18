import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HalamanHome from "../src/Pages/Home";
import HalamanAboutMe from "./Pages/AboutMe";
import HalamanProject from "../src/Pages/Project";
import HalamanContact from "../src/Pages/Contact";
import './index.css';

function App() {
  return (
    <HashRouter>
      <div className="App text-white font-[consolas]">
        <div className="h-screen w-full flex items-center justify-center">
          <div className="large-2 bg-black h-[85%] w-[90%] overflow-y-auto text-white">
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
