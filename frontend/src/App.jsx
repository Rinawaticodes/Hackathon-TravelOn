import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Trip from "./components/Trip";
import Hotel from "./pages/Hotel";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [cityDatas, setCityDatas] = useState([]);
  const [city, setCity] = useState("");
  const [switchHotel, setSwitchHotel] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/${city}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data)
          setCityDatas(data.sort(() => Math.random() - 0.5).slice(0, 3));
      });
  }, [city]);
  return (
    <div className="App">
      <Navbar />
      <SearchBar setCity={setCity} siwtchHotel={setSwitchHotel} />
      <div className="trip">
        <div className="triptext">
          <h1>Hotels Populaires</h1>
        </div>
        <div className="tripCard">
          {switchHotel === false ? (
            <Trip cityDatas={cityDatas} />
          ) : (
            <Hotel cityDatas={cityDatas} setSwitchHotel={setSwitchHotel} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
