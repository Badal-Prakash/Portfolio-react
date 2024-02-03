import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ContactMe from "./pages/ContactMe";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<ContactMe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
