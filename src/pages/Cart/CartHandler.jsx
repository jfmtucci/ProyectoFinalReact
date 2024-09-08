import { useContext } from "react";
import "../../App.css";
import { CartContext } from "../../context/CartContext";

export const CartHandler = ({ pizza }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  function formatNumber(number) {
    const formattedNumber = number.toLocaleString("en-US");
    return formattedNumber.replace(/,/g, ".");
  }

  return (
    <div className="col-md-4 mb-4 ">
      <div className="card h-100 ">
        <img
          src={pizza.img}
          className="card-img-top producto"
          alt={`Pizza ${pizza.name}`}
        />
        <div className="">
          <h5 className="card-title fw-light mb-1 fw-bold">
            Pizza {pizza.name}
          </h5>
          <hr className="cardHr" />

          <span className="h5 fw-bold green mt-5 ms-3">
            Precio: ${formatNumber(pizza.price)}
          </span>
          <div className="d-flex justify-content-center gap-3">
            <button
              type="button"
              style={{
                border: "1px solid black",
                paddingRight: ".5rem",
                paddingLeft: ".5rem",
                paddingBottom: "0",
                paddingTop: "0",
                fontSize: "2rem",
              }}
              onClick={() => {
                removeFromCart(pizza);
              }}
            >
              -
            </button>
            <h3>{pizza.quantity}</h3>
            <button
              type="button"
              style={{
                border: "1px solid black",
                paddingRight: ".5rem",
                paddingLeft: ".5rem",
                paddingBottom: "0",
                paddingTop: "0",
                fontSize: "2rem",
              }}
              onClick={() => {
                addToCart(pizza);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
