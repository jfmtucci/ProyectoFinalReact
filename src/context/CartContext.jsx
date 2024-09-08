import { createContext, useContext, useEffect, useState } from "react";
import { PizzaContext } from "./PizzaContext";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { pizzas } = useContext(PizzaContext);

  const [pizzaList, setPizzaList] = useState(pizzas);

  useEffect(() => {
    setPizzaList(pizzas.map((pizza) => ({ ...pizza, count: 0 })));
  }, [pizzas]);

  useEffect(() => {
    getTotal();
  });

  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const index = cart.findIndex((item) => item.id === pizza.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (pizza) => {
    const index = cart.findIndex((item) => item.id === pizza.id);
    if (index === -1) return;
    let newCart = [...cart];

    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart = newCart.filter((item) => item.id !== pizza.id);
    }
    setCart(newCart);
  };

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  function formatNumber(number) {
    const formattedNumber = number.toLocaleString("en-US");
    return formattedNumber.replace(/,/g, ".");
  }
  /*
  function calcularTotal() {
    let total = 0;
    pizzaList.forEach((pizza) => {
      total += pizza.count * pizza.price;
    });
    setTotal(formatNumber(total));
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
  }*/

  return (
    <CartContext.Provider
      value={{
        pizzaList,
        getTotal,
        getQuantity,
        removeFromCart,
        addToCart,
        formatNumber,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
