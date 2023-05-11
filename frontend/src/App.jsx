import { useEffect, useState } from "react";
import Hotel from "./pages/Hotel";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [cityDatas, setCityDatas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/`)
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
      <Card cityDatas={cityDatas} />
    </div>
  );
}

export default App;
