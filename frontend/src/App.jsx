
import { Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Register from "./screen/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
