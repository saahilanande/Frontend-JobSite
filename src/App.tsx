import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import { RequireAuth } from "react-auth-kit";
import { useState } from "react";
import Profile from "./Pages/Profile";

function App() {
  const [apikey, setApiKey] = useState("");

  return (
    <>
      <Routes>
        <Route element={<Login />} path="/"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route
          path={"/profile"}
          element={
            <RequireAuth loginPath={"/login"}>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route
          path={"/home"}
          element={
            <RequireAuth loginPath={"/login"}>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route element={<Register />} path="/register"></Route>
      </Routes>
    </>
  );
}

export default App;
