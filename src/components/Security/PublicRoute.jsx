import { useContext } from "react";
import { Navigate } from "react-router";
import { NavBarContext } from "../../context/NavBarContext";

const PublicRoute = ({ children }) => {
  const { user, token } = useContext(NavBarContext);

  if (user && token) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default PublicRoute;
