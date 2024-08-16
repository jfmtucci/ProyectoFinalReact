import "../../App.css";
import { Register } from "../Register/Register";
import { Modal } from "react-bootstrap"; // Asegúrate de tener react-bootstrap instalado
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Login } from "../Login/Login";

export const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  function formatNumber(number) {
    const formattedNumber = number.toLocaleString("en-US");
    return formattedNumber.replace(/,/g, ".");
  }
  const total = formatNumber(25000);
  const token = false;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark no-margin no-padding navegation"
      style={{ background: "black" }}
    >
      <div className="container-fluid">
        <h3 className="navbar-brand ms-2" href="#">
          Pizzeria Mamma Mia!
        </h3>
        <button
          className="btn btn-outline-light me-2 transparent-btn d-flex align-items-center"
          type="button"
        >
          <img src="../img/pizza3.png" className="icon" alt="Pizza" />
          HOME
        </button>
        <button
          className={`btn btn-outline-light me-2 transparent-btn d-flex align-items-center ${
            !token ? "d-none" : ""
          }`}
          type="button"
          id="Profile"
        >
          <img
            src="../img/candado abierto.png"
            className="icon"
            alt="Profile"
          />
          Profile
        </button>
        <button
          className={`btn btn-outline-light me-2 transparent-btn d-flex align-items-center ${
            token ? "d-none" : ""
          }`}
          type="button"
          id="Login"
          onClick={() => setShowModalLogin(true)}
        >
          <img src="../img/candadoConLlave2.png" className="icon" alt="Login" />
          Login
        </button>
        <button
          className={`btn btn-outline-light me-2 transparent-btn d-flex align-items-center ${
            !token ? "d-none" : ""
          }`}
          type="button"
          id="Logout"
        >
          <img src="../img/candado cerrado.png" className="icon" alt="LogOut" />
          LogOut
        </button>
        <button
          className={`btn btn-outline-light me-2 transparent-btn d-flex align-items-center ${
            token ? "d-none" : ""
          }`}
          type="button"
          id="Register"
          onClick={() => setShowModal(true)}
        >
          <img
            src="../img/candadoConLlave3.png"
            className="icon"
            alt="Register"
          />
          Register
        </button>
        <div className="container d-flex justify-content-end">
          <button
            className="btn btn-outline-light me-2 transparent-btn d-flex align-items-center"
            type="button"
          >
            <img
              src="../img/carro-compras-realista.png"
              className="icon"
              alt="Total"
            />
            Total: {total}
          </button>
        </div>
      </div>
      <Modal show={showModalLogin} onHide={() => setShowModalLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShowModalLogin(false)}>Close</button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};
