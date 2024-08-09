import "../../App.css";

export const NavBar = () => {
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
    </nav>
  );
};
