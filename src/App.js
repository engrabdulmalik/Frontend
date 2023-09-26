import "./App.css";
import Homepage from "./main/pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Coursespage from "./main/pages/courses/Coursespage";
import Register from "./main/pages/RegisterNow/Register";
import StudentData from "./main/pages/RegisterNow/StudentData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/courses" element={<Coursespage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/student-data" element={<StudentData />} />
    </Routes>
  );
}

export default App;
