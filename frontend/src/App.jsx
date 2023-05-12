import { useEffect, useState } from "react";
import Hotel from "./pages/Hotel";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import "./App.css";

function App() {
  const [cityDatas, setCityDatas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5002`)
      .then((resp) => resp.json())
      .then((data) => {
        setCityDatas(data);
      });
  }, []);
  console.warn(cityDatas);

  return (
    <div className="App">
      <Navbar />
      <Hotel />
      <ul className="hotel-list" id="hotel-list">
        <Card cityDatas={cityDatas} />
      </ul>
    </div>
  );
}

export default App;
