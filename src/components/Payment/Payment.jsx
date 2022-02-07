import React from 'react';
//import { v4 as uuidv4 } from "uuid";

function Payment( {menuList} ) {
    return (
        <div className="menuWrapper">
          <h1>payment</h1>
    
          {/* {menuList.map((menuItem) => (
            <div className={"menuItemSmall"} key={uuidv4()}>
              <p className="name">{menuItem.name}</p>
              <p className="price">{menuItem.price}</p>
              <button onClick={() => removeCount(menuItem)}>-</button>
              <p>{menuItem.count}</p>
              <button onClick={() => addCount(menuItem)}>+</button>         
            </div>
          ))} */}
          
          <button>Назад</button>
        </div>
      );
    }
    
export default Payment;
