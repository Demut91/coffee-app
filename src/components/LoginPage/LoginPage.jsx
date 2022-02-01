import { useState } from "react";
import "./LoginPage.css";
import image from "../../img/logo.png";
import Registration from "./Registration";

export const LoginPage = () => {
  const [isNeedRegistration, setIsNeedRegistration] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    // if (login === "admin") {
    //   if (password === "123456") setIsAdmin(true);
    //   else {
    //     return false;
    //   }
    // }

    // setUserName(login);
    // setIsLoggedIn(true);
  };

  return (
    <div className="mainWindow">
      <div className="header">
        <button
          onClick={() => setIsNeedRegistration(false)}
          className="blackBtn"
        >
          Вход
        </button>
        <button
          onClick={() => setIsNeedRegistration(true)}
          className="blackBtn"
        >
          Регистрация
        </button>
      </div>

      <img src={image} alt="logo" />

      <form className="loginForm" onSubmit={handleLogIn}>
        <input
          className="loginFormInput"
          type="text"
          placeholder="Логин"
          onChange={handleLoginChange}
          value={login}
          required
        />

        <input
          className="loginFormInput"
          type="password"
          placeholder="Пароль"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </form>

      {isNeedRegistration ? (
        <Registration
          login={login}
          password={password}
          handlePasswordChange={handlePasswordChange}
        />
      ) : (
        <button className="blackBtn" onClick={handleLogIn}>
          Войти
        </button>
      )}
    </div>
  );
};
