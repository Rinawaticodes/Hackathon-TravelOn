import beach from "../assets/beach.jpeg";

function SearchBar() {
  return (
    <div className="hero">
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

export default SearchBar;
