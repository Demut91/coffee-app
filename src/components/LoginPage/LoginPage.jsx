import { useState } from "react";
import "./LoginPage.css";
import image from "../../img/logo.png";
import Registration from "./Registration";


export const LoginPage = ( {setIsLoggedIn} ) => {
  const [isNeedRegistration, setIsNeedRegistration] = useState(false);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [IsAdmin, setIsAdmin] = useState(false);



  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

  };

  const handleLogIn = (e) => {
    e.preventDefault();
    if (login === "Admin" && password === "123456") {
       setIsAdmin(true)}
      else {
        return false;
      }
    
     //setUserName(login);
     setIsLoggedIn(true);
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

      {isNeedRegistration ? (
        <Registration
          login={login}
          handleLogIn={handleLogIn}
          handleLoginChange={handleLoginChange}
          password={password}
          handlePasswordChange={handlePasswordChange}
        />
      ) : (
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
          <button className="blackBtn" onClick={handleLogIn}>
            Войти
          </button>
        </form>
      )}
    </div>
  );
};
