import { useNavigate } from "react-router";
import "../../App.css";

export const CardPizza = ({ img, name, price, ingredients, id }) => {
  const navigate = useNavigate();
  function formatNumber(number) {
    const formattedNumber = number.toLocaleString("en-US");
    return formattedNumber.replace(/,/g, ".");
  }

  return (
    <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-3 mx-1 ms-5">
      <div className="card mx-2">
        <img
          src={img}
          className="card-img-top producto"
          alt={`Pizza ${name}`}
        />
        <div className="">
          <h5 className="card-title fw-light mb-1 fw-bold">Pizza {name}</h5>
          <hr className="cardHr" />
          <div className="d-flex flex-row align-items-center justify-content-center">
            <img
              src="/src/assets/img/pizza3.png"
              className="icon2"
              alt="pizza"
            />

            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <hr className="cardHr" />
          <span className="h5 fw-bold green mt-5 ms-3">
            Precio: ${formatNumber(price)}
          </span>
          <div className="d-flex justify-content-around">
            <button
              type="button"
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                fontSize: "0.5rem",
              }}
              onClick={() => navigate(`/pizza/${id}`)}
            >
              Ver Más{"    "}
              <img src="/src/assets/img/eyes.png" className="icon" alt="ojos" />
            </button>
            <button
              type="button"
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                fontSize: "0.5rem",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={() => navigate("/Cart")}
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
