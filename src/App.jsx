import { useState } from "react";
import IdNameImg from "./components/Id-name-img";
import Title from "./components/Title";
import PokeSearch from "./components/PokeSearch";
import "./App.css";
import ShinyButton from "./ShinyButton";

function App() {
  const [newSearchTerm, setNewSearchTerm] = useState("");
  const [shiny, setShiny] = useState(true);

  return (
    <div>
      <Title />
      <PokeSearch setNewSearchTerm={setNewSearchTerm} />
      <br />
      <ShinyButton shiny={shiny} setShiny={setShiny} />
      <br />
      <IdNameImg newSearchTerm={newSearchTerm} shiny={shiny} />
    </div>
  );
}

export default App;
