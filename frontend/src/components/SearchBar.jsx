import { useState } from "react";
import PropTypes from "prop-types";
import beach from "../assets/beach.jpeg";

function SearchBar({ setCity, setSwitchHotel }) {
  const [la, setLa] = useState("");
  return (
    <div className="hero">
      <img src={beach} alt="" />
      <div className="heroText">
        <h1>Keep Wild and Travel On</h1>
        <div className="search">
          <div className="container">
            <label>
              Activité
              <input type="text" placeholder="Monument" />
            </label>
          </div>
          <div className="container">
            <label>
              Ville
              <input
                type="text"
                placeholder="Choissiez une ville"
                onChange={(e) => setLa(e.target.value)}
              />
            </label>
          </div>
          <button
            className="buttonSearchBar"
            type="button"
            onClick={() => {
              setCity(la);
              setSwitchHotel(true);
            }}
          >
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  setCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo_url: PropTypes.string,
    distance: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setSwitchHotel: PropTypes.func.isRequired,
};

export default SearchBar;
