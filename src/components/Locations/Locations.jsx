//import { useEffect } from "react";
//import { v4 as uuidv4 } from "uuid";

function Locations() {
  let TOKEN =
    "";

  function makeGet(url) {
    let xhr = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) resolve(xhr);;
        }
             else reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
      };

      xhr.open("GET", url, false);
      xhr.setRequestHeader("Authorization", "Bearer " + TOKEN);
      // xhr.setRequestHeader("Accept", "application/json");
      // xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send();
    });
  }

  makeGet(
    "https://cors-anywhere.herokuapp.com/185.244.172.108:8080/locations"
  );

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
