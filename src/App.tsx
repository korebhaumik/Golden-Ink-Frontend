import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login_new";
import Signup from "./pages/Signup";
import Store from "./pages/Store";
type Props = {};

export default function App({}: Props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<Home />} />
          <Route path="/hello" element={<>Hello World</>} />
          <Route path="/store" element={<Store />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
