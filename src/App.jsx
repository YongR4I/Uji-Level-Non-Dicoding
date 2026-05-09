import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; 
import ProjectsFull from "./pages/ProjectsFull"; 
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact"; // 1. Import komponen Contact

export default function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen text-white overflow-x-hidden font-custom">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Projects /> 
                <Contact /> 
              </>
            } />
            <Route path="/projects" element={<ProjectsFull />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}