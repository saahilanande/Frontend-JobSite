import { Route, Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Home />} path="/home"></Route>
        <Route element={<Register />} path="/register"></Route>
      </Routes>
    </>
  );
}

export default App;
