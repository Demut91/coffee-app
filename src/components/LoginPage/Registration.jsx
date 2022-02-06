import React from "react";
import axios from "axios";

function Registration({
  login,
  password,
  handlePasswordChange,
  handleLogIn,
  handleLoginChange,
  Autorisation,
}) {
  function sendingRegistrationData() {
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/185.244.172.108:8080/auth/register",
        {
          login: login,
          password: password,
        }
      )
      .then((response) => localStorage.setItem("token", response.data.token))
      .catch((error) => console.log(error));
    Autorisation();
  }

  function handleClick(e) {
    sendingRegistrationData();
    handleLogIn(e);
  }

  return (
    <form className="loginForm" onSubmit={handleClick}>
      <div className="FormInput">
        <input
          className="loginFormInput"
          type="text"
          placeholder="Логин"
          onChange={handleLoginChange}
          value={login}
          required
        />
      </div>
      <div className="FormInput">
        <input
          className="loginFormInput"
          type="password"
          placeholder="Пароль"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </div>
      <div className="FormInput">
        <input
          className="loginFormInput"
          type="password"
          placeholder="Повторите пароль"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </div>
      <button className="submitBtn">Войти</button>
    </form>
  );
}

export default Registration;
