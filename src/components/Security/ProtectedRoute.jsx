import { useContext } from "react";
import { Navigate } from "react-router";
import { NavBarContext } from "../../context/NavBarContext";

const ProtectedRoute = ({ children }) => {
  const { user, token } = useContext(NavBarContext);

  if (!user || !token) {
    return <Navigate to="/Login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
