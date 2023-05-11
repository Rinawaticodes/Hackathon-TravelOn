import { useEffect, useState } from "react";
import Hotel from "./pages/Hotel";
import "./App.css";

function App() {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/`)
      .then((resp) => resp.json())
      .then((data) => {
        setCityData(data);
      });
  }, []);
  console.warn(cityData);
  return (
    <div className="App">
      <Hotel />
    </div>
  );
}

export default App;
