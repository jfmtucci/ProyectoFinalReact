import "../../App.css";
import { useContext, useState } from "react";

import { useNavigate } from "react-router";
import { NavBarContext } from "../../context/NavBarContext";
//import { FetchContext } from "../../context/FetchContext";
//import UseFetch from "../../components/hook/UseFetch";

export const Login = () => {
  const {
    handleTokenData,
    handleUser,
    handlePass,
    data,
    tokenData,
    handleToken,
    validateUser,
  } = useContext(NavBarContext);
  //const {  } = useContext(FetchContext);
  const navigate = useNavigate();

  const [errMess, setErrMess] = useState({
    resEmail: "",
    resPassword: "",
  });
  const emailPattern =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const newErrMess = {
    resEmail: "",
    resPassword: "",
  };
  const [successMessage, setSuccessMessage] = useState("");

  /*useEffect(() => {
    const storedForm = localStorage.getItem("formData");
    if (storedForm) {
      setForm(JSON.parse(storedForm));
    }
  }, []);*/

  /*if (token) {
    return <Navigate to="/" />;
  }*/

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

    setErrMess(newErrMess);

    /*const response = await fetch("http://localhost:5000/api/auth/login", {
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

    localStorage.setItem("token", data.token);*/

    // console.log(data, data.token);
    //console.log(localStorage.token);
    //console.log(data);

    if (ok) {
      const url = "http://localhost:5000/api/auth/login";

      handleUser(form.email);
      handlePass(form.password);
      validateUser(url, form.email, form.password);
      //console.log(data);

      handleTokenData(localStorage.getItem("token"));

      handleToken(true);

      //console.log(tokenData);
      setSuccessMessage("Informacion Registrada Exitosamente");

      setTimeout(() => {
        setSuccessMessage("");
        navigate("/");
      }, 2500);

      setForm({
        email: "",
        password: "",
      });

      //const fetchData = UseFetch("http://localhost:5000/api/auth/login");
      // console.log(fetchData);
      //if (fetchData.data && fetchData.data.token) {

      //  } else if (fetchData.error) {
      //  setErrMess({ ...newErrMess, resPassword: fetchData.error });

      /*if (data && data.token) {
        console.log(data);
  
        ok = true;
      } else {
        ok = false;
      }*/
      //console.log(ok);
      if (!ok) {
        return;
      }
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
              <h2>Login</h2>
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

            <h4 className="text-success">{successMessage}</h4>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
              style={{
                width: "15vw",
                justifySelf: "center",
                alignSelf: "center",
              }}
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
