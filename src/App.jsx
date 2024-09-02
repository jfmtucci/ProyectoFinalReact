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
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(false);

  const handleToken = (updateToken) => {
    setToken(updateToken);
  };

  const [user, setUser] = useState("");
  const handleUser = (updateUser) => {
    setUser(updateUser);
  };

  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <NavBar token={token} handleToken={handleToken} />

      {/*<Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/404">NotFound</Link>
      <Link to="/pizza/p001">Pizza</Link>*/}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"register"}
          element={
            <Register handleToken={handleToken} handleUser={handleUser} />
          }
        />
        <Route
          path={"login"}
          element={<Login handleToken={handleToken} handleUser={handleUser} />}
        />
        <Route path={"cart"} element={<Cart />} />
        <Route path={"/pizza/:id"} element={<Pizza />} />
        <Route
          path={"profile"}
          element={
            <Profile
              user={user}
              handleUser={handleUser}
              handleToken={handleToken}
            />
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
