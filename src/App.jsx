import Nav from "./Components.jsx/Nav";
import Sidebar from "./Components.jsx/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useState } from "react";
function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <Router>
        <Nav setSidebar={setSidebar} sidebar={sidebar} />
        <div className="flex">
          <Sidebar sidebar={sidebar} />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />s
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
