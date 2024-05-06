import React, { useState } from "react";
import "./Login.css";
import { usuarios } from "../../config/dataBase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  let redireccion = useNavigate();
  function buscarUsuario() {
    let estado = usuarios.some((item) => item.user === user);
    return estado;
  }
  function iniciarSesion() {
    if (buscarUsuario()) {
      redireccion("/home");
    } else {
      alert("Usuario no existe");
    }
  }
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => setUser(e.target.value)}
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button onClick={iniciarSesion} type="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
