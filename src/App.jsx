import { Route, Routes } from "react-router-dom";
import Home from "./Layout/Home";
import Login from "./Layout/Login";
import SignUp from "./Layout/SignUp";
const App = () => {
  return (
    <div className="text-white">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
