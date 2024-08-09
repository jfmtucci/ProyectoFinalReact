import "./App.css";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./components/Home/Home.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
