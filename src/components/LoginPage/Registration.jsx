import React from "react";


function Registration({
  login,
  password,
  handlePasswordChange,
  handleLogIn,
  handleLoginChange,
}) {


  function sendingRegistrationData() {
    const url =
      "https://cors-anywhere.herokuapp.com/185.244.172.108:8080/auth/login";
      
     
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Accept", "application/json");   
    xhr.setRequestHeader("Content-Type", "application/json");
    

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.responseText);
      }
    };
    
    xhr.send(JSON.stringify({
      login: login,
      password: password,
    }));
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
