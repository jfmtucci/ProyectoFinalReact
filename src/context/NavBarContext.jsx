import { createContext, useState } from "react";
export const NavBarContext = createContext();

const NavBarProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const handleToken = (updateToken) => {
    setToken(updateToken);
  };

  const [user, setUser] = useState(null);
  const handleUser = (updateUser) => {
    setUser(updateUser);
  };

  const logOut = () => {
    // console.log("por aqui paso");
    handleToken(null);
    handleUser(null);
  };

  //useEffect(() => {
  //console.log(token, user);
  //}, [token, user]);

  return (
    <NavBarContext.Provider
      value={{ token, handleToken, user, handleUser, logOut }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarProvider;
