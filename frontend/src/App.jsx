import { useEffect, useState } from "react";
import Card from "./components/Card";
import Hotel from "./pages/Hotel";
import SearchBar from "./pages/SearchBar";
import Navbar from "./components/Navbar";

import "./App.css";

const hotelList = [
  {
    id: 1,
    name: "BEST WESTERN AU TROCADERO",
    adress: "3 avenue Raymond Poincare, 75116 Paris France",
    note: "4 étoiles",
    description:
      "Situé dans une rue arborée du 16e arrondissement, cet hôtel simple se trouve à 1 minute à pied de la station de métro Trocadéro, à 14 minutes de la tour Eiffel et à 2 km de l'Arc de Triomphe.",
    photo_url:
      "https://images.bestwestern.com/bwi/brochures/93261/photos/1024/15587616.jpg",
    link: "https://www.hotelautrocadero.com/",
    distance: "0.800 km",
  },
];

function App() {
  const hotel = hotelList[0];

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
      <Navbar />
      <Hotel />
      <Card hotel={hotel} />
    </div>
  );
}

export default App;
