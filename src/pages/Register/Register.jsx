import "../../App.css";
import { useContext, useState } from "react";

import { useNavigate } from "react-router";
import { NavBarContext } from "../../context/NavBarContext";
//import { FetchContext } from "../../context/FetchContext";

export const Register = () => {
  const {
    token,
    handleTokenData,
    handleUser,
    handleToken,
    handlePass,
    validateUser,
    data,
  } = useContext(NavBarContext);
  //  const {  } = useContext(FetchContext);
  const navigate = useNavigate();
  const [errMess, setErrMess] = useState({
    resEmail: "",
    resPassword: "",
    resRePassword: "",
  });
  const emailPattern =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
  const [form, setForm] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const newErrMess = {
    resEmail: "",
    resPassword: "",
    resRePassword: "",
  };
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ok = true;

    if (!form.email) {
      newErrMess.resEmail = "Debe ingresar un Email válido";
      ok = false;
    } else if (!emailPattern.test(form.email)) {
      newErrMess.resEmail = `Formato de Email no válido
           \n ejemplo@algo.com`;
      ok = false;
    }
    if (!form.password) {
      newErrMess.resPassword = "Debe ingresar una contraseña";
      ok = false;
    } else if (form.password.length < 6) {
      newErrMess.resPassword = "La contraseña debe tener mas de 6 caracteres";
      ok = false;
    }
    if (!form.rePassword) {
      newErrMess.resRePassword = "Debe confirmar la contraseña";
      ok = false;
    } else if (form.password !== form.rePassword) {
      newErrMess.resRePassword = "Las contraseñas no coinciden";
      ok = false;
    }
    setErrMess(newErrMess);

    /*const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });
    const data = await response.json();
    alert(data?.error || "Authentication successful!");
    localStorage.setItem("token", data.token);
    console.log(data);
    if (token || data.token) {
      ok = true;
    } else {
      ok = false;
    }*/

    if (ok) {
      handleUser(form.email);
      handlePass(form.password);
      const url = "http://localhost:5000/api/auth/register";
      // console.log(url, form.email, form.password);

      validateUser(url, form.email, form.password);

      setSuccessMessage("Informacion Registrada Exitosamente");
      handleToken(true);
      handleTokenData(localStorage.getItem("token"));

      setTimeout(() => {
        setSuccessMessage("");
        navigate("/");
      }, 2500);

      setForm({
        email: "",
        password: "",
        rePassword: "",
      });
    }
  };

  return (
    <div
      style={{ height: "77vh", width: "100vw" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="modal-content">
        <div className="modal-body">
          <form className="d-flex flex-column justify-content-center gap-2">
            <div>
              <h2>Register</h2>
              <h6 className="text-danger">{errMess.resEmail}</h6>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                title="Ingresar un correo valido"
                required
              />
            </div>
            <div>
              <h6 className="text-danger">{errMess.resPassword}</h6>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>

            <div>
              <h6 className="text-danger">{errMess.resRePassword}</h6>
              <input
                type="password"
                name="rePassword"
                value={form.rePassword}
                onChange={handleChange}
                placeholder="re-password"
                required
              />
            </div>
            <h4 className="text-success">{successMessage}</h4>
            <button
              type="button"
              className="btn btn-primary"
              style={{
                width: "15vw",
                justifySelf: "center",
                alignSelf: "center",
              }}
              onClick={handleSubmit}
            >
              Guardar cambios
            </button>
          </form>
        </div>

        <div className="modal-footer"></div>
      </div>
    </div>
  );
};
