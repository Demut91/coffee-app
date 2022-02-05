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
      .then((response) => console.log(response.data.token))
      .catch((error) => console.log(error));
    Autorisation();
  }

  return (
    <form className="loginForm" onSubmit={handleLogIn}>
      <div>
        <input
          className="loginFormInput"
          type="text"
          placeholder="Логин"
          onChange={handleLoginChange}
          value={login}
          required
        />
      </div>
      <div>
        <input
          className="loginFormInput"
          type="password"
          placeholder="Пароль"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </div>
      <div>
        <input
          className="loginFormInput"
          type="password"
          placeholder="Повторите пароль"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </div>
      <button className="blackBtn" onClick={sendingRegistrationData}>
        Зарегистрироваться
      </button>
    </form>
  );
}

export default Registration;
