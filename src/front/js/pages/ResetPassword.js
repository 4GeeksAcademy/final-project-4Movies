import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ResetPassword = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const handleUpdatePassword = async () => {
    //const authToken = localStorage.getItem("authToken");

    const success = await actions.setNewPassword(newPassword, token);

    if (success) {
      // Password updated successfully, handle accordingly
      navigate("/");
      console.log("Password updated successfully");
    } else {
      // Error updating password, handle accordingly
      navigate("/");
      console.log("Error updating password");
    }
  };

  return (
    <div className="container-fluid text-center pt-5 vh-100 bg-dark">
      <form
        className="d-flex justify-content-center"
        onSubmit={handleUpdatePassword}
      >
        <div className="form-group">
          <div className="container text-center">
            <label
              htmlFor="passwordInput1"
              className="fs-3 text-white"
            >
              New password
            </label>
            <input
              type="password"
              className="form-control bg-dark text-white inputCuenta mt-4"
              id="passwordInput1"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="container mt-4">
            <button
              type="button"
              className="btn btnCrearCuenta"
              onClick={handleUpdatePassword}
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
