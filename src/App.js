import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';
import { Routes, Route } from "react-router-dom";
import Menu from './components/Menu/Menu';
import { useState } from "react";



function App() {
   
  const [menuList, setMenuList] = useState([{id: 1, name: 'Эспрессо', imageURL: 'https://dummyimage.com/163x135/fff/aaa', price: 200, count: 0}, {id: 2, name: 'Капучино', imageURL: 'https://dummyimage.com/163x135/fff/aaa', price: 200, count: 0}, {id: 3, name: 'Горячий шоколад', imageURL: 'https://dummyimage.com/163x135/fff/aaa', price: 200, count: 0}, {id: 4, name: 'Латте', imageURL: 'https://dummyimage.com/163x135/fff/aaa', price: 200, count: 0}, {id: 5, name: 'Горячий шоколад', imageURL: 'https://dummyimage.com/163x135/fff/aaa', price: 200, count: 0}, {id: 6, name: 'Латте', imageURL: 'https://dummyimage.com/163x135/fff/aaa', price: 200, count: 0}])
  

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="menu" element={<Menu 
        menuList={menuList}
        setMenuList={setMenuList}
         />}/>
      </Routes>      
    </div>
  );
}

export default App;
