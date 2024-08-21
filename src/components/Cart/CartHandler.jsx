import { useState } from "react";
import "../../App.css";

export const CartHandler = ({ pizza, incrementar, decrementar }) => {
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
                decrementar(pizza.id);
              }}
            >
              -
            </button>
            <h3>{pizza.count}</h3>
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
                incrementar(pizza.id);
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
