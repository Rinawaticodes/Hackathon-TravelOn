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
