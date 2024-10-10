import { useContext } from "react";
import { Navigate } from "react-router";
import { NavBarContext } from "../../context/NavBarContext";

const ProtectedRoute = ({ children }) => {
  const { tokenData, token } = useContext(NavBarContext);

  if (!tokenData && !token) {
    return <Navigate to="/Login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
