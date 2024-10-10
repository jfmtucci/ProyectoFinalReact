/*import { useContext, useState, createContext } from "react";
import { NavBarContext } from "./NavBarContext";

export const FetchContext = createContext();

const FetchProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ValidateUser = async (url, user, pass) => {
    //const fetchData = async () => {

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user,
          password: pass,
        }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Error al conectar con la url ${url} : ${errorMessage}`
        );
      }
      const data = await response.json();
      setData(data);
      localStorage.setItem("token", data.token);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FetchContext.Provider value={{ data, loading, error, ValidateUser }}>
      {children}
    </FetchContext.Provider>
  );
};

export default FetchProvider;*/
