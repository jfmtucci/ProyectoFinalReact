import { useContext } from "react";
import "../../App.css";

import { CardPizza } from "../../components/CardPizza/CardPizza";
import { Header } from "../../components/Header/Header";
import { PizzaContext } from "../../context/PizzaContext";

export const Home = () => {
  const { pizzas } = useContext(PizzaContext);
  return (
    <div className="home">
      <Header />
      <div className="row flex-row flex-wrap mt-4">
        {pizzas.map((pizza) => (
          <div className="col" key={pizza.id}>
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};
