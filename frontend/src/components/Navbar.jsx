import TravelOne from "../images/TravelOne.png";

function Navbar() {
  return (
    <div className="header">
      <img src={TravelOne} alt="Logo" id="logo" />
      <div className="buttoncontainer">
        <button className="button" type="button">
          Voyages
        </button>
        <button className="button" type="button">
          Se connecter
        </button>
      </div>
    </div>
  );
}

export default Navbar;
