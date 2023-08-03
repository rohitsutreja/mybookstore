import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import RegistrationForm from "./RegistrationForm";
import BookList from "./BookList";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
