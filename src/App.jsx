import { Route, Routes } from "react-router";
import "./App.css";
import Cart from "./pages/Cart/Cart.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./pages/Home/Home.jsx";

import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Login } from "./pages/Login/Login.jsx";
import Pizza from "./pages/Pizza/Pizza.jsx";
import { Register } from "./pages/Register/Register.jsx";
import { Profile } from "./pages/Profile/Profile.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import ProtectedRoute from "./components/Security/ProtectedRoute.jsx";
import PublicRoute from "./components/Security/PublicRoute.jsx";

function App() {
  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <NavBar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path={"cart"} element={<Cart />} />
        <Route path={"/pizza/:id"} element={<Pizza />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path={"/404"} element={<NotFound />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
