import React from "react";
import { useNavigate } from "react-router";
import {} from "react-router";

export const Profile = ({ user, handleUser, handleToken }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ height: "77vh", width: "100vw" }}
      className="d-flex row align-items-center justify-content-center"
    >
      <h3>Usuario Actual: {user}</h3>

      <button
        className={`btn btn-outline-light me-2 transparent-btn d-flex align-items-center  `}
        style={{ backgroundColor: "blue", borderColor: "black", width: "15vw" }}
        type="button"
        id="Logout2"
        onClick={() => {
          navigate("/"), handleToken(false), handleUser("");
        }}
      >
        <img src="../img/candado cerrado.png" className="icon" alt="LogOut" />
        LogOut
      </button>
    </div>
  );
};
