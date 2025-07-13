import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PortfolioChoice from "./components/PortfolioChoice";
import Portfolio from "./components/Cybersecurity";
import Homepage from "./components/Tikwave";

function App() {
  return (
    <Router>
    <div className="font-sans text-gray-800 dark:text-white dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/portfoliochoice" element={<PortfolioChoice />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
<Route path="/portfolio" element={<Cybersycurity />} />
<Route path="/portfolio" element={<Cybersycurity />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}
export default App;
