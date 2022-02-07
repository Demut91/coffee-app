import React from "react";
import "./payment.css";
import { v4 as uuidv4 } from "uuid";

function Payment({ menuList, addCount, removeCount }) {
  return (
    <div className="menuWrapper">
      {menuList.map((menuItem) => (
        <div className="paymentItem" key={uuidv4()}>
          <p className="paymentItemName">{menuItem.name}</p>
          <div className="paymentButtons">
            <p className="paymentPrice">{menuItem.price} руб</p>
           <div className="btnGroup">
           <button
              className="paymentButtonMinus"
              onClick={() => removeCount(menuItem)}
            >
              <svg
                width="14"
                height="2"
                viewBox="0 0 14 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1H1"
                  stroke="#846340"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <p className="paymentCount">{menuItem.count}</p>
            <button
              className="paymentButton"
              onClick={() => addCount(menuItem)}
            >
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 6H1M7 12V6V12ZM7 6V0V6ZM7 6H13H7Z"
                  stroke="#846340"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
           </div>
          </div>
        </div>
      ))}

      <button className="paymentBtn">Назад</button>
    </div>
  );
}

export default Payment;
