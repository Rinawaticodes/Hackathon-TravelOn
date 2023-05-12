import Hotel from "./pages/Hotel";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Trip from "./components/Trip";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Trip />
      <Hotel />
      <ul className="hotel-list" id="hotel-list">
        <Card />
      </ul>
      <Footer />
    </div>
  );
}

export default App;
