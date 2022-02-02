import { useState, useEffect } from "react";
//import { v4 as uuidv4 } from "uuid";

function Locations() {
  // eslint-disable-next-line no-unused-vars
  const [locations, setLocations] = useState([]);

  let TOKEN =
    "";

  function makeGet(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) callback(JSON.parse(xhr.responseText));
      } else console.log(xhr.status);
    };

    xhr.open("GET", url, true);
    xhr.setRequestHeader("Authorization", "Bearer " + TOKEN);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send();
  }

  useEffect(() => {
    makeGet(
      "https://cors-anywhere.herokuapp.com/185.244.172.108:8080/locations",
    //   (locations) => {
    //     setLocations(JSON.parse(locations));
    //   }
    console.log
    );
  },);


  return (
    <div>
      <h1>Locations</h1>

      {/* {locations.map((location) => (
        <div key={uuidv4()}>
          <p>{location.id}</p>
          <p>{location.name}</p>
          <p>{location.point}</p>
        </div>
      ))} */}
    </div>
  );
}

export default Locations;
