import { useContext } from "react";
import { Navigate } from "react-router";
import { NavBarContext } from "../../context/NavBarContext";

const PublicRoute = ({ children }) => {
  const { tokenData, token } = useContext(NavBarContext);

  if (tokenData || token) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default PublicRoute;
