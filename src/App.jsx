import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./features/Auth/Login";
import Signup from "./features/Auth/Signup";
import Sidebar from "./components/Sidebar";
import UserManagement from "./features/UserManagement/UserManagement";
import OTP from "./features/Auth/OTP";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="UserManagement" element={<UserManagement />} />
        <Route path="Sidebar" element={<Sidebar />} />
        <Route path="OTP" element={<OTP />} />
      </Routes>
    </Router>
  );
};

export default App;
