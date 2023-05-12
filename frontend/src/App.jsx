import Navbar from "./components/Navbar";
import "./App.css";
import Trip from "./components/Trip";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Trip />
      <Footer />
    </div>
  );
}

export default App;
