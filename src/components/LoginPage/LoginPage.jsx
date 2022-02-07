import { useState } from "react";
import "./LoginPage.css";
import image from "../../img/logo.png";
import Registration from "./Registration";
import axios from "axios";
import { Navigate } from "react-router";

function LoginPage({ IsLoggedIn, setIsLoggedIn }) {
  const [isNeedRegistration, setIsNeedRegistration] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //const [IsAdmin, setIsAdmin] = useState(false);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    // if (login === "Admin" && password === "123456") {
    //    setIsAdmin(true)}
    //   else {
    //     return false;
    //   }
    Autorisation();
  };

  function Autorisation() {
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/185.244.172.108:8080/auth/login",
        {
          login: login,
          password: password,
        }
      )
      .then((response) => localStorage.setItem("token", response.data.token))
      .catch((error) => console.log(error));
    setIsLoggedIn(true);
  }

  if (IsLoggedIn) {
    return <Navigate to="/locations" />;
  } else {
    return (
      <div className="mainWindow">
        <div className="header">
          <button
            onClick={() => setIsNeedRegistration(false)}
            className="headerBtn"
          >
            Вход
          </button>
          <button
            onClick={() => setIsNeedRegistration(true)}
            className="headerBtn"
          >
            Регистрация
          </button>
        </div>
        <div className="container">
          <img src={image} alt="logo" />

          {isNeedRegistration ? (
            <Registration
              login={login}
              handleLogIn={handleLogIn}
              handleLoginChange={handleLoginChange}
              password={password}
              handlePasswordChange={handlePasswordChange}
              Autorisation={Autorisation}
            />
          ) : (
            <form className="loginForm" onSubmit={handleLogIn}>
              <div className="FormInput">
                <input
                  required
                  type="text"
                  placeholder="Логин"
                  onChange={handleLoginChange}
                  value={login}
                />
              </div>
              <div className="FormInput">
                <input
                  required
                  type="password"
                  placeholder="Пароль"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>
              <button className="submitBtn">Войти</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default LoginPage;
