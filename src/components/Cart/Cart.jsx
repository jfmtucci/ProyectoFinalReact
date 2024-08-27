//import { pizzaCart } from "../../assets/js/pizzas";
import "../../App.css";

import { CartHandler } from "./CartHandler";
import { useEffect, useState } from "react";

const Cart = () => {
  const [pizzas, setPizza] = useState([]);
  const [err, setErr] = useState(null);
  const [total, setTotal] = useState("");
  const [pizzaList, setPizzaList] = useState(pizzas);

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

  useEffect(() => {
    setPizzaList(pizzas.map((pizza) => ({ ...pizza, count: 0 })));
  }, [pizzas]);

  useEffect(() => {
    calcularTotal();
  });

  function formatNumber(number) {
    const formattedNumber = number.toLocaleString("en-US");
    return formattedNumber.replace(/,/g, ".");
  }

  function calcularTotal() {
    let total = 0;
    pizzaList.forEach((pizza) => {
      total += pizza.count * pizza.price;
    });
    setTotal(total);
  }
  function delPizza(id) {
    const newPizza = pizzaList.filter((pizza) => {
      return pizza.id !== id;
    });
    setPizzaList(newPizza);
  }

  //
  function aumentarPizza(id) {
    const pizza = pizzaList.find((pizza) => pizza.id === id);
    pizza.count++;
    setPizzaList([...pizzaList]);
    //calcularTotal();
  }
  function decrementarPizza(id) {
    const pizza = pizzaList.find((pizza) => pizza.id === id);
    if (pizza.count === 1) {
      pizza.count = 0;
      delPizza(id);
      //calcularTotal();
      return;
    }
    if (pizza.count === 0) {
      delPizza(id);

      return;
    }
    pizza.count--;
    setPizzaList([...pizzaList]);
    //calcularTotal();
  }

  return (
    <div className="container mt-4">
      <h1>Carrito de Compras</h1>
      <div className="row g-4">
        {pizzaList.map((pizza) => {
          return (
            <CartHandler
              key={pizza.id}
              pizza={pizza}
              incrementar={aumentarPizza}
              decrementar={decrementarPizza}
            />
          );
        })}
      </div>
      <div className="d-flex column justify-content-center gap-5 align-items-center">
        <h2>Total a Pagar: $ {formatNumber(total)}</h2>
      </div>
      <button
        type="button"
        style={{
          border: "1px solid black",
        }}
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;
