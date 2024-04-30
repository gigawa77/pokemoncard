import { useState } from "react";

function PokeSearch({ setNewSearchTerm }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting:");
    setNewSearchTerm(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <br></br>
      <input
        placeholder="Enter pokemon here..."
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default PokeSearch;
