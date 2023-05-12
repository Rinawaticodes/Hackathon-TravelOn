import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Trip from "./components/Trip";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [cityDatas, setCityDatas] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCityDatas(data.slice(0, 3));
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <div className="trip">
        <div className="triptext">
          <h1>Ville Populaire</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            necessitatibus illum ducimus excepturi molestias, quasi culpa
            quisquam sunt incidunt, ex quo veritatis eos nihil aliquid esse
            harum at tenetur maxime?
          </p>
        </div>
        <div className="tripCard">
          <Trip cityDatas={cityDatas} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
