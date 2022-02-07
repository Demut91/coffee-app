import "./Locations.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Menu from "../Menu/Menu";

function Locations({ menuList, setMenuList }) {
  const [locations, setLocations] = useState([]);
  const { promiseInProgress } = usePromiseTracker({ locations });

  function getMenu(id) {
    let url =
      "https://cors-anywhere.herokuapp.com/185.244.172.108:8080/location/" +
      id +
      "/menu";
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    trackPromise(axios.get(url)).then((response) => {
      let list = response.data;
      const updatedMenuList = list.map((item) => {
        item.count = 0;
        return item;
      });
      setMenuList(updatedMenuList);
    });
  }

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    trackPromise(
      axios.get(
        "https://cors-anywhere.herokuapp.com/185.244.172.108:8080/locations"
      )
    .then((response) => {
      setLocations(response.data);
    }));
  }, [setLocations]);

  return (
    <div>
      {promiseInProgress ? (
        <p className="waiting"> Подождите, данные загружаются.. </p>
      ) : (
        <div className="locationsContainer">
          {locations.map((location) => (
            <div className="locationItem" key={uuidv4()}>
              <button onClick={() => getMenu(location.id)}>
                <svg
                  width="20"
                  height="26"
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 11.75H18.75V8H1.25V11.75Z"
                    stroke="#F6E5D1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M16.875 11.75L15 24.25H5L3.125 11.75"
                    stroke="#F6E5D1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2.5 8V6.75C2.5 6.08696 2.76339 5.45107 3.23223 4.98223C3.70107 4.51339 4.33696 4.25 5 4.25H15C15.663 4.25 16.2989 4.51339 16.7678 4.98223C17.2366 5.45107 17.5 6.08696 17.5 6.75V8"
                    stroke="#F6E5D1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13.75 4.25V1.75"
                    stroke="#F6E5D1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <h4> {location.name}</h4>
            </div>
          ))}
        </div>
      )}
      {menuList.length !== 0 ? (
        <Menu menuList={menuList} setMenuList={setMenuList} />
      ) : null}
    </div>
  );
}

export default Locations;
