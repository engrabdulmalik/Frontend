import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./main/pages/homepage/Homepage";
import Register from "./main/pages/RegisterNow/Register";
import Courses from "./main/pages/courses/Courses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;
