import { useState } from "react";
import IdNameImg from "./components/Id-name-img";
import Title from "./components/Title";
import PokeSearch from "./components/PokeSearch";

function App() {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  return (
    <div>
      <Title />
      <PokeSearch setNewSearchTerm={setNewSearchTerm} />
      <br />
      <IdNameImg newSearchTerm={newSearchTerm} />
    </div>
  );
}

export default App;
