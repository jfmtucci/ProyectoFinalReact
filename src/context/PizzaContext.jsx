import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizza] = useState([]);
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

  return (
    <PizzaContext.Provider value={{ pizzas, err }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
