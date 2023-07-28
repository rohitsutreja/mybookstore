import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
