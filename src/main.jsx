import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PizzaProvider from "./context/PizzaContext.jsx";
import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PizzaProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PizzaProvider>
  </BrowserRouter>
);
