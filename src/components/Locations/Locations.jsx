import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";

function Locations() {
  const [locations, setLocations] = useState([]);
  const { promiseInProgress } = usePromiseTracker({ locations });

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
        <div> Подождите, идёт загрузка.. </div>
      ) : (
        <div>
          {locations.map((location) => (
            <div key={uuidv4()}>
              <p>{location.id}</p>
              <p>{location.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Locations;
