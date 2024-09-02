import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div
      style={{ height: "77vh", width: "100vw" }}
      className="d-flex align-items-center justify-content-center not-found-container"
    >
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo siento, la página que estás buscando no existe.</p>
        <Link to="/" className="btn btn-primary">
          Volver a la página de inicio
        </Link>
      </div>
    </div>
  );
};
