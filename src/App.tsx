import { Route, Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/login"></Route>
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
