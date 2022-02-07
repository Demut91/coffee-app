import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import {Routes, Route, Navigate} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import {useState} from 'react';
import Locations from './components/Locations/Locations';
import Payment from './components/Payment/Payment';

function App () {
  const [IsLoggedIn, setIsLoggedIn] = useState (false);
  const [menuList, setMenuList] = useState ([ {id: 1, name: 'Кофе 1', imageURL: 'https://tea.ru/upload/blog/0821/3108/coffee/01.jpg', price: 100, count: 0}, {id: 2, name: 'Кофе 2', imageURL: 'https://www.cre.ru/content/upload/news/15528982809641.jpeg', price: 150, count: 0}, {id: 3, name: 'Кофе 3', imageURL: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/B079/production/_117677154_gettyimages-156586025.jpg', price: 240, count: 0}, ]);


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Navigate replace to="/loginpage" />} />
        <Route
          path="/loginpage"
          element={
            <LoginPage IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="menu"
          element={<Menu menuList={menuList} setMenuList={setMenuList} />}
        />
        <Route path="payment" element={<Payment />} />
        <Route
          path="/locations"
          element={<Locations menuList={menuList} setMenuList={setMenuList} />}
        />
      </Routes>

    </div>
  );
}

export default App;
