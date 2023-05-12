
import beach from "../assets/beach.jpeg";

function SearchBar() {
  return (
    <div className="Hero">
      <img src={beach} alt="" />
      <div className="heroText">
        <h1>Keep Wild and Travel On</h1>
        <div className="search">
          <div className="container">
            <label>
              Destination
              <input type="text" placeholder="Monument" />
            </label>
          </div>
          <div className="container">
            <label>
              Ville
              <input type="text" placeholder="Choissiez une ville" />
            </label>
          </div>
          <button type="button">Explore Now</button>
        </div>
      </div>
    </div>
  );
}

import vacances from "../assets/vacances.jpeg";

function SearchBar() {
  return (
    <div className="searchBar">
      {/* <div className="backgroundSearch" /> */}
      <img src={vacances} alt="" className="backgroundSearch" />
      <input className="bar1" type="text" placeholder="Destination" />
      <input className="bar2" type="text" placeholder="Activité" />
    </div>
  );
}

export default SearchBar;
