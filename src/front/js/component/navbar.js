import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const movieId = store.randMovie.id;

  const handleMultiSearch = async () => {
    try {
      if (await actions.getMulti(data)) {
        navigate("/multiresults", { state: data });
      } else {
        alert("Please enter a valid search query!");
      }

      // Access the message from the global state and display it if it exists
      if (store.message) {
        console.log("Mensaje del estado global:", store.message);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const handleLogout = async () => {
    try {
      if (await actions.logout()) {
        navigate("/");
      }
    } catch (error) {
      console.log("Error en el logout", error);
    }
  };

  return (
    <nav className="navbar navbar-dark mb-1 px-5 d-flex flex-row">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <p className="m-1">
            <img src={logo} style={{ height: "40px" }} alt="Logo" />
          </p>
        </Link>
        <div className="ml-auto">
          <div className="navbar-nav d-flex flex-row align-items-center">
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                handleMultiSearch();
              }}
            >
              <input
                className="form-control buscar"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                value={data}
                onChange={(e) => setData(e.target.value)}
              ></input>

              <button
                className="btn btn-outline"
                type="submit"
                onClick={() => handleMultiSearch()}
              >
                Buscar
              </button>
            </form>
            <Link className="nav-link" to={`/moviedetails/${movieId}`}>
              Ver En Aleatorio
            </Link>
            <Link className="nav-link" to="/genres">
              Géneros
            </Link>
            <Link className="nav-link" to="#">
              Rankings
            </Link>
            <Link className="nav-link" to="/personallist">
              Mi lista
            </Link>
            {localStorage.getItem("authToken") ? (
              // User is logged in, show Log Out button
              <Link className="nav-link">
                <button
                  type="button"
                  onClick={() => {
                    handleLogout();
                  }}
                  className="btn ms-4"
                >
                  <i className="fa-solid fa-user me-2"></i> Log Out
                </button>
              </Link>
            ) : (
              // User is not logged in, show Iniciar Sesión button
              <Link className="nav-link" to="/login">
                <button type="button" className="btn ms-4">
                  <i className="fa-solid fa-user me-2"></i> Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
