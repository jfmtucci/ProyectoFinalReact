import { useContext, useEffect, useState } from "react";
import { NavBarContext } from "../../context/NavBarContext";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, pass } = useContext(NavBarContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user,
            pass,
          }),
        });
        if (!response.ok) {
          throw new Error(`Error al conectar con la url ${url}`);
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
    fetchData();
  }, [url, user, pass]);
  return { data, loading, error };
};

export default UseFetch;
