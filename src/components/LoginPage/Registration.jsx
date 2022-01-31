import React from "react";

function Registration({ login, password, handlePasswordChange }) {
  const sendingRegistrationData = async () => {
    let res = await fetch("http://ptsv2.com/t/0rft5-1628159972/post", {
      method: "POST",
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    });
    alert(res.status);
  };
  
  return (
    <form className="loginForm" onSubmit={sendingRegistrationData}>
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
      <div>
        <button className="blackBtn">Зарегистрироваться</button>
      </div>
    </form>
  );
}

export default Registration;
