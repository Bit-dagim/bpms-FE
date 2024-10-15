import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./features/Auth/Login";
import Signup from "./features/Auth/Signup";
import Sidebar from "./components/Sidebar";
import UserManagement from "./features/UserManagement/UserManagement";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="UserManagement" element={<UserManagement />} />
        <Route path="Sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
};

export default App;
