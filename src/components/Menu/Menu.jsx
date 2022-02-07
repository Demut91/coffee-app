import "./menu.css";
import { v4 as uuidv4 } from "uuid";
import { Navigate } from "react-router";
import { useState } from "react";


function Menu({ menuList, setMenuList }) {
const [IsReadyToPay, setIsReadyToPay] = useState(false)
  const addCount = (menuItem) => {
    const exist = menuList.find((x) => x.id === menuItem.id);
    if (exist) {
      setMenuList(
        menuList.map((x) =>
          x.id === menuItem.id ? { ...exist, count: exist.count + 1 } : x
        )
      );
    } else {
      setMenuList([...menuList, { ...menuItem, count: 1 }]);
    }
  };

  const removeCount = (menuItem) => {
    const exist = menuList.find((x) => x.id === menuItem.id);
    if (exist.count === 0) {
      setMenuList(menuList.filter((x) => x.id !== menuItem.id));
    } else {
      setMenuList(
        menuList.map((x) =>
          x.id === menuItem.id ? { ...exist, count: exist.count - 1 } : x
        )
      );
    }
  };
  
  if (IsReadyToPay) {
    return <Navigate menuList={menuList} addCount={addCount} removeCount={removeCount} to="/payment" />;
  } else {

  return (
    <div className="menuWrapper">
      {menuList.map((menuItem) => (
        <div className="menuItem" key={uuidv4()}>
          <div className="imgContainer">
            <img src={menuItem.imageURL} alt="pic" />
          </div>
          <p className="menuItemName">{menuItem.name}</p>
          <div className="menuButtons">
            <p className="menuPrice">{menuItem.price} руб</p>
            <button className="menuButtonMinus" onClick={() => removeCount(menuItem)}>
              <svg
                width="14"
                height="2"
                viewBox="0 0 14 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1H1"
                  stroke="#F6E5D1"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <p className="menuCount">{menuItem.count}</p>
            <button className="menuButton" onClick={() => addCount(menuItem)}>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 6H1M7 12V6V12ZM7 6V0V6ZM7 6H13H7Z"
                  stroke="#F6E5D1"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => setIsReadyToPay(true)} className="paymentBtn">Перейти к оплате</button>
    </div>
  );
      }
}

export default Menu;
