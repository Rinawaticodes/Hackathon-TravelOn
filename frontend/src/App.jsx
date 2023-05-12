import { useState, useEffect } from "react";
import Hotel from "./pages/Hotel";
import "./App.css";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5002/Paris`)
      .then((resp) => resp.json())
      .then((data) => {
        setCities(data);
      });
  }, []);

  //  console.log(cities);
  return (
    <div className="App">
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>

      <Hotel />
    </div>
  );
}

export default App;
