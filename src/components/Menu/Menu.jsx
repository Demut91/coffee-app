import "./menu.css";
import { v4 as uuidv4 } from "uuid";

function Menu({ menuList, setMenuList }) {


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


  return (
    <div className="menuWrapper">
      <h1>MENU</h1>
    
      {menuList.map((menuItem) => (
        <div className={"menuItem"} key={uuidv4()}>
          <img className="image" src={menuItem.imageURL} alt="pic" />
          <p className="name">{menuItem.name}</p>
          <p className="price">{menuItem.price}</p>
          <button onClick={() => removeCount(menuItem)}>-</button>
          <p>{menuItem.count}</p>
          <button onClick={() => addCount(menuItem)}>+</button>         
        </div>
      ))}
      <button>Перейти к оплате</button>
    </div>
  );
}

export default Menu;
