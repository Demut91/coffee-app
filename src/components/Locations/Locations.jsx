import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Locations() {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    let TOKEN =
      "";

    axios.defaults.headers.common["Authorization"] = "Bearer " + TOKEN;
    axios
      .get("https://cors-anywhere.herokuapp.com/185.244.172.108:8080/locations")
      .then((response) => {
        setLocations(response.data);
      });
  }, [setLocations]);

  console.log(locations);

  return (
    <div>
      <h1>Locations</h1>

      {locations.map((location) => (
        <div key={uuidv4()}>
          <p>{location.id}</p>
          <p>{location.name}</p>
          <p>{location.point}</p>
        </div>
      ))}
    </div>
  );
}

export default Locations;
