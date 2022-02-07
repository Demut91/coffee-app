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
    ).then((response) => {
      setLocations(response.data);
    });
  }, [setLocations]);

  return (
    <div>
      <h1>Locations</h1>
      {promiseInProgress ? (
        <p> Подождите, данные загружаются.. </p>
      ) : (
        <div className="locationsContainer">
          {locations.map((location) => (
            <div className="locationItem" key={uuidv4()}>
              <button
                className="location"
                onClick={() => getMenu(location.id)}
              ></button>
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
