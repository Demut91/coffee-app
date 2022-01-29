import './menu.css';
import { v4 as uuidv4 } from "uuid";


  
function menu( {menuList} ) {

  
menuList.forEach(obj => obj.count = 0 )


  return (
    <div className="menuWrapper">
      <h1>MENU</h1>
     
      {menuList.map((menuItem) => (
        <div className={"menuItem"} key={uuidv4()}>
          <img className='image'src={menuItem.imageURL} alt="pic" />
          <p className="name">{menuItem.name}</p>
          <p className="price">{menuItem.price}</p>
          <button>-</button>
          <p>{menuItem.count}</p>
          <button>+</button>
        </div>
      ))}
    <button>Перейти к оплате</button>
    </div>
  );
}

export default menu;
