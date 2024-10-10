//import { pizzaCart } from "../../assets/js/pizzas";

import { useContext, useEffect, useRef } from "react";
import "../../App.css";

import { CartHandler } from "./CartHandler";
import { CartContext } from "../../context/CartContext";
import { NavBarContext } from "../../context/NavBarContext";

const Cart = () => {
  const { cart, getTotal } = useContext(CartContext);
  const { token, user } = useContext(NavBarContext);
  const miRef = useRef(null);

  useEffect(() => {
    if (miRef.current) {
      if (!token || !user) miRef.current.disabled = true;
      //console.log(miRef);
    }
  }, [token, user]);

  const pagar = async () => {
    try {
      const check = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer token_jwt`,
        },
        body: JSON.stringify({
          cart,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="container mt-4"
      style={{ width: "100vw", minHeight: "77vh" }}
    >
      <h1>Carrito de Compras</h1>
      <div className="row g-4">
        {cart.map((pizza) => {
          return <CartHandler key={pizza.id} pizza={pizza} />;
        })}
      </div>
      <div>
        <div className="d-flex column justify-content-center gap-5 align-items-center">
          <h2>Total a Pagar: $ {getTotal()}</h2>
        </div>
        <button
          type="button"
          ref={miRef}
          style={{
            border: "1px solid black",
          }}
          onClick={() => {
            console.log(cart), alert("Compra Exitosa");
          }}
        >
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;
