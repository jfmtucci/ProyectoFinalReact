import { useEffect, useState } from "react";
import "../../App.css";

import { CardPizza } from "../../components/CardPizza/CardPizza";
import { Header } from "../../components/Header/Header";
//import { pizzas } from "../../assets/js/pizzas.js";

export const Home = () => {
  const [pizza, setPizza] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setErr(err);
      }
    };
    fetchPizza();
  }, []);

  if (err) {
    return <div>Error: {err}</div>;
  }

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <Header />
      <div className="row flex-row flex-wrap mt-4">
        {pizza.map((pizza) => (
          <div className="col" key={pizza.id}>
            <CardPizza
              img={pizza.img}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              id={pizza.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /*<CardPizza
  name="Napolitana"
  price={5950}
  ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
  img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
/>
<CardPizza
  name="Española"
  price={6950}
  ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
  img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
/>
<CardPizza
  name="Pepperoni"
  price={6950}
  ingredients={["mozzarella", "pepperoni", "orégano"]}
  img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
/>*/
}
