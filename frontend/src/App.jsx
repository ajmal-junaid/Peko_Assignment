import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Passbook from "./pages/Passbook";
import PrivateUser from "./components/PrivateUser";

export default function App() {
  return (
    <div id="toast-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route element={<PrivateUser />}>
            <Route path="passbook" element={<Passbook />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
