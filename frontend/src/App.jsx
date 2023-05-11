import { useEffect, useState } from "react";
import Hotel from "./pages/Hotel";
import SearchBar from "./pages/SearchBar";
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
      <SearchBar />
      <Hotel />
    </div>
  );
}

export default App;
