import NavBar from "./NavBar";
import { Route, Routes, Navigate } from "react-router-dom"; // Import Navigate
import Home from "./Home";
import About from "./About";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import { useAuth } from "./Context/AuthContext";
import Main from "./Main";
import Logout from "./Logout";

// Define a ProtectedRoute component
function ProtectedRoute({ element }) {
  const { loggedInUser } = useAuth();

  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }

  return element;
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/books" element={<ProtectedRoute element={<Main />} />} />
        <Route path="/about" element={<ProtectedRoute element={<About />} />} />

        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
