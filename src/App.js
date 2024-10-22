import "./App.css";
import Footer from "./components/Footer";
import UseCase from "./components/UseCase";
import Navbar from "./components/Navbar";
import KeyFeatures from "./components/KeyFeatures";
import Benefits from "./components/Benefits";

function App() {
  return (
    <div className="App">
      <Navbar />
      <KeyFeatures />
      <Benefits />
      <UseCase />
      <Footer />
    </div>
  );
}

export default App;
