import { useState } from "react";
//import { useHistory } from "react-router";
import "./LoginPage.css";
import image from "../../img/logo.png";

export const LoginPage = (props) => {
  // const history = useHistory()

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
    //     alert("Введите правильный логин или пароль!");
    //     return false;
    //   }
    // }

    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userName", login);

    // setUserName(login);
    // setIsLoggedIn(true);
    //history.push('/');
  };

  const sendingData = async () => {
    let res = await fetch("http://ptsv2.com/t/0rft5-1628159972/post", {
      method: "POST",
      //     mode: 'no-cors',
      //     Accept: 'text/html',
      //     credentials:"include",

      body: JSON.stringify({
        login: login,
        password: password,
      }),
    });
    
    console.log(res.status);
  };

  return (
    <div className="mainWindow">
      <div className="header">
        <button className="blackBtn">Вход</button>
        <button onClick={sendingData} className="blackBtn">
          Регистрация
        </button>
      </div>

      <img src={image} alt="logo" />
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
          <button className="blackBtn" onClick= {handleLogIn}>Войти</button>
        </div>
      </form>
    </div>
  );
};
