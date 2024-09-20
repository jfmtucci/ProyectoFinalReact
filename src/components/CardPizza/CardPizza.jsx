import { useNavigate } from "react-router";
import "../../App.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CardPizza = ({ pizza }) => {
  const navigate = useNavigate();
  const { formatNumber, addToCart } = useContext(CartContext);

  return (
    <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-3 mx-1 ms-5">
      <div className="card mx-2">
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
          <div className="d-flex flex-row align-items-center justify-content-center">
            <img
              src="/src/assets/img/pizza3.png"
              className="icon2"
              alt="pizza"
            />

            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <hr className="cardHr" />
          <span className="h5 fw-bold green mt-5 ms-3">
            Precio: ${formatNumber(pizza.price)}
          </span>
          <div className="d-flex justify-content-around">
            <Link
              type="button"
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                fontSize: "0.5rem",
                borderRadius: ".5rem",
              }}
              to={`/pizza/${pizza.id}`}
            >
              Ver Más{"    "}
              <img src="/src/assets/img/eyes.png" className="icon" alt="ojos" />
            </Link>
            <button
              type="button"
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                fontSize: "0.5rem",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={() => addToCart(pizza)}
            >
              Añadir{"    "}
              <img
                src="../img/carro-compras-realista.png"
                className="icon"
                alt="carro"
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
