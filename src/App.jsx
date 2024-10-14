import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./features/Auth/Login";
import Signup from "./features/Auth/Signup";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
