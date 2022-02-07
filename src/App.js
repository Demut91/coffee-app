import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import {Routes, Route, Navigate} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import {useState} from 'react';
import Locations from './components/Locations/Locations';
import Payment from './components/Payment/Payment';

function App () {
  const [IsLoggedIn, setIsLoggedIn] = useState (false);
  const [menuList, setMenuList] = useState ([]);


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
