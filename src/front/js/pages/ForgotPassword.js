import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (await actions.forgotPassword(email)) {
        alert(
          "If the email is registered you will receive a message to recover password."
        );
        // Limpiar inputs
        setEmail("");
      } else {
        alert(
          "If the email is registered you will receive a message to recover password."
        );
        setEmail("");
      }

      // Accede al mensaje del estado global y muestra el mensaje si existe
      if (store.message) {
        console.log("Mensaje del estado global:", store.message);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="container-fluid CrearCuenta vh-100">
      <h1 className="mb-3">Cambio de contraseña</h1>
      <a>Ingresa el email para mandar correo de cambio de contraseña </a>
      <form onSubmit={handleSubmit}>
        <div id="is-relative">
          <label>
            <span id="icon">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <input
              className="form-control inputCuenta"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <br />
        <button
          type="submit"
          className="btn btnCrearCuenta"
          onClick={handleSubmit}
        >
          {" "}
          Enviar{" "}
        </button>
      </form>
    </div>
  );
};
