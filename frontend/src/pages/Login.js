import React, { useState } from "react";

import "./Login.css";
import logo from "../assets/logo.svg";

export default function Login() {
  const [userName, setUserName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userName);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="tindev" />
        <input
          placeholder="Digite seu usuário no Github"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
