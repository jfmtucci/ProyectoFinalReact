import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { NavBarContext } from "../../context/NavBarContext";

export const NavBar = () => {
  //  const [showModal, setShowModal] = useState(false);
  //const [showModalLogin, setShowModalLogin] = useState(false);
  const { logOut, tokenData, token } = useContext(NavBarContext);

  const { getTotal, getQuantity } = useContext(CartContext);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark no-margin no-padding navegation"
      style={{ background: "black" }}
    >
      <div className="container-fluid">
        <h3 className="navbar-brand ms-2" href="#">
          Pizzeria Mamma Mia!
        </h3>
        <Link
          className="btn btn-outline-light me-2 transparent-btn d-flex align-items-center"
          to="/"
        >
          <img src="../img/pizza3.png" className="icon" alt="Pizza" />
          HOME
        </Link>
        <div className="navbar navbar-expand-lg navbar-dark no-margin no-padding navegation">
          {tokenData || token ? (
            <>
              <Link
                className={`btn btn-outline-light me-2 transparent-btn d-flex align-items-center `}
                type="button"
                id="Profile"
                to="/profile"
              >
                <img
                  src="../img/candado abierto.png"
                  className="icon"
                  alt="Profile"
                />
                Profile
              </Link>
              <Link
                className={`btn btn-outline-light me-2 transparent-btn d-flex align-items-center `}
                type="button"
                id="Logout"
                onClick={() => {
                  logOut();
                }}
                to="/"
              >
                <img
                  src="../img/candado cerrado.png"
                  className="icon"
                  alt="LogOut"
                />
                LogOut
              </Link>
            </>
          ) : (
            <>
              <Link
                className={`btn btn-outline-light me-2 transparent-btn d-flex align-items-center `}
                type="button"
                id="Login"
                //onClick={() => setShowModalLogin(true)}
                to="/login"
              >
                <img
                  src="../img/candadoConLlave2.png"
                  className="icon"
                  alt="Login"
                />
                Login
              </Link>

              <Link
                className={`btn btn-outline-light me-2 transparent-btn d-flex align-items-center `}
                type="button"
                id="Register"
                //onClick={() => setShowModal(true)}
                to="/register"
              >
                <img
                  src="../img/candadoConLlave3.png"
                  className="icon"
                  alt="Register"
                />
                Register
              </Link>
            </>
          )}
          ;
        </div>

        <div className="container d-flex justify-content-end">
          <Link
            className="btn btn-outline-light me-2 mt-1 gap-4 p-0  transparent-btn d-flex column justify-content-center align-items-center"
            type="button"
            to="/Cart"
          >
            <p> 🛒 Total: ${getTotal()}</p>

            <p>Cantidad: {getQuantity()} U </p>
          </Link>
        </div>
      </div>
      {/*    <Modal show={showModalLogin} onHide={() => setShowModalLogin(false)}>
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
      </Modal>*/}
    </nav>
  );
};
