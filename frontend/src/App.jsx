import { useEffect, useState } from "react";
import Hotel from "./pages/Hotel";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Trip from "./components/Trip";
import Footer from "./components/Footer";

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
      <SearchBar />
      <Trip />
      <Hotel />
      <ul className="hotel-list" id="hotel-list">
        <Card cityDatas={cityDatas} />
      </ul>
      <Card hotel={hotel} />
      <Footer />
    </div>
  );
}

export default App;
