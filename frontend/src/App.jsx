import { useState, useEffect } from "react";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.data.gouv.fr/fr/datasets/r/5e283905-7464-4165-9766-6a0e6b4ea57c"
    )
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div className="App">
      <Home />
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>{destination.name}</li>
        ))}
      </ul>

      <p>coucou</p>
    </div>
  );
}

export default App;
